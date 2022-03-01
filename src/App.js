import styles from './assets/css/App.module.css';
import MainContainer from './modules/MainContainer/MainContainer.js';
import SideMenu from './modules/SideMenu/SideMenu.js';
import { getItem } from './storage';

export default function App({ $target }) {
  $target.className = styles.app;

  this.state = {
    isLoading: false,
    documents: [],
  };

  new SideMenu({
    $target,
    initialState: this.state.documents,
    onDocumentAdd: () => {},
  });

  const mainContainer = new MainContainer({
    $target,
  });

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const fetchRequests = () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });
    const documents = getItem('documents', []);

    this.setState({
      ...this.state,
      documents,
      isLoading: false,
    });
  };

  fetchRequests();
  console.log(this.state);
}
