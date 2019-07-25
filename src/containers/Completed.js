import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';



export class Completed extends Component {
	reset = () => {
		this.props.navigation.navigate('DrawerNavigator');
	};

	render() {
		return (
			<View
				style={{
					flex: 1,
					paddingTop: 45
				}}
			>
				<View
					style={{
						flex: 1
					}}
				>
					<Button title="Done !" onPress={() => this.reset()} />
				</View>
			</View>
		);
	}
}

export default Completed;
