import { createContext, useContext, useMemo, useState } from 'react';
import { authService } from '../services/auth.service';

type AuthContextType = {
  token: string | null;
  role: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));

  const value = useMemo(
    () => ({
      token,
      role,
      login: async (email: string, password: string) => {
        const { data } = await authService.login(email, password);
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.role.name);
        setToken(data.token);
        setRole(data.user.role.name);
      },
      logout: () => {
        localStorage.clear();
        setToken(null);
        setRole(null);
      }
    }),
    [token, role]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
