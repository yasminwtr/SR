import React, { createContext, useState } from 'react';
import * as auth from "../services/auth";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  console.log("user @ contexts/auth.js, ", user);

  async function signIn(loginData) {
    const loggedUser = await auth.signIn(loginData);

    setUser(loggedUser);
  }

  async function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 