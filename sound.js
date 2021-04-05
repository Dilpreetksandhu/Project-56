import * as React from "react"
import {Audio} from "expo-av"
import {View,TouchableOpacity,Text} from "react-native"

class Sd extends React.Component{
  sound=()=>{
    Audio.Sound.createAsync(
      {uri:this.props.uri},
      {shouldPlay:true}
    )
  }
  render(){
    return(
      <View>
<TouchableOpacity onPress={this.sound} style={{backgroundColor:this.props.bcolor,textAlign:"center", width:200, marginTop:50,  height:40, borderRadius:20, marginLeft:100,fontSize:60}}>
<Text>{this.props.text}</Text>
</TouchableOpacity>
      </View>
    )
  }
}

export default Sd