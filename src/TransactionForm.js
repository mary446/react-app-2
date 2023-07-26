import React, { useState } from 'react';

const TransactionForm = ({ onTransactionAdded }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newTransaction = { date, description, category, amount: parseFloat(amount) };
      const response = await fetch(' http://localhost:3000/transactions ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction),
      });
      if (response.ok) {
        onTransactionAdded(); // Notify parent component to update the table
        setDate('');
        setDescription('');
        setAmount('');
        setCategory('');
      } else {
        console.error('Error adding transaction:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date"></label>
      <input
        type="date"
        id="date"
        placeholder="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <label htmlFor="description"></label>
      <input
        type="text"
        id="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label htmlFor="category"></label>
      <input
        type="text"
        id="category"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <label htmlFor="amount"></label>
      <input
        type="number"
        id="amount"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;