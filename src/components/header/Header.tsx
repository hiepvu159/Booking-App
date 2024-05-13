import { SearchBar } from '@rneui/themed';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchSVG from '../../../assets/svg/SearchSVG';
import ArrowBackSVG from '../../../assets/svg/ArrowBackSVG';
import NotificationIcon from '../../../assets/svg/NotificationIcon';
import ClearIconSVG from '../../../assets/svg/ClearIconSVG';
import ChatIconSVG from '../../../assets/svg/ChatIconSVG';

interface Props {
  placeHolder?: string;
}

export default function Header(props: Props) {
  const { placeHolder } = props;
  const [valueSearch, setValueSearch] = useState('');

  const handleChangeText = useCallback((value: string) => {
    setValueSearch(value);
  }, []);

  return (
    <View style={styles.wrapHeader}>
      <SearchBar
        placeholder={placeHolder ?? 'Type here...'}
        onChangeText={handleChangeText}
        value={valueSearch}
        platform="android"
        searchIcon={<SearchSVG />}
        cancelIcon={<ArrowBackSVG />}
        clearIcon={<ClearIconSVG height="20" width="20" />}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        onClear={() => {
          console.log('go clear');
          setValueSearch('');
        }}
        onCancel={() => console.log('go here cancel')}
      />
      <View style={styles.wrapIcon}>
        <View style={styles.notificaionIcon}>
          <NotificationIcon height="30" width="30" />
        </View>
        <ChatIconSVG />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#5B9EDE',
    height: 75,
    paddingHorizontal: 20,
  },
  containerStyle: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 10,
    width: 280,
    height: 45,
    marginTop: 15,
  },
  inputStyle: { fontSize: 13 },
  inputContainerStyle: {
    height: 30,
  },
  wrapIcon: {
    height: '100%',
    width: 'auto',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificaionIcon: {
    marginRight: 20,
  },
});
