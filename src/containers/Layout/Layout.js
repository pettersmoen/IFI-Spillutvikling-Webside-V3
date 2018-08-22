import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                {this.props.children}
            </div>
        );
    }
}