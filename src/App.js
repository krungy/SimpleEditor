import styles from './assets/css/App.module.css';
import MainContainer from './modules/MainContainer/MainContainer.js';
import SideMenu from './modules/SideMenu/SideMenu.js';

export default function App({ $target }) {
  $target.className = styles.app;

  const sidemenu = new SideMenu({
    $target,
  });

  const mainContainer = new MainContainer({
    $target,
  });
}
