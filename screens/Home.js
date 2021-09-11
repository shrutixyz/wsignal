// import React, { useContext } from 'react';
// import { View, StyleSheet, Button, Text } from 'react-native';
// // import { Text, Button, Title, Paragraph } from 'react-native-paper';
// import mainContext from '../context/mainContext';
// import Firebase from '../Firebase';

// const HomeScreen = () => {
//   const { currentUser } = Firebase.auth(); //we are getting the user from Firebase

//   const { signOutUser } = useContext(mainContext); //we are getting these functions from the context so that can be used here
 

//   return (
//     <View style={styles.container}>
//       <View style={styles.box}>
//         <Text>HomeScreen </Text>
//       </View>
//       <View style={styles.box}>
//         <Text>{currentUser.email}</Text>
//       </View>
//       <View style={styles.box}>
//         <Button onPress={() => signOutUser()} mode="contained" icon="logout" title="sign out">
//           Sign Out
//         </Button>
//       </View>
     
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   inputContainer: {
//     width: '80%',
//     marginBottom: 20,
//   },
//   container: {
//     flex: 1,
//     //backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     marginBottom: 20,
//   },
// });

// export default HomeScreen;



import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Greeting from '../components/greeting';
import FakeCall from '../components/fakeCall';
import NotifyLove from '../components/notifyLove';
import ShareLoc from '../components/shareLoc';
import Police from '../components/police';
import Record from '../components/record';
import NotifyNear from '../components/notifyNear';
import Settings from '../components/settings';

export default function App() {
  return (
    <View>
      <Greeting />
      <Settings />
      <View style={styles.container}>
      <FakeCall />
      <ShareLoc />
      </View>
      <View style={styles.container}>
      <Police />
      <Record />
      </View>
      <View style={styles.container}>
      <NotifyNear />
      <NotifyLove />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row'
  },
});