import React from 'react';

export const RewardsPerPriceTransaction = ({ transactionid, price, rewards, date }) => (
    <li>
        <div className="trasactionid"> Transactionid: {transactionid}</div>
        <div className="price"> price: {price}</div>
        <div className="rewards"> rewards: {rewards}</div>
        <div className="date"> date: {date}</div>
    </li>
)