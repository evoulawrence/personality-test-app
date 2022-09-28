import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/Home/Home';

const mockedNavigator = jest.fn();

beforeEach(() => {
    mockedNavigator.mockReset();
});

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom")),
    useNavigate: () => mockedNavigator,
}));

describe("Home", () => {
    test("page is rendered", () => {
        render(<BrowserRouter><Home/></BrowserRouter>);
        expect(screen.getByText(/Let's Go/i)).toBeInTheDocument();
    });

    test("navigate to Personality Test page", () => {
        render(<BrowserRouter><Home/></BrowserRouter>);
        expect(screen.getByText(/Let's Go/i)).toBeInTheDocument();
        const letsGo = screen.getByText(/Let's Go/i);
        fireEvent.click(letsGo);
        expect(mockedNavigator).toBeCalledTimes(1);
        expect(mockedNavigator).toHaveBeenCalledWith("/personality-test");
    });
});
