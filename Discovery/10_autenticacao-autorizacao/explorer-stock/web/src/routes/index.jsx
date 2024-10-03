import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";
import { AuthRoutes } from './auth.routes';

import { AdminRoutes } from './admin.routes';
import { CustomerRoutes } from './customer.routes'
import { SaleRoutes } from './sale.routes'
import { ROLES } from '../utils/roles'
import { useEffect } from 'react';
import { api } from '../services/api';

export function Routes() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    api
    .get('/users/validated')
    .catch(error => {
      if(error.response?.status === 401){
        signOut()
      }
    })
  }, [])

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