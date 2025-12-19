export const THEME_TYPES: {
  dark: 'DARK';
  light: 'LIGHT';
} = {
  dark: 'DARK',
  light: 'LIGHT',
};

export const THEME = {
	LIGHT: {
		background: "#FFFFFF",
		surface: "#F5F5F5",
		textPrimary: "#000000",
		textSecondary: "#555555",
		primary: "#1E88E5",
		border: "#E0E0E0",
		buttonText: "#FFFFFF",
	},
	DARK: {
		background: "#121212",
		surface: "#1E1E1E",
		textPrimary: "#FFFFFF",
		textSecondary: "#BBBBBB",
		primary: "#90CAF9",
		border: "#333333",
		buttonText: "#000000",
	},
};

export type THEME_TYPE = typeof THEME.LIGHT;

