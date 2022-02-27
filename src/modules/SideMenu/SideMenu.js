import styles from '../../assets/css/SideMenu.module.css';
import DocumentList from './DocumentList';

export default function SideMenu({ $target, initialState }) {
  const $sidemenu = document.createElement('div');
  $sidemenu.className = styles.sidemenu;
  $target.appendChild($sidemenu);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  // this.render = () => {
  //   $sidemenu.innerHTML = `
  //     <h3 class=${styles.side_header}>개인 페이지</h3>
  //   `;
  // };

  // this.render();

  const documentList = new DocumentList({
    $target: $sidemenu,
    initialState: this.state,
  });
}
