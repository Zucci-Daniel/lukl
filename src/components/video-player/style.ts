import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loader: {
    position: 'absolute',
    left: '43%',
    zIndex: 10,
    top: '40%',
  },
  play: {
    opacity: 0.66,
    position: 'absolute',
    left: '43%',
    top: '40%',
    zIndex: 5,
  },
  videoWrapper: {
    width: '100%',
    height: undefined,
  },
});
