import React, { useContext } from "react";
import AuthContext from '../../contexts/auth';
import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../../../pages/services/routes/app.routes';

const Routes = () => {
  const { signed } = useContext(AuthContext);
  console.log("signed @ services/routes/index.js, ", signed);
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;