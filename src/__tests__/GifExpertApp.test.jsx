import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe('Testing <GifExpertApp/>', () => { 
    test('should match with snapshot', () => { 
        const { container } = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();
     });

     test('The category that was already searched, will be rendered only once', async () => {
        render(<GifExpertApp/>)
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: {value: 'Gala'}});
        fireEvent.submit( form );
        
        await waitFor( () => {
            fireEvent.input( input, { target: {value: 'Gala'}});
            fireEvent.submit( form );
            const category = screen.getAllByRole('heading', {level: 3, name: 'Gala'});
            expect(category).toHaveLength(1);
        });
        
     });
 });