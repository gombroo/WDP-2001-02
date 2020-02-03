import React from 'react';
import { shallow } from 'enzyme';
import BlogPost from './BlogPost';

describe('Component BlogPost', () => {
  it('should render without crashing', () => {
    const component = shallow(<BlogPost />);
    expect(component).toBeTruthy();
  });
});
