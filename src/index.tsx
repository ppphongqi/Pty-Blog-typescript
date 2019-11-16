import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Layouts from  './layouts/Layouts';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Layouts />, document.getElementById('root'));


serviceWorker.unregister();

