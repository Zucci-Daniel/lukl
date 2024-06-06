import {StyleSheet} from 'react-native';
import {fs, wp} from '../../config';

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: wp(20),
    justifyContent: 'center',
  },
  marqueeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
  },
  text: {
    fontSize: fs(16),
    lineHeight: 17,
    color: 'white',
  },
});
