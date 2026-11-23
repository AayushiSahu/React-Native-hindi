import React from 'react';
import {
  View,
  Text,
  SafeAreaViewInstance,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCards from './components/ActionCards';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <FancyCards />
        <ContactList />
        <ActionCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
