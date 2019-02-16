import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Main from './Main';


describe('rendering', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Main />)
    })
    it('should not render <Error /> on init', () => {
        expect( wrapper.find('Error')).toHaveLength(0);        
    })
    it('should not render <Repositories /> on init', () => {
        expect( wrapper.find('Repositories')).toHaveLength(0);        
    })
    it('should not render <MainButton /> on init', () => {
        expect( wrapper.find('MainButton')).toHaveLength(0);        
    })
    it('should render container', () => {
        expect( wrapper.find('main')).toHaveLength(1);        
    })
})

describe('conditional rendering', () => {
    let component
    beforeEach(() => {
        component = mount(<Main />);
    })
    it('should render <Error /> on error props', () => {
        component.setProps({ err: 'true' });
        expect( component.find('Error')).toHaveLength(1);    
    })
    it('should render <MainButton /> if not last page and repos are truthy', () => {
        component.setProps({ isLastPage: false, repos: [{testName: 'repository'}] });
        expect( component.find('MainButton')).toHaveLength(1);    
    })
    it('should render <Repositories /> if no error and repos are truthy', () => {
        component.setProps({ err: false, repos: [{testName: 'repository'}] });
        expect( component.find('Repositories')).toHaveLength(1);    
    })
})
