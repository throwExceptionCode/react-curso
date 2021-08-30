import React from 'react';
import { shallow } from "enzyme";
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFechGifts';

jest.mock('../../hooks/useFechGifts');

describe('Pruebas con GifGrid', () => {
    
    
    test('should ber match with snapshot', () => {
        const category = 'got';
        //falsear data
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should ber show img items useFetch', () => {
        //falsear data
        const gifs = [
            {
                id: 1, 
                title: 'img.title', 
                url: 'img.images.downsized_medium.url'
            },
            {
                id: 2, 
                title: 'img.title', 
                url: 'img.images.downsized_medium.url'
            }
        ];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const category2 = 'got2';
        const wrapper = shallow(<GifGrid category={category2} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
});
