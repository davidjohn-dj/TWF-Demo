import React from "react";
import { StyleSheet } from "react-native";
import {
  Divider,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaLayout } from "../../components/safe-area-layout.component";
import { MenuGridList } from "../../components/menu-grid-list.component";
import { MenuIcon } from "../../components/icons";
import { data } from "./data";
import { AppDrawer } from "../common/app-drawer";
import {Home} from '../home/home'
import Login from '../login/login'
import GuardALocation from '../guard-a-location/guard-a-location'
import GetVerified from '../get-verified/get-verified'
import ScanAVerification from '../scan-a-verification/scan-a-verification'
import MyVerifications from '../my-verifications/my-verifications'
import AccountSettings from '../account-settings/account-settings'

const Drawer = createDrawerNavigator();

const isOneOfRootRoutes = (currentRoute) => {
  return ROOT_ROUTES.find(route => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({ route }) => {
  const currentRoute = route.state && route.state.routes[route.state.index];
  return { tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute) };
};

// const MainPage = (props) => (
//   <Home {...props}/>
// );

export const Dashboard = () => (
  <Drawer.Navigator
    screenOptions={{ gestureEnabled: false }}
    drawerContent={props => <AppDrawer {...props}/>}>
    <Drawer.Screen name='Home' component={Home}/>
    <Drawer.Screen name='GuardALocation' component={GuardALocation}/>
    <Drawer.Screen name='GetVerified' component={GetVerified}/>
    <Drawer.Screen name='ScanAVerification' component={ScanAVerification}/>
    <Drawer.Screen name='MyVerifications' component={MyVerifications}/>
    <Drawer.Screen name='AccountSettings' component={AccountSettings}/>
  </Drawer.Navigator>
);
