import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const DayPlan: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchText, setSearchText] = useState('');

  const tabs = ['All', 'Downloaded'];
  const currentJob = {
    id: 'LE1f0880',
    name: 'Pune ESR and GSR',
    isChecked: true,
  };
  const otherJobs = [
    {id: 'LE1f0880', name: 'Pune ESR and GSR', isChecked: false},
    {id: 'LE1f7465', name: 'Moga WSS', isChecked: false},
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle="dark-content" />
      <View style={{padding: 16}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
          }}>
          <TouchableOpacity>
            {/* <Ionicons name="arrow-back" size={24} color="black" /> */}
          </TouchableOpacity>
          <Text style={{marginLeft: 16, fontSize: 18, fontWeight: 'bold'}}>
            Download Master WBS
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 16}}>
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab}
              style={{
                flex: 1,
                paddingVertical: 8,
                borderBottomWidth: activeTab === tab ? 2 : 0,
                borderBottomColor:
                  activeTab === tab ? '#000000' : 'transparent',
              }}
              onPress={() => setActiveTab(tab)}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: activeTab === tab ? 'bold' : 'normal',
                }}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#E0E0E0',
            borderRadius: 8,
            padding: 8,
            marginBottom: 16,
          }}>
          {/* <Ionicons name="search" size={20} color="#A0A0A0" /> */}
          <TextInput
            style={{flex: 1, marginLeft: 8}}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <ScrollView>
          <View style={{marginBottom: 16}}>
            <Text style={{fontWeight: 'bold', marginBottom: 8}}>
              Current Job
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity style={{marginRight: 8}}>
                {/* <Ionicons
                  name={currentJob.isChecked ? 'checkbox' : 'square-outline'}
                  size={24}
                  color="#000000"
                /> */}
              </TouchableOpacity>
              <Text>
                {currentJob.id} - {currentJob.name}
              </Text>
            </View>
          </View>

          <View>
            <Text style={{fontWeight: 'bold', marginBottom: 8}}>
              Other Jobs
            </Text>
            {otherJobs.map(job => (
              <View
                key={job.id}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                <TouchableOpacity style={{marginRight: 8}}>
                  {/* <Ionicons
                    name={job.isChecked ? 'checkbox' : 'square-outline'}
                    size={24}
                    color="#000000"
                  /> */}
                </TouchableOpacity>
                <Text>
                  {job.id} - {job.name}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={{flexDirection: 'row', padding: 16}}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            borderColor: '#000000',
            padding: 12,
            borderRadius: 8,
            marginRight: 8,
          }}>
          <Text style={{textAlign: 'center'}}>Make Current Job</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#808080',
            padding: 12,
            borderRadius: 8,
            marginLeft: 8,
          }}>
          <Text style={{color: '#FFFFFF', textAlign: 'center'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DayPlan;
