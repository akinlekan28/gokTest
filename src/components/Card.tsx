import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  Alert,
} from 'react-native';

interface Props {
  data: {
    artist: {
      picture_big: String;
      name: String;
    };
    title_short: String;
    position: Number;
    explicit_lyrics: boolean;
    preview: URL;
    link: URL;
  };
}

const Card: React.FC<Props> = ({data}) => {
  const openUrl = async (url: any) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Error opening ${url}`);
    }
  };

  return (
    <View
      style={{
        marginHorizontal: 20,
        flexDirection: 'row',
        marginVertical: 15,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        padding: 4,
      }}>
      <View style={{width: '35%'}}>
        <Image
          source={{
            uri: data.artist.picture_big,
          }}
          style={styles.img}
        />
      </View>
      <View
        style={{
          backgroundColor: '#ffffff',
          width: '65%',
          padding: 11,
        }}>
        <Text numberOfLines={1}>
          {data.artist.name} - {data.title_short}
        </Text>
        <Text style={styles.marginTop}>Rank: {data.position}</Text>
        <Text style={styles.marginTop}>
          Explicit lyrics: {data.explicit_lyrics ? 'Yes' : 'No'}
        </Text>
        <View style={styles.actionRow}>
          <TouchableOpacity onPress={() => openUrl(data.preview)}>
            <Text style={styles.textWrapper}>Preview</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openUrl(data.link)}>
            <Text style={styles.textWrapper}>Play</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
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
    marginRight: 15,
  },
  img: {
    height: 130,
    width: '100%',
    resizeMode: 'cover',
  },
});

export default Card;
