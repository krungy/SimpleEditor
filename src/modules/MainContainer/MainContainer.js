import styles from '../../assets/css/MainContainer.module.css';
import DefaultContainer from './DefaultContainer.js';
import Editor from './Editor.js';

export default function MainContainer({ $target, selectedDocument }) {
  const $mainContainer = document.createElement('div');
  $mainContainer.className = styles.main_container;
  $target.appendChild($mainContainer);

  this.state = selectedDocument;

  const defaultContainer = new DefaultContainer({
    $target: $mainContainer,
  });

  const editor = new Editor({
    $target: $mainContainer,
  });

  this.setState = (nextState) => {
    console.log(nextState);
    if (nextState === null) {
      defaultContainer.render();
      editor.remove();
    } else {
      defaultContainer.remove();
      editor.render();
    }

    this.state = nextState;
  };
}
