import { v4 } from 'uuid';
import styles from './assets/css/App.module.css';
import MainContainer from './modules/MainContainer/MainContainer.js';
import SideMenu from './modules/SideMenu/SideMenu.js';
import { getItem, setItem } from './storage';

export default function App({ $target }) {
  $target.className = styles.app;

  this.state = {
    selectedDocument: null,
    isLoading: false,
    documentList: getItem('documents', []),
  };

  const sideMenu = new SideMenu({
    $target,
    initialState: this.state.documentList,
    onDocumentAdd: () => {
      const newDocument = {
        id: v4(),
        title: '',
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
      const selectDocument = this.state.documentList.filter(
        (item) => item.id === selectedId,
      );
      this.setState({
        ...this.state,
        selectedDocument: selectDocument[0],
      });
    },
  });

  const mainContainer = new MainContainer({
    $target,
    selectedDocument: this.state.selectedDocument,
    onEditing: (post) => {
      const findLocation = this.state.documentList.findIndex(
        (item) => item.id === post.id,
      );

      const newDocumentList = Array.from(this.state.documentList);
      newDocumentList[findLocation] = post;

      this.setState({
        ...this.state,
        selectedDocument: post,
        documentList: newDocumentList,
      });
      setItem('documents', newDocumentList);
      fetchRequests();
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;

    sideMenu.setState(this.state.documentList);
    mainContainer.setState(this.state.selectedDocument);
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
