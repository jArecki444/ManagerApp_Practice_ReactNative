import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { CardItem } from './cardItem';
import { Button } from './button';

const ConfirmModal = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, textStyle, cardSectionStyle } = styles;
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardItem style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardItem>
        <CardItem>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardItem>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
});
export { ConfirmModal };
