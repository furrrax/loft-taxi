import React from 'react';
//import './App.css';
import PageStart from './pages/PageStart';
import PageInner from './pages/PageInner';

const STARTPAGES = {
	pagestart: PageStart,
	pageinner: PageInner,
};

class App extends React.Component {
	constructor() {
		super();
		this.state = {page: "pagestart"};
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