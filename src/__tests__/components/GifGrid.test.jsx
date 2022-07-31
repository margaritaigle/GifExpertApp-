import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";
import { useFetchGifs } from "../../hooks/useFetchGifs.js"

jest.mock('../../hooks/useFetchGifs.js');
describe('Testing GifGrid', () => { 
    const category = 'One Punch'; 

    test('should show loading first', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={ category }/>);
        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
     });

    test('should show the items when the images useFetchGifs are loaded', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://saitama.com/saitama.jpg'
            },
            {
                id: 'HOA',
                title: 'Goku',
                url: 'https://goku.com/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={ category }/>);
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
 });