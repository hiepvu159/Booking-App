import React from 'react';
import { Modal, View } from 'react-native';

interface ModalSelectProps {
  isOpen: boolean;
  onClose: () => void;
  header: React.ReactNode;
  content: React.ReactNode;
  // onSubmit: (value) => void;
  // data: any[];
}

export default function ModalFullScreen(props: ModalSelectProps) {
  const { isOpen, onClose, header, content } = props;

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isOpen}
      presentationStyle="fullScreen" // This makes the modal fullscreen
      onRequestClose={onClose}>
      <View>
        {header}
        {content}
      </View>
    </Modal>
  );
}
