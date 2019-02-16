import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';


describe('rendering', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    it('should render the Header', () => {
        expect( wrapper.find('Header')).toHaveLength(1);        
    })
    it('should render the Main', () => {
        expect( wrapper.find('Main')).toHaveLength(1);        
    })
    it('should render the Footer', () => {
        expect( wrapper.find('Main')).toHaveLength(1);        
    })
})