import { AppRegistry, UIManager } from 'react-native';
import App from './src/app';

UIManager.setLayoutAnimationEnabledExperimental && 
UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('tech_stack', () => App);