import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';


describe('rendering', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Input />)
    })
    it('should render an input', () => {
        expect(wrapper.find('#user-input')).toHaveLength(1)
    })
})