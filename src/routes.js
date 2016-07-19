import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';

export default (
<Route path="/" components={Parent} >
    <IndexRoute component={App} />
</Route>
);
