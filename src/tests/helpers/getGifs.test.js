//import React from 'react';
//import { shallow } from "enzyme";
import { getGif } from "../../helpers/getGifs";

describe(' pruebas en getGifs fetch', () => {
    test('should be 10 items', async () => {
        const gifs = await getGif('GOT');
        expect(gifs.length).toBe(10);   
    });

    test('should be 0 items', async () => {
        const gifs = await getGif('');
        expect(gifs.length).toBe(0);   
    });
    
});
