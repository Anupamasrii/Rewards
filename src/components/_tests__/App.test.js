import { render, screen } from "@testing-library/react";
import App from '../App';

describe('test cases to test App file', () => {
    it('to test to render table heading Customer ID', () => {
        const { getByText } = render(<App />);
        expect(getByText('Customer ID')).toBeTruthy();
        expect(getByText('All Transactions with Prices')).toBeTruthy();
        expect(getByText('Last three months transactions')).toBeTruthy();
        expect(getByText('Total Rewards')).toBeTruthy();
        expect(getByText('lastThreeMonthsRewards')).toBeTruthy();
    })
});
