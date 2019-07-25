import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { TouchableOpacity ,SafeAreaView } from 'react-native';



export class SplashScreen extends Component {
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
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Button title="Go to OTP" onPress={() => this.props.navigation.navigate('OTPScreen')} />
				</View>
			</View>
		);
	}
}

export default SplashScreen;
