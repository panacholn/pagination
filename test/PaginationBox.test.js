import React from 'react';
import { shallow } from 'enzyme';
import PaginationBox from '../src/PaginationBox';
import PaginationItem from '../src/PaginationItem';

describe('PaginationBox component', () => {
  let input;
  beforeEach(() => {
    input = {
      pageCount: 15,
      pageRangeDisplayed: 5,
      page: 1,
      genUrl: (page) => `/${page}`,
    };
  });

  describe('handlePreviousPage function', () => {
    it('should return previous page if current page is not the first page', () => {
      input.page = 3;
      const wrapper = shallow(<PaginationBox {...input} />);
      expect(wrapper.instance().handlePreviousPage()).toEqual(2);
    });
    it('should return current page if current page is the first page', () => {
      const wrapper = shallow(<PaginationBox {...input} />);
      expect(wrapper.instance().handlePreviousPage()).toEqual(1);
    });
  });

  describe('handleNextPage function', () => {
    it('should return next page if current page is not the last page', () => {
      input.page = 1;
      const wrapper = shallow(<PaginationBox {...input} />);
      expect(wrapper.instance().handleNextPage()).toEqual(2);
    });
    it('should return current page if current page is the last page', () => {
      input.page = 15;
      const wrapper = shallow(<PaginationBox {...input} />);
      expect(wrapper.instance().handleNextPage()).toEqual(15);
    });
  });

  describe('displayFirstButton function', () => {
    it('should return PaginationItem component', () => {
      input.page = 2;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectProps = {
        url: '/1',
        pageClassName: 'first',
        pageLinkClassName: 'first-link',
        activeClassName: 'active',
        id: 'first-button',
        label: '\xAB',
      };
      const expectComponent = (<PaginationItem {...expectProps} />);
      expect(wrapper.instance().displayFirstButton()).toEqual(expectComponent);
    });
    it('should return null if number of page display more than total page', () => {
      input.pageCount = 3;
      const wrapper = shallow(<PaginationBox {...input} />);
      expect(wrapper.instance().displayFirstButton()).toBeNull();
    });
    it('should return null if current page is first page', () => {
      input.page = 1;
      const wrapper = shallow(<PaginationBox {...input} />);
      expect(wrapper.instance().displayFirstButton()).toBeNull();
    });
  });

  describe('displayPreviousButton function', () => {
    it('should return PaginationItem component', () => {
      input.page = 3;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectProps = {
        url: '/2',
        pageClassName: 'previous',
        pageLinkClassName: 'previous-link',
        activeClassName: 'active',
        id: 'previous-button',
        label: '\u2039',
      };
      const expectComponent = (<PaginationItem {...expectProps} />);
      expect(wrapper.instance().displayPreviousButton()).toEqual(expectComponent);
    });
    it('should return null if number of page display more than total page', () => {
      input.pageCount = 3;
      const wrapper = shallow(<PaginationBox {...input} />);
      expect(wrapper.instance().displayPreviousButton()).toBeNull();
    });
    it('should return null if current page is first page', () => {
      input.page = 1;
      const wrapper = shallow(<PaginationBox {...input} />);
      expect(wrapper.instance().displayPreviousButton()).toBeNull();
    });
  });

  describe('displayNextButton function', () => {
    it('should return PaginationItem component', () => {
      input.page = 3;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectProps = {
        url: '/4',
        pageClassName: 'next',
        pageLinkClassName: 'next-link',
        activeClassName: 'active',
        id: 'next-button',
        label: '\u203A',
      };
      const expectComponent = (<PaginationItem {...expectProps} />);
      expect(wrapper.instance().displayNextButton()).toEqual(expectComponent);
    });
    it('should return null if number of page display more than total page', () => {
      input.pageCount = 3;
      const wrapper = shallow(<PaginationBox {...input} />);
      expect(wrapper.instance().displayNextButton()).toBeNull();
    });
    it('should return null if current page is last page', () => {
      input.page = 15;
      const wrapper = shallow(<PaginationBox {...input} />);
      expect(wrapper.instance().displayNextButton()).toBeNull();
    });
  });

  describe('displayLastButton function', () => {
    it('should return PaginationItem component', () => {
      input.page = 3;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectProps = {
        url: '/15',
        pageClassName: 'last',
        pageLinkClassName: 'last-link',
        activeClassName: 'active',
        id: 'last-button',
        label: '\xBB',
      };
      const expectComponent = (<PaginationItem {...expectProps} />);
      expect(wrapper.instance().displayLastButton()).toEqual(expectComponent);
    });
    it('should return null if number of page display more than total page', () => {
      input.pageCount = 3;
      const wrapper = shallow(<PaginationBox {...input} />);
      expect(wrapper.instance().displayLastButton()).toBeNull();
    });
    it('should return null if current page is last page', () => {
      input.page = 15;
      const wrapper = shallow(<PaginationBox {...input} />);
      expect(wrapper.instance().displayLastButton()).toBeNull();
    });
  });

  describe('calculateBound function', () => {
    it('should return full range in case of number of page display more than total page', () => {
      input.pageCount = 3;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectRange = { min: 0, max: 2 };
      expect(wrapper.instance().calculateBound()).toEqual(expectRange);
    });
    it('[odd] first page bound => current: 1, range: 5, should return { min: 0, max: 4}', () => {
      input.page = 1;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectRange = { min: 0, max: 4 };
      expect(wrapper.instance().calculateBound()).toEqual(expectRange);
    });
    it('[odd] second page bound => current: 2, range: 5, should return { min: 0, max: 4}', () => {
      input.page = 2;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectRange = { min: 0, max: 4 };
      expect(wrapper.instance().calculateBound()).toEqual(expectRange);
    });
    it('[odd] middle page bound (normal case) => current: 8, range: 5, should return { min: 5, max: 9}', () => {
      input.page = 8;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectRange = { min: 5, max: 9 };
      expect(wrapper.instance().calculateBound()).toEqual(expectRange);
    });

    it('[odd] before last page bound => current: 14, range: 5, should return { min: 10, max: 14}', () => {
      input.page = 14;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectRange = { min: 10, max: 14 };
      expect(wrapper.instance().calculateBound()).toEqual(expectRange);
    });
    it('[odd] last page bound => current: 15, range: 5, should return { min: 10, max: 14}', () => {
      input.page = 15;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectRange = { min: 10, max: 14 };
      expect(wrapper.instance().calculateBound()).toEqual(expectRange);
    });
    it('[even] first page bound => current: 1, range: 4, should return { min: 0, max: 3}', () => {
      input.page = 1;
      input.pageRangeDisplayed = 4;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectRange = { min: 0, max: 3 };
      expect(wrapper.instance().calculateBound()).toEqual(expectRange);
    });
    it('[even] second page bound => current: 1, range: 4, should return { min: 0, max: 3}', () => {
      input.page = 2;
      input.pageRangeDisplayed = 4;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectRange = { min: 0, max: 3 };
      expect(wrapper.instance().calculateBound()).toEqual(expectRange);
    });
    it('[even] middle page bound (normal case) => current: 4, range: 4, should return { min: 2, max: 5}', () => {
      input.page = 4;
      input.pageRangeDisplayed = 4;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectRange = { min: 2, max: 5 };
      expect(wrapper.instance().calculateBound()).toEqual(expectRange);
    });
    it('[even] before last page bound => current: 14, range: 4, should return { min: 11, max: 14}', () => {
      input.page = 14;
      input.pageRangeDisplayed = 4;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectRange = { min: 11, max: 14 };
      expect(wrapper.instance().calculateBound()).toEqual(expectRange);
    });
    it('[even] last page bound => current: 15, range: 4, should return { min: 11, max: 14}', () => {
      input.page = 15;
      input.pageRangeDisplayed = 4;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectRange = { min: 11, max: 14 };
      expect(wrapper.instance().calculateBound()).toEqual(expectRange);
    });
  });

  describe('pagination function', () => {
    it('should return list of pagination', () => {
      input.pageRangeDisplayed = 3;
      const wrapper = shallow(<PaginationBox {...input} />);
      const expectComponent = [
        <PaginationItem
          key={0}
          url={'/1'}
          selected={true}
          pageClassName={'page'}
          pageLinkClassName={'page-link'}
          activeClassName={'active'}
          id={'page-1'}
          label={'1'}
        />,
        <PaginationItem
          key={1}
          url={'/2'}
          selected={false}
          pageClassName={'page'}
          pageLinkClassName={'page-link'}
          activeClassName={'active'}
          id={'page-2'}
          label={'2'}
        />,
        <PaginationItem
          key={2}
          url={'/3'}
          selected={false}
          pageClassName={'page'}
          pageLinkClassName={'page-link'}
          activeClassName={'active'}
          id={'page-3'}
          label={'3'}
        />,
      ];
      expect(wrapper.instance().pagination()).toEqual(expectComponent);
    });
  });

  describe('render function', () => {
    it('should contain class pagination and all paginationItem', () => {
      input.page = 8;
      const wrapper = shallow(<PaginationBox {...input} />);
      expect(wrapper.is('.pagination')).toBe(true);
      expect(wrapper.find('PaginationItem').length).toEqual(9);
    });
  });

  describe('check props', () => {
    it('should not use default props', () => {
      const props = {
        pageCount: 15,
        pageRangeDisplayed: 1,
        page: 8,
        genUrl: (page) => `/${page}`,
        firstLabel: 'first',
        previousLabel: 'previous',
        nextLabel: 'next',
        lastLabel: 'last',
        containerClassName: 'my-pagination',
        pageClassName: 'my-page',
        pageLinkClassName: 'my-page-link',
        activeClassName: 'my-active',
        firstClassName: 'my-first',
        previousClassName: 'my-previous',
        nextClassName: 'my-next',
        lastClassName: 'my-last',
        firstLinkClassName: 'my-first-link',
        previousLinkClassName: 'my-previous-link',
        nextLinkClassName: 'my-next-link',
        lastLinkClassName: 'my-last-link',
      };

      const expectComponents = [
        <PaginationItem
          url={'/1'}
          pageClassName={'my-first'}
          pageLinkClassName={'my-first-link'}
          activeClassName={'my-active'}
          id={'first-button'}
          label={'first'}
        />,
        <PaginationItem
          url={'/7'}
          pageClassName={'my-previous'}
          pageLinkClassName={'my-previous-link'}
          activeClassName={'my-active'}
          id={'previous-button'}
          label={'previous'}
        />,
        <PaginationItem
          key={0}
          url={'/8'}
          selected={true}
          pageClassName={'my-page'}
          pageLinkClassName={'my-page-link'}
          activeClassName={'my-active'}
          id={'page-8'}
          label={'8'}
        />,
        <PaginationItem
          url={'/9'}
          pageClassName={'my-next'}
          pageLinkClassName={'my-next-link'}
          activeClassName={'my-active'}
          id={'next-button'}
          label={'next'}
        />,
        <PaginationItem
          url={'/15'}
          pageClassName={'my-last'}
          pageLinkClassName={'my-last-link'}
          activeClassName={'my-active'}
          id={'last-button'}
          label={'last'}
        />,
      ];
      const wrapper = shallow(<PaginationBox {...props} />);
      expect(wrapper.is('.my-pagination')).toBe(true);
      expect(wrapper.containsAllMatchingElements(expectComponents)).toBe(true);
    });
  });
});
