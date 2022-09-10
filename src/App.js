import React from 'react';

import PageMain from './pages/PageMain';
import PageMap from './pages/PageMap';
import PageProfile from './pages/PageProfile';

/* import { Provider } from 'react-redux';
import { store } from './redux/store'; */

import { Route, Routes} from "react-router-dom";

const App = () => {

	return (
		<div className='App' data-testid='page-app'>
			<Routes>
				<Route path="*" element={<PageMain />} exact></Route>
				<Route path="/map/*" element={<PageMap />}></Route>
				<Route path="/profile/*" element={<PageProfile />}></Route>
				<Route path="*" element={<PageMain />}></Route>
			</Routes>
		</div>
	);
}

export default App;