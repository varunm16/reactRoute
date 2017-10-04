import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class Home extends React.Component {
   render() {
      return (
         <div>
		 <ul>
			<li><a href = "/add">Add</a></li>
			<li><a href = "/contact">Contact</a></li>
			</ul>
         </div>
		 
      )
   }
}

export default Home;

			/*<li><Link to = "/home">Home</Link></li>
			<li><Link to = "/contact">Contact</Link></li>*/