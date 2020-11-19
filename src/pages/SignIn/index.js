import React, { useCallback, useRef, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Form } from './styles';

function SignIn() {
  const { signIn } = useAuth();
  const history = useHistory();
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        setLoading(true);
        setError(false);

        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('É preciso ser um email válido')
            .required('Email não preenchido'),
          password: Yup.string()
            .min(6)
            .required('Senha com o mínimo de 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { email, password } = data;

        await signIn({
          email,
          password,
        });

        setLoading(false);

        history.push('/dashboard');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current.setErrors(errors);
        } else {
          setError(true);
        }

        setLoading(false);
        return;
      }
    },
    [history, signIn],
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <h1>Olá, administrador.</h1>
        <p>Faça seu login.</p>
        {error && (
          <p className="error">Ocorreu um erro, email ou senha inválidos.</p>
        )}
        <div className="input">
          <label htmlFor="email">Email:</label>
          <Input id="email" name="email" />
        </div>
        <div className="input">
          <label htmlFor="password">Senha:</label>
          <Input id="password" name="password" type="password" />
        </div>
        <button type="submit">
          {loading ? (
            <AiOutlineLoading3Quarters size={16} color="#4d4d4d" />
          ) : (
            'Acessar'
          )}
        </button>
      </Form>
    </Container>
  );
}

export default SignIn;
