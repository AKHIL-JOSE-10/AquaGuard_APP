import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../assets/consts/color.js';

const LiveScreen = () => {
  const [remoteMode, setRemoteMode] = useState(false); // State to track if remote mode is active

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

      {/* Top Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/lake.jpg')}
          style={styles.topImage}
        />
      </View>

      {/* Content Section */}
      <View style={styles.contentContainer}>
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
              <Text style={styles.panelHeading}>Boat</Text>
              <View style={styles.controlsContainer}>
                <View style={styles.row}>
                  <TouchableOpacity style={styles.upButton}>
                    <Icon name="arrow-upward" size={24} color={COLORS.white} />
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity style={styles.leftButton}>
                    <Icon name="arrow-back" size={24} color={COLORS.white} />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.rightButton}>
                    <Icon name="arrow-forward" size={24} color={COLORS.white} />
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity style={styles.downButton}>
                    <Icon name="arrow-downward" size={24} color={COLORS.white} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Camera Control Panel */}
            <View style={styles.panel}>
              <Text style={styles.panelHeading}>Camera</Text>
              <View style={styles.controlsContainer}>
                <View style={styles.row}>
                  <TouchableOpacity style={styles.upButton}>
                    <Icon name="arrow-upward" size={24} color={COLORS.white} />
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity style={styles.leftButton}>
                    <Icon name="arrow-back" size={24} color={COLORS.white} />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.rightButton}>
                    <Icon name="arrow-forward" size={24} color={COLORS.white} />
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity style={styles.downButton}>
                    <Icon name="arrow-downward" size={24} color={COLORS.white} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <Text style={styles.automaticText}>Automatic mode enabled</Text> // Show this in Automatic mode
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Ensure the image stays on top
    backgroundColor: COLORS.black,
  },
  topImage: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
    marginTop :-50
  },
  contentContainer: {
    flex: 1,
    marginTop: 300, // Adjust based on image height to ensure the content starts below the image
    paddingHorizontal: 2,
    zIndex: 0, // Keep content below the image
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
    justifyContent: 'space-between',
    width: '100%',
  },
  panel: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    padding: 25,
  },
  panelHeading: {
    fontSize: 24,
    color: 'purple',
    marginBottom: 45,
    fontWeight: 'bold',
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
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: -25,
  },
  leftButton: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  rightButton: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  downButton: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: -25,
  },
  automaticText: {
    fontSize: 18,
    color: 'purple',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default LiveScreen;
