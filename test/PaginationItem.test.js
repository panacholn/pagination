import React from 'react';
import { shallow } from 'enzyme';
import PaginationItem from '../src/PaginationItem';

describe('PaginationItem component', () => {
  let input;
  beforeEach(() => {
    input = {
      url: '/1',
      activeClassName: 'active',
      id: 'pagination-item',
      label: '1',
    };
  });

  describe('render function', () => {
    it('should use default value and return <li> with link inside.', () => {
      const wrapper = shallow(<PaginationItem {...input} />);
      const linkProps = wrapper.find('Link').props();
      const expectLinkProps = {
        id: 'pagination-item',
        role: 'button',
        to: '/1',
        className: 'page-link',
        tabIndex: '0',
      };
      expect(wrapper.is('li')).toBe(true);
      expect(wrapper.is('.page')).toBe(true);
      Object.keys(expectLinkProps).forEach((key) => {
        expect(linkProps).toHaveProperty(key, expectLinkProps[key]);
      });
    });

    it('should have active class when set selected to true.', () => {
      input.selected = true;
      const wrapper = shallow(<PaginationItem {...input} />);
      expect(wrapper.is('.active')).toBe(true);
      expect(wrapper.is('.page')).toBe(true);
    });

    it('should not use default value.', () => {
      input.pageClassName = 'page-class-name';
      input.pageLinkClassName = 'page-link-class-name';
      const wrapper = shallow(<PaginationItem {...input} />);
      const linkProps = wrapper.find('Link').props();
      const expectLinkProps = {
        id: 'pagination-item',
        role: 'button',
        to: '/1',
        className: 'page-link-class-name',
        tabIndex: '0',
      };
      expect(wrapper.is('.page-class-name')).toBe(true);
      Object.keys(expectLinkProps).forEach((key) => {
        expect(linkProps).toHaveProperty(key, expectLinkProps[key]);
      });
    });

  });
});
