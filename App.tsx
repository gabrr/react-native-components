import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'

interface Data {
  labels: string[],
  values: string[]
}

export const data: Data = {
  labels: [
      'Jan',
      'Fev',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
  ],
  values: [
      '99%',
      '70%',
      '33%',
      '78%',
      '56%',
      '90%',
      '70%',
      '67%',
      '33%',
      '78%',
      '56%',
      '87%'
  ]
}


const Card = () => {
  const barsCount = data.values.map(() => false)
  const [barsIndexes, setbarsIndexes] = useState(barsCount)

  const displayShower = (index: number) => {
    let newBarsIndexes = [...barsCount]
    newBarsIndexes.splice(index, 1, !barsIndexes[index])
    return setbarsIndexes(newBarsIndexes)
  }

  // colors of the bars
  const accent = '#131aa8'
  const normal = '#1f29ff'

  return (
  <View style={styles.card}>
    <Text style={styles.title} >Recargas <Text style={{fontSize: 14, color: 'red'}} >Qtd.</Text></Text>
    <View style={styles.bottomLine}>
    </View>
    <View style={styles.leftLine}>
    </View>
    <View style={styles.yLabelContainer}>
      <Text style={{bottom: '22%', ...styles.yLabel}}>25</Text>
      <Text style={{bottom: '47%', ...styles.yLabel}}>50</Text>
      <Text style={{bottom: '72%', ...styles.yLabel}}>75</Text>
      <Text style={{bottom: '97%', ...styles.yLabel}}>100</Text>
    </View>

    <View style={styles.xLabelContainer}>
      {data.labels.map((label, index) => (
          <Text key={index} style={{...styles.xLabel}}>{label}</Text>
      ))}
    </View>

    <View style={styles.barsContainer}>
      {data.values.map((value, index) => (
        <View key={index} style={{height: value, backgroundColor: barsIndexes[index] ? accent : normal,...styles.chartBar}} onTouchStart={() => displayShower(index)} >
          <View style={{opacity: barsIndexes[index] ? 1 : 0, bottom: '101%', left: -15, ...styles.viewer}}>
            <Text style={styles.viewerText}>{value}</Text>
          </View>
        </View>
      ))}
    </View>
    
    <View style={styles.gridsContainer}>
      <View style={{bottom: '25%', ...styles.grid}}></View>
      <View style={{bottom: '50%', ...styles.grid}}></View>
      <View style={{bottom: '75%', ...styles.grid}}></View>
      <View style={{bottom: '100%', ...styles.grid}}></View>
    </View>
  </View>
)}


const App = () => {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView style={styles.scrollContainer} >
        <Card/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    height: '100%'
  },
  scrollContainer: {
    marginRight: 0
  },
  card: {
    height: 320,
    width: '95%',
    marginLeft: '2.5%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 30,
    shadowOffset: { width: 5, height: 7 },
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    marginTop: 15,
    marginLeft: '4%',
    color: '#444'
  },
  bottomLine: {
    height: 1,
    width: '88%',
    backgroundColor: '#999',
    position: 'absolute',
    bottom: 41,
    marginLeft: '8%'
  },
  leftLine: {
    // height: '65%',
    // width: 1,
    // backgroundColor: '#999',
    // position: 'absolute',
    // left: '8%',
    // bottom: 40,
  },
  chartBar: {
    width: 15,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4 
  },
  barsContainer: {
    height: '65%',
    width: '84%',
    marginLeft: '6%',
    position: 'absolute',
    bottom: 40,
    left: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  yLabelContainer: {
    width: 50,
    height: '65%',
    position: 'absolute',
    bottom: 40,
    left: -19
  },
  yLabel: {
    position: 'absolute',
    fontSize: 10,
    fontWeight: '600',
    right: 0,
    color: '#444',
  },
  xLabelContainer: {
    width: '85%',
    height: 20,
    position: 'absolute',
    bottom: 10,
    left: '5%',
    marginLeft: '6%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  xLabel: {
    fontSize: 10,
    width: 20,
    fontWeight: '600',
    color: '#444',
  },
  gridsContainer: {
    height: '65%',
    width: '86%',
    position: 'absolute',
    bottom: 40,
    left: '5%',
    zIndex: -2,
  },
  grid: {
    position: "absolute",
    left: 20,
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  viewer: {
    width: 50,
    height: 30,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 4,
    zIndex: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewerText: {
    color: '#444',
    fontSize: 12,
  }
})

// onTouchStart={(x) => console.log(x.nativeEvent.pageX, x.nativeEvent.pageY, 'touched')}