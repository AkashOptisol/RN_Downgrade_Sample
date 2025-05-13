import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons'; // Assuming using Expo

interface Tag {
  id: string;
  label: string;
  isSelected: boolean;
}

const SearchTags: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [tags, setTags] = useState<Tag[]>([
    {id: '1', label: 'Flammable', isSelected: false},
    {id: '2', label: 'HAP', isSelected: false},
    {id: '3', label: 'Corrosive', isSelected: false},
    {id: '4', label: 'Pressurized', isSelected: false},
    {id: '5', label: 'VOC', isSelected: false},
  ]);

  const toggleTag = (id: string) => {
    setTags(
      tags.map(tag =>
        tag.id === id ? {...tag, isSelected: !tag.isSelected} : tag,
      ),
    );
  };

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        {/* <Ionicons
          name="search"
          size={20}
          color="#666"
          style={styles.searchIcon}
        /> */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search Tags"
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#999"
        />
      </View>

      {/* Tags List */}
      <View style={styles.tagsContainer}>
        {tags.map(tag => (
          <TouchableOpacity
            key={tag.id}
            style={styles.tagRow}
            onPress={() => toggleTag(tag.id)}
            activeOpacity={0.7}>
            <View style={styles.checkboxContainer}>
              <View
                style={[
                  styles.checkbox,
                  tag.isSelected && styles.checkboxSelected,
                ]}>
                {tag.isSelected && (
                  <Ionicons name="checkmark" size={16} color="#FFF" />
                )}
              </View>
              <Text style={styles.tagLabel}>{tag.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 44,
    fontSize: 16,
    color: '#333',
  },
  tagsContainer: {
    gap: 12,
  },
  tagRow: {
    paddingVertical: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#059669',
    borderColor: '#059669',
  },
  tagLabel: {
    fontSize: 16,
    color: '#333',
  },
});

export default SearchTags;
