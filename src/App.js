import React from 'react';

import PageLogin from './pages/PageLogin';
import PageReg from './pages/PageReg';
import PageMap from './pages/PageMap';
import PageProfile from './pages/PageProfile';
import { AuthProvider } from './AuthContext';

import { Route, Routes} from "react-router-dom";

const App = () => {

	return (
		<AuthProvider>
			<div className='App'>
				<Routes>
					<Route path="/" element={<PageLogin />} exact></Route>
					<Route path="/reg" element={<PageReg />}></Route>
					<Route path="/map" element={<PageMap />}></Route>
					<Route path="/profile" element={<PageProfile />}></Route>
					<Route path="*" element={<PageLogin />}></Route>
				</Routes>
			</div>
		</AuthProvider>
	);
}

export default App;