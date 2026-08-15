// StackBlitz: If the inline preview does not load, use "Open Preview in New
// Window" from the preview toolbar.
import './scss/main.scss';
import { SpyneApp } from 'spyne';
import { AppView } from './app/app-view.js';

const config = {
  debug: true,
  strict: true,
};

SpyneApp.init(config);

if (process.env.NODE_ENV === 'development') {
  import('./dev-tools.js');
}

new AppView().appendToDom(document.querySelector('body'));
