import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";
import { AuthRoutes } from './auth.routes';

import { AdminRoutes } from './admin.routes';
import { CustomerRoutes } from './customer.routes'
import { SaleRoutes } from './sale.routes'
import { ROLES } from '../utils/roles'

export function Routes() {
  const { user } = useAuth();

  function AccessRoutes(){
    switch(user.role){
      case ROLES.ADMIN:
        return <AdminRoutes />
      case ROLES.SALE:
        return <SaleRoutes />
      case ROLES.CUSTOMER:
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}