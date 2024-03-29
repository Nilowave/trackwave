import axios from 'axios';
import { useState, createContext, ReactNode, useEffect } from 'react';
import { UserData } from '../../components/atoms/LogoutButton/LogoutButton';

type UserState = {
  user?: UserData;
  isLoading: boolean;
  logout: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const UserContext = createContext<UserState>({ isLoading: true, logout: () => {} });

interface UserContextProps {
  children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const UserContextProvider = ({ children }: UserContextProps) => {
  const setUser = (user: UserData) => {
    setState({
      ...state,
      ...(!user.error ? { user: { ...user } } : {}),
      isLoading: false,
    });
  };

  const logout = () => {
    const user = undefined;
    setState({
      ...state,
      user,
      isLoading: false,
    });
  };

  const [state, setState] = useState<UserState>({
    isLoading: true,
    logout,
  });

  useEffect(() => {
    axios
      .get('/api/user')
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {});
  }, []);

  return <UserContext.Provider value={state}>{state.isLoading ? <div /> : children}</UserContext.Provider>;
};

export default UserContextProvider;
