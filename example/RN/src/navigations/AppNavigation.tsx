import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {getScreenOptions} from 'utils';
import {IconCom, FooterCom} from 'native-solid';
import Icon from 'assets/icons';

import {Home} from 'screens/home';
import {MoreList} from 'screens/more';

const Stack: any = createStackNavigator<Navigation.AppNavigationList>();
const Tab: any = createBottomTabNavigator<Navigation.BottomTabNavigationList>();

const AppScreens = {
  Home,
  MoreList,
};

const AppStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PreFace">
      <Stack.Group screenOptions={getScreenOptions}>
        {Object.entries({
          ...AppScreens,
        }).map(([name, component]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={(props: any) => ({
              title: name,
            })}
          />
        ))}
      </Stack.Group>
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({route}: any) => ({
        tabBarIcon: ({color, size}: any) => {
          const icons: any = {
            HomeTab: 'home',
            Settings: 'account',
          };

          return (
            <IconCom
              name={icons[route.name]}
              type="MaterialCommunityIcons"
              color={color}
              iconSize={size}
            />
          );
        },
        headerShown: false,
      })}
      tabBar={(props: any) => <FooterCom {...props} />}>
      <Tab.Screen
        name="HomeTab"
        component={AppStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: <Icon.HomeSvg />,
          tabBarActiveIcon: <Icon.HomeSvg />,
        }}
        listeners={({navigation}: any) => ({
          tabPress: (e: any) => {
            e.preventDefault();
            navigation.navigate('HomeTab', {screen: 'Home'});
          },
        })}
      />
      <Tab.Screen
        name="WalletTab"
        component={AppStackNavigator}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: <Icon.HomeSvg />,
          tabBarActiveIcon: <Icon.HomeSvg />,
        }}
        listeners={({navigation}: any) => ({
          tabPress: (e: any) => {
            e.preventDefault();
            navigation.navigate('WalletTab', {screen: 'WalletList'});
          },
        })}
      />
      <Tab.Screen
        name="QRTab"
        component={AppStackNavigator}
        options={{
          tabBarLabel: 'QR',
          tabBarIcon: (
            <IconCom
              name="qrcode-scan"
              type="MaterialCommunityIcons"
              color="white"
              iconSize="xl"
            />
          ),
          tabBarActiveIcon: (
            <IconCom
              name="qrcode-scan"
              type="MaterialCommunityIcons"
              color="white"
              iconSize="xl"
            />
          ),
          tabBarVisible: false,
        }}
        listeners={({navigation}: any) => ({
          tabPress: (e: any) => {
            e.preventDefault();
            navigation.navigate('QRTab', {
              screen: 'QRList',
              params: {screen: 'Scan'},
            });
          },
        })}
      />
      <Tab.Screen
        name="RewardsTab"
        component={AppStackNavigator}
        options={{
          tabBarLabel: 'Rewards',
          tabBarIcon: <Icon.HomeSvg />,
          tabBarActiveIcon: <Icon.HomeSvg />,
        }}
        listeners={({navigation}: any) => ({
          tabPress: (e: any) => {
            e.preventDefault();
            navigation.navigate('RewardsTab', {
              screen: 'RewardHome',
            });
          },
        })}
      />
      <Tab.Screen
        name="MoreTab"
        component={AppStackNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: <Icon.HomeSvg width={23} height={23} />,
          tabBarActiveIcon: <Icon.HomeSvg width={23} height={23} />,
        }}
        listeners={({navigation}: any) => ({
          tabPress: (e: any) => {
            e.preventDefault();
            navigation.navigate('MoreTab', {screen: 'MoreList'});
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default () => BottomTabNavigator();
