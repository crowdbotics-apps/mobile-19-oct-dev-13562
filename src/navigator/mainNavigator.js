import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen012680Navigator from '../features/BlankScreen012680/navigator';
import BlankScreen112679Navigator from '../features/BlankScreen112679/navigator';
import BlankScreen012678Navigator from '../features/BlankScreen012678/navigator';
import CopyOfBlankScreen012677Navigator from '../features/CopyOfBlankScreen012677/navigator';
import CopyOfBlankScreen012674Navigator from '../features/CopyOfBlankScreen012674/navigator';
import BlankScreen012673Navigator from '../features/BlankScreen012673/navigator';
import BlankScreen012663Navigator from '../features/BlankScreen012663/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen012680: { screen: BlankScreen012680Navigator },
BlankScreen112679: { screen: BlankScreen112679Navigator },
BlankScreen012678: { screen: BlankScreen012678Navigator },
CopyOfBlankScreen012677: { screen: CopyOfBlankScreen012677Navigator },
CopyOfBlankScreen012674: { screen: CopyOfBlankScreen012674Navigator },
BlankScreen012673: { screen: BlankScreen012673Navigator },
BlankScreen012663: { screen: BlankScreen012663Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
