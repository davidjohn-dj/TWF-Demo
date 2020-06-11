import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, View, Image, ImageRequireSource } from 'react-native';
import { Avatar, Divider, TopNavigation, TopNavigationAction, Button, Text } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { MenuGridList } from '../../components/menu-grid-list.component';
import { MenuIcon } from '../../components/icons';
import { data } from './data';
import { updateDataObj } from "../../redux/actions/translator";

const ComponentScreen = ({ navigation, translator, user, updateDataObj }): React.ReactElement => {

  console.log(" translator.counter", translator.counter);

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={navigation.toggleDrawer}
    />
  );

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
      <Button onPress={() => updateDataObj({ counter: translator.counter + 1 })}>
        BUTTON
      </Button>

      <Text style={styles.text}>
        Pressed {translator.counter} times
      </Text>
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
  text: {
    marginHorizontal: 8,
  },
  logo: {
    marginHorizontal: 16,
  },
});

const actionCreators = {
  updateDataObj
};

function mapStateToProps(state) {
  return {
    translator: state.translator,
    user: state.user
  };
}

export const ComponentsScreen = connect(mapStateToProps, actionCreators)(ComponentScreen);