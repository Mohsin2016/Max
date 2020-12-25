import React from 'react'
import {View,Text, StatusBar, ImageBackground} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ImageComp from '../COMPONENTS/UI/Image'
import { colors } from '../Constant'
import {useSelector} from 'react-redux'


const Home = ({navigation}) =>{
    const userObj = useSelector(state=>state.Auth.Login.token)
    console.log(userObj)
    return (
      
        <View style={{flex:1, paddingHorizontal: 20, paddingTop: StatusBar.currentHeight +10, backgroundColor: colors.Main}}>
            {/* Header Part Starts here */}
                <View style={{width: '100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingBottom:10}}>
                    <ImageComp Icon width={160} height={50} imageUri={require('../assets/Icons/LogoDash.png')}/>
                    <ImageComp Icon width={70} height={25} imageUri={require('../assets/Icons/panicTag.png')}/>
                    <ImageComp onPress={()=> navigation.navigate('Notification')} Icon width={25} height={25} imageUri={require('../assets/Icons/notification.png')}/>
                </View>
            
            {/* Header Part Ends here */}
            <ScrollView showsVerticalScrollIndicator={false}>

            {/* Info Section */}
            <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', paddingVertical:20, alignItems:'center'}}>
                <Text style={{fontSize: 21, color:'white', fontFamily:'Regular'}}>Welcome Tony</Text>
                <ImageComp Icon width={35} height={35} imageUri={require('../assets/Icons/user.png')}/>
            </View>
            {/* Info Section End*/}

            {/* Dashbaoad Secton Starts here */}
            <View style={{width:'100%', paddingTop:20}}>
                {/* Dash Icon and Welcome */}
            <View style={{width:'100%', flexDirection:'row',alignItems:'center'}}>
            <ImageComp Icon width={35} height={35} imageUri={require('../assets/Icons/home.png')}/>
            <Text style={{fontSize: 18, color:colors.fontColor, fontFamily:'Regular', marginLeft:10}}>Dashboard</Text>
            </View>
            {/* Dash Counts */}
            <View style={{width:'100%', paddingVertical:10, flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{width:'23%', backgroundColor:'#424D61', height: 70, justifyContent:'space-around', alignItems:'center', paddingVertical:10}}>
                    <Text style={{fontFamily:'Regular', color:'white', fontSize:15}}>Client</Text>
                    <Text style={{fontFamily:'Regular', color:'white', fontSize:13}}>6</Text>
                </View>
                <View style={{width:'23%', backgroundColor:'#424D61', height: 70, justifyContent:'space-around', alignItems:'center', paddingVertical:10}}>
                    <Text style={{fontFamily:'Regular', color:'white', fontSize:15}}>VIPS</Text>
                    <Text style={{fontFamily:'Regular', color:'white', fontSize:13}}>27</Text>
                </View>
                <View style={{width:'23%', backgroundColor:'#424D61', height: 70, justifyContent:'space-around', alignItems:'center', paddingVertical:10}}>
                    <Text style={{fontFamily:'Regular', color:'white', fontSize:15}}>Users</Text>
                    <Text style={{fontFamily:'Regular', color:'white', fontSize:13}}>10</Text>
                </View>
                <View style={{width:'23%', backgroundColor:'#424D61', height: 70, justifyContent:'space-around', alignItems:'center', paddingVertical:10}}>
                    <Text style={{fontFamily:'Regular', color:'white', fontSize:15}}>Assets</Text>
                    <Text style={{fontFamily:'Regular', color:'white', fontSize:13}}>5</Text>
                </View>
               
              
            </View>
                {/* Dash Count End here */}

                <View style={{width:'100%',  backgroundColor:'#1D1D2B', paddingHorizontal:20, paddingVertical:20}}>
                    <Text style={{fontFamily:'Regular', color:'white', fontSize:11}}>NEXT OPERATION : JUSTIN BIEBER TURKEY TOUR</Text>
                    <Text style={{fontFamily:'Bold', color:'white', fontSize:13, marginTop:5}}>00:00 01/12/2020 - 23:59 10/12/2020</Text>
                    <View style={{width:'100%', height:12, backgroundColor:'#666EE8', borderRadius:125, marginTop:5}}></View>
                    <Text style={{fontFamily:'Regular', color:'white', fontSize:11, marginTop:5}}>1d 0h 38m 32s</Text>
                </View>

            </View>

            {/* Dashboard Section End here */}

            {/* Navigate Sections */}
            <View style={{width:'100%', paddingVertical:40}}>
                {/* Row 1 */}
            <View style={{width:'100%', alignItems:'flex-end'}}>
                <View style={{width:'90%', height:75, backgroundColor:'#B4BDCC', flexDirection:'row', justifyContent:'space-between', paddingLeft:30, paddingRight:20, alignItems:'center'}}>
                    <Text style={{fontFamily:'Regular', fontSize:16, color:'#3A4759'}}>Operation</Text>
                    <Text style={{fontFamily:'Regular', fontSize:16, color:'#3A4759'}}>75</Text>
                </View>
                <View style={{width:50, height:50, backgroundColor:'#424D61', position:'absolute', left:0, top:13, justifyContent:'center',alignItems:'center'}}>
                <ImageComp onPress={()=> navigation.navigate('Operations')} Icon width={30} height={30} imageUri={require('../assets/Icons/operation.png')}/>
                </View>
            </View>
             {/* Row 1 */}
             <View style={{width:'100%', alignItems:'flex-end', marginTop:20}}>
                <View style={{width:'90%', height:75, backgroundColor:'#B4BDCC', flexDirection:'row', justifyContent:'space-between', paddingLeft:30, paddingRight:20, alignItems:'center'}}>
                    <Text style={{fontFamily:'Regular', fontSize:16, color:'#3A4759'}}>Missions</Text>
                    <Text style={{fontFamily:'Regular', fontSize:16, color:'#3A4759'}}>24</Text>
                </View>
                <View style={{width:50, height:50, backgroundColor:'#424D61', position:'absolute', left:0, top:13, justifyContent:'center',alignItems:'center'}}>
                <ImageComp onPress={()=> navigation.navigate('Mission')} Icon width={30} height={30} imageUri={require('../assets/Icons/Mission.png')}/>
                </View>
            </View>

             {/* Row 1 */}
             <View style={{width:'100%', alignItems:'flex-end', marginTop:20}}>
                <View style={{width:'90%', height:75, backgroundColor:'#B4BDCC', flexDirection:'row', justifyContent:'space-between', paddingLeft:30, paddingRight:20, alignItems:'center'}}>
                    <Text style={{fontFamily:'Regular', fontSize:16, color:'#3A4759'}}>Tasks</Text>
                    <Text style={{fontFamily:'Regular', fontSize:16, color:'#3A4759'}}>35</Text>
                </View>
                <View style={{width:50, height:50, backgroundColor:'#424D61', position:'absolute', left:0, top:13, justifyContent:'center',alignItems:'center'}}>
                <ImageComp Icon width={30} height={30} imageUri={require('../assets/Icons/task.png')}/>
                </View>
            </View>
             {/* Row 1 */}
             <View style={{width:'100%', alignItems:'flex-end', marginTop:20}}>
                <View style={{width:'90%', height:75, backgroundColor:'#B4BDCC', flexDirection:'row', justifyContent:'space-between', paddingLeft:30, paddingRight:20, alignItems:'center'}}>
                    <Text style={{fontFamily:'Regular', fontSize:16, color:'#3A4759'}}>Subtask</Text>
                    <Text style={{fontFamily:'Regular', fontSize:16, color:'#3A4759'}}>112</Text>
                </View>
                <View style={{width:50, height:50, backgroundColor:'#424D61', position:'absolute', left:0, top:13, justifyContent:'center',alignItems:'center'}}>
                <ImageComp Icon width={30} height={30} imageUri={require('../assets/Icons/subtask.png')}/>
                </View>
            </View>
            
            
            </View>
           



        </ScrollView>
        </View>
    )
}

export default Home