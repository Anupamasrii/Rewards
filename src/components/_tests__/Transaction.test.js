import { render, screen } from "@testing-library/react";
import Transaction from '../Transaction';

describe('test cases to test Transaction file', () => {
    const mockData = {
        "customerId": "1111",
        "transactions": [
            {
                "transactionid": 1,
                "price": 100,
                "date": "08/13/2021"
            },
            {
                "transactionid": 2,
                "price": 200,
                "date": "03/13/2021"
            },
            {
                "transactionid": 3,
                "price": 300,
                "date": "07/13/2021"
            }
        ]
    };
    it('to test to render customer Id based on Customer data', () => {
        const { getByText } = render(<Transaction customerId={mockData.customerId} customer={mockData} />);
        expect(getByText('1111')).toBeTruthy();
    });
    it('to test whether get_three_months_transactions className rendered on screen', () => {
        const { container } = render(<Transaction customerId={mockData.customerId} customer={mockData} />);
        expect(container.getElementsByClassName('get_three_months_transactions').length).toBe(1);
    });
    it('to test whether list_of_transactions_per_price className rendered on screen', () => {
        const { container } = render(<Transaction customerId={mockData.customerId} customer={mockData} />);
        expect(container.getElementsByClassName('list_of_transactions_per_price').length).toBe(1);
    });
    it('to test whether get_total_rewards className rendered on screen', () => {
        const { container } = render(<Transaction customerId={mockData.customerId} customer={mockData} />);
        expect(container.getElementsByClassName('get_total_rewards').length).toBe(1);
    });
    it('to test whether reward_per_month className rendered on screen', () => {
        const { container } = render(<Transaction customerId={mockData.customerId} customer={mockData} />);
        expect(container.getElementsByClassName('reward_per_month').length).toBe(1);
    });
});