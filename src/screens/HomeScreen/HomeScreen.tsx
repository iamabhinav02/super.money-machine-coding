import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useThemedStyle } from '../../hooks/useThemedStyle';
import { useTheme } from '../../contexts/ThemeProvider';
import styles from './styles';

const HomeScreen = () => {
  const { theme, setTheme } = useTheme();
  const style = useThemedStyle(styles);

  return (
    <View style={style.container}>
      <Text style={style.text}>
        Current Theme: {theme}
      </Text>
      <TouchableOpacity
        onPress={() => setTheme(theme === "LIGHT" ? "DARK" : "LIGHT")}
        style={style.button}
      >
        <Text>
          Toggle Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
