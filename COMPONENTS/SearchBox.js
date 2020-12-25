import React from 'react'
import {View,} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import ImageComp from '../COMPONENTS/UI/Image'
import { colors } from '../Constant'


const SearchBox = () =>{
    return (
        <View style={{width: '85%', height:50, backgroundColor: colors.lightPurple, paddingHorizontal:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <TextInput style={{width: '70%', height: '100%', color:colors.fontColor}}/>
                    <ImageComp  Icon width={22} height={22} imageUri={require('../assets/Icons/searchBlue.png')}/>
                </View>

    )
}

export default SearchBox