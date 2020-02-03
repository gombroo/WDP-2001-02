import React from 'react';
import { shallow } from 'enzyme';
import Blog from './Blog';

describe('Component Blog', () => {
  it('should render without crashing', () => {
    const component = shallow(<Blog />);
    expect(component).toBeTruthy();
  });
});
