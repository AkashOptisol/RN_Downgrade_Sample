import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
// import {Ionicons} from '@expo/vector-icons';

const DailyProgressEntryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          {/* <Ionicons name="chevron-back" size={24} color="white" /> */}
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Daily Progress Entry</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>WBS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>Upcoming</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        {/* <Ionicons name="information-circle-outline" size={20} color="#000" /> */}
        <Text style={styles.infoText}>LE23M219 - Sahibganj- RWSS</Text>
      </View>

      <View style={styles.searchContainer}>
        {/* <Ionicons name="search-outline" size={18} color="#aaa" /> */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#aaa"
        />
      </View>

      <ScrollView>
        {[
          'Others (Controlled)',
          'MS Pipeline Work',
          'Pipeline Allied Works',
          'Boundary Wall & Approach Road',
          'Consumables',
          'Mobilisation',
          'Survey, Soil Investigation & Design',
          'Intake',
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.listItem}>
            <Text style={styles.listItemText}>{item}</Text>
            {/* <Ionicons name="chevron-forward" size={24} color="#000" /> */}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#001B4F',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  activeTab: {
    borderRadius: 8,
    backgroundColor: '#001B4F',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inactiveTab: {
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  inactiveTabText: {
    color: '#000',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#001B4F',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    marginLeft: 8,
    fontSize: 16,
    flex: 1,
    color: '#000',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  listItemText: {
    fontSize: 16,
  },
});

export default DailyProgressEntryScreen;
