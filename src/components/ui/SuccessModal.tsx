import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

interface SuccessModalProps {
  visible: boolean;
  onClose: () => void;
}

export const SuccessModal = ({ visible, onClose }: SuccessModalProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: '#626764',
            padding: 25,
            borderRadius: 20,
            alignItems: 'center',
            width: '80%',
          }}
        >
          <Text style={{ fontSize: 50 }}>🛵</Text>

          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 10,
            }}
          >
            Pedido Confirmado!
          </Text>

          <Text
            style={{
              color: '#00000',
              textAlign: 'center',
              marginTop: 10,
            }}
          >
            O entregador já vai buscar seu pedido!
          </Text>

          <TouchableOpacity
            onPress={onClose}
            style={{
              marginTop: 20,
              backgroundColor: '#0ea5e9',
              paddingVertical: 10,
              paddingHorizontal: 25,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>
              Fechar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};