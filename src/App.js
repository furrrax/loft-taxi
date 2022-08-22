import React from 'react';
import PageLogin from './pages/PageLogin';
import PageReg from './pages/PageReg';
import PageMap from './pages/PageMap';
import PageProfile from './pages/PageProfile';

const PAGES = {
	pageLogin: PageLogin,
	pageReg: PageReg,
	pageMap: PageMap,
	pageProfile: PageProfile,
	//pageInner: PageInner,
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {page: "pageLogin"};
	}

	setPage = (pageName) => {
		this.setState({page: pageName});
	};

	render() {
		const {page} = this.state;
		const CurrentPage = PAGES[page];

		return (
			<div className='App'>
				<CurrentPage setPage={this.setPage}/>
			</div>
		);
	}
}

export default App;