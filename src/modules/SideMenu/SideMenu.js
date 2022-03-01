import styles from '../../assets/css/SideMenu.module.css';
import DocumentList from './DocumentList';

export default function SideMenu({ $target, initialState, onDocumentAdd }) {
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
  });

  this.setState = (nextState) => {
    this.state = nextState;
    documentList.setState(this.state);
  };
  console.log(initialState);
}
