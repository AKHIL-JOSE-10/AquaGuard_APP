import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';  // Import navigation hook
import COLORS from '../../assets/consts/color.js';

const Home = () => {
  const navigation = useNavigation(); // Access the navigation prop

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      
      <ScrollView contentContainerStyle={{flexGrow: 1}}>

        <ImageBackground
          style={{height: 300}}
          source={require('../../assets/robot.jpg')}>
          <View style={style.header}>
            <Icon name="arrow-back-ios" size={28} color={COLORS.white} />
            <Icon name="more-vert" size={28} color={COLORS.white} />
          </View>
        </ImageBackground>

        <View style={style.detailsContainer}>
          <View style={style.iconContainer}>
            <Icon name="favorite" color={COLORS.red} size={30} />
          </View>

          <View style={{flexDirection: 'row', marginBottom: 20, justifyContent:'center'}}>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 30,
                fontWeight: 'bold',
                color: COLORS.primary,
              }}>
              Welcome
            </Text>
          </View>

          <Text style={style.aboutTitle}>About  Project</Text>
          <Text style={style.aboutDescription}>
            Our River Cleaning Robot is designed to remove waste from rivers and water bodies, ensuring cleaner environments.
            Equipped with advanced sensors, it monitors water quality by measuring parameters like pH levels and overall cleanliness.
            This project aims to promote environmental sustainability and maintain the health of our waterways.
          </Text>
        </View>

        {/* Update TouchableOpacity for navigation */}
        <View style={style.footer}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.white}}>
              Go to
            </Text>
          </View>
          
          {/* TouchableOpacity for navigation */}
          <TouchableOpacity 
            style={style.bookNowBtn}
            onPress={() => navigation.navigate('LiveScreen')} // Navigate to the Profile screen
          >
            <Text style={{color: COLORS.primary, fontSize: 16, fontWeight: 'bold'}}>
              Control panel
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  bookNowBtn: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  aboutTitle: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.primary,
  },
  aboutDescription: {
    marginTop: 20,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.dark,
  },
});

export {Home};
