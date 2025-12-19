import { StyleSheet } from "react-native";
import { THEME_TYPE } from "../../common/colors";
import { Theme } from "../../utils/theme";

const styleGenerator = (theme: THEME_TYPE) => StyleSheet.create({
  container: {
    paddingVertical: 24,
    backgroundColor: theme.background,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 5,
  },
  radioGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  radioButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 16,
  },
  label: {
    marginBottom: 12,
    color: theme.textPrimary,
  },
  optionSelected: {
    color: theme.textPrimary,
  },
  option: {
    color: theme.textSecondary,
  },
  btnContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: theme.primary,
    alignItems: 'center'
  }
});

const styles = Theme.generate(styleGenerator);
export default styles;
