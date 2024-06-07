import React from 'react';
import { Modal, ActivityIndicator, View, StyleSheet } from 'react-native';

export function Loader({ visible }) {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#001489" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
