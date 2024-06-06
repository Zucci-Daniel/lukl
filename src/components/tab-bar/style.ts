import {StyleSheet} from 'react-native';
import {fs, wp} from '../../config';

export const styles = StyleSheet.create({
  container: {
    width: '110%',
    height: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp(10),
    justifyContent: 'space-between',
    paddingRight: '10%',
    position: 'relative',
  },
  menubox: {
    width: '100%',
    height: wp(80),
    alignItems: 'center',
  },
  menutxt: {
    fontSize: fs(11),
    color: 'white',
    textAlign: 'center',
  },
  menutxtActive: {
    fontSize: fs(10),
    color: '#C13584',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  addbox: {
    width: wp(70),
    height: wp(70),
    marginBottom: wp(20),
    borderRadius: wp(50),
    borderWidth: fs(7),
    borderColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  tabButton: {
    width: '18%',
  },
});
