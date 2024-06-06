import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: windowHeight,
  },
  more: {
    position: 'absolute',
    right: '2.5%',
    zIndex: 6,
    marginTop: '2.5%',
  },
  tabBarView: {
    backgroundColor: '#ffffff00',
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff00',
  },
  barStyles: {
    backgroundColor: 'black',
    display: 'none',
    zIndex: 10,
    top: 70,
    left: 0,
  },
});
