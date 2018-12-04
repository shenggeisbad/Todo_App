import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Avatar
  xlarge
  rounded
  source={{uri: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213209/West-Highland-White-Terrier-on-White-01.jpg"}}
  onPress={() => console.log("Koloqyok")}
  activeOpacity={0.7}
/>
        <Text> Pat Me!</Text>
        <Button title={"HEHE"} onPress={() => { console.log("holoq holoq"); }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
