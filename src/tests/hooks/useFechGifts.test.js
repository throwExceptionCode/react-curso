import { useFetchGifs } from "../../hooks/useFechGifts";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en hook usefetchGif', () => {

    test('should be return the state', async() => {
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs('got') );
        const { data,loading } = result.current;

        await waitForNextUpdate();
        
        expect(data.length).toEqual(0);
        expect(loading).toBe(true);
    });

    test('should return an array of images and loadign in false', async() => {
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs('got') );
        await waitForNextUpdate();
        const { data,loading } = result.current;
        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });
    
    
})
