const { render, screen } = require("@testing-library/react")
import ContactForm from '../Pages/ContactForm';

describe('ContactForm details',()=>{
    it('renders all fields',()=>{
        render (<ContactForm />);
        expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    })
})