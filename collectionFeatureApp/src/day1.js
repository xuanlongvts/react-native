/*
	A stop watch
*/
'use strict';
import React, {Component} from 'react';
import {
	Platform,
	ListView,
	StyleSheet,
	StatusBar,
	Text,
	TouchableHighlight,
	View
} from 'react-native';

const init_state = {
	stopWatch: false,
	resetWatch: true,
	initialTime: 0,
	currentTime: 0,
	recordTime: 0,
	timeAccumulation: 0,
	totalTime: "00:00.00",
	sectionTime: "00:00.00",
	recordCounter: 0,
	record: [
		{title:"",time:""},
		{title:"",time:""},
		{title:"",time:""},
		{title:"",time:""},
		{title:"",time:""},
		{title:"",time:""},
		{title:"",time:""}
	]
}

export default class extends Component{

	constructor(props) {
		super(props);
		this.state = init_state;
	}	

	return(){
		render(){

		}
	}
}