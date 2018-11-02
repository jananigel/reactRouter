import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter  } from 'react-router-dom';

import App from './component/app';

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('app'));