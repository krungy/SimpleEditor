import styles from '../../assets/css/MainContainer.module.css';
import Editor from './Editor.js';

export default function MainContainer({ $target }) {
  const $mainContainer = document.createElement('div');
  $mainContainer.className = styles.main_container;
  $target.appendChild($mainContainer);

  const editor = new Editor({
    $target: $mainContainer,
  });
}
