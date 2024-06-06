/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import Navigator from './src/navigation';
import {ToastProvider} from 'react-native-toast-notifications';
import {RouteContextProvider} from './src/contexts/routecontext';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RouteContextProvider>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView edges={['top']} style={styles.backgroundStyle}>
            <ToastProvider
              placement="top"
              renderType={{
                my_success: toast => {
                  const message = toast.data.message;
                  const title = toast.data.title;
                  return (
                    <View style={styles.toastContainer}>
                      <View style={styles.toastIconContainer}>
                        <Image
                          source={{uri: 'https://picsum.photos/400'}}
                          width={20}
                          height={20}
                          style={styles.toastIcon}
                        />
                      </View>
                      <View style={styles.toastTextContainer}>
                        <Text style={styles.toastTitle}>{title}</Text>
                        <Text style={styles.toastMessage}>{message}</Text>
                      </View>
                    </View>
                  );
                },
              }}>
              <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={styles.backgroundStyle.backgroundColor}
              />
              <Navigator />
            </ToastProvider>
          </SafeAreaView>
        </QueryClientProvider>
      </RouteContextProvider>
    </GestureHandlerRootView>
  );
}

export default App;

const createStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    backgroundStyle: {
      flex: 1,
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    },
    toastContainer: {
      padding: 15,
      backgroundColor: '#E6F6EA',
      borderWidth: 1,
      borderColor: '#99D9A9',
      width: '90%',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    toastIconContainer: {
      width: 35,
      height: 35,
      backgroundColor: '#C1F1CD',
      borderRadius: 20,
      marginRight: 5,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    toastIcon: {
      borderRadius: 10,
    },
    toastTextContainer: {
      width: '80%',
    },
    toastTitle: {
      color: '#833AB4',
      fontWeight: 'bold',
    },
    toastMessage: {
      color: 'purple',
    },
  });
