import React from 'react'
import {Text, View} from 'react-native'
import ImageComp from '../COMPONENTS/UI/Image'

export const TabComponent =(route, focused) =>{
    let iconName
    if (route === "Home") {
        iconName = focused ? (
         
          <ImageComp
          noPress
            Icon
            width={22}
            height={22}
            imageUri={require("../assets/Icons/Tab/homeTab.png")}
          />
       
        ) : (
          
          <ImageComp
          noPress
            Icon
            width={22}
            height={22}
            imageUri={require("../assets/Icons/Tab/homeTabUn.png")}
          />
        );
      }else if (route === "Map") {
        iconName = focused ? (
         
          <ImageComp
          noPress
            Icon
            width={22}
            height={22}
            imageUri={require("../assets/Icons/Tab/mapTab.png")}
          />
       
        ) : (
          
          <ImageComp
          noPress
            Icon
            width={22}
            height={22}
            imageUri={require("../assets/Icons/Tab/mapTabUn.png")}
          />
        );
      } else if (route === "Operations") {
        iconName = focused ? (
         
          <ImageComp
          noPress
            Icon
            width={22}
            height={22}
            imageUri={require("../assets/Icons/Tab/operationTab.png")}
          />
       
        ) : (
          
          <ImageComp
          noPress
            Icon
            width={22}
            height={22}
            imageUri={require("../assets/Icons/Tab/operationTabUn.png")}
          />
        );
      } else if (route === "Chat") {
        iconName = focused ? (
         
          <ImageComp
          noPress
            Icon
            width={22}
            height={22}
            imageUri={require("../assets/Icons/Tab/chatTab.png")}
          />
       
        ) : (
          
          <ImageComp
          noPress
            Icon
            width={22}
            height={22}
            imageUri={require("../assets/Icons/Tab/chatTabUn.png")}
          />
        );
      } else if (route === "More") {
        iconName = focused ? (
         
          <ImageComp
          noPress
            Icon
            width={22}
            height={22}
            imageUri={require("../assets/Icons/Tab/moreTab.png")}
          />
       
        ) : (
          
          <ImageComp
          noPress
            Icon
            width={22}
            height={22}
            imageUri={require("../assets/Icons/Tab/moreTabUn.png")}
          />
        );
      } 
      // You can return any component that you like here!
      return iconName;
}