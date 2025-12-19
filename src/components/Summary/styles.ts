import { StyleSheet } from "react-native";
import { THEME_TYPE } from "../../common/colors";
import { Theme } from "../../utils/theme";

const styleGenerator = (theme: THEME_TYPE) => StyleSheet.create({
  summaryContainer: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: theme.surface,
  },
  balanceText: {
    fontSize: 18,
    marginBottom: 5,
    color: theme.textPrimary,
  },
  incomeText: {
    fontSize: 14,
    color: 'green'
  },
  expenseText: {
    fontSize: 14,
    color: 'red'
  },
});

const styles = Theme.generate(styleGenerator);
export default styles;
