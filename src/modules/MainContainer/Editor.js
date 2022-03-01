import styles from '../../assets/css/Editor.module.css';

export default function Editor({ $target, initialState, onEditing }) {
  const $editor = document.createElement('div');
  $editor.className = styles.editor;

  $editor.innerHTML = `
    <input class=${styles.editor_input} type='text' name='title' placeholder='제목을 입력하세요.' />
    <div class=${styles.editor_textarea} name='content' contentEditable="true" placeholder='내용을 입력하세요.' spellcheck = "false"></div>
  `;

  this.state = initialState;

  console.log(this.state);
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $target.innerHTML = ``;
    $target.appendChild($editor);

    $editor.querySelector('[name=title]').value = this.state.title;
    $editor.querySelector('[name=content]').innerHTML = this.state.content;
  };

  this.remove = () => {
    $editor.remove();
  };

  $editor.querySelector('[name=title]').addEventListener('input', (e) => {
    const nextState = {
      ...this.state,
      title: e.target.value,
    };

    onEditing(nextState, 0);
  });

  $editor.querySelector('[name=content]').addEventListener('input', (e) => {
    const nextState = {
      ...this.state,
      content: e.target.innerHTML,
    };

    onEditing(nextState, 1000);
  });
}
