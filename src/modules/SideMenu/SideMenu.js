import styles from '../../assets/css/SideMenu.module.css';
import DocumentList from './DocumentList';

export default function SideMenu({
  $target,
  initialState,
  onDocumentAdd,
  onDocumentDelete,
  onSelectDocument,
}) {
  const $sidemenu = document.createElement('div');
  $sidemenu.className = styles.sidemenu;
  $target.appendChild($sidemenu);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const documentList = new DocumentList({
    $target: $sidemenu,
    initialState: this.state,
    onDocumentAdd: () => onDocumentAdd(),
    onDocumentDelete: (selectedId) => onDocumentDelete(selectedId),
    onSelectDocument: (selectedId) => onSelectDocument(selectedId),
  });

  this.setState = (nextState) => {
    this.state = nextState;
    documentList.setState(this.state);
  };
}
