import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { MessageBar } from './MessageBar';

describe('MessageBar', () => {
  const noop = () => {
    /* no-op */
  };

  it('renders MessageBar correctly', () => {
    const component = renderer.create(<MessageBar>Message</MessageBar>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('dismiss', () => {
    describe('single-line', () => {
      it('is present when onDismiss exists', () => {
        const wrapper = mount(<MessageBar onDismiss={noop} isMultiline={false} />);
        const dismissElement = wrapper.find('.ms-MessageBar-dismissal');
        expect(dismissElement.exists()).toBe(true);
      });

      it('is not present when onDismiss is missing', () => {
        const wrapper = mount(<MessageBar isMultiline={false} />);
        const dismissElement = wrapper.find('.ms-MessageBar-dismissal');
        expect(dismissElement.exists()).toBe(false);
      });
    });

    describe('multi-line', () => {
      it('is present when onDismiss exists', () => {
        const wrapper = mount(<MessageBar onDismiss={noop} isMultiline={true} />);
        const dismissElement = wrapper.find('.ms-MessageBar-dismissal');
        expect(dismissElement.exists()).toBe(true);
      });

      it('is not present when onDismiss is missing', () => {
        const wrapper = mount(<MessageBar isMultiline={true} />);
        const dismissElement = wrapper.find('.ms-MessageBar-dismissal');
        expect(dismissElement.exists()).toBe(false);
      });
    });
  });

  describe('truncated', () => {
    it('is present when onDismiss exists', () => {
      const wrapper = mount(<MessageBar truncated={true} isMultiline={false} />);
      const expandElement = wrapper.find('.ms-MessageBar-expand');
      expect(expandElement.exists()).toBe(true);
    });

    it('is not present when truncated is missing', () => {
      const wrapper = mount(<MessageBar isMultiline={false} />);
      const expandElement = wrapper.find('.ms-MessageBar-expand');
      expect(expandElement.exists()).toBe(false);
    });
  });
});
