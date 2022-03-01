import styles from '../../assets/css/DocumentList.module.css';

export default function DocumentList({
  $target,
  initialState,
  onDocumentAdd,
  onDocumentDelete,
  onSelectDocument,
}) {
  const $documentList = document.createElement('div');
  $target.appendChild($documentList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $documentList.innerHTML = `
      <h3 class=${styles.side_header}>개인 페이지</h3>
      <ul class=${styles.side_list}>
        ${this.state
          .map(
            ({ id, title }) => `
          <li class=${styles.list_item} data-id=${id}>
            ${title ? title : '제목 없음'}
            <div class=${styles.item_buttonList}>
              <button class=${
                styles.item_button
              } data-id="deleteDocument">-</button>
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
    e.stopPropagation();
    if (e.target.tagName === 'LI') {
      const $documentTarget = e.target.closest('li').dataset.id;
      onSelectDocument($documentTarget);
    }
    if (e.target.dataset.id === 'newDocument') {
      onDocumentAdd();
      return;
    }
    if (e.target.dataset.id === 'deleteDocument') {
      const $documentTarget = e.target.closest('li').dataset.id;

      onDocumentDelete($documentTarget);
      return;
    }
  });
}
