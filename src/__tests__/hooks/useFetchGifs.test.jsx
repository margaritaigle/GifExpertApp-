import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react";

describe('Tests on useFetchGifs hook', () => { 
    test('should return the initial state', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });
 });