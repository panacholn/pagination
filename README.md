# pagination

[![Coverage Status](https://coveralls.io/repos/github/panacholn/pagination/badge.svg)](https://coveralls.io/github/panacholn/pagination)

A SEO friendly pagination component for React.

### Install

Via NPM
```
npm install tn-pagination
```

### Usage

```js
import React from 'react';
import Pagination from 'tn-pagination';

class MyComponent extends React.Component {
  componentDidMount() {
    // fetch data for the first time render.
  }

  componentWillReceiveProps(nextProps) {
    // fetch data when click the pagination.
  }

  genUrl = (page) => `/page/${page}`;

  render() {
    return (
      <div>
        <h1>Item list</h1>
        ... //list of items
        <Pagination
          pageCount={15}
          pageRangeDisplayed={5}
          page={1}
          genUrl={this.genUrl}
        />
      </div>
    );
  }
}
```
