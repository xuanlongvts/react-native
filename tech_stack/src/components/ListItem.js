import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common/CardSection';
import * as actions from '../actions/index';

class ListItem extends Component{

	componentWillUpdate() {
		LayoutAnimation.easeInEaseOut();
	}

	renderDescription(){
		const {library, selectedLibraryId} = this.props;
		const {descText} = styles;

		if(library.id === selectedLibraryId){
			return(
				<CardSection>
					<Text style={descText}>
						{library.description}
					</Text>
				</CardSection>
			)
		}
	}

	render(){
		const {titleStyle} = styles;
		const {id, title} = this.props.library;

		return(
			<TouchableWithoutFeedback 
				onPress={() => { 
					this.props.selectLibrary(id);
				}  
			}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>{title}</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	},
	descriptionStyle: {
		paddingLeft: 10,
		paddingRight: 10
	},
	descText: {
		paddingLeft: 15,
		paddingRight: 5,
		fontSize: 16
	}
};

const mapStateToProps = (state) => {
	return {
		selectedLibraryId: state.selectedLibraryId
	}
}

export default connect(mapStateToProps, actions)(ListItem);