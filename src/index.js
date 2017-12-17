import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import client from './client';

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>, 
	document.getElementById('root'));

registerServiceWorker();
