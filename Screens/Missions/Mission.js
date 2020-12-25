import React,{useState} from 'react'
import {View,Text, ImageComponent} from 'react-native'

import { colors } from '../../Constant'
import SearchBox from '../../COMPONENTS/SearchBox'
import ImageComp from '../../COMPONENTS/UI/Image'
import TableLabel from '../../COMPONENTS/TableLabels'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'
import { setStatusBarStyle } from 'expo-status-bar'

// DUMMY DATA FOR OPERATIONS
const operationDummy = [
    {
        Id: 1,
        name: 'Mission 1',
        status:'Planned',
        operation: 'Operation 1',
        operationId: 1

    },
    {
        Id: 2,
        name: 'Mission 2',
        status:'Approved',
        operation: 'Operation 1',
        operationId: 1


    },
    {
        Id: 3,
        name: 'Mission 3',
        status:'Planned',
        operation: 'Operation 1',
        operationId: 1


    },
]

const StatusTemp = [
    'Approved',
    'Planned',
    'Cancelled',
    'Ongoing',
    'Done'
]


const MissionListing = () =>{
    const [STS, setSTS] = useState(true)
    const [stsId, setSTSId] = useState()
    const [dropDownId, setDropDownId] = useState(1)
    const [isDropDown, setIsDropDown] = useState(false)
    const [dummyData, setDummyData] = useState(operationDummy)
   

    // Enable STS to change status
    const stsEnablehandler = (id) =>{
        console.log(id)
        setSTS(false)
        setSTSId(id)

    }


    const setDropdownHandler = (id) =>{
setIsDropDown(!isDropDown)
setDropDownId(id)
    }


    // setDropdownSelected
    const setDropDownSelectedHandler = (item) =>{
     operationDummy.find(item=> item.Id === stsId).status = item
     setDummyData(operationDummy)
     setIsDropDown(false)
    }
    
    return (
        <View style={{flex:1, backgroundColor:colors.Main,  alignItems:'center', paddingTop:20}}>
            {/* Search Box Starts here */}
               <SearchBox/>
            {/* Search Box Ends here */}
            {/* Dropdown Start here */}
            <View style={{width:'85%', height:40, backgroundColor: colors.fontColor, marginTop:15, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:10}}>
                <Text style={{fontFamily:'Regular', color:colors.Main}}>Apply Fillter</Text>
                <ImageComp  Icon width={18} height={18} imageUri={require('../../assets/Icons/downArrow.png')}/>
            </View>
            {/* Dropdown End here */}

            {/* Operation Listing Table Starts here */}

            {/* Table labels */}
            <View style={{width:'85%', height:55, backgroundColor: colors.lightPurple, marginTop:25, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:10}}>
              <TableLabel text='ID'/>
              <TableLabel text='NANE'/>
              <TableLabel text='STATUS'/>
              <TableLabel text='ACTIONS'/>    
            </View>
            {/* Table Labels */}
            <View style={{width:'85%', backgroundColor:colors.darkPurple,  }}>
           
                {dummyData.map((item,index)=> (
                    <View key={index} style={{width:'100%',height:60, backgroundColor:colors.darkPurple, borderBottomWidth:0.3, borderBottomColor:colors.fontColor, flexDirection:'row'}}>
                        <View style={{width:'40%', height:'100%', flexDirection:'row', paddingHorizontal:10, alignItems:'center' }}>
                        <View>
                        <TableLabel tableValue text={item.Id}/>
                        <TableLabel fontSize={11} color='#FFA200' tableValue text={item.operationId}/>
                        </View>
                        <View>
                        <TableLabel  marginLeft={10} tableValue text={item.name}/>
                        <TableLabel fontSize={11} color='#FFA200' marginLeft={10} tableValue text={item.operation}/>
                        </View>
                      
                        </View>
                        
                        <View style={{width:'60%', height:'100%', alignItems:'center', flexDirection:'row', justifyContent:'space-between', paddingRight:6 }}>
                        
                        <View>
                            
                        <TouchableOpacity disabled={stsId !== item.Id} onPress={()=> setDropdownHandler(index)} style={{width: 70,  height:25, backgroundColor:item.status === 'Planned' ? 'white' : item.status === 'Approved' ? colors.yellow : item.status === 'Cancelled' ? 'red' : item.status === 'Ongoing' ? 'green' : '#666EE8', justifyContent:'center', alignItems:'center', fontFamily:'Regular' }}>
                                <Text style={{fontSize:11}}>{item.status}</Text>
                            </TouchableOpacity>
                           

                           
                        </View>
                           
                          
                            <TouchableOpacity onPress={()=> stsEnablehandler(item.Id) } style={{width: 45, height:25, backgroundColor:colors.Grey, alignItems:'center', fontFamily:'Regular', flexDirection:'row', justifyContent:'center', }}>
                                <Text style={{fontSize:11, marginRight:4}}>STS</Text>
                                <ImageComp  Icon width={12} height={12} imageUri={stsId === item.Id ? require('../../assets/Icons/stsTrue.png'): require('../../assets/Icons/SRS.png')}/>
                            </TouchableOpacity>
                          
                            <TouchableOpacity style={{width: 45, height:25, backgroundColor:colors.Grey, justifyContent:'center', alignItems:'center', fontFamily:'Regular' }}>
                            <ImageComp  Icon width={14} height={14} imageUri={require('../../assets/Icons/edit.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                ))}
                {isDropDown ? <View style={{width: 70, height:125, backgroundColor:'white',position:'absolute', top:(dropDownId *60) +45,left:'40%' }}>
                   {StatusTemp.map(item => (
                       <TouchableOpacity key={item} onPress={()=> setDropDownSelectedHandler(item)} style={{width:'100%', height:25, borderBottomColor:'#a7a7a7', borderBottomWidth:1, justifyContent:'center', paddingLeft:5}}>
                       <Text style={{fontSize:10, color:colors.Main}}>{item}</Text>
                   </TouchableOpacity>
                   ) )}
                   
                </View> : null }
              
                
            </View>


            {/* Table End here */}
        </View>

    )
}

export default MissionListing