import React, { createContext, useContext, useEffect } from "react";

type User = {
  email: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  // Load user from localStorage on initial render = start
  useEffect(() => {
    const storedUser = localStorage.getItem("ccp_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); // done checking
  }, []);

  const login = (email: string) => {
    const user = { email };
    setUser(user);
    localStorage.setItem("ccp_user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ccp_user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
