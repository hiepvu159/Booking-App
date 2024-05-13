import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
  title: string;
}

export default function HeaderForSearch(props: Props) {
  const { title } = props;
  return (
    <View style={styles.wrapHeader}>
      <Text style={styles.title}>{title ?? 'Search'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapHeader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#5B9EDE',
    height: 80,
    paddingHorizontal: 20,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  title: {
    paddingTop: 30,
    width: 400,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
});
