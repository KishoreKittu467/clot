import React from 'react';
import {Image} from 'react-native';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Password from '../screens/Password';
import Signup from '../screens/Signup';
import {Product} from '../screens/Product';
import {Cart} from '../screens/Cart';
import {Wishlist} from '../screens/Wishlist';
import {Header} from '../components/Header';
import {Category} from '../screens/Category';
import {AuthStore} from '../store/auth';
import {observer} from 'mobx-react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNavigationContainerRef} from '@react-navigation/native';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';
import Order from '../screens/Order';
import styles from '../styles';
import Notifications from '../screens/Notifications';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const OrdersStack = createStackNavigator();
const CartStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const navigationRef = createNavigationContainerRef();

const HomeTabs = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Category" component={Category} />
    </HomeStack.Navigator>
  );
};

const NotificationsTab = () => {
  return (
    <NotificationsStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      initialRouteName="Notifications">
      <Stack.Screen name="Notifications" component={Notifications} />
    </NotificationsStack.Navigator>
  );
};

const OrdersTab = () => {
  return (
    <OrdersStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      initialRouteName="Orders">
      <Stack.Screen name="Orders" component={Orders} />
    </OrdersStack.Navigator>
  );
};

const CartTabs = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      initialRouteName="Wishlist">
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Category" component={Category} />
    </CartStack.Navigator>
  );
};

const ProfileTabs = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      initialRouteName="Wishlist">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Orders" component={Orders} />
    </CartStack.Navigator>
  );
};

const Tabs = ({navigation}) => {
  return (
    <>
      <Tab.Navigator
        style={styles.bottomTabs}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeTabs}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <>
                {focused ? (
                  <Image
                    style={styles.tabIcon}
                    source={require('../../assets/icons/home.png')}
                  />
                ) : (
                  <Image
                    style={styles.tabIcon}
                    source={require('../../assets/icons/home2.png')}
                  />
                )}
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsTab}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <>
                {focused ? (
                  <Image
                    style={styles.tabIcon}
                    source={require('../../assets/icons/notification.png')}
                  />
                ) : (
                  <Image
                    style={styles.tabIcon}
                    source={require('../../assets/icons/notification2.png')}
                  />
                )}
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={OrdersTab}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <>
                {focused ? (
                  <Image
                    style={styles.tabIcon}
                    source={require('../../assets/icons/order.png')}
                  />
                ) : (
                  <Image
                    style={styles.tabIcon}
                    source={require('../../assets/icons/order2.png')}
                  />
                )}
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileTabs}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <>
                {focused ? (
                  <Image
                    style={styles.tabIcon}
                    source={require('../../assets/icons/profile.png')}
                  />
                ) : (
                  <Image
                    style={styles.tabIcon}
                    source={require('../../assets/icons/profile2.png')}
                  />
                )}
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export const Navigator = observer(() => {
  const {
    state: {isAuthenticated},
  } = AuthStore;

  return (
    <>
      {isAuthenticated ? (
        <>
          <Header navigationRef={navigationRef} />
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
              screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
              }}
              initialRouteName="Main">
              <Stack.Screen name="Main" component={Tabs} />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      ) : (
        <>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
              screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
              }}
              initialRouteName="login">
              <Stack.Screen name="signup" component={Signup} />
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="password" component={Password} />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      )}
    </>
  );
});
