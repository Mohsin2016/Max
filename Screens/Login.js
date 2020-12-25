import React, { useRef, useEffect, useContext, useState } from 'react';
import { SafeAreaView, ImageBackground, Keyboard, ActivityIndicator, TextInput, View, Image, Text, TouchableHighlight, StyleSheet, AsyncStorage, Alert } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import ButtonNew from '../COMPONENTS/ButtonNew';
import {useDispatch, useSelector} from 'react-redux'
import * as authActions from '../Redux/Actions/Auth'

export default function Login({ navigation }) {
	const [isLoading, setIsLoading] = useState(false);

	const [usernameOrEmail, setUsernameOrEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isKeyboardActive, setKeyboardActive] = useState(false);
	const passField = useRef();


	useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
        return () => {
			Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
			Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
		};
	}, []);

	const _keyboardDidShow = () => {
        setKeyboardActive(true);
    };
    
    const _keyboardDidHide = () => {
        setKeyboardActive(false);
	};
	
	const styles = StyleSheet.create({
		inputSection: {
			marginBottom:20,
			padding:10,
			flexDirection: 'row',
			alignItems: 'center',
			borderBottomColor: '#6A6E7B',
			borderBottomWidth: 1
		},
		inputIcon: {
			color: '#FFF',
		},
		input: {
			flex: 1,
			textAlign: "left",
			paddingLeft: 10,
			color: '#FFF',
		},
		focusInput: {
			color: '#FFF'
		},
		keyboardScroll: {
			flex: 1,
		},
		image: {
			flex: 1,
			resizeMode: "cover",
		},
    })
    

    // AUTHENTICATE HANDLER
    const dispatcher = useDispatch();
  const authenticateHandler = async () => {
      console.log(usernameOrEmail)
      console.log(password)

      if(usernameOrEmail && password !== '') {
          
      try {
        setIsLoading(true);
     await dispatcher(
            authActions.LoginUser(
                usernameOrEmail,
                password,
          )
        );
  
        setIsLoading(false);
        navigation.navigate('MainTab',{screen:'Home'})

        
  
        // const user = userObj;
        // goToDrawerHandler();
      } catch (err) {
        setIsLoading(false);
        console.log(err.message);
        Alert.alert("Cant Login", err.message);
      }

      }
  
  };

	return (
        <KeyboardAwareScrollView contentContainerStyle={isKeyboardActive ? null: styles.keyboardScroll} keyboardShouldPersistTaps={'handled'}>
			<ImageBackground source={require("../assets/splashLogin.png")} style={styles.image}>
				<View style={{backgroundColor: "#424D61", opacity:0.7, height: 230, width:'100%', position:'absolute'}}>
				</View>
				<View style={{padding:20, paddingTop:40, paddingBottom:30}}>
					<Image source={require("../assets/icon.png")} style={{ alignSelf:'center', justifyContent:'center', width: 110, height: 110 }}/>
					<Text style={{paddingTop: 15, alignSelf:'center', justifyContent:'center', fontSize: 27, color: '#FFF',  fontFamily:'XBold'}}>IT'S A TOUGH WORLD.</Text>
				</View>
				{isLoading ? 
					<ActivityIndicator animating={isLoading} color="#6A6E7B" size="large"/> : (
					<View style={{justifyContent:'space-between', flex:1}}>
					<View style={{padding: 60, paddingTop: 40}}>
						<Text style={{color:'#FFF', fontWeight: 'bold', fontSize: 40, paddingBottom:10}}>Login</Text>
						<Text style={{color:'#FFF', fontSize: 14, lineHeight:20, paddingBottom:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
						<View style={styles.inputSection}>
                        <FontAwesome name="user" size={20} style={styles.inputIcon} />
							<TextInput 
								placeholderTextColor="#FFF"
								style={[styles.input, styles.focusInput]}
								placeholder="Username or Email"
								value={usernameOrEmail}
								onChangeText={setUsernameOrEmail}
								autoFocus={true}
								returnKeyType="next"
							
								onSubmitEditing={() => passField.current.focus()}
								blurOnSubmit={false}
							/>
						</View>
						<View style={styles.inputSection}>
                      
                        <MaterialIcons name="lock-outline" style={styles.inputIcon} size={20} />
							<TextInput 
								placeholderTextColor="#FFF"
								style={styles.input}
								placeholder="Password"
								value={password}
								onChangeText={setPassword}
								ref={passField}
								returnKeyType="done"
								onSubmitEditing={authenticateHandler}
								secureTextEntry
								blurOnSubmit={false}
							/>
						</View>
						<View style={{alignItems:'flex-end', marginTop: 10}}>
							<Text style={{color:'#FFF'}} onPress={() => {  }}>Forgot Password ?</Text>
						</View>
					</View>
					<View>
					<ButtonNew backgroundColor="#666ee8" color="#FFF" title="LOGIN" size={20} onPress={authenticateHandler} />
					</View>
					</View>
				)}
			</ImageBackground>
            </KeyboardAwareScrollView>
	);

}
