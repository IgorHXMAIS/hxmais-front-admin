import React, { useEffect, useState, useCallback } from 'react';
import { AiFillEye, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { format, parseISO } from 'date-fns';
import { Form } from '@unform/web';

import setMaximumLettersInText from '../../utils/setMaximumLettersInText';
import { usePopUp } from '../../hooks/popUp';

import * as S from './styles';
import Input from '../../components/Input';

import api from '../../services/axios';

function Sales() {
  const { createPopUp } = usePopUp();
  const [sales, setSales] = useState([]);

  useEffect(() => {
    async function getSales() {
      const response = await api.get('/sales');

      const { data } = response.data;

      const new_data = data.map((sale) => ({
        ...sale,
        formatted_date: format(parseISO(sale.created_at), 'dd/MM/yyyy'),
        formatted_name: setMaximumLettersInText(sale.name, 19),
      }));

      setSales([...new_data]);
    }

    getSales();
  }, []);

  const handleViewSale = useCallback(
    ({ index }) => {
      const sale = sales[index];

      createPopUp(
        <S.ViewSalePopUp>
          <h1>Venda:</h1>
          <Form initialData={sale}>
            <div className="input w50 left">
              <label htmlFor="name">Nome:</label>
              <Input id="name" name="name" readOnly />
            </div>
            <div className="input w50 right">
              <label htmlFor="email">Email:</label>
              <Input name="email" readOnly />
            </div>
            <div className="input w50 left">
              <label htmlFor="fix_phone">Telefone fixo:</label>
              <Input name="fix_phone" readOnly />
            </div>
            <div className="input w50 right">
              <label htmlFor="phone">Celular:</label>
              <Input name="phone" readOnly />
            </div>
            <div className="input w50 left">
              <label htmlFor="document">CPF:</label>
              <Input name="document" readOnly />
            </div>
            <div className="input w50 right">
              <label htmlFor="birthday">Data de nascimento:</label>
              <Input name="birth_date" readOnly />
            </div>
            <div className="input w50 left">
              <label htmlFor="church">Igreja:</label>
              <Input name="church" readOnly />
            </div>
            <div className="input w50 right">
              <label htmlFor="adress.zipcode">CEP:</label>
              <Input name="address.zipcode" readOnly />
            </div>
            <div className="input w50 left">
              <label htmlFor="adress.state">Estado:</label>
              <Input name="address.state" readOnly />
            </div>
            <div className="input w50 right">
              <label htmlFor="adress.city">Cidade:</label>
              <Input name="address.city" readOnly />
            </div>
            <div className="input w50 left">
              <label htmlFor="adress.neighbourhood">Bairro:</label>
              <Input name="address.neighbourhood" readOnly />
            </div>
            <div className="input w50 right">
              <label htmlFor="address.address">Rua:</label>
              <Input name="address.address" readOnly />
            </div>
            <div className="input w50 left">
              <label htmlFor="adress.number">Número:</label>
              <Input name="address.number" readOnly />
            </div>
            <div className="input w50 right">
              <label htmlFor="adress.complement">Complemento:</label>
              <Input name="address.complement" readOnly />
            </div>
            <div className="clear"></div>
          </Form>
        </S.ViewSalePopUp>,
      );
    },
    [createPopUp, sales],
  );

  return (
    <S.Sales>
      <h1>Vendas totais:</h1>

      <S.SalesList>
        {sales.length === 0 ? (
          <div className="loading">
            <AiOutlineLoading3Quarters size={48} color="#4d4d4d" />
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <td>Nome do comprador:</td>
                <td>Email:</td>
                <td>Nome do representante:</td>
                <td>Data de criação:</td>
                <td>Ver venda:</td>
              </tr>
            </thead>
            <tbody>
              {sales.map(
                (
                  { id, formatted_name, email, representative, formatted_date },
                  index,
                ) => (
                  <tr key={id}>
                    <td>{formatted_name}</td>
                    <td>{email}</td>
                    <td>
                      {!!representative ? representative.name : 'Inexistente'}
                    </td>
                    <td>{formatted_date}</td>
                    <td>
                      <div className="more">
                        <button onClick={() => handleViewSale({ index })}>
                          <AiFillEye size={24} color="#4d4d4d" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        )}
      </S.SalesList>
    </S.Sales>
  );
}

export default Sales;
