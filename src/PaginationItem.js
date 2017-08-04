import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PaginationItem = (props) => {
  const { pageLinkClassName, activeClassName, url, id, label, selected } = props;
  let { pageClassName } = props;
  if (selected) { pageClassName = `${pageClassName} ${activeClassName}`; }

  return (
    <li className={pageClassName}>
      <Link
        id={id}
        role="button"
        to={url}
        className={pageLinkClassName}
        tabIndex="0"
      >{label}</Link>
    </li>
  );
};

PaginationItem.propTypes = {
  url: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  pageClassName: PropTypes.string,
  pageLinkClassName: PropTypes.string,
  activeClassName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

PaginationItem.defaultProps = {
  pageClassName: 'page',
  pageLinkClassName: 'page-link',
  selected: false,
};

export default PaginationItem;
