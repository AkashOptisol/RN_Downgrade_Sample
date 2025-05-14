import React from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import {config} from '../config';

const BrandDemo = () => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: config.theme.secondaryColor},
      ]}>
      {/* Brand Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={config.assets.logo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* App Name */}
      <Text style={[styles.appName, {color: config.theme.primaryColor}]}>
        {config.appConfig.appName}
      </Text>

      {/* Bundle/Application ID */}
      <View style={styles.idContainer}>
        <Text style={styles.idLabel}>Bundle ID:</Text>
        <Text style={styles.idValue}>{config.appConfig.bundleId}</Text>
      </View>

      {/* Platform-specific ID */}
      <View style={styles.idContainer}>
        <Text style={styles.idLabel}>
          {Platform.OS === 'ios' ? 'Application ID:' : 'Package Name:'}
        </Text>
        <Text style={styles.idValue}>{config.appConfig.applicationId}</Text>
      </View>

      {/* Current Brand */}
      <View style={styles.brandContainer}>
        <Text style={styles.brandText}>
          Current Brand: {config.appConfig.appName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: 200,
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  idContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  idLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  idValue: {
    fontSize: 14,
    color: '#333',
  },
  brandContainer: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  brandText: {
    fontSize: 16,
    color: '#333',
  },
});

export default BrandDemo;
