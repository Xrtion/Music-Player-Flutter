import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'
import Ionicon from 'react-native-vector-icons/Ionicons'

const MusicPlayer = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.maincontainer}>
        {/* images */}
        <View style={style.imagewrapper}>
          <Image
            source={require('../assets/img/BeautyAndABeat.png')}
            style={style.musicimages}
          />
        </View>
        {/* songcontent */}
        <View>
          <Text style={[style.songcontent, style.songtitle]}>Some Title</Text>
          <Text style={[style.songcontent, style.songartist]}>Some Artist Name</Text>
        </View>
        {/* slider */}
        <View>
          <Slider
            style={style.progressbar}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor='#FFD396'
            minimumTrackTintColor='#FFD396'
            maximumTrackTintColor='#fff'
            onSlidingComplete={() => {}}
          />
          {/* music progress duration */}
          <View style={style.progresslevelduration}>
            <Text style={style.progresslabeltext}>00.00</Text>
            <Text style={style.progresslabeltext}>00.00</Text>
          </View>
        </View>
        {/* music controls */}
        <View style={style.musiccontrolcontainer}>
          <TouchableOpacity onPress={() =>{}}>
            <Ionicon name='play-skip-back-outline' size={35} color='#FFD369'/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>{}}>
            <Ionicon name='pause-circle' size={75} color='#FFD369'/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>{}}>
            <Ionicon name='play-skip-forward-outline' size={35} color='#FFD369'/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.bottomcontainer}>
        <View style={style.bottomiconwrapper}>
          <TouchableOpacity onPress={() =>{}}>
            <Ionicon name='heart-outline' size={30} color='#888888'/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>{}}>
            <Ionicon name='repeat' size={30} color='#888888'/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>{}}>
            <Ionicon name='share-outline' size={30} color='#888888'/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>{}}>
            <Ionicon name='ellipsis-horizontal' size={30} color='#888888'/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MusicPlayer

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },

  maincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  bottomcontainer: {
    alignItems: 'center',
    paddingVertical: 15,
    borderTopColor: '#393E46',
    borderWidth: 1
  },

  bottomiconwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },

  imagewrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
  },

  musicimages: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },

  elevation: {
    elevation: 5,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84
  },

  songcontent: {
    textAlign: 'center',
    color: '#EEEEEE',
  },

  songtitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  songartist: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    color: '#EEEEEE',
  },

  progressbar: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },

  progresslevelduration: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  progresslabeltext: {
    color: '#fff',
    fontWeight: '500',
  },

  musiccontrolcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 15,
  },
});