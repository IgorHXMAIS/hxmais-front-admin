import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useLayoutEffect,
} from 'react';

import api from '../services/axios';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('admin@HXMais:token');
    const user = localStorage.getItem('admin@HXMais:user');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {};
  });

  useLayoutEffect(() => {
    const { token } = data;

    if (!token) {
      return;
    }

    api.defaults.headers.authorization = `Bearer ${token}`;

    return () => {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response_token = await api.post('/login', {
      email,
      password,
    });

    const { access_token } = response_token.data;

    api.defaults.headers.authorization = `Bearer ${access_token}`;

    const response_user = await api.get('/me');

    const user = response_user.data;

    console.log(user);

    localStorage.setItem('admin@HXMais:token', access_token);
    localStorage.setItem('admin@HXMais:user', JSON.stringify(user));

    setData({ access_token, user });
  }, []);

  const signOut = useCallback(async () => {
    try {
      await api.delete('/logout');

      localStorage.removeItem('admin@HXMais:token');
      localStorage.removeItem('admin@HXMais:user');

      setData({});
    } catch (error) {
      localStorage.removeItem('admin@HXMais:token');
      localStorage.removeItem('admin@HXMais:user');

      setData({});
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ token: data.token, user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthContext');
  }

  return context;
}

export { AuthProvider, useAuth };
