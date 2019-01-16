import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import BizList from '../components/biz/BizList';
import BizInfoPage from '../components/biz/BizInfoPage';
import Order from '../components/user/Order'

const AppNavigator = createStackNavigator({
  BizList,
  BizInfoPage,
  Order
});

export default createAppContainer(createSwitchNavigator({ 
  Main: AppNavigator 
}));