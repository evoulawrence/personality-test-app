import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, waitFor, cleanup } from '@testing-library/react';
import mockedAxios from './__mocks__/axios';
import { jsonData } from './__mocks__/jsonData';
import PersonalityTest from '../pages/PersonalityTest/PersonalityTest';
import Question from '../components/Question/Question';
import Option from '../components/Option/Option';

afterEach(cleanup);

describe('PersonalityTest', () => {
    test('mocking axios request', async () => {
        const data = jsonData;
        mockedAxios.get.mockResolvedValueOnce({data});
        const { getAllByRole } = render(<BrowserRouter><PersonalityTest /></BrowserRouter>);
        await waitFor(() => {
            expect(<Question />);
            expect(<Option />);
            const answerList = getAllByRole('listitem');
            expect(answerList).toHaveLength(4);
        });
    });
});