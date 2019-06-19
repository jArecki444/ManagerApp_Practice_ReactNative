import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardItem } from './common';

class ListItem extends Component {
    render() {
        const { name } = this.props.employee;

        return (
            <CardItem>
                <Text style={StyleSheet.titleStyle}>
                    {name}
                </Text>
            </CardItem>
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