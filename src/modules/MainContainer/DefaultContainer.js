export default function DefaultContainer({ $target }) {
  const $defaultContainer = document.createElement('div');
  // $defaultContainer.className = 'guide-page-container';
  $defaultContainer.innerHTML = `
      <h2>Notion</h2>
      <div>문서를 선택해주세요!</div>
    `;
  this.render = () => {
    $target.innerHTML = ``;
    $target.appendChild($defaultContainer);
  };
  this.remove = () => {
    $defaultContainer.remove();
  };
}
