import React from 'react';
import {
    View,
    Button,
    Text,
    Image
} from 'react-native';
import {
    MAIN_COLOR
} from '../configs/constants';

class LoginScreen extends React.Component {

    render() {

        return (
            <View style={styles.containerMain}>
                <View style={styles.containerLogo}>
                    <Image 
                        style={styles.logo}
                        source={require('../images/logo.png')}
                    />
                </View>
                <View style={styles.containerInputs}>
                    <Button title="Login" onPress={() => this.props.navigation.navigate('Home')} />
                </View>
            </View>
        );
    }
}

const styles = {
    containerMain: {
        flex: 1,
        backgroundColor: MAIN_COLOR
    },
    containerLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerInputs: {
        flex: 2
    },
    logo: {
        maxWidth: 200,
        maxHeight: 100,
        resizeMode: 'stretch'
    }
}

export default LoginScreen;