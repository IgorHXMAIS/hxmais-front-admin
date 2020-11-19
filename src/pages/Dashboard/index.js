import React, { useCallback, useState, useEffect, useRef } from 'react';
import { AiFillEye, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { format, parseISO } from 'date-fns';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { usePopUp } from '../../hooks/popUp';
import { useAuth } from '../../hooks/auth';
import api from '../../services/axios';
import translatePaymentType from '../../utils/translatePaymentTypes';
import setMaximumLettersInText from '../../utils/setMaximumLettersInText';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';

import PlusIcon from '../../assets/icons/plus.svg';

import {
  AdminInformation,
  Representatives,
  RepresentativesList,
  ViewRepresentativeSalePopUp,
  PopUpLoading,
  ViewCreateRepresentativePopUp,
} from './styles';

function Dashboard() {
  const formRef = useRef(null);
  const { createPopUp } = usePopUp();
  const { user } = useAuth();

  const [representatives, setRepresentatives] = useState([]);

  useEffect(() => {
    async function getRepresentatives() {
      const response = await api.get('/representatives');

      const { data } = response.data;

      const new_representatives = data.map((representative) => ({
        ...representative,
        formatted_date: format(
          parseISO(representative.created_at),
          'dd/MM/yyyy',
        ),
      }));

      setRepresentatives([...new_representatives]);
    }

    getRepresentatives();
  }, []);

  const handleViewRepresentativeSales = useCallback(
    async ({ id }) => {
      createPopUp(
        <PopUpLoading>
          <AiOutlineLoading3Quarters size={64} color="#4d4d4d" />
          <h1>Carregando...</h1>
        </PopUpLoading>,
      );

      const representative_sales = await api.get(
        `/representatives/sales/${id}`,
      );

      const { data } = representative_sales.data;

      const new_data = data.map((representative_sale) => ({
        ...representative_sale,
        formatted_name: setMaximumLettersInText(representative_sale.name, 19),
        formatted_type: translatePaymentType(representative_sale.type),
        formatted_date: format(
          parseISO(representative_sale.created_at),
          'dd/MM/yyyy',
        ),
      }));

      createPopUp(
        <ViewRepresentativeSalePopUp>
          <h1>Vendas do representante:</h1>
          <table>
            <thead>
              <tr>
                <td>Nome do comprador:</td>
                <td>Forma de pagamento:</td>
                <td>Data de criação:</td>
              </tr>
            </thead>
            <tbody>
              {new_data.map(
                ({ id, formatted_name, formatted_type, formatted_date }) => (
                  <tr key={id}>
                    <td>{formatted_name}</td>
                    <td>{formatted_type}</td>
                    <td>{formatted_date}</td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </ViewRepresentativeSalePopUp>,
      );
    },
    [createPopUp],
  );

  const handleCreateRepresentative = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('É necessário um nome'),
          email: Yup.string()
            .email('É preciso ser um email válido')
            .required('Email não preenchido'),
          password: Yup.string()
            .min(6, 'O tamanho da senha precisar ser maior que 6 digitos.')
            .required('Senha com o mínimo de 6 digitos'),
          password_confirm: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'As senhas precisam ser iguais',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, email, password } = data;

        await api.post('/representatives', {
          name,
          email,
          password,
        });

        createPopUp(
          <PopUpLoading>
            <h1>Representante criado</h1>
          </PopUpLoading>,
        );
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current.setErrors(errors);

          return;
        } else {
          createPopUp(
            <PopUpLoading>
              <h1>Erro ao criar representante</h1>
            </PopUpLoading>,
          );
        }

        return;
      }
    },
    [createPopUp],
  );

  const handleCreateRepresentativePopUp = useCallback(() => {
    createPopUp(
      <ViewCreateRepresentativePopUp>
        <Form onSubmit={handleCreateRepresentative} ref={formRef}>
          <div className="input w50 left">
            <label htmlFor="name">Nome:</label>
            <Input id="name" name="name" />
          </div>
          <div className="input w50 right">
            <label htmlFor="email">Email:</label>
            <Input id="email" name="email" />
          </div>
          <div className="input w50 left">
            <label htmlFor="password">Senha:</label>
            <Input id="password" name="password" />
          </div>
          <div className="input w50 right">
            <label htmlFor="password_confirm">Repita a senha:</label>
            <Input id="password_confirm" name="password_confirm" />
          </div>

          <div className="clear"></div>
          <div className="input">
            <button type="submit">
              <p>Criar representante</p>
            </button>
          </div>
        </Form>
      </ViewCreateRepresentativePopUp>,
    );
  }, [createPopUp]);

  return (
    <>
      <AdminInformation>
        <h1>Olá, {user.name}!</h1>
      </AdminInformation>
      <Representatives>
        <div className="top">
          <h1>Representantes:</h1>
          <button onClick={handleCreateRepresentativePopUp}>
            <p>Criar representante</p>
            <img src={PlusIcon} alt="Criar" />
          </button>
        </div>
        <RepresentativesList>
          {representatives.length !== 0 ? (
            <table>
              <thead>
                <tr>
                  <td>Nome:</td>
                  <td>Email:</td>
                  <td>Data de criação:</td>
                  <td>Ver vendas:</td>
                </tr>
              </thead>
              <tbody>
                {representatives.map(({ id, name, email, formatted_date }) => (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{formatted_date}</td>
                    <td>
                      <div className="more">
                        <button
                          onClick={() => handleViewRepresentativeSales({ id })}
                        >
                          <AiFillEye size={24} color="#4d4d4d" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="loading">
              <AiOutlineLoading3Quarters size={48} color="#4d4d4d" />
            </div>
          )}
        </RepresentativesList>
      </Representatives>
    </>
  );
}

export default Dashboard;
