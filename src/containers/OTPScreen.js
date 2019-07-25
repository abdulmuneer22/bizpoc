import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import NavigationHeader from '../components/NavigationHeader';
export class OTPScreen extends Component {
	render() {
		return (
			<View
				style={{
                    flex: 1,
                    paddingTop : 45
				}}
			>
				<NavigationHeader navigation={this.props.navigation}/>
				<View
					style={{
						flex: 1
					}}
				>
					<Button title="Profile" onPress={() => this.props.navigation.navigate('Completed')} />
				</View>
			</View>
		);
	}
}

export default OTPScreen;
