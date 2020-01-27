import React from 'react';
import { shallow } from 'enzyme';
import Promotion from './Promotion';

describe('Component Promotion', () => {
  it('should render without crashing', () => {
    const component = shallow(<Promotion />);
    expect(component).toBeTruthy();
  });
});
