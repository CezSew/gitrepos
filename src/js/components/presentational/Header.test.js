import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from './Header';


describe('rendering', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Header />)
    })
    it('should render <Search />', () => {
        expect( wrapper.find('Search')).toHaveLength(1);        
    })
    it('should render h1', () => {
        expect( wrapper.find('h1')).toHaveLength(1);        
    })
})