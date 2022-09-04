import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectPage} from "./redux/ui/selector";
import {setPage} from "./redux/ui/actions";

import PageLogin from './pages/PageLogin';
import PageReg from './pages/PageReg';
import PageMap from './pages/PageMap';
import PageProfile from './pages/PageProfile';
import { AuthProvider } from './AuthContext';

const PAGES = {
	pageLogin: PageLogin,
	pageReg: PageReg,
	pageMap: PageMap,
	pageProfile: PageProfile,
};

const App = () => {
	const dispatch = useDispatch();
	const page = useSelector(selectPage);

	//console.log("page" , page);

	const CurrentPage = PAGES[page];

	const pageChange = (pageName) => {
		dispatch(setPage(pageName));
	};

	return (
		<AuthProvider>
			<div className='App'>
				<CurrentPage setPage={pageChange} />
			</div>
		</AuthProvider>
	);
}

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {page: "pageLogin"};
// 	}

// 	setPage = (pageName) => {
// 		this.setState({page: pageName});
// 	};

// 	render() {
// 		const {page} = this.state;
// 		const CurrentPage = PAGES[page];

// 		return (
// 			<AuthProvider>
// 				<div className='App'>
// 					<CurrentPage setPage={this.setPage}/>
// 				</div>
// 			</AuthProvider>
// 		);
// 	}
// }

export default App;