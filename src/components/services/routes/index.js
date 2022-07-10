import React, { useContext } from "react";
import AuthContext from '../../contexts/auth';
import AuthRoutes from './auth.routes';
import AppRoutes from '../../NavigationBar';

const Routes = () => {
  const { signed } = useContext(AuthContext);
  console.log("signed @ services/routes/index.js, ", signed);
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;