import React, { useState, useContext, useCallback, useRef } from 'react';
import { View, TextInput, Text, Pressable, TouchableOpacity } from 'react-native';
import { ExpenseContext } from '../../contexts/ExpenseProvider';
import styles from './styles';
import useThemedStyle from '../../hooks/useThemedStyle';
import { useTheme } from '../../contexts/ThemeProvider';
import { THEME, THEME_TYPES } from '../../common/colors';

const categories = ['Food', 'Travel', 'Shopping', 'Other'];
const types = ['EXPENSE', 'INCOME'];

const AddExpense = () => {
  const { addExpense } = useContext(ExpenseContext);
  const { mode } = useTheme();
  const style = useThemedStyle(styles);

  const titleRef = useRef(null);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [type, setType] = useState('EXPENSE');

  const resetForm = useCallback(() => {
    setAmount('')
    setTitle('')
    setCategory('Food')
    setType('EXPENSE')
    titleRef.current?.focus();
  }, []);

  const save = useCallback(() => {
    if (!title || !amount) return;
    addExpense({ title, amount: +amount, category, type, date: new Date().getMilliseconds() });
    resetForm();
  }, [addExpense, amount, category, resetForm, title, type]);

  const renderRadioGroup = (options, selectedValue, onSelect) => {
    return (
      <View style={style.radioGroup}>
        {options.map((option) => (
          <Pressable
            key={option}
            style={[
              style.radioButton,
              {backgroundColor: option === selectedValue ? THEME[THEME_TYPES[mode]].primary : THEME[THEME_TYPES[mode]].surface}
            ]}
            onPress={() => onSelect(option)}
          >
            <Text style={option === selectedValue ? style.optionSelected : style.option}>
              {option}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  return (
    <View style={style.container}>
      <TextInput
        placeholder="Title"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
        style={style.input}
        ref={titleRef}
      />
      <TextInput
        placeholder="Amount"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={style.input}
      />

      <Text style={style.label}>Category</Text>
      {renderRadioGroup(categories, category, setCategory)}

      <Text style={style.label}>Type</Text>
      {renderRadioGroup(types, type, setType)}

      <TouchableOpacity
        onPress={save}
        style={style.btnContainer}
      >
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddExpense;
