import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { CardItem, Input } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardItem>
          <Input
            label="Name"
            placeholder="John"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'name', value })
            }
          />
        </CardItem>

        <CardItem>
          <Input
            label="Phone"
            placeholder="555-555-555"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'phone', value })
            }
          />
        </CardItem>

        {/* style below has been passed as a prop directly to CardItem component */}
        <CardItem style={{ padding: 13 }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <View style={{ flex: 2, paddingLeft: 85 }}>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.shift}
              onValueChange={value =>
                this.props.employeeUpdate({ prop: 'shift', value })
              }
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </View>
        </CardItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
});

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};
export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeForm);
