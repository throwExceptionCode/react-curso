import React from 'react';
import { shallow } from "enzyme";
import { GifExpertApp } from '../gifExpertApp';

describe('Pruebas de Componente GifExpert', () => {
    test('should be match with snapshot', () => {
        const wrapper = shallow(<GifExpertApp  />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should be show a list of category', () => {
        const categories = ['dog','dig'];
        const wrapper = shallow(<GifExpertApp defaultCategory={ categories } />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);    
    });

    
    
})
