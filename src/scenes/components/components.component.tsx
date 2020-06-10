import React from 'react';
import { StyleSheet, View, Image, ImageRequireSource } from 'react-native';
import { Avatar, Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { MenuGridList } from '../../components/menu-grid-list.component';
import { MenuIcon } from '../../components/icons';
import { data } from './data';

export const ComponentsScreen = ({ navigation }): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={navigation.toggleDrawer}
    />
  );

  // const IconProvider = (source: ImageRequireSource) => ({
  //   toReactElement: ({ animation, ...style }) => (
  //     <Image style={style} source={source}/>
  //   ),
  // });

  // const renderTitle = () => (
  //   <View style={styles.titleContainer}>
  //     <Avatar
  //       style={styles.logo}
  //       source={require('../../assets/images/twf.png')}
  //     />
  //   </View>
  // );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title={"TWF"}
        leftControl={renderDrawerAction()}
      />
      <Divider />
      <MenuGridList
        data={data}
        onItemPress={onItemPress}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    // marginHorizontal: 16,
  },
});
