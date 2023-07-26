import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import TransactionFilter from './TransactionFilter';
 import "./style.css";
 import "./db.json";
const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch(' http://localhost:3000/transactions');
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleFilter = (searchTerm) => {
    // Filter transactions based on the search term
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  const handleTransactionAdded = () => {
    // After adding a new transaction, refresh the table
    fetchTransactions();
  };

  return (
    <div>
      <h1>The Royal Bank of Flatiron</h1>
      <TransactionFilter onFilter={handleFilter} />
      <TransactionForm onTransactionAdded={handleTransactionAdded} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;