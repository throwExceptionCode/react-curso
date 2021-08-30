import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import AddCategory from '../../components/AddCategory';



describe('Pruebas en el componente AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    });
    
    
    test('should be equal to snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    }); 
    test('should be changed input text', () => {
        const input = wrapper.find('input');
        const value='hola mundo';
        input.simulate('change',{'target':{value}});
        
    });
    test('shouldnt post information', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call SetCategory and clear tesxt input', () => {
       const value2 = 'hola mundo2';
       wrapper.find('input').simulate('change',{'target':{value:value2}});
       wrapper.find('form').simulate('submit',{preventDefault(){}});
       expect(setCategories).toHaveBeenCalled();
       expect(setCategories).toHaveBeenCalledTimes(1);
       expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
       expect(wrapper.find('input').prop('value')).toBe('');
    });
    
    
});
