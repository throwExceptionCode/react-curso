
//import { render } from "@testing-library/react";

import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas GifGridItem', () => {
    const title = 'Titulo';
    const url = 'https://localhost/img.jpg';
    let wrapper = shallow(<GifGridItem title={ title } url={ url } id={ 1 } />);
    beforeEach(()=>{
        wrapper = shallow(<GifGridItem title={ title } url={ url } id={ 1 } />);
    });

    
    test('should be match with snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should be p like title', () => {
        const h5 = wrapper.find('.TituloImagen').text().trim();
        expect(h5).toBe(title); 
    });
    test('should be img from url and alt of props', () => {
        const img = wrapper.find('img').props();
        expect(img.src).toBe(url); 
        expect(img.alt).toBe(title); 
    })
    
    test('should be animated css', () => {
        const div = wrapper.find('div').props();
        //expect(div.className.search('animate__backInDown')>1 && true).toBe(true);
        expect(div.className.includes('animate__backInDown')).toBe(true);
    })
    
    

    
    
    
});

