import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { MemoryRouter } from 'react-router';
import Pagination from '../src/index';

const genUrl = (page) => `/${page}`;

storiesOf('Pagination', module)
  .addDecorator(story => (
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
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
  .add('second page', () => (
    <Pagination
      pageCount={15}
      pageRangeDisplayed={5}
      page={2}
      genUrl={genUrl}
    />
  ))
  .add('before last page', () => (
    <Pagination
      pageCount={15}
      pageRangeDisplayed={5}
      page={14}
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
