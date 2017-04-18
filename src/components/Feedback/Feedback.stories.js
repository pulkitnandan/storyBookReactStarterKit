import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Feedback from "./Feedback"

storiesOf('Feedback', module)
  .add('Normal', () => (
    <Feedback />
  ));
