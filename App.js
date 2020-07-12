import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './components/main';
import Charassfx from './components/charassfx'
 

const navigator = createStackNavigator({
  'Main Menu': Main,
  Charassfx: Charassfx
})

export default createAppContainer(navigator);