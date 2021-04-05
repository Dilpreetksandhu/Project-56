import * as React from "react"
import {View,TouchableOpacity,Text} from "react-native"
import {Audio} from "expo-av"
import Sd from "./sound"

class Abc extends React.Component{
 

  render(){
    return(
      <View>

<Sd text="Sound1"  uri="http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg" bcolor="gold" />

<Sd text="Sound2" uri="http://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3" bcolor="orange"/>

<Sd text="Sound3" uri="http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/intromusic.ogg" 
bcolor="coral"/>

<Sd text="Sound4" uri="http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/extralife.ogg"
bcolor="crimson"/>

<Sd text="Sound5" uri="http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav"
bcolor='red'/>

      </View>
    )
  }
}
export default Abc

