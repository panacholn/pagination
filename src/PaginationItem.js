import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const PaginationItem = (props) => {
  const { pageLinkClassName, activeClassName, url, page, selected } = props;
  let { pageClassName } = props;
  if (selected) { pageClassName = `${pageClassName} ${activeClassName}`; }

  return (
    <li className={pageClassName}>
      <Link
        id={`page-${page}`}
        role="button"
        to={url}
        className={pageLinkClassName}
        tabIndex="0"
      >{page}</Link>
    </li>
  );
};

PaginationItem.propTypes = {
  url: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  pageClassName: PropTypes.string,
  pageLinkClassName: PropTypes.string,
  activeClassName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

PaginationItem.defaultProps = {
  pageClassName: 'page',
  pageLinkClassName: 'pageLink',
};

export default PaginationItem;
