import {StyleSheet} from 'react-native';
import {fs, wp} from '../../config';

export const styles = StyleSheet.create({
  containerWrapper: {width: wp(30), height: wp(30), borderRadius: wp(20)},
  container: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: wp(100),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: wp(30),
    top: wp(20),
    paddingHorizontal: '2.5%',
  },
  tabrow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: fs(18),
    color: 'white',
    paddingHorizontal: wp(5),
    fontWeight: 'bold',
  },
});
