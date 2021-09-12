import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
        <Text h3>
            Sign up for Tracker
        </Text>

        <Spacer/>
        <Input label='Email' />
        <Spacer/>
        <Input label='Password' />
        <Spacer/>
        <Button title='Sign Up'/>
        
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: '60%'
    }
});

export default SignupScreen;
