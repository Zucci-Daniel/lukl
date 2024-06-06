import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '110%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingRight: '10%',
    position: 'relative',
  },
  menubox: {
    width: '100%',
    height: 80,
    alignItems: 'center',
  },
  menutxt: {
    fontSize: 11,
    color: 'white',
    textAlign: 'center',
  },
  menutxtActive: {
    fontSize: 10,
    color: '#C13584',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  addbox: {
    width: 70,
    height: 70,
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 7,
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
