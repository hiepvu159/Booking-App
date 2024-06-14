import Toast from 'react-native-toast-message';

export const toastSuccess = (text2) => {
  Toast.show({
    type: 'success',
    text1: 'Thành công',
    text2: text2,
    visibilityTime: 3000,
    text1Style: { fontSize: 13 },
    text2Style: { fontSize: 12 },
  });
};

export const toastError = (text2) => {
  Toast.show({
    type: 'error',
    text1: 'Xảy ra lỗi',
    text2: text2,
    visibilityTime: 3000,
    text1Style: { fontSize: 13 },
    text2Style: { fontSize: 12 },
  });
};
