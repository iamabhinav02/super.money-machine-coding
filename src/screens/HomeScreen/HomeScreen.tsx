import React, { useCallback, useContext, useMemo } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import dayjs from 'dayjs';
import { useThemedStyle } from '../../hooks/useThemedStyle';
import { useTheme } from '../../contexts/ThemeProvider';
import AddTransaction from '../../components/AddTransaction';
import styles from './styles';
import { ExpenseContext } from '../../contexts/ExpenseProvider';
import Summary from '../../components/Summary';
import { saveToStorage } from '../../utils/storage';

const HomeScreen = () => {
  const { expenses, calculateSummary } = useContext(ExpenseContext);
  const { theme, setTheme } = useTheme();
  const style = useThemedStyle(styles);

  const summary = calculateSummary();

  const SummaryComponent = useMemo(() => <Summary summary={summary} />, [summary]);

  const EmptyComponent = useMemo(() => <Text style={style.emptyText}>No transactions added.</Text>, [style.emptyText]);

  const toggleTheme = useCallback(() => {
    saveToStorage('theme', theme === "LIGHT" ? "DARK" : "LIGHT");
    setTheme(theme === "LIGHT" ? "DARK" : "LIGHT");
  }, [setTheme, theme]);

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={toggleTheme}
        style={style.button}
      >
        <Text>Toggle Theme</Text>
      </TouchableOpacity>

      <AddTransaction />
      <FlatList
        ListEmptyComponent={EmptyComponent}
        ListHeaderComponent={SummaryComponent}
        showsVerticalScrollIndicator={false}
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={style.listContainer}
        renderItem={({ item }) => (
          <View style={style.expenseItem}>
            <View>
              <Text style={[style.expenseTitle]}>{item.category}</Text>
              <Text style={[style.expenseDate]}>{dayjs(item.id).format('DD-MM-YYYY')}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text
                style={[
                  style.expenseAmount,
                  { color: item.type === 'INCOME' ? 'green' : 'red' },
                ]}
              >
                {item.type === 'INCOME' ? '+' : '-'}₹{item.amount}
              </Text>
              <Text style={style.expenseType}>{item.type}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
