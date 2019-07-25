import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import NavigationHeader from '../components/NavigationHeader';

const resetAction = StackActions.reset({
	index: 0,
	actions: [ NavigationActions.navigate({ routeName: 'DrawerNavigator' }) ]
});

export class Completed extends Component {
	reset = () => {
		this.props.navigation.dispatch(resetAction);
	};

	render() {
		return (
			<View
				style={{
					flex: 1,
					paddingTop: 45
				}}
			>
				<NavigationHeader navigation={this.props.navigation} />
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
