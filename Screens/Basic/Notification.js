import React, { useState } from 'react'
import {View,Text, ImageComponent} from 'react-native'
import { colors } from '../../Constant'
import ImageComp from '../../COMPONENTS/UI/Image'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PageTitle from '../../COMPONENTS/PageTitle'
import Description from '../../COMPONENTS/description'
import { useSafeArea } from 'react-native-safe-area-context'

const NotificationDummy = [
    {
        id:1,
        title: 'Lorem Ipsum Sit 1',
        Description: `Lorem ipsum dolor sit amet, consectetur..`
    },
    {
        id:2,
        title: 'Lorem Ipsum Sit 2',
        Description: `Lorem ipsum dolor sit amet, consectetur..`
    },
    {
        id:3,
        title: 'Lorem Ipsum Sit 3',
        Description: `Lorem ipsum dolor sit amet, consectetur..`
    },

]

const Notification = ({navigation}) =>{
    const [dummyNotifications, setDummyNotifications] = useState(NotificationDummy)
// Delete Handler
const deleteHandler = (id) =>{
    const delte = dummyNotifications.filter(item=> item.id !== id)
setDummyNotifications(delte)
}



    return (
        <View style={{backgroundColor: colors.Main, flex:1, paddingTop:20}}>
            {/* Notificaiton heading Starts here */}
         <PageTitle Title='Notification'/>
           {/* Notificaiton heading Starts here */}


           {/* Notification Listing Starts here */}

            <View style={{flex:1, alignItems:'center', marginTop:30}}>
                {dummyNotifications.map(item=> (
                    <View key={item.id} style={{width: '90%', height: 70, backgroundColor:'#424D61', marginBottom:10, flexDirection:'row'}}>
                        <View style={{width: '25%', height:'100%', backgroundColor:colors.lightPurple, justifyContent:'center', alignItems:'center'}}>
                        <ImageComp Icon width={160} height={50} imageUri={require('../../assets/Icons/notificationListing.png')}/>
                        </View>
                        <View style={{width: '65%', height:'100%',paddingVertical:10,paddingHorizontal:10 ,backgroundColor:colors.lightPurple, borderLeftWidth:3, borderLeftColor:colors.Main}}>
                            <Text style={{fontFamily:'Regular', color:colors.fontColor}}>{item.title}</Text>
                            <Description description={item.Description}/>
                        </View>
                        <View style={{width: '10%', height:70, backgroundColor:colors.lightPurple, alignItems:'flex-end', justifyContent:'space-between'}}>
                            <TouchableOpacity onPress={()=> deleteHandler(item.id)} style={{width:25, height:25, borderWidth:1, borderColor:colors.fontColor,justifyContent:'center', alignItems:'center'}}>
                            <ImageComp noPress Icon width={13} height={13} imageUri={require('../../assets/Icons/bin.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> navigation.navigate('NotificationDetailed')} style={{width:25, height:25, borderWidth:1, borderColor:colors.fontColor, justifyContent:'center', alignItems:'center'}}>
                            <ImageComp noPress Icon width={13} height={13} imageUri={require('../../assets/Icons/view.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>

           {/* Notificaiotn Listin Ends here */}
        </View>
    )
}

export default Notification