'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationItem = function PaginationItem(props) {
  var pageLinkClassName = props.pageLinkClassName,
      activeClassName = props.activeClassName,
      url = props.url,
      id = props.id,
      label = props.label,
      selected = props.selected;
  var pageClassName = props.pageClassName;

  if (selected) {
    pageClassName = pageClassName + ' ' + activeClassName;
  }

  return _react2.default.createElement(
    'li',
    { className: pageClassName },
    _react2.default.createElement(
      _reactRouterDom.Link,
      {
        id: id,
        role: 'button',
        to: url,
        className: pageLinkClassName,
        tabIndex: '0'
      },
      label
    )
  );
};

PaginationItem.propTypes = {
  url: _propTypes2.default.string.isRequired,
  selected: _propTypes2.default.bool,
  pageClassName: _propTypes2.default.string,
  pageLinkClassName: _propTypes2.default.string,
  activeClassName: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired
};

PaginationItem.defaultProps = {
  pageClassName: 'page',
  pageLinkClassName: 'page-link',
  selected: false
};

exports.default = PaginationItem;