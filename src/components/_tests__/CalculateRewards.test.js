import { render, screen } from "@testing-library/react";
import { TransactionList } from '../CalculateRewards';

describe('test cases to test CalculateRewards file', () => {
    const transactions = [
        {
            "transactionid": 1,
            "price": 100,
            "date": "08/13/2021"
        },
        {
            "transactionid": 2,
            "price": 200,
            "date": "03/13/2021"
        }
    ]
    let transactionList = new TransactionList();
    transactions.forEach(transaction => transactionList.addTransaction(transaction));
    const output = '[{\"transactionDate\":\"2021-08-13T05:00:00.000Z\",\"date\":\"08/13/2021\",\"rewards\":50,\"price\":100,\"transactionid\":1},{\"transactionDate\":\"2021-03-13T06:00:00.000Z\",\"date\":\"03/13/2021\",\"rewards\":250,\"price\":200,\"transactionid\":2}]'
    it('to test to to return getAllTransactions', () => {
        expect(JSON.stringify(transactionList.getAllTransactions())).toBe(output);
    })
    it('to test to to return getTotalRewards', () => {
        expect(transactionList.getTotalRewards()).toBe(300);
    })
    it('to test to to return rewardPerMonth', () => {
        expect(JSON.stringify(transactionList.rewardPerMonth())).toBe("[50,0,0]");
    })
});