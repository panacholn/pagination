# pagination

[![Coverage Status](https://coveralls.io/repos/github/panacholn/pagination/badge.svg)](https://coveralls.io/github/panacholn/pagination) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)

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
### Props

List of props that can pass into the components.

| Props | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| pageCount | Integer | true | - | Number of total Pages |
| pageRangeDisplayed | Integer | true | - | Range that pagination display |
| genUrl | Function | true | - | Function for generate url to attach in the pagination link |
| page | Integer | false | 1 | Number of current page |
| firstLabel | String | false | '\xAB' | Label for the first page button |
| previousLabel | String | false | '\u2039' | Label for the previous page button |
| nextLabel | String | false | '\u203A' | Label for the next page button |
| lastLabel | String | false | '\xBB' | Label for the last page button |
| containerClassName | String | false | 'pagination' | Classname of the pagination component |
| activeClassName | String | false | 'active' | Classname of the current page button |
| pageClassName | String | false | 'page' | Classname of the button excluded first/previous/next/last button |
| pageLinkClassName | String | false | 'page-link' | Classname of the link in the button excluded first/previous/next/last button |
| firstClassName | String | false | 'first' | Classname of the first button |
| firstLinkClassName | String | false | 'first-link' | Classname of the link in the first button |
| previousClassName | String | false | 'previous' | Classname of the previous button |
| previousLinkClassName | String | false | 'previous-link' | Classname of the link in the previous button |
| nextClassName | String | false | 'next' | Classname of the next button |
| nextLinkClassName | String | false | 'next-link' | Classname of the link in the next button |
| lastClassName | String | false | 'last' | Classname of the last button |
| lastLinkClassName | String | false | 'last-link' | Classname of the link in the last button |
