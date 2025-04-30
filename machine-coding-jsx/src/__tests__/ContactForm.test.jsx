import React from 'react';
const { render, screen, fireEvent } = require("@testing-library/react");
import ContactForm from '../Pages/ContactForm';

describe('ContactForm details',()=>{
    it('renders all fields',()=>{
        render (<ContactForm />);
        expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message:/i)).toBeInTheDocument();
    }),
    it('show validation message on Empty Submit', async ()=>{
        render(<ContactForm />);
        fireEvent.click(screen.getByRole('button',{name : /submit/i}));
        expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Message is required/i)).toBeInTheDocument();
    }),
    it('Submit successfully and display Thank you', async()=>{
        render(<ContactForm />);
        fireEvent.change(screen.getByLabelText(/Name:/i),{target:{value: 'Alice'}});
        fireEvent.change(screen.getByLabelText(/Email/i),{target :{value : 'abhi@xyz.com'}});
        fireEvent.change(screen.getByLabelText(/Message:/i),{target: {value: 'Hello Here is the message'}});
        fireEvent.click(screen.getByRole('button', {name: /submit/i}));
        expect(await screen.findByText(/Thank you, Alice/)).toBeInTheDocument();
    })
    it('Email Id not corrent and clicked on Submit', async()=>{
        render(<ContactForm />);
        fireEvent.change(screen.getByLabelText(/Name:/i),{target:{value: 'Alice'}});
        fireEvent.change(screen.getByLabelText(/Email/i),{target :{value : 'abhixyz.com'}});
        fireEvent.change(screen.getByLabelText(/Message:/i),{target: {value: 'Hello Here is the message'}});
        fireEvent.click(screen.getByRole('button', {name: /submit/i}));
        expect(await screen.findByText(/Invalid Email format/)).toBeInTheDocument();
    })
})