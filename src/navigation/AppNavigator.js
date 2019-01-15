import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import BizList from '../components/biz/BizList';
import BizInfoPage from '../components/biz/BizInfoPage';

const AppNavigator = createStackNavigator({
  BizList: BizList,
  BizInfoPage: BizInfoPage
});

export default createAppContainer(createSwitchNavigator({ 
  Main: AppNavigator 
}));