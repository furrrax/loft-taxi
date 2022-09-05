import React from 'react';

import PageMain from './pages/PageMain';
import PageMap from './pages/PageMap';
import PageProfile from './pages/PageProfile';
import { AuthProvider } from './AuthContext';

import { Route, Routes} from "react-router-dom";

const App = () => {

	return (
		<AuthProvider>
			<div className='App'>
				<Routes>
					<Route path="/" element={<PageMain />} exact></Route>
					<Route path="/map" element={<PageMap />}></Route>
					<Route path="/profile" element={<PageProfile />}></Route>
					<Route path="*" element={<PageMain />}></Route>
				</Routes>
			</div>
		</AuthProvider>
	);
}

export default App;