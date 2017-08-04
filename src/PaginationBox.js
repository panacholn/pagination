import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import PaginationItem from './PaginationItem';

class PaginationBox extends Component {
  state = {
    selected: this.props.page,
  };

  handlePreviousPage = () => {
    if (this.state.selected > 1) {
      return this.state.selected - 1;
    }
    return this.state.selected;
  };

  handleNextPage = () => {
    if (this.state.selected < this.props.pageCount) {
      return this.state.selected + 1;
    }
    return this.state.selected;
  };

  displayFirstButton = () => {
    if (this.props.pageCount > this.props.pageRangeDisplayed && this.state.selected !== 1) {
      return (
        <PaginationItem
          url={this.props.genUrl(1)}
          pageClassName={this.props.firstClassName}
          pageLinkClassName={this.props.firstLinkClassName}
          activeClassName={this.props.activeClassName}
          id={'first-button'}
          label={this.props.firstLabel}
        />
      );
    }
    return null;
  };

  displayPreviousButton = () => {
    if (this.props.pageCount > this.props.pageRangeDisplayed && this.state.selected !== 1) {
      return (
        <PaginationItem
          url={this.props.genUrl(this.handlePreviousPage())}
          pageClassName={this.props.previousClassName}
          pageLinkClassName={this.props.previousLinkClassName}
          activeClassName={this.props.activeClassName}
          id={'previous-button'}
          label={this.props.previousLabel}
        />
      );
    }
    return null;
  };

  displayNextButton = () => {
    if (this.props.pageCount > this.props.pageRangeDisplayed && this.state.selected !== this.props.pageCount) {
      return (
        <PaginationItem
          url={this.props.genUrl(this.handleNextPage())}
          pageClassName={this.props.nextClassName}
          pageLinkClassName={this.props.nextLinkClassName}
          activeClassName={this.props.activeClassName}
          id={'next-button'}
          label={this.props.nextLabel}
        />
      );
    }
    return null;
  };

  displayLastButton = () => {
    if (this.props.pageCount > this.props.pageRangeDisplayed && this.state.selected !== this.props.pageCount) {
      return (
        <PaginationItem
          url={this.props.genUrl(this.props.pageCount)}
          pageClassName={this.props.lastClassName}
          pageLinkClassName={this.props.lastLinkClassName}
          activeClassName={this.props.activeClassName}
          id={'last-button'}
          label={this.props.lastLabel}
        />
      );
    }
    return null;
  };

  calculateBound = () => {
    const maxPageCount = this.props.pageCount - 1;
    const pageRange = this.props.pageRangeDisplayed - 1;
    let result = { min: 0, max: maxPageCount };
    if (maxPageCount > pageRange) {
      const lowerBound = Math.floor(pageRange / 2);
      const higherBound = pageRange - lowerBound;
      let relatedLowerBound = (this.state.selected - 1) - lowerBound;
      let relatedHigherBound = (this.state.selected - 1) + higherBound;
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
  };

  pagination = () => {
    const items = [];
    const { min, max } = this.calculateBound();
    for (let index = min; index <= max; index += 1) {
      items.push(<PaginationItem
        key={index}
        url={this.props.genUrl(index + 1)}
        selected={this.state.selected === index + 1}
        pageClassName={this.props.pageClassName}
        pageLinkClassName={this.props.pageLinkClassName}
        activeClassName={this.props.activeClassName}
        id={`page-${index + 1}`}
        label={`${index + 1}`}
      />);
    }
    return items;
  };

  render() {
    return (
      <ul className={this.props.containerClassName}>
        {this.displayFirstButton()}
        {this.displayPreviousButton()}
        {this.pagination()}
        {this.displayNextButton()}
        {this.displayLastButton()}
      </ul>
    );
  }
}

PaginationBox.propTypes = {
  pageCount: PropTypes.number.isRequired,
  pageRangeDisplayed: PropTypes.number.isRequired,
  firstLabel: PropTypes.node,
  previousLabel: PropTypes.node,
  nextLabel: PropTypes.node,
  lastLabel: PropTypes.node,
  genUrl: PropTypes.func.isRequired,
  page: PropTypes.number,
  containerClassName: PropTypes.string,
  pageClassName: PropTypes.string,
  pageLinkClassName: PropTypes.string,
  activeClassName: PropTypes.string,
  firstClassName: PropTypes.string,
  previousClassName: PropTypes.string,
  nextClassName: PropTypes.string,
  lastClassName: PropTypes.string,
  firstLinkClassName: PropTypes.string,
  previousLinkClassName: PropTypes.string,
  nextLinkClassName: PropTypes.string,
  lastLinkClassName: PropTypes.string,
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
  lastLinkClassName: 'last-link',
};

export default PaginationBox;
