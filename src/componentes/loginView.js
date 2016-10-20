'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} from 'react-native';

class loginView extends Component{
	render() {
		return (
			<View>
				<TouchableHighlight onPress={(this).onLogin.bind(this)} style={styles.boton}>
					<Text style={styles.textoBoton}>XXX</Text>
				</TouchableHighlight>
			</View>
		)
	}

	onLogin(){
		Alert.alert(
			'Acceso',
			'Continuar?',
			[
				{
					text:'Continuar',
					onPress: (this.aceptar.bind(this))
				},
				{
					text:'Salir',
					onPress: (this.cancelar.bind(this))
				}
			]
		);
	}

	aceptar(){
		console.log('Bienvenido');
	}

	cancelar(){
		console.log('Vuelva pronto');
	}
}

const styles = StyleSheet.create({
	boton:{
		width:300,
		height:30,
		backgroundColor:'#1d1d1d',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth:2,
		borderColor:'black',
		borderRadius:25,
		marginTop:20,
		marginBottom:20
	},
	textoBoton:{
		color:'white'
	}
});

module.exports = loginView;