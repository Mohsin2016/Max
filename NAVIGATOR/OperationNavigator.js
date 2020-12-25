import { createStackNavigator } from "@react-navigation/stack";
import {colors} from '../Constant'
import React from 'react'
import {styles} from '../COMPONENTS/StylingHeader'
import HeaderRight from "../COMPONENTS/headerRight";
import OperationListing from "../Screens/Operation/OperationListing";
import ImageComp from '../COMPONENTS/UI/Image'
import {Dimensions, View} from 'react-native'

const {width, height} =Dimensions.get('window')




// HOME STACK NAVIGATOR
const OperationStack = createStackNavigator();

export const OperationStackFunc = () => {
  return (

        <OperationStack.Navigator
          // initialRouteName="PriceOffer
          screenOptions={({ navigation, route }) => ({
            headerStyle: styles.headerStyle,
            headerTintColor: styles.headerTintColor,
            headerTitleStyle: styles.headerTitleStyle,
            
            headerRight: () => (
                <View style={{width:width / 2.5, height:'100%', justifyContent:'space-between', alignItems:'center',flexDirection:'row', paddingRight:15}}>
                <ImageComp Icon width={70} height={25} imageUri={require('../assets/Icons/panicTag.png')}/>
                <ImageComp onPress={()=> navigation.navigate('Home',{screen: 'Notification'})} Icon width={25} height={25} imageUri={require('../assets/Icons/notification.png')}/>
                            </View>
            ),
            headerLeft: () => (
                <View style={{width:50, height:'100%', justifyContent:'center', alignItems:'center',flexDirection:'row', paddingRight:15,}}>
                
                <ImageComp onPress={()=> navigation.navigate('Home')} Icon width={18} height={18} imageUri={require('../assets/Icons/backArrow.png')}/>
                            </View>
            )
          })}
        >
            <OperationStack.Screen
            name="OperationListing"
            component={OperationListing}
            options={{ 
             headerTitle:'Operations'
             }}
          />
                    
        </OperationStack.Navigator>
   
  
  );
};



// HOME STACK NAVIGATOR ENDS HERE
