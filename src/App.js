import React from 'react';
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

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {page: "pageLogin"};
	}

	setPage = (pageName) => {
		this.setState({page: pageName});
	};

	/* setPage = (pageName) => {
		if (this.props.isLoggedIn) {
			this.setState({page: pageName});
		} else {
			this.setState({page: "pageLogin"});
		}
	}; */

	render() {
		const {page} = this.state;
		const CurrentPage = PAGES[page];

		return (
			<AuthProvider>
				<div className='App'>
					<CurrentPage setPage={this.setPage}/>
				</div>
			</AuthProvider>
		);
	}
}

export default App;