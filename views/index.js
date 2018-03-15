import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './src/routes/App';

/* El tipo de usuario me define que importo y que no */

const universe = document.getElementById('universe');

ReactDOM.render((
                    <BrowserRouter>
                          <div>
                                <Route  path="/" component={App} />
                          </div>
                     </BrowserRouter>
),universe)
