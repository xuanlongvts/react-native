import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import { Container } from 'native-base';

import HeaderComp from './header';
import Sidebar from './header/sidebar';
import RoutersAuthen from './RoutersAuthen';

class Routers extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <RoutersAuthen />;
    }
}

export default Routers;
