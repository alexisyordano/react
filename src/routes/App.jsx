import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NoFound from '../pages/NoFound';
import Appcontext from '../context/Appcontext';
import useInitialState from '../hooks/useInitialState';
import '../style/global.css'

function App() {
	const initialState  =  useInitialState();
	  return (
		<Appcontext.Provider value={initialState} >
		<BrowserRouter>
			<Layout>
		  		<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/recovery-password" element={<RecoveryPassword />} />
					<Route path="/SendEmail" element={<SendEmail />} />
					<Route path="/NewPassword" element={<NewPassword />} />
					<Route path="/MyAccount" element={<MyAccount />} />
					<Route path="/CreateAccount" element={<CreateAccount />} />
					<Route path="/Checkout" element={<Checkout />} />
					<Route path="/Orders" element={<Orders />} />
					<Route path="*" element={<NoFound />} />
				</Routes>
		    </Layout>
		</BrowserRouter>
	  </Appcontext.Provider>
	);
}

export default App;