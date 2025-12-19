import React from 'react';
import { View, Text } from 'react-native';
import useThemedStyle from '../../hooks/useThemedStyle';
import styles from './styles';

const Summary = ({ summary }) => {
  const style = useThemedStyle(styles);

  return (
    <View style={style.summaryContainer}>
      <Text style={style.balanceText}>Balance: ₹{summary.balance}</Text>
      <Text style={style.incomeText}>Income: ₹{summary.totalIncome}</Text>
      <Text style={style.expenseText}>Expense: ₹{summary.totalExpense}</Text>
    </View>
  );
};

export default Summary;
