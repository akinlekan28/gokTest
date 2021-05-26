import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Welcome: React.FC<{}> = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.marginTop}>Welcome</Text>
      <TouchableOpacity onPress={() => navigation.navigate('DrawerStack')}>
        <Text style={styles.textWrapper}>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  marginTop: {
    marginBottom: 20,
  },
  textWrapper: {
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
});

export default Welcome;
