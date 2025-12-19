import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import { ThemeProvider } from './src/contexts/ThemeProvider';
import ExpenseProvider from './src/contexts/ExpenseProvider';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ExpenseProvider>
          <HomeScreen />
        </ExpenseProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
