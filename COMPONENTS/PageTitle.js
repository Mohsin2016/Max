import { useLinkProps } from '@react-navigation/native'
import React from 'react'
import {View,Text} from 'react-native'
import {colors} from '../Constant'

const PageTitle = (props) =>{
    return (
        <View style={{width: '100%', paddingHorizontal:15}}>
        <Text style={{fontFamily:'Bold', color: colors.fontColor, fontSize:19, textTransform:'uppercase'}}>{props.Title}</Text>
        <View style={{width: '20%', height:2, backgroundColor:colors.fontColor, marginTop:5}}></View>
    </View>
    )
}
export default PageTitle