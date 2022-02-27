import styles from './assets/css/App.module.css';
import MainContainer from './modules/MainContainer/MainContainer.js';
import SideMenu from './modules/SideMenu/SideMenu.js';
import { getItem } from './storage';

export default function App({ $target }) {
  $target.className = styles.app;

  this.state = [];

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const documents = getItem('documents', []);
  console.log(documents);
  this.setState(documents);

  const sidemenu = new SideMenu({
    $target,
    initialState: [],
  });

  const mainContainer = new MainContainer({
    $target,
  });
}
