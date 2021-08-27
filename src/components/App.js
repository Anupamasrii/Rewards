import '../styles/App.css';
import data from "../mockData/dataSet.json";
import Transaction from './Transaction';

const App = () => {
  const { customerProfiles } = data;
  return (
    <div>
      <table id="customers">
        <tr>
          <th>Customer ID</th>
          <th>All Transactions with Prices</th>
          <th>Last three months transactions</th>
          <th>Total Rewards</th>
          <th>lastThreeMonthsRewards</th>
        </tr>
        {customerProfiles.map((customer, i) => <Transaction key={i} customer={customer} customerId={customer.customerId} />)}
      </table>   
    </div>
  );
}

export default App;
