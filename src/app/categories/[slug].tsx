// Import React and React Native components 
import { StyleSheet, Text, View } from 'react-native';

// Create the main App component
const Category = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category</Text> 
    </View>
  );
};

// Define styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    color: '#333', 
  },
});

// Export the App component as the default export
export default Category;
