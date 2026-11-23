import {
  Image,
  StyleSheet,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21- ES12
          </Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://tse2.mm.bing.net/th/id/OIP.2Vr2g511HqqQ0p153R7s7AHaEK?w=296&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3',
          }}
        ></Image>

        <View style={styles.cardBody}>
          <Text numberOfLines={3}>
            The blog covers coding tutorials, data structures, algorithms, and
            interview prep for companies like Google, Amazon, and Microsoft. If
            you’re learning to code or preparing for a tech interview,
            GeeksForGeeks is probably the most useful website you’ll ever find.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://bloggerspassion.com/best-indian-blogs-to-read/',
              )
            }
          >
            <Text style={styles.socialLink}>Read More...</Text>
            <Text style={styles.socialLink}>Follow Me...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 390,
    borderRadius: 6,
    marginVertical: 12,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  cardBody: {
    padding: 10,
  },
  footerContainer: {
    padding: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLink:{
    color:'#000000',
    fontSize:18,
    backgroundColor:'#ffffff',
    paddingHorizontal:10,
    paddingVertical:8,
    borderRadius:20,
  },
});
