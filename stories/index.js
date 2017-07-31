import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import Pagination from '../src/index';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

const genUrl = (page) => `/${page}`;

storiesOf('Pagination', module)
  .add('default', () => (
    <Pagination
      pageCount={15}
      pageRangeDisplayed={5}
      page={8}
      genUrl={genUrl}
    />
  ))
  .add('first page', () => (
    <Pagination
      pageCount={15}
      pageRangeDisplayed={5}
      page={1}
      genUrl={genUrl}
    />
  ))
  .add('last page', () => (
    <Pagination
      pageCount={15}
      pageRangeDisplayed={5}
      page={15}
      genUrl={genUrl}
    />
  ));
