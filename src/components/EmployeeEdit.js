import React, { Component } from 'react';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { Card, Button, CardItem } from './common';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
      const { name, phone, shift } = this.props;
      console.log('employee props to save', name, phone, shift);
      this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid})
  }

  onTextPress() {
      const { phone, shift } = this.props;

      Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardItem>

        <CardItem>
            <Button onPress={this.onTextPress.bind(this)}> Text Schedule</Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};
export default connect(
  mapStateToProps,
  { employeeUpdate, employeeSave }
)(EmployeeEdit);
