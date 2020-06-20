import React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeDrawer } from "../../scenes/home/home-drawer.component";
import LoginScreen from "../login/login";
import RegisterScreen from "../register/register";
import DashboardScreen from "../dashboard/dashboard";
import GenerateQR from "../generateqr/generateqr";

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/*
 * When dev is true in .expo/settings.json (started via `start:dev`),
 * open Components tab as default.
 */

/*
 * Can we access it from `HomeNavigator`?
 */

const isOneOfRootRoutes = () => {
  return ROOT_ROUTES.find((route) => currentRoute.name === route) !== undefined;
};

export default (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{ gestureEnabled: false }}
      drawerContent={(props) => <HomeDrawer {...props} />}
    >
      <Drawer.Screen name="Generate QR" component={GenerateQR} />
      <Drawer.Screen name="Home" component={DashboardScreen} />
      <Drawer.Screen name="Libraries" component={RegisterScreen} />
    </Drawer.Navigator>
  );
};
