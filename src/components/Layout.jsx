// components/Layout.jsx

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

import { Provider } from 'react-redux';
import appStore from '../utils/appStore';


function Layout() {
  return (
    <Provider store ={appStore}>
      <Navbar />
      <Outlet />
    </Provider>
  );
}

export default Layout;
