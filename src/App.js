import { v4 } from 'uuid';
import styles from './assets/css/App.module.css';
import MainContainer from './modules/MainContainer/MainContainer.js';
import SideMenu from './modules/SideMenu/SideMenu.js';
import { getItem, setItem } from './storage';

export default function App({ $target }) {
  $target.className = styles.app;

  this.state = {
    isLoading: false,
    documentList: getItem('documents', []),
    selectedDocument: null,
  };

  const sideMenu = new SideMenu({
    $target,
    initialState: this.state.documentList,
    onDocumentAdd: () => {
      const newDocument = {
        id: v4(),
        title: '새로운 문서',
        content: '',
        documents: [],
      };
      this.setState({
        ...this.state,
        documentList: [...this.state.documentList, newDocument],
      });

      setItem('documents', this.state.documentList);
      fetchRequests();
    },
    onDocumentDelete: (selectedId) => {
      const newDocumentList = this.state.documentList.filter(
        (item) => item.id !== selectedId,
      );

      this.setState({
        ...this.state,
        docuemntList: newDocumentList,
      });
      setItem('documents', newDocumentList);
      fetchRequests();
    },
    onSelectDocument: (selectedId) => {
      const selectedDocument = this.state.documentList.filter(
        (item) => item.id === selectedId,
      );
      this.state.selectedDocument = selectedDocument[0];
    },
  });

  const mainContainer = new MainContainer({
    $target,
    selectedDocument,
  });

  this.setState = (nextState) => {
    this.state = nextState;

    sideMenu.setState(this.state.documentList);
  };

  const fetchRequests = () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });
    const documentList = getItem('documents', []);

    this.setState({
      ...this.state,
      documentList,
      isLoading: false,
    });
  };

  fetchRequests();

  console.log(this.state.documentList);
}
