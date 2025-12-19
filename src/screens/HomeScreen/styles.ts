import { StyleSheet } from "react-native";
import { THEME_TYPE } from "../../common/colors";
import { Theme } from "../../utils/theme";

const styleGenerator = (theme: THEME_TYPE) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.background,
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 8,
      backgroundColor: theme.primary,
    },
    text: {
      color: theme.textPrimary,
      fontWeight: "600",
      marginBottom: 12,
    }
  });

const styles = Theme.generate(styleGenerator);
export default styles;
