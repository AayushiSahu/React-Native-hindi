import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        >
        </Image>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>React Logo</Text>
          <Text style={styles.cardLabel}>
            React is used to create Mobile App
          </Text>
          <Text style={styles.cardDescription}>
            React Native is developed by Meta.We can create app using React.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  cardImage: {
    height: 250,
    width:250,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  cardLabel: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 4,
  },
  cardDescription: {
    color: '#3a0d0d',
    fontSize: 12,
    marginBottom: 12,
    flexShrink: 1,
    marginTop:6,
  },
  cardFooter: {
    color: '#c328e2',
  },

  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
