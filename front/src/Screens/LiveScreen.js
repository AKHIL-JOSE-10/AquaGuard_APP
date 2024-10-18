import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../assets/consts/color.js';
import { ShowToast } from '../components/Toast.js';

const LiveScreen = () => {
  const [remoteMode, setRemoteMode] = useState(true); // State to track if remote mode is active
  const [ipAddress, setIpAddress] = useState(''); // State to hold IP address
  const [isEditingIP, setIsEditingIP] = useState(true); // State to control if IP input is editable

  // Function to handle button clicks (checks if IP is present)
  const handleControlAction = async (action) => {
    if (ipAddress === '') {
      ShowToast('error', "Missing IP Address, Please provide an IP address");
    } else {
      try {
        // Build the URL dynamically based on the action
        const url = `http://${ipAddress}/${action}`;
        console.log(url)
        // Send a request to the built URL
        const response = await fetch(url);
        
        if (response.ok) {
          console.log(`Successfully performed ${action} at ${url}`);
          ShowToast('success', `Performed ${action}`);
        } else {
          console.error(`Failed to perform ${action}. Response: ${response.status}`);
          ShowToast('error', `Failed to perform ${action}`);
        }
      } catch (error) {
        console.error(`Error performing ${action}:`, error);
        ShowToast('error', `Please provide valid IP address`);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        
        {/* Top Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/lake.jpg')}
            style={styles.topImage}
          />
        </View>

        {/* IP Address Input */}
        <View style={styles.ipContainer}>
          <TextInput
            style={styles.ipInput}
            placeholder="Enter IP Address"
            value={ipAddress}
            editable={isEditingIP} // Make input field editable or not based on state
            onChangeText={setIpAddress} // Update IP address on change
          />
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditingIP(!isEditingIP)} // Toggle editing state
          >
            <Text style={styles.editButtonText}>
              {isEditingIP ? 'Save IP' : 'Edit IP'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Mode Selection Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.modeButton,
              { backgroundColor: remoteMode ? COLORS.primary : COLORS.white },
            ]}
            onPress={() => setRemoteMode(true)} // Set to Remote mode
          >
            <Text
              style={{
                color: remoteMode ? COLORS.white : COLORS.black,
                fontWeight: 'bold',
              }}
            >
              Remote
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.modeButton,
              { backgroundColor: !remoteMode ? COLORS.primary : COLORS.white },
            ]}
            onPress={() => setRemoteMode(false)} // Set to Automatic mode
          >
            <Text
              style={{
                color: !remoteMode ? COLORS.white : COLORS.black,
                fontWeight: 'bold',
              }}
            >
              Automatic
            </Text>
          </TouchableOpacity>
        </View>

        {/* Conditional Rendering */}
        {remoteMode ? (
          <View style={styles.rowContainer}>
            {/* Boat Control Panel */}
            <View style={styles.panel}>
              <View style={styles.controlsContainer}>
                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.upButton}
                    onPress={() => handleControlAction('up')} // Send request for 'up'
                  >
                    <Icon name="arrow-upward" size={24} color={COLORS.white} />
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.leftButton}
                    onPress={() => handleControlAction('left')} // Send request for 'left'
                  >
                    <Icon name="arrow-back" size={24} color={COLORS.white} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.pauseButton}
                    onPress={() => handleControlAction('pause')} // Send request for 'pause'
                  >
                    <Icon name="pause" size={24} color={COLORS.white} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.rightButton}
                    onPress={() => handleControlAction('right')} // Send request for 'right'
                  >
                    <Icon name="arrow-forward" size={24} color={COLORS.white} />
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.downButton}
                    onPress={() => handleControlAction('down')} // Send request for 'down'
                  >
                    <Icon name="arrow-downward" size={24} color={COLORS.white} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <Text style={styles.automaticText}>Automatic mode enabled</Text> // Show this in Automatic mode
        )}
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  topImage: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
    marginTop: -50,
  },
  ipContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:15,
    marginTop: -35,
    paddingLeft:12,
    paddingRight:12
  },
  ipInput: {
    backgroundColor: COLORS.white,
    color: COLORS.black,
    padding: 10,
    borderRadius: 8,
    borderColor: COLORS.primary,
    borderWidth: 1,
    flex: 1,
    marginRight: 10,
  },
  editButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  editButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  modeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  panel: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    padding: 30,
    paddingBottom: 10,
  },
  controlsContainer: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  upButton: {
    backgroundColor: COLORS.primary,
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: -21,
    marginLeft: -25,
  },
  leftButton: {
    backgroundColor: COLORS.primary,
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
    marginTop: 8,
  },
  pauseButton: {
    backgroundColor: COLORS.primary,
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7,
    marginRight: 10,
  },
  rightButton: {
    backgroundColor: COLORS.primary,
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
    marginTop: 8,
  },
  downButton: {
    backgroundColor: COLORS.primary,
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: -20,
  },
  automaticText: {
    fontSize: 18,
    color: 'purple',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default LiveScreen;
