import {Dimensions, StyleSheet, Platform} from 'react-native';

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

export const followingStyles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    ...Platform.select({
      ios: {
        height: windowHeight,
      },
      android: {
        height: windowHeight,
      },
    }),
  },
  communityBox: {
    position: 'absolute',
    right: '2.5%',
    zIndex: 6,
    top: '2.5%',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  people: {
    width: 25,
    height: 25,
  },
  loader: {
    position: 'absolute',
    top: '40%',
    left: '45%',
  },
});

export const fypStyles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    ...Platform.select({
      ios: {
        height: windowHeight,
      },
      android: {
        height: windowHeight,
      },
    }),
  },
  communityBox: {
    position: 'absolute',
    right: '2.5%',
    zIndex: 6,
    top: '2.5%',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  people: {
    width: 25,
    height: 25,
  },
  loader: {
    position: 'absolute',
    top: '40%',
    left: '45%',
  },
});
