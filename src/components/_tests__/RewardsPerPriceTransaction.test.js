import { render, screen } from "@testing-library/react";
import { RewardsPerPriceTransaction } from '../RewardsPerPriceTransaction';

describe('test cases to test RewardsPerPriceTransaction file', () => {
    it('to test to render list transactionid, price, rewards, date,', () => {
        const { getByClass, container } = render(<RewardsPerPriceTransaction transactionid={"123"} price={"1234"} rewards={"34"} date={"12/31/2021"}  />);
        expect(container.getElementsByClassName('trasactionid').length).toBe(1);
        screen.getByText('Transactionid: 123');
        expect(container.getElementsByClassName('price').length).toBe(1);
        screen.getByText('price: 1234')
        expect(container.getElementsByClassName('rewards').length).toBe(1);
        screen.getByText('rewards: 34')
        expect(container.getElementsByClassName('date').length).toBe(1);
        screen.getByText('date: 12/31/2021')
    })
});