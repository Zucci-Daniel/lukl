import * as React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Following from './Following';
import Fyp from './FYP';
import RouteContext from '../../contexts/routecontext';
import {styles} from './styles';

// Define the renderScene function for the TabView
const renderScene = SceneMap({
  following: () => <Following />,
  fyp: () => <Fyp jumpTo={''} route={null} />,
});

export default function DashboardWrapper() {
  const layout = useWindowDimensions();
  const {setToggle} = React.useContext(RouteContext);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'following', title: 'Following'},
    {key: 'fyp', title: 'For You'},
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      getLabelText={({route}) => (
        <Text style={{color: 'white'}}>{route.title}</Text>
      )}
      indicatorStyle={styles.tabBarView}
      style={styles.barStyles}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      onSwipeEnd={() => setToggle((prev: boolean) => !prev)}
      lazy
      renderLazyPlaceholder={() => (
        <View style={{backgroundColor: 'black', flex: 1}} />
      )}
    />
  );
}
