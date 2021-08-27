import React from 'react';
import { TransactionList } from './CalculateRewards';
import { RewardsPerPriceTransaction } from './RewardsPerPriceTransaction';

const Transaction = ({customerId, customer}) => {
    let transactionList = new TransactionList();
    customer.transactions.forEach(transaction => transactionList.addTransaction(transaction));
    const listOfAllTransactions = transactionList.getAllTransactions();
    const getLastThreeTransaction = transactionList.getLast3MonthsList();
    const getTotalRewards = transactionList.getTotalRewards();
    const lastThreeMonthsRewards = transactionList.rewardPerMonth();
    return (
        <>
          <tr>
              <td className="customer_id">{customerId}</td>
              <td className="list_of_transactions_per_price">{listOfAllTransactions.map((item, i) => (
                    <ul key={i}>
                        <RewardsPerPriceTransaction
                            transactionid={item.transactionid}
                            price={item.price}
                            rewards={item.rewards}
                            date={item.date}
                        />
                    </ul>))}
                </td>
              <td className="get_three_months_transactions">{getLastThreeTransaction.map((item, i) => (
                    <ul key={i}>
                        <RewardsPerPriceTransaction 
                            transactionid={item.transactionid}
                            price={item.price} 
                            rewards={item.rewards} 
                            date={item.date} 
                        />
                    </ul>))}
                </td>
              <td className="get_total_rewards">{getTotalRewards}</td>
              <td className="reward_per_month">{lastThreeMonthsRewards.map((reward, i) => <p key={i}>{reward}</p>)}</td>
          </tr>
        </>
    )
}

export default Transaction;