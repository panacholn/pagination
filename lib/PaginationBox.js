'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _PaginationItem = require('./PaginationItem');

var _PaginationItem2 = _interopRequireDefault(_PaginationItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaginationBox = function (_Component) {
  _inherits(PaginationBox, _Component);

  function PaginationBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PaginationBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PaginationBox.__proto__ || Object.getPrototypeOf(PaginationBox)).call.apply(_ref, [this].concat(args))), _this), _this.handlePreviousPage = function () {
      if (_this.props.page > 1) {
        return _this.props.page - 1;
      }
      return _this.props.page;
    }, _this.handleNextPage = function () {
      if (_this.props.page < _this.props.pageCount) {
        return _this.props.page + 1;
      }
      return _this.props.page;
    }, _this.displayFirstButton = function () {
      if (_this.props.pageCount > _this.props.pageRangeDisplayed && _this.props.page !== 1) {
        return _react2.default.createElement(_PaginationItem2.default, {
          url: _this.props.genUrl(1),
          pageClassName: _this.props.firstClassName,
          pageLinkClassName: _this.props.firstLinkClassName,
          activeClassName: _this.props.activeClassName,
          id: 'first-button',
          label: _this.props.firstLabel
        });
      }
      return null;
    }, _this.displayPreviousButton = function () {
      if (_this.props.pageCount > _this.props.pageRangeDisplayed && _this.props.page !== 1) {
        return _react2.default.createElement(_PaginationItem2.default, {
          url: _this.props.genUrl(_this.handlePreviousPage()),
          pageClassName: _this.props.previousClassName,
          pageLinkClassName: _this.props.previousLinkClassName,
          activeClassName: _this.props.activeClassName,
          id: 'previous-button',
          label: _this.props.previousLabel
        });
      }
      return null;
    }, _this.displayNextButton = function () {
      if (_this.props.pageCount > _this.props.pageRangeDisplayed && _this.props.page !== _this.props.pageCount) {
        return _react2.default.createElement(_PaginationItem2.default, {
          url: _this.props.genUrl(_this.handleNextPage()),
          pageClassName: _this.props.nextClassName,
          pageLinkClassName: _this.props.nextLinkClassName,
          activeClassName: _this.props.activeClassName,
          id: 'next-button',
          label: _this.props.nextLabel
        });
      }
      return null;
    }, _this.displayLastButton = function () {
      if (_this.props.pageCount > _this.props.pageRangeDisplayed && _this.props.page !== _this.props.pageCount) {
        return _react2.default.createElement(_PaginationItem2.default, {
          url: _this.props.genUrl(_this.props.pageCount),
          pageClassName: _this.props.lastClassName,
          pageLinkClassName: _this.props.lastLinkClassName,
          activeClassName: _this.props.activeClassName,
          id: 'last-button',
          label: _this.props.lastLabel
        });
      }
      return null;
    }, _this.calculateBound = function () {
      var maxPageCount = _this.props.pageCount - 1;
      var pageRange = _this.props.pageRangeDisplayed - 1;
      var result = { min: 0, max: maxPageCount };
      if (maxPageCount > pageRange) {
        var lowerBound = Math.floor(pageRange / 2);
        var higherBound = pageRange - lowerBound;
        var relatedLowerBound = _this.props.page - 1 - lowerBound;
        var relatedHigherBound = _this.props.page - 1 + higherBound;
        if (relatedLowerBound < 0) {
          relatedHigherBound -= relatedLowerBound;
          relatedLowerBound = 0;
        }
        if (relatedHigherBound > maxPageCount) {
          relatedLowerBound -= relatedHigherBound - maxPageCount;
          relatedHigherBound = maxPageCount;
        }
        result = { min: relatedLowerBound, max: relatedHigherBound };
      }
      return result;
    }, _this.pagination = function () {
      var items = [];

      var _this$calculateBound = _this.calculateBound(),
          min = _this$calculateBound.min,
          max = _this$calculateBound.max;

      for (var index = min; index <= max; index += 1) {
        items.push(_react2.default.createElement(_PaginationItem2.default, {
          key: index,
          url: _this.props.genUrl(index + 1),
          selected: _this.props.page === index + 1,
          pageClassName: _this.props.pageClassName,
          pageLinkClassName: _this.props.pageLinkClassName,
          activeClassName: _this.props.activeClassName,
          id: 'page-' + (index + 1),
          label: '' + (index + 1)
        }));
      }
      return items;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PaginationBox, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: this.props.containerClassName },
        this.displayFirstButton(),
        this.displayPreviousButton(),
        this.pagination(),
        this.displayNextButton(),
        this.displayLastButton()
      );
    }
  }]);

  return PaginationBox;
}(_react.Component);

PaginationBox.propTypes = {
  pageCount: _propTypes2.default.number.isRequired,
  pageRangeDisplayed: _propTypes2.default.number.isRequired,
  firstLabel: _propTypes2.default.node,
  previousLabel: _propTypes2.default.node,
  nextLabel: _propTypes2.default.node,
  lastLabel: _propTypes2.default.node,
  genUrl: _propTypes2.default.func.isRequired,
  page: _propTypes2.default.number,
  containerClassName: _propTypes2.default.string,
  pageClassName: _propTypes2.default.string,
  pageLinkClassName: _propTypes2.default.string,
  activeClassName: _propTypes2.default.string,
  firstClassName: _propTypes2.default.string,
  previousClassName: _propTypes2.default.string,
  nextClassName: _propTypes2.default.string,
  lastClassName: _propTypes2.default.string,
  firstLinkClassName: _propTypes2.default.string,
  previousLinkClassName: _propTypes2.default.string,
  nextLinkClassName: _propTypes2.default.string,
  lastLinkClassName: _propTypes2.default.string
};

PaginationBox.defaultProps = {
  firstLabel: '\xAB',
  previousLabel: '\u2039',
  nextLabel: '\u203A',
  lastLabel: '\xBB',
  page: 1,
  containerClassName: 'pagination',
  pageClassName: 'page',
  pageLinkClassName: 'page-link',
  activeClassName: 'active',
  firstClassName: 'first',
  previousClassName: 'previous',
  nextClassName: 'next',
  lastClassName: 'last',
  firstLinkClassName: 'first-link',
  previousLinkClassName: 'previous-link',
  nextLinkClassName: 'next-link',
  lastLinkClassName: 'last-link'
};

exports.default = PaginationBox;