import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ProjectCardProps {
  route: string;
  man: number;
  quantity: number;
  uom: string;
  date: string;
  status: string;
  projectName: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  route,
  man,
  quantity,
  uom,
  date,
  status,
  projectName,
}) => {
  return (
    <View style={styles.card}>
      {/* Route Path */}
      <View style={styles.routeContainer}>
        <Text style={styles.routeText}>
          {route.split('→').map((item, index, array) => (
            <React.Fragment key={index}>
              <Text style={styles.routeItem}>{item.trim()}</Text>
              {index < array.length - 1 && (
                <Text style={styles.arrow}> → </Text>
              )}
            </React.Fragment>
          ))}
        </Text>
      </View>

      {/* Details Grid */}
      <View style={styles.detailsGrid}>
        <View style={styles.gridItem}>
          <Text style={styles.label}>Man</Text>
          <Text style={styles.value}>{man}</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.label}>QTY</Text>
          <Text style={styles.value}>{quantity}</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.label}>UOM</Text>
          <Text style={styles.value}>{uom}</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>{date}</Text>
        </View>
      </View>

      {/* Status Section */}
      <View style={styles.statusSection}>
        <View style={styles.projectNameContainer}>
          <Text style={styles.label}>Status</Text>
          <Text style={styles.projectName}>{projectName}</Text>
        </View>
        <View
          style={[
            styles.statusBadge,
            status.toLowerCase() === 'approved' && styles.approvedBadge,
          ]}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  routeContainer: {
    marginBottom: 12,
  },
  routeText: {
    fontSize: 14,
    color: '#333',
  },
  routeItem: {
    color: '#333',
  },
  arrow: {
    color: '#666',
  },
  detailsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 12,
  },
  gridItem: {
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  statusSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectNameContainer: {
    flex: 1,
  },
  projectName: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#F3F4F6',
  },
  approvedBadge: {
    backgroundColor: '#E6F4EA',
  },
  statusText: {
    fontSize: 12,
    color: '#059669',
    fontWeight: '500',
  },
});

export default ProjectCard;
