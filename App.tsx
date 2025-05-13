/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import Pdf from 'react-native-pdf';
import RNFS from 'react-native-fs';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ErrorBoundary from './ErrorBoundary';
import DailyProgressEntryScreen from './src/ChatBotScreen/converted_code';
import GetLocation from './src/GetLocation/getLocation';
import ProjectCard from './src/designtocode/cursor_tool_code';
import DownloadMasterWBS from './src/designtocode/cursor_img_code';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const pdfToImageLinks = [
    'https://d36hblf01wyurt.cloudfront.net/373-siteplan-0f72664f-7c89-49a6-b7c5-2ae3573c4f55_1.jpg',
    'https://d36hblf01wyurt.cloudfront.net/373-siteplan-0f72664f-7c89-49a6-b7c5-2ae3573c4f55_2.jpg',
    'https://d36hblf01wyurt.cloudfront.net/373-siteplan-0f72664f-7c89-49a6-b7c5-2ae3573c4f55_3.jpg',
    'https://d36hblf01wyurt.cloudfront.net/373-siteplan-0f72664f-7c89-49a6-b7c5-2ae3573c4f55_4.jpg',
  ];
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <View style={{flex: 1, padding: 16}}>
          <DownloadMasterWBS />
          {/* <ProjectCard
            route="Chittorgarh → package1 → OHSR → 100KL → HM → Jawada → Plinth Protection"
            man={1}
            quantity={5}
            uom="m3"
            date="11/01/2025"
            status="Approved"
            projectName="ESR - 100KL - 18M - Jawada"
          /> */}
        </View>
        {/* <GetLocation /> */}
        {/* <FlatList
          data={pdfToImageLinks}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: item}} />
            </View>
          )}
        /> */}
      </View>
    </SafeAreaView>
  );
}

const PDF_Render = () => {
  const [pdfPath, setPdfPath] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const pdfUrl =
    'https://d36hblf01wyurt.cloudfront.net/373-siteplan-0f72664f-7c89-49a6-b7c5-2ae3573c4f55_1.jpg';
  const createPdfFromImage = async () => {
    setIsLoading(true);

    try {
      // Generate the PDF from the image URL
      const pdfOptions = {
        html: `<html>
                <body style="margin:0; padding:0;">
                  <img src="${pdfUrl}" style="width:100%; height:auto;" />
                </body>
              </html>`,
        fileName: 'image-pdf',
        directory: 'Documents',
      };

      const pdf = await RNHTMLtoPDF.convert(pdfOptions);
      console.log('PDF created at:', pdf.filePath);

      // Set the generated PDF file path
      setPdfPath(pdf.filePath);
    } catch (error) {
      console.error('Error creating PDF:', error);
      Alert.alert('Error', 'An error occurred while generating the PDF.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    createPdfFromImage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{color: Colors.black}}>Hello PDF ....</Text>
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Generating PDF...</Text>
        </View>
      )}

      {!isLoading && pdfPath && (
        <Pdf
          trustAllCerts={false}
          source={{
            uri: pdfPath,
            cache: true, // Caches the PDF locally to reduce memory usage
          }}
          page={1}
          maxScale={1.5} // Prevent excessive zooming
          minScale={1.0} // Set a minimum zoom level
          onLoadComplete={(numberOfPages, filePath) => {
            setIsLoading(false);
            console.log(
              `Successfully loaded PDF. Total pages: ${numberOfPages}`,
            );
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Page changed: ${page} / ${numberOfPages}`);
          }}
          onError={error => {
            console.error('Error while loading PDF:', error);
            Alert.alert('Error', 'Failed to load the PDF. Please try again.');
          }}
          enableAntialiasing={true} // Improves rendering quality
          fitPolicy={2} // Fits the PDF to the width of the screen
          style={styles.pdf}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#eeee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  loader: {
    position: 'absolute',
    zIndex: 1,
  },
  retryButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  retryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imageContainer: {
    width: Dimensions.get('window').width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
  },
});

export default App;
