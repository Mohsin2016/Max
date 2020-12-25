import React from 'react'
import {View,Text} from 'react-native'
import Description from '../../COMPONENTS/description'
import PageTitle from '../../COMPONENTS/PageTitle'
import { colors } from '../../Constant'


const NotificationDetailed = ()=>{
    return (
        <View style={{flex:1, backgroundColor: colors.Main, paddingTop:20}}>
            <PageTitle Title='Notification Details'/>
            <View style={{width:'100%', alignItems:'center', paddingTop:20}}>
            <View style={{width:'90%', paddingVertical:20, backgroundColor:colors.lightPurple, paddingHorizontal:12, }}>
                <Description description=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Tempor id eu nisl nunc mi ipsum faucibus. Fusce id velit ut tortor pretium. 

Massa ultricies mi quis hendrerit dolor magna eget. Nullam eget felis eget nunc lobortis. Faucibus ornare suspendisse sed nisi. Sagittis eu volutpat odio facilisis mauris sit amet massa. Erat velit scelerisque in dictum non consectetur a erat. Amet nulla facilisi morbi tempus iaculis urna. Egestas purus viverra accumsan in nisl. Feugiat in ante metus dictum at tempor commodo. Convallis tellus id interdum velit laoreet. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Viverra'/>
            </View>
            </View>
           
        </View>
    )
}
export default NotificationDetailed