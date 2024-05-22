/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import { Button, Divider, SearchBar } from '@rneui/themed';
import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import SearchSVG from '../../../assets/svg/SearchSVG';
import ArrowBackSVG from '../../../assets/svg/ArrowBackSVG';
import ClearIconSVG from '../../../assets/svg/ClearIconSVG';

interface ModalSelectProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (value) => void;
  data: any[];
}

export default function ModalSelect(props: ModalSelectProps) {
  const { isOpen, onClose, onSubmit, data } = props;
  return (
    <Modal isVisible={isOpen} avoidKeyboard>
      <KeyboardAvoidingView enabled>
        <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">
          <View style={styles.wrapper}>
            <View style={styles.wrapSearch}>
              <SearchBar
                placeholder={'Type here...'}
                // onChangeText={handleChangeText}
                // value={valueSearch}
                platform="android"
                searchIcon={<SearchSVG />}
                cancelIcon={<ArrowBackSVG />}
                clearIcon={<ClearIconSVG height="20" width="20" />}
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                onClear={() => {
                  console.log('go clear');
                }}
                onCancel={() => console.log('go here cancel')}
              />
              <Button
                title="Cancel"
                onPress={onClose}
                type="clear"
                titleStyle={{ color: '#fff' }}
              />
            </View>
            <View>
              {data?.map((item, index) => (
                <TouchableOpacity
                  onPress={() => {
                    onSubmit(item);
                    onClose();
                  }}
                  key={index}>
                  <Text style={styles.textOption}>{item}</Text>
                  <Divider />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 800,
    backgroundColor: '#fff',
  },
  wrapSearch: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#499EE1',
    height: 60,
  },
  card: {
    borderRadius: 10,
  },
  wrapInput: {
    maxWidth: 175,
    display: 'flex',
    flexDirection: 'row',
  },
  btnSearch: {
    backgroundColor: '#F4601F',
    padding: 10,
    borderRadius: 5,
  },
  containerStyle: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 10,
    width: 275,
    height: 45,
  },
  inputStyle: { fontSize: 13 },
  inputContainerStyle: {
    height: 30,
  },
  textOption: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    padding: 10,
  },
});
