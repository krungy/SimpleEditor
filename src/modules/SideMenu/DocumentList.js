import styles from '../../assets/css/DocumentList.module.css';

export default function DocumentList({ $target, initialState, onDocumentAdd }) {
  const $documentList = document.createElement('div');
  $target.appendChild($documentList);

  this.state = initialState;
  console.log(this.state);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  console.log(this.state);

  this.render = () => {
    $documentList.innerHTML = `
      <h3 class=${styles.side_header}>개인 페이지</h3>
      <ul class=${styles.side_list}>
        ${this.state
          .map(
            ({ id, title }) => `
          <li class=${styles.list_item} data-id=${id}>
            ${title}
            <div class=${styles.item_buttonList}>
              <button class=${styles.item_button}>-</button>
            </div>
          </li>
          
        `,
          )
          .join('')}
      </ul>
      <button class=${
        styles.document_add_button
      } data-id='newDocument'>+</button>
    `;
  };

  this.render();

  $documentList.addEventListener('click', (e) => {
    if (e.target.closest('button').dataset.id === 'newDocument') {
      onDocumentAdd();
    }
  });
}
