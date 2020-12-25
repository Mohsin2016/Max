import React from 'react';
import { Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function ButtonNew(props){
    return (
        <Pressable
            android_ripple={{color: '#FFF'}}
            onPress={props.onPress}
            onLongPress={props.onLongPress != null || props.onLongPress != undefined ? props.onLongPress: null}
            style={[{backgroundColor:props.backgroundColor, color:props.color, padding: 10, alignItems:'center'}, props.styles == undefined ? {} : props.styles]}>
            {props.icon == undefined ?
            <Text style={{fontSize: props.size, color:props.color}}>{props.title}</Text>
            :
            <MaterialIcons name={props.title} size={props.size} color={props.color} />
            }
        </Pressable>
    );
}