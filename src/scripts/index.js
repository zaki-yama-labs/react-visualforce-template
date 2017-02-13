import React from 'react';
import { render } from 'react-dom';
import { util } from 'react-lightning-design-system';

import App from './components/App';
import '../stylesheets/index.scss';

export const init = function(el, assetRoot) {
  util.setAssetRoot(assetRoot);
  console.log('Set asset root as ', util.getAssetRoot());
  render(<App />, el);
};
