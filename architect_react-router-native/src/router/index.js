import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import { Text, Container, Card, CardItem, Body, Content } from 'native-base';

import HeaderComp from './header';
import Sidebar from './header/sidebar';
import RoutersAuthen from './RoutersAuthen';

class Routers extends PureComponent {
    constructor(props) {
        super(props);

        this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
    }

    closeControlPanel() {
        this._drawer.close();
    }

    openControlPanel() {
        this._drawer.open();
    }

    render() {
        return (
            <Drawer ref={ref => (this._drawer = ref)} content={<Sidebar closeControlPanel={this.closeControlPanel} />}>
                <Container>
                    {/* <HeaderComp openControlPanel={this.openControlPanel} /> */}
                    <RoutersAuthen />
                </Container>
            </Drawer>
        );
    }
}

export default Routers;
