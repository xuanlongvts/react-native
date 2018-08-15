import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});

class MapViewCom extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
        };

        this.onRegionChange = this.onRegionChange.bind(this);
    }

    onRegionChange(region) {
        this.setState({ region: region });
    }

    render() {
        const { region } = this.state;

        return (
            <View style={styles.container}>
                <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={region} />
            </View>
        );
    }
}

export default MapViewCom;
