import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Job {
  id: string;
  name: string;
  isSelected: boolean;
}

const DownloadMasterWBS: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Downloaded'>('All');
  const [searchText, setSearchText] = useState<string>('');
  const [currentJob, setCurrentJob] = useState<Job>({
    id: 'LE1f0880',
    name: 'Pune ESR and GSR',
    isSelected: true,
  });
  const [otherJobs, setOtherJobs] = useState<Job[]>([
    {
      id: 'LE1f0880',
      name: 'Pune ESR and GSR',
      isSelected: false,
    },
    {
      id: 'LE1f7465',
      name: 'Moga WSS',
      isSelected: false,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Download Master WBS</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'All' && styles.activeTab]}
          onPress={() => setActiveTab('All')}>
          <Text style={styles.tabText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Downloaded' && styles.activeTab]}
          onPress={() => setActiveTab('Downloaded')}>
          <Text style={styles.tabText}>Downloaded</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Current Job Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Current Job</Text>
        <TouchableOpacity style={styles.jobItem}>
          <Icon
            name={currentJob.isSelected ? 'checkbox' : 'square-outline'}
            size={24}
            color="#007AFF"
          />
          <Text style={styles.jobText}>{currentJob.name}</Text>
        </TouchableOpacity>
      </View>

      {/* Other Jobs Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other Jobs</Text>
        {otherJobs.map(job => (
          <TouchableOpacity key={job.id} style={styles.jobItem}>
            <Icon
              name={job.isSelected ? 'checkbox' : 'square-outline'}
              size={24}
              color="#007AFF"
            />
            <Text style={styles.jobText}>{job.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.makeCurrentButton}>
          <Text style={styles.makeCurrentButtonText}>Make Current Job</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  tab: {
    marginRight: 24,
    paddingBottom: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    padding: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  jobItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  jobText: {
    fontSize: 16,
    marginLeft: 12,
  },
  bottomButtons: {
    flexDirection: 'row',
    padding: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  makeCurrentButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
    marginRight: 8,
  },
  makeCurrentButtonText: {
    color: '#007AFF',
    textAlign: 'center',
    fontSize: 16,
  },
  deleteButton: {
    flex: 1,
    padding: 12,
    backgroundColor: '#666',
    borderRadius: 8,
    marginLeft: 8,
  },
  deleteButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default DownloadMasterWBS;
