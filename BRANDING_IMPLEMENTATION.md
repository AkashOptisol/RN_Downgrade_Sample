# Branding Configuration Implementation Guide

## Overview

This document provides a comprehensive guide to the multi-brand configuration implementation in the React Native application. The system supports multiple brands (Vestel and IM) with their unique configurations, assets, and build variants.

## Table of Contents

1. [Architecture](#architecture)
2. [Configuration Structure](#configuration-structure)
3. [Brand-Specific Assets](#brand-specific-assets)
4. [Build Configuration](#build-configuration)
5. [Usage in Components](#usage-in-components)
6. [Platform-Specific Implementation](#platform-specific-implementation)

## Architecture

### Configuration Management

The application uses a centralized configuration system located in `src/config/`:

```
src/config/
├── index.js     # Configuration loader
├── vestel.js    # Vestel brand configuration
└── im.js        # IM brand configuration
```

### Configuration Loader

The configuration loader (`index.js`) dynamically selects the appropriate brand configuration based on the `BRAND` environment variable:

```javascript
const BRAND = 'im'; // Can be set through environment variables

export const getConfig = () => {
  switch (BRAND) {
    case 'vestel':
      return vestelConfig;
    case 'im':
      return imConfig;
    default:
      return vestelConfig;
  }
};
```

## Configuration Structure

### Brand Configuration Format

Each brand configuration file follows this structure:

```javascript
export const brandConfig = {
  theme: {
    primaryColor: '#COLOR_CODE',
    secondaryColor: '#COLOR_CODE',
    fontFamily: 'BRAND_FONT',
  },
  appConfig: {
    appName: 'BRAND_NAME',
    bundleId: 'com.brand.app',
    applicationId: 'com.brand.app',
  },
  assets: {
    logo: require('../assets/brand-logo.png'),
  },
  api: {
    baseUrl: 'https://api.brand.com',
  },
};
```

### Available Configurations

#### Vestel Configuration

- Primary Color: #FF0000 (Red)
- Secondary Color: #FFFFFF (White)
- Font Family: VestelFont
- App Name: Vestel App
- Bundle ID: com.vestel.app

#### IM Configuration

- Primary Color: #0000FF (Blue)
- Secondary Color: #FFFFFF (White)
- Font Family: IMFont
- App Name: IM App
- Bundle ID: com.im.app

## Brand-Specific Assets

### Asset Organization

Brand-specific assets are stored in separate directories:

```
src/assets/
├── vestel-logo.png
└── im-logo.png
```

### Platform-Specific Assets

#### Android

- Brand-specific resources are stored in:
  ```
  android/app/src/vestel/res/
  android/app/src/im/res/
  ```
- Each brand has its own:
  - App icon (`ic_launcher.xml`)
  - Colors (`colors.xml`)
  - Strings (`strings.xml`)

## Build Configuration

### Android Configuration

The Android build configuration (`android/app/build.gradle`) supports multiple flavors:

```gradle
flavorDimensions "brand"
productFlavors {
    vestel {
        dimension "brand"
        applicationId "com.vestel.app"
    }
    im {
        dimension "brand"
        applicationId "com.im.app"
    }
}
```

### Build Commands

Available build commands for different brands:

```bash
# Android
npm run android:vestel    # Run Vestel debug build
npm run android:im        # Run IM debug build
npm run build:android:vestel  # Build Vestel release
npm run build:android:im      # Build IM release

# iOS
npm run ios:vestel        # Run Vestel debug build
npm run ios:im           # Run IM debug build
npm run build:ios:vestel    # Build Vestel release
npm run build:ios:im        # Build IM release
```

## Usage in Components

### Accessing Brand Configuration

Components can access brand configuration using the imported config:

```javascript
import {config} from '../config';

const MyComponent = () => {
  return (
    <View style={{backgroundColor: config.theme.primaryColor}}>
      <Image source={config.assets.logo} />
      <Text>{config.appConfig.appName}</Text>
    </View>
  );
};
```

### Example Implementation

The `BrandDemo` component demonstrates brand configuration usage:

```javascript
const BrandDemo = () => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: config.theme.secondaryColor},
      ]}>
      <Image source={config.assets.logo} style={styles.logo} />
      <Text style={[styles.appName, {color: config.theme.primaryColor}]}>
        {config.appConfig.appName}
      </Text>
    </View>
  );
};
```

## Platform-Specific Implementation

### Android

- Separate resource directories for each brand
- Brand-specific application IDs
- Custom launcher icons and colors
- Brand-specific manifest files

### iOS

- Brand-specific schemes
- Separate bundle identifiers
- Brand-specific assets and configurations

## Best Practices

1. **Configuration Management**

   - Keep brand-specific configurations in separate files
   - Use environment variables for brand selection
   - Maintain consistent configuration structure across brands

2. **Asset Management**

   - Store brand-specific assets in dedicated directories
   - Use consistent naming conventions
   - Optimize assets for different platforms

3. **Build Process**

   - Use separate build variants for each brand
   - Maintain consistent versioning across brands
   - Document build commands and procedures

4. **Code Organization**
   - Keep brand-specific code isolated
   - Use configuration injection for brand-specific values
   - Maintain platform-specific implementations separately

## Troubleshooting

### Common Issues

1. **Build Failures**

   - Verify brand-specific configurations
   - Check resource file paths
   - Ensure correct application IDs

2. **Asset Loading**

   - Verify asset paths in configuration
   - Check asset file existence
   - Validate asset formats

3. **Configuration Issues**
   - Verify BRAND environment variable
   - Check configuration file imports
   - Validate configuration structure

### Support

For additional support or questions regarding the branding implementation, please refer to the project documentation or contact the development team.
