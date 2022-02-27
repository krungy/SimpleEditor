import { setItem } from '../../storage';
import { initialDocumentState } from '../../utils/constants.js';
import styles from '../../assets/css/DocumentList.module.css';

export default function DocumentList({ $target, initialState }) {
  const $documentList = document.createElement('div');
  $target.appendChild($documentList);

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  // const handleDocumentList = (list) =>
  //   list.map(({ title }, index) => return (<div key={index}>{title}</div>));

  this.render = () => {
    $documentList.innerHTML = `
      <div>
        ${handleDocumentList}
      </div>
      <button class=${styles.document_add_button}>+</button>
    `;
  };

  $documentList.addEventListener('click', (e) => {
    // e.target 더 정확한걸로 수정 필요
    if (e.target.tagName === 'BUTTON') {
      const newItem = initialDocumentState;
      newItem.id = uuid;
      console.log(newItem);
      this.setState([...this.state, newItem]);
      console.log(this.state);
      setItem('documents', this.state);
    }
  });

  this.render();
}
