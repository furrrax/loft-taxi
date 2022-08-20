import React from 'react';
//import './App.css';
import PageLogin from './pages/PageLogin';
import PageReg from './pages/PageReg';
import PageInner from './pages/PageInner';

const STARTPAGES = {
	pagelogin: PageLogin,
	pagereg: PageReg,
	pageinner: PageInner,
};

class App extends React.Component {
	constructor() {
		super();
		this.state = {page: "pagelogin"};
	}

	setStartPage = (pageName) => {
		this.setState({page: pageName});
	};

	render() {
		const {page} = this.state;
		const CurrentPage = STARTPAGES[page];

		return (
			<div className='App'>
				<CurrentPage setStartPage={this.setStartPage}/>
			</div>
		);
	}
}

export default App;