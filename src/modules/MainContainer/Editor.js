import styles from '../../assets/css/Editor.module.css';

export default function Editor({ $target }) {
  const $editor = document.createElement('div');
  $editor.className = styles.editor;
  $target.appendChild($editor);

  this.render = () => {
    $editor.innerHTML = `
      <input class=${styles.editor_input} type='text' placeholder='제목을 입력하세요.' />
      <textarea class=${styles.editor_textarea} placeholder='내용을 입력하세요.'></textarea>
    `;
    $target.appendChild($editor);
  };

  this.remove = () => {
    $editor.remove();
  };

  // $editor.addEventListener('keyup', (e) => {
  //   const { target } = e;

  //   if (target.className === styles.editor_textarea) {
  //     resize(target);
  //   }
  // });

  // $editor.addEventListener('keydown', (e) => {
  //   const { target } = e;

  //   if (target.className === styles.editor_textarea) {
  //     resize(target);
  //   }
  // });
}
