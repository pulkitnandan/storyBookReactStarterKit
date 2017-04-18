import { configure, addDecorator } from '@kadira/storybook';
import ContextProvider from './ContextProvider';
import React from 'react';
import PropTypes from 'prop-types';

const req = require.context('../src/components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

const context = {
  insertCss: () => {

  }
};

addDecorator(story => (
  <ContextProvider context={context}>
    {story()}
  </ContextProvider>
));

configure(loadStories, module);
