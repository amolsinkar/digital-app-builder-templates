import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { WLClient, WLAuthorizationManager } from 'react-native-ibm-mobilefirst';
import styles from './SettingsStyle';

logout = () => {
  WLAuthorizationManager.logout('UserLogin').then(
    () => {
      WL.Logger.debug('logout onSuccess');
      this.props.navigation.navigate('Login');
    },
    response => {
      WL.Logger.error('logout onFailure: ' + JSON.stringify(response));
    }
  );

};
const Settings: () => React$Node = () => (
  <>
    <View style={styles.parent}>
      <View style={styles.skewContainer} />
      <View style={{ flexDirection: 'row', width: '100%', height: '10%' }}>
        <View
          style={{
            flex: 1,
            width: '80%',
            alignItems: 'center',
            paddingTop: '8%',
            paddingLeft: '40%'
          }}
        >
          <Text style={styles.text}>Settings</Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: '9%',
            paddingLeft: '25%'
          }}
        >
          <TouchableOpacity
            style={{ width: '30%' }}
            onPress={() => {
              this.logout();
            }}
          >
            <Image
              style={{ width: '100%', height: '60%' }}
              source={require('../../../assets/images/logout.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.text}>Settings</Text>
      </View>
    </View>
  </>
);

export default Settings;
