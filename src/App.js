import React from 'react';

import PageMain from './pages/PageMain';
import PageMap from './pages/PageMap';
import PageProfile from './pages/PageProfile';
import FormLogin from './components/FormLogin';
import FormReg from './components/FormReg';
import PopupOrder from './components/popup/PopupOrder';
import PopupOrderProfile from './components/popup/PopupOrderProfile';
import PopupOrderSuccess from './components/popup/PopupOrderSuccess';
import PopupProfile from './components/popup/PopupProfile';
import PopupProfileSuccess from './components/popup/PopupProfileSuccess';

import { Route, Routes, Navigate} from "react-router-dom";

const App = () => {

	return (
		<div className='App' data-testid='page-app'>
			<Routes>
				<Route path="/*" element={<PageMain />}>
					<Route path="login" element={<FormLogin />}></Route>
					<Route path="reg" element={<FormReg />}></Route>
					<Route path="*" element={<Navigate to="login" replace />} />
				</Route>
				<Route path="map/*" element={<PageMap />}>
					<Route path="order" element={<PopupOrder />} exact></Route>
					<Route path="order-success" element={<PopupOrderSuccess />}></Route>
					<Route path="order-to-profile" element={<PopupOrderProfile />}></Route>
					<Route path="*" element={<Navigate to="order" />} />
				</Route>
				<Route path="profile/*" element={<PageProfile />}>
					<Route path="profile-form" element={<PopupProfile />} exact></Route>
					<Route path="profile-success" element={<PopupProfileSuccess />} ></Route>
					<Route path="*" element={<Navigate to="profile-form" />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;