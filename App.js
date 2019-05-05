import React, {Component} from 'react';
import {AsyncStorage,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Alert} from 'react-native';
import getImageForWeather from './constants/getImageForWeather';
import Button from 'react-native-button';


export default class App extends Component{
  render() {
    return (
      <ImageBackground
      source={getImageForWeather('Travel')}
      style={styles.imageContainer} 
      imageStyle={styles.image}
    >
      <View style={styles.detailsContainer}>
          <View style={styles.formContainer}>
          <Text style={styles.largeText}> Booking App</Text>
          <View style={styles.containerTextInput}>
            <TextInput style={styles.textInput} 
            // onChangeText={(email)=> this.setState({email})} value= {this.state.email} 

            placeholder={"Nhập mã hoặc tên tài khoản"}></TextInput>
          </View>
          <View style={styles.containerTextInput}>
            <TextInput style={styles.textInput} 
            // onChangeText={(password)=> this.setState({password})} value= {this.state.password} 

            placeholder={"Nhập password"}></TextInput>
          </View>

          </View>
          

          <TouchableOpacity style={styles.buttonForGot}
            // onPress={this._goToRegister}
            >
                <Text style={styles.textButton} >Quên mật khẩu đăng nhập ?</Text>
          </TouchableOpacity>


          <Button
                style={{
                    fontSize: 20, color: '#F0F0F7',       fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',

                }}
                containerStyle={{
                    padding: 5,
                    marginTop:50,
                    marginLeft: 50,
                    marginRight: 50,
                    height: 40,
                    width: 265,
                    borderRadius: 100,
                    backgroundColor: '#157EFB'
                }}
                //title="Sign in!" 
                // onPress={this._signInAsync}
            >
                Đăng Nhập
            </Button>
            <TouchableOpacity style={styles.buttonSignUp}
            
            // onPress={this._goToRegister}
            >
                <Text style={styles.textButton} >Đăng kí ? nếu bạn chưa có tài khoản</Text>
            </TouchableOpacity>
      </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton:{
      textAlign: 'center',
      color:'white',
      fontSize: 20,
  },
  buttonSignUp:{
    marginTop: 20,
  },
  buttonForGot:{
    marginTop:25
  },
  imageContainer: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  }, 
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color:'white',
  },
  largeText: {
    fontSize: 44,
   // fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color:'white',
  },
  smallText: {
    fontSize: 18,
  },
  image: {
    flex: 1,
    width: null, 
    height: null, 
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    // paddingHorizontal: 20,
    justifyContent: 'center',

  },
  formContainer:{
    //flex: 1,
    marginTop: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTextInput: {
    height: 40,
    marginTop: 25,
    backgroundColor: '#F6F6F6',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 100,
    width:'80%',
  },
  textInput: {
    flex: 1,
    color: '#404040',
    //width:300
    //...props
  },
});

