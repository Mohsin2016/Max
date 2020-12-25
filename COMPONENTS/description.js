import React from 'react'
import {View,Text} from 'react-native'
import {colors} from '../Constant'

const Description = (props) =>{
    return (
        <Text style={{fontFamily:'Regular', color:colors.fontColor, fontSize:11,marginTop:5}}>{props.description}</Text>
    )
}
export default Description