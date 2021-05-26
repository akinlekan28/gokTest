import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getChartData} from '../../store/modules/chart';
import Card from '../../components/Card';

const HEIGHT = Dimensions.get('window').height;

const Home: React.FC<{}> = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const state = useSelector(s => s.chart);

  const {loading, chart} = state;

  let container;
  if (loading) {
    container = (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    if (Object.keys(chart).length > 0) {
      container = (
        <FlatList
          data={chart}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => <Card data={item} />}
          showsVerticalScrollIndicator={false}
          refreshing={loading}
          onRefresh={() => dispatch(getChartData())}
        />
      );
    } else {
      container = (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15}}>
            Could not fetch chart data at the moment
          </Text>
        </View>
      );
    }
  }

  React.useEffect(() => {
    dispatch(getChartData());
  }, []);

  return (
    <View style={{flex: 1, paddingHorizontal: 5}}>
      <View style={styles.spacer} />
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <View style={styles.drawerStroke} />
        <View style={styles.drawerStroke} />
        <View style={styles.drawerStroke} />
      </TouchableOpacity>
      <View style={{alignSelf: 'center', marginTop: 20}}>
        <Text style={{fontSize: 20, marginBottom: 8}}>
          Top 10 charting songs in Nigeria
        </Text>
      </View>
      {container}
      <View style={styles.marginBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 20,
  },
  marginTop: {
    marginTop: 10,
  },
  textWrapper: {
    backgroundColor: '#d3d3d3',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
  spacer: {
    marginTop: HEIGHT * 0.08,
  },
  drawerStroke: {
    width: 33,
    borderWidth: 1.2,
    marginBottom: 3,
    marginLeft: 22,
  },
});

export default Home;
