import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import { colors } from './styles';

import Login from './pages/login';
import Collections from './pages/collections';
import MyCollection from './pages/myCollection';
import SaveCollection from './pages/saveCollection';
import Perfil from './pages/perfil';

const Routes = StackNavigator({
  Login: { screen: Login },
  User: {
    screen: TabNavigator({
      Collections: { screen: Collections },
      MyCollection: { screen: MyCollection },
      SaveCollection: { screen: SaveCollection },
      Perfil: { screen: Perfil },
    }, {
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.white,
        inactiveTintColor: colors.whiteTransparent,
        style: {
          backgroundColor: '#654C8F',
        },
      },
    }),
  },
}, {
  initialRouteName: 'User',
});

export default Routes;
