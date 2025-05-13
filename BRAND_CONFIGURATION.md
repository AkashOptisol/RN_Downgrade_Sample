# Multi-Brand React Native Application Configuration

This document outlines how to maintain multiple brand configurations (Vestel and IM) in a single React Native repository and generate different builds for each brand.

## Table of Contents

1. [Branch Strategy](#branch-strategy)
2. [Configuration Management](#configuration-management)
3. [Build Generation](#build-generation)
4. [Development Workflow](#development-workflow)

## Branch Strategy

### Branch Structure

```
main (or develop)
├── vestel-release (contains Vestel-specific configs)
└── im-release (contains IM-specific configs)
```

### Branch Management

- `main`/`develop`: Contains core application code without brand-specific configurations
- `vestel-release`: Contains Vestel-specific configurations
- `im-release`: Contains IM-specific configurations
- Feature branches: Created from `main`/`develop`

## Configuration Management

### Configuration Structure

```
/src
  /config
    /vestel.js    # Vestel brand configuration
    /im.js        # IM brand configuration
    /index.js     # Configuration loader
```

### Configuration Files

#### 1. Vestel Configuration (`src/config/vestel.js`)

```javascript
export const vestelConfig = {
  theme: {
    primaryColor: '#FF0000',
    secondaryColor: '#FFFFFF',
  },
  appConfig: {
    appName: 'Vestel App',
    bundleId: 'com.vestel.app',
    applicationId: 'com.vestel.app',
  },
  assets: {
    logo: require('../assets/vestel-logo.png'),
  },
};
```

#### 2. IM Configuration (`src/config/im.js`)

```javascript
export const imConfig = {
  theme: {
    primaryColor: '#0000FF',
    secondaryColor: '#FFFFFF',
  },
  appConfig: {
    appName: 'IM App',
    bundleId: 'com.im.app',
    applicationId: 'com.im.app',
  },
  assets: {
    logo: require('../assets/im-logo.png'),
  },
};
```

#### 3. Configuration Loader (`src/config/index.js`)

```javascript
import {vestelConfig} from './vestel';
import {imConfig} from './im';

const BRAND = process.env.BRAND || 'vestel';

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

export const config = getConfig();
```

## Build Generation

### Available Scripts

```json
{
  "scripts": {
    "android:vestel": "react-native run-android --variant=vestelDebug",
    "android:im": "react-native run-android --variant=imDebug",
    "ios:vestel": "react-native run-ios --scheme Vestel",
    "ios:im": "react-native run-ios --scheme IM",
    "build:android:vestel": "cd android && ./gradlew assembleVestelRelease",
    "build:android:im": "cd android && ./gradlew assembleImRelease",
    "build:ios:vestel": "cd ios && xcodebuild -workspace RN_Downgrade_Sample.xcworkspace -scheme Vestel -configuration Release -sdk iphoneos",
    "build:ios:im": "cd ios && xcodebuild -workspace RN_Downgrade_Sample.xcworkspace -scheme IM -configuration Release -sdk iphoneos"
  }
}
```

### Building for Different Brands

#### Android Builds

1. **Vestel Brand**

   ```bash
   # Debug build
   npm run android:vestel

   # Release build
   npm run build:android:vestel
   ```

2. **IM Brand**

   ```bash
   # Debug build
   npm run android:im

   # Release build
   npm run build:android:im
   ```

#### iOS Builds

1. **Vestel Brand**

   ```bash
   # Debug build
   npm run ios:vestel

   # Release build
   npm run build:ios:vestel
   ```

2. **IM Brand**

   ```bash
   # Debug build
   npm run ios:im

   # Release build
   npm run build:ios:im
   ```

### Build Output Locations

#### Android

- Debug APKs:
  - Vestel: `android/app/build/outputs/apk/vestel/debug/`
  - IM: `android/app/build/outputs/apk/im/debug/`
- Release APKs:
  - Vestel: `android/app/build/outputs/apk/vestel/release/`
  - IM: `android/app/build/outputs/apk/im/release/`

#### iOS

- Debug builds: DerivedData directory
- Release builds: Archive location specified in Xcode

## Development Workflow

### Feature Development

1. Create feature branch from main:

   ```bash
   git checkout -b feature/new-feature main
   ```

2. Implement feature without brand-specific configurations

3. Merge to brand-specific branches:

   ```bash
   # Merge to vestel-release
   git checkout vestel-release
   git merge feature/new-feature

   # Merge to im-release
   git checkout im-release
   git merge feature/new-feature
   ```

### Important Notes

1. **Android Specific**

   - Different keystores required for release builds
   - Different package names allow simultaneous installation
   - Brand-specific configurations in `android/app/build.gradle`

2. **iOS Specific**

   - Different provisioning profiles required
   - Different bundle identifiers required
   - Brand-specific configurations in Xcode schemes

3. **Configuration Usage**

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

## Troubleshooting

1. **Build Issues**

   - Ensure correct environment variables are set
   - Verify keystore/provisioning profile configurations
   - Check Xcode scheme settings

2. **Configuration Issues**

   - Verify BRAND environment variable
   - Check configuration file imports
   - Ensure asset paths are correct

3. **Merge Conflicts**
   - Resolve conflicts in brand-specific configurations
   - Keep core functionality in main branch
   - Maintain separate configurations in brand branches
