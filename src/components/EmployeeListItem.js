import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { CardItem } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeCreate({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardItem>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

export default ListItem;
