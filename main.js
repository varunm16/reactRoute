import React from 'react';
import ReactDOM from 'react-dom';
import {  Link, IndexRoute  } from 'react-router';

import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Add from './Add.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';



ReactDOM.render((
   <Router>
		<div>
			<Route path = '/' component = {Home} />
			<Route path = '/add' component = {Add} />
			<Route path = '/contact' component = {Contact} />
		</div>
   </Router>
	
), document.getElementById('app'));

//ReactDOM.render(<Home />, document.getElementById('app'));