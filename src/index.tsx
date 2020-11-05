import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import FontFaceObserver from 'fontfaceobserver';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'App';
import * as serviceWorker from 'serviceWorker';
import { configureAppStore } from 'store/configureStore';

import 'sanitize.css/sanitize.css';

// Prev import { ThemeProvider } from 'styles/theme/ThemeProvider';
import theme from 'theme';

// Observe loading of Inter (to remove 'Roboto', remove the <link> tag in
// the index.html file and this observer)
const robotoObserver = new FontFaceObserver('Roboto', {});

// When Inter is loaded, add a font-family using Inter to the body
robotoObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

interface Props {
  Component: typeof App;
}
const ConnectedApp = ({ Component }: Props) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.StrictMode>
        <Component />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);

const render = (Component: typeof App) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
