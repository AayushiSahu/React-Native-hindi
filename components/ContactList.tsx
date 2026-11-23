import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Ayushi Sahu',
      status: 'Capgemini',
      imageUrl:
        'https://tse2.mm.bing.net/th/id/OIP.hJ1pkt8Hh3Y7wsTMm5zetgHaD4?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      uid: 2,
      name: 'Ayushi Patel',
      status: 'QA',
      imageUrl:
        'https://tse2.mm.bing.net/th/id/OIP.hJ1pkt8Hh3Y7wsTMm5zetgHaD4?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      uid: 3,
      name: 'Disha Sharma',
      status: 'IPS College',
      imageUrl:
        'https://tse2.mm.bing.net/th/id/OIP.hJ1pkt8Hh3Y7wsTMm5zetgHaD4?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      uid: 4,
      name: 'Parita Jain',
      status: 'Tech Mahindra',
      imageUrl:
        'https://tse2.mm.bing.net/th/id/OIP.hJ1pkt8Hh3Y7wsTMm5zetgHaD4?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      uid: 5,
      name: 'Ashvinee Khatri',
      status: 'Infosys',
      imageUrl:
        'https://tse2.mm.bing.net/th/id/OIP.hJ1pkt8Hh3Y7wsTMm5zetgHaD4?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      uid: 6,
      name: 'Meghana Vyas',
      status: 'Tcs',
      imageUrl:
        'https://tse2.mm.bing.net/th/id/OIP.hJ1pkt8Hh3Y7wsTMm5zetgHaD4?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: imageUrl }} style={styles.userIamge}></Image>

            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 9,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom:4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    marginBottom:3,
    backgroundColor:'#5a326b',
    padding:8,
    borderRadius:10

  },
  userIamge: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight:14
  },
  userName: {
    fontSize:14,
    fontWeight:'600',
    color:'#fff'
  },
  userStatus: {
     fontSize:14,
    fontWeight:'600',
    color:'#ecdddd'
  },
});
