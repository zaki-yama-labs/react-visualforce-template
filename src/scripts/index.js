import React from 'react';
import { render } from 'react-dom';
import { util } from 'react-lightning-design-system';

import App from './components/App';
import '../stylesheets/index.scss';

export const init = function(el, assetRoot) {
  alert(assetRoot);
  util.setAssetRoot(assetRoot);
  alert(assetRoot);
  render(<App />, el);
};
