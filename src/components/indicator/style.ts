import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerWrapper: {width: 30, height: 30, borderRadius: 20},
  container: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    top: 20,
    paddingHorizontal: '2.5%',
  },
  tabrow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    paddingHorizontal: 5,
    fontWeight: 'bold',
  },
});
