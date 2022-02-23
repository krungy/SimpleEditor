import styles from '../../assets/css/MainContainer.module.css';

export default function MainContainer({ $target }) {
  const $mainContainer = document.createElement('div');
  $mainContainer.className = styles.main_container;
  $target.appendChild($mainContainer);

  this.render = () => {
    $mainContainer.innerHTML = `
      <h1>메인<h1>
    `;
  };

  this.render();
}
