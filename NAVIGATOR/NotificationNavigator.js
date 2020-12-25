import { createStackNavigator } from "@react-navigation/stack";
import {colors} from '../Constant'
import Notification from '../Screens/Basic/Notification';
import NotificationDetailed from '../Screens/Basic/NotificationDetailed';
import React from 'react'

import HeaderRight from "../COMPONENTS/headerRight";




// HOME STACK NAVIGATOR
const NotificationStack = createStackNavigator();

export const NotificationStackFunc = () => {
  return (

        <NotificationStack.Navigator
          // initialRouteName="PriceOffer
          screenOptions={({ navigation, route }) => ({
            headerStyle:{
              backgroundColor:'#424D61',
              
            },
            headerTintColor: colors.fontColor,
            headerTitleStyle:{
              fontFamily:'Bold',
              color:colors.fontColor,
              textTransform:'uppercase',
              fontSize:16
            },
            headerRight: () => (
           <HeaderRight navigation={navigation} routeName='Navigation'/>
            )
          })}
        >
            <NotificationStack.Screen
            name="Notification"
            component={Notification}
            options={{ 
             headerShown:false
             }}
          />
            <NotificationStack.Screen
            name="NotificationDetailed"
            component={NotificationDetailed}
            options={{headerTitle:'Notification'}}
           
          />
            
         
          
        </NotificationStack.Navigator>
   
  
  );
};



// HOME STACK NAVIGATOR ENDS HERE
