import { StyleSheet } from "react-native";
import { THEME_TYPE } from "../../common/colors";
import { Theme } from "../../utils/theme";

const styleGenerator = (theme: THEME_TYPE) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
      paddingHorizontal: 24,
      backgroundColor: theme.background,
    },
    summaryContainer: {
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
    },
    balanceText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    incomeText: {
      fontSize: 14,
    },
    expenseText: {
      fontSize: 14,
    },
    headerButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    listContainer: {
      paddingBottom: 20,
    },
    expenseItem: {
      padding: 15,
      borderRadius: 10,
      marginBottom: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.surface,
    },
    expenseTitle: {
      fontSize: 16,
      color: theme.textPrimary
    },
    expenseDate: {
      fontSize: 12,
      color: theme.textPrimary,
    },
    expenseAmount: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    expenseType: {
      fontSize: 12,
      color: theme.textPrimary
    },
    emptyText: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 50,
    },
    filterLabel: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 10,
    },
    radioGroup: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 10,
    },
    radioButton: {
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderRadius: 20,
      marginRight: 10,
      marginBottom: 10,
    },
    button: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 8,
      backgroundColor: theme.primary,
      alignItems: 'center'
    },
    text: {
      color: theme.textPrimary,
      fontWeight: "600",
      marginBottom: 12,
    }
  });

const styles = Theme.generate(styleGenerator);
export default styles;
