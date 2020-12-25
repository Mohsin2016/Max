import React from 'react'
import {View,Dimensions} from 'react-native'
import ImageComp from '../COMPONENTS/UI/Image'

const {width, height} =Dimensions.get('window')


const HeaderRight = (props) =>{
    return (
        <View style={{width:width / 2.5, height:'100%', justifyContent:'space-between', alignItems:'center',flexDirection:'row', paddingRight:15}}>
        <ImageComp Icon width={70} height={25} imageUri={require('../assets/Icons/panicTag.png')}/>
        <ImageComp onPress={()=> props.navigation.navigate(props.routeName)} Icon width={25} height={25} imageUri={require('../assets/Icons/notification.png')}/>
                    </View>
    )
}

export default HeaderRight