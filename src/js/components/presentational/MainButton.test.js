import React from 'react';
import { shallow } from 'enzyme';
import MainButton from './MainButton';


describe('rendering', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<MainButton />)
    })
    it('should render a button', () => {
        expect(wrapper.find('button')).toHaveLength(1)
    })
})
