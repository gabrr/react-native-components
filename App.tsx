import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'



const Card = () => (
  <View style={styles.card}>

  </View>
)


const App = () => {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <ScrollView style={styles.scrollContainer} >
        <Card/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dbc17f',
    height: '100%'
  },
  scrollContainer: {
    marginRight: 0
  },
  card: {
    height: 60,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 20
  }
})
