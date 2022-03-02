import styles from '../../assets/css/DefaultContainer.module.css';

export default function DefaultContainer({ $target }) {
  const $defaultContainer = document.createElement('div');
  $defaultContainer.className = styles.default_container;
  $defaultContainer.innerHTML = `
      <h2 class=${styles.default_title}>Notion</h2>
      <div>문서를 추가하거나 선택해주세요!</div>
    `;
  this.render = () => {
    $target.innerHTML = ``;
    $target.appendChild($defaultContainer);
  };
  this.remove = () => {
    $defaultContainer.remove();
  };
}
