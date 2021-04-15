import { AngularEditorConfig } from "@kolkov/angular-editor";

export const editorConfig : AngularEditorConfig  = {
  editable: true,
  spellcheck: true,
  height: 'auto',
  minHeight: '200px',
  maxHeight: 'auto',
  width: '100%',
  minWidth: '0',
  translate: 'yes',
  enableToolbar: true,
  showToolbar: true,
  placeholder: 'Enter text here...',
  defaultParagraphSeparator: '',
  defaultFontName: '',
  defaultFontSize: '',
  fonts: [
    { class: 'arial', name: 'Arial' },
    {
      class: 'times-new-roman',
      name: 'Times New Roman',
    },
    { class: 'calibri', name: 'Calibri' },
    {
      class: 'comic-sans-ms',
      name: 'Comic Sans MS',
    },
  ],
  customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText',
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  uploadWithCredentials: false,
  sanitize: true,
  toolbarPosition: 'top',
  toolbarHiddenButtons: [
    [],
    [
      'customClasses',
      'unlink',
      'insertVideo',
      'insertImage',
      'toggleEditorMode',
      'toggleEditorMode'
    ],
  ],
};
