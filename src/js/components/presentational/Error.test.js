import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Error from './Error';


describe('rendering', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Error />)
    })
    it('should render an error box', () => {
        expect( wrapper.find('.alert')).toHaveLength(1);        
    })
})

describe('conditional rendering', () => {
    let component
    beforeEach(() => {
        component = mount(<Error />);
    })
    it('should render an error message given in props', () => {
        component.setProps({ errorMessage: 'Some error message' });
        expect( component.text()).toEqual('Some error message');    
    })
})