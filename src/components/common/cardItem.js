import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardItem = (props) => (
  // If style props has been passed use them, othewise use first defined element
  // first element is styles.containerStyle
  <View style={[styles.containerStyle, props.style]}>{props.children}</View>

  //This trick is used here for pass new style - change flex direction from row to column
);

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});
export { CardItem };
