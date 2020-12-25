import React from 'react'
import {View,Text} from 'react-native'
import { colors } from '../Constant'



const TableLabel = (props) =>{
    return (
        <Text style={{fontFamily:'Regular', marginLeft: props.marginLeft ? props.marginLeft : 0, color: props.color ? props.color : colors.fontColor, fontSize: props.fontSize ? props.fontSize : 12}}>{props.text}</Text>
    )
}

export default TableLabel