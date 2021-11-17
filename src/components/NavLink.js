import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Spacer from './Spacer';
import {withNavigation} from 'react-navigation';

const NavLink = ({navigation, text, routeName}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer />
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    marginLeft: 15,
    marginTop: 5,
  },
});

export default withNavigation(NavLink);
