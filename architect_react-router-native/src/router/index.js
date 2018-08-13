import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RoutersAuthen from './RoutersAuthen';

class Routers extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <RoutersAuthen />;
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.initStateTest.isLoading
    };
};

export default connect(mapStateToProps)(Routers);
