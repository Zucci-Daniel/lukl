import {StyleSheet} from 'react-native';
import {wp} from '../../config';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    right: '2.5%',
    top: '35%',
    paddingHorizontal: wp(5),
    paddingVertical: wp(15),
    borderRadius: wp(50),
    alignItems: 'center',
  },
  transparent: {
    opacity: 0.8,
  },
  boxWithText: {
    marginTop: wp(10),
    height: wp(46),
    width: wp(46),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    marginTop: wp(15),
    height: wp(40),
    width: wp(46),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'carbona-reg',
    fontSize: 14,
    lineHeight: 15,
    width: '100%',
    textAlign: 'center',
    marginTop: 1,
  },
});
