import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('testing GifItem', () => { 
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('should match with snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('should show the gif with the indicated URL and ALT', () => {
        render(<GifItem title={title} url={url} />);

        // expect( screen.getByRole('img').src ).toBe(url);
        // expect( screen.getByRole('img').alt ).toBe(title);

        const { alt, src} = screen.getByRole('img');
        expect(alt).toBe(title);
        expect(src).toBe(url);
    });

    test('should show the title in the component', () => { 
        render(<GifItem title={title} url={url} />);

        const componentDesc = screen.getByText( title );
        expect(componentDesc).toBeTruthy();
     });

})