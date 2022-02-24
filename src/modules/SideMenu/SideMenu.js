import styles from '../../assets/css/SideMenu.module.css';

export default function SideMenu({ $target }) {
  const $sidemenu = document.createElement('div');
  $sidemenu.className = styles.sidemenu;
  $target.appendChild($sidemenu);

  this.render = () => {
    $sidemenu.innerHTML = `
      <h3 class=${styles.side_header}>개인 페이지</h3>
    `;
  };

  this.render();
}
