// Test away
import React from 'react';
import ReactDOM from "react-dom";

import Dashboard from './Dashboard';

describe('DASHBOARD',() => {
    it('Render Display and Controls', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Dashboard />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});