// DEFAULTS IMPORTS
import React from 'react'
import {View,Text, Dimensions} from 'react-native'
import ImageComp from '../COMPONENTS/UI/Image'
import * as tabFunc from '../COMPONENTS/TabComponent'
import {styles} from '../COMPONENTS/StylingHeader'


// IMPORTS OF ALL NAVIGATIONS
import { NavigationContainer, useIsFocused,getFocusedRouteNameFromRoute  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// IMPORTS OF NAVIGATION ENDS HERE


// Navigators
import {NotificationStackFunc} from '../NAVIGATOR/NotificationNavigator'
import {OperationStackFunc} from '../NAVIGATOR/OperationNavigator'


// Screens Imports
import { colors } from '../Constant';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import StartupScreen from '../Screens/Startup';
import LogOut from '../Screens/TempLogout';
import Notification from '../Screens/Basic/Notification';
import { Header } from 'react-native/Libraries/NewAppScreen';
import HeaderRight from '../COMPONENTS/headerRight';
import MissionListing from '../Screens/Missions/Mission'


const {width,height} = Dimensions.get('window')

// BELOW IS THE MAIN STACK NAVIGATOR

const mainStack = createStackNavigator();

const mainNavigator = () => {
  return (

      <NavigationContainer>
        <mainStack.Navigator
          // initialRouteName="PriceOffer
        >
            <mainStack.Screen
            name="StartUp"
            component={StartupScreen}
            options={{ 
             headerShown:false
             }}
          />
           <mainStack.Screen
            name="Login"
            component={Login}
            options={{ 
             headerShown:false
             }}
          />
             <mainStack.Screen
            name="MainTab"
            component={MainTabFunc}
            options={{ 
             headerShown:false
             }}
          />
        </mainStack.Navigator>
      </NavigationContainer>
  
  );
};


// MAIN STACK NAVIGATOR ENDS HERE 



function getHeaderShown(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Notification';
  console.log('route name is'+routeName)

  if(routeName === 'Notification'){
    return true
  }else{
    return false
  }
}

// HOME STACK NAVIGATOR
const homeStack = createStackNavigator();

const homeStackFunc = () => {
  return (

        <homeStack.Navigator
          // initialRouteName="PriceOffer
          screenOptions={({ navigation, route }) => ({
            headerStyle: styles.headerStyle,
            headerTintColor: styles.headerTintColor,
            headerTitleStyle: styles.headerTitleStyle,
            headerRight: () => (
                <HeaderRight navigation={navigation} routeName='Notification'/>
            )
          })}
        >
            <homeStack.Screen
            name="HomeMain"
            component={Home}
            options={{ 
             headerShown:false
             }}
          />
             <homeStack.Screen
            name="Notification"
            component={NotificationStackFunc}
            options={({route})=>({ 
             headerShown:  getHeaderShown(route),
             })}
          />
          <homeStack.Screen
            name="Mission"
            component={MissionListing}
          
          />
         
          
        </homeStack.Navigator>
   
  
  );
};



// HOME STACK NAVIGATOR ENDS HERE









// TAB NAVIGATOR STARTS FROM HERE

const MainTab = createBottomTabNavigator();
const MainTabFunc = ({ route, navigation }) => {
 

  
  return (
    <MainTab.Navigator
      initialRouteName="Home"
      
      tabBarOptions={{activeTintColor:colors.Purple,inactiveTintColor:'white' ,style:{height:60, backgroundColor:'#141920',  borderTopColor:'#141920', paddingBottom:10,},labelStyle:{fontFamily:'Bold', fontSize:10, textTransform:'uppercase'} }}
      screenOptions={({ route, navigation }) => ({        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = tabFunc.TabComponent(route.name, focused);
          return iconName         
        },
      })}
    >
      <MainTab.Screen
        options={({ route }) => ({
          tabBarLabel: "Home",
        })}
        name="Home"
        component={homeStackFunc}
      />
       <MainTab.Screen
        options={({ route }) => ({
          tabBarLabel: "Map",
        })}
        name="Map"
        component={Home}
      />
       <MainTab.Screen
        options={({ route }) => ({
          tabBarLabel: "Operations",
        })}
        name="Operations"
        component={OperationStackFunc}
      />
       <MainTab.Screen
        options={({ route }) => ({
          tabBarLabel: "Chat",
        })}
        name="Chat"
        component={Home}
      />
       <MainTab.Screen
        options={({ route }) => ({
          tabBarLabel: "More",
        })}
        name="More"
        component={LogOut}
      />
      
    </MainTab.Navigator>
  );
};


// TAB NAVIGATOR END HERE


export default mainNavigator

