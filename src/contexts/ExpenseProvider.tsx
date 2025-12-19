import React, { createContext, useState, useEffect, PropsWithChildren } from 'react';
import { saveToStorage, loadFromStorage, deleteStorage } from '../utils/storage';
import { IExpense } from '../common/expense';

const initState = {
  expenses: [] as IExpense[],
  addExpense: (expense: IExpense) => {},
  calculateSummary: () => {},
}

export const ExpenseContext = createContext(initState);

const ExpenseProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);

  useEffect(() => {
    // delete all stored item
    // deleteStorage();
    const stored = loadFromStorage('expenses', []);
    setExpenses(stored);
  }, []);

  const addExpense = (expense: IExpense) => {
    const newList = [{ id: Date.now(), ...expense }, ...expenses];
    setExpenses(newList);
    saveToStorage('expenses', newList);
  };

  const calculateSummary = () => {
    let income = 0;
    let expense = 0;
    expenses.forEach((e) => {
      if (e.type === 'INCOME') income += +e.amount;
      else expense += +e.amount;
    });
    return {
      totalIncome: income,
      totalExpense: expense,
      balance: income - expense,
    };
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, calculateSummary }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;
