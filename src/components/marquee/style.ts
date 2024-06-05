import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: 20,
    justifyContent: 'center',
  },
  marqueeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
  },
  text: {
    fontSize: 16,
    lineHeight: 17,
    color: 'white',
  },
});
