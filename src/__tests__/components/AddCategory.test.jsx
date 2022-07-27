import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddCategory } from "../../components/AddCategory";

describe('Test in AddCategory', () => { 

    test('the textbox value should change', () => {

        render( <AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');

        // userEvent.type(input, 'One Punch');
        fireEvent.input( input, { target: {value: 'One Punch'}});

        expect( input.value ).toBe('One Punch');
     });

     test('should call onNewCategory if the value is not empty', () => { 
        const inputValue = 'Saitama';

        render( <AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue}});
        fireEvent.submit( form );
        expect(input.value).toBe("");
      });
 })