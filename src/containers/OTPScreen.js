import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export class OTPScreen extends Component {
	render() {
		return (
			<View
				style={{
                    flex: 1,
                    paddingTop : 45
				}}
			>
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
