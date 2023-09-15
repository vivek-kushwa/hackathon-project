import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    common: {
      white: "#fff",
      black: "#000",
    },
    primary: {
      light: "#C8C8C8",
      mediumLight: "#8C8C8C",
      main: "#1E1E1E",
      gradient: "linear-gradient(270deg, #000000 0%, #404041 100%)",
    },
    secondary: {
      light: "#F95864",
      mediumLight: "#FF3250",
      main: "#F00037",
      gradient: "linear-gradient(90deg, #FFECEC 0%, #FCDBD1 100%)",
    },
    action: {
      // The color of an active action like an icon button.
      active: "#FF3250",
      // The color of an hovered action.
      // hover: "#4D4D4D",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "#FF3250",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "#fff",
      // The background color of a disabled action.
      disabledBackground: "#B3B3B3",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
    neutrals: {
      light: "#F2F2F2",
      main: "#4D4D4D",
      dark: "#1E1E1E",
      50: "#fff",
      100: "#F5F5F5",
      200: "#F7F7F7",
      300: "#E6E6E6",
      400: "#D9D9D9",
      500: "#CCCCCC",
      600: "#BFBFBF",
      700: "#B3B3B3",
      800: "#A6A6A6",
      900: "#999999",
      A50: "#8C8C8C",
      A80: "#808080",
      A100: "#333333",
      A200: "#262626",
      A400: "#1A1A1A",
      A700: "#1E1E1E",
    },
    text: {
      primary: "#1E1E1E",
      secondary: " #8C8C8C",
    },

    custom: {
      light: "#00E8BB",
      main: "#FFE843",
      dark: "#DAA8E2",
      contrastText: "#1E1E1E",
    },
    warning: {
      main: "#FFE843",
    },
    info: {
      light: "#FFE8CD",
      main: "#CB7A00",
    },
    success: {
      light: "#CFFBE3",
      main: "#067E3D",
    },
    error: {
      light: "#F9EBEC",
      main: "#F00037",
    },

    contrastThreshold: 3,

    tonalOffset: 0.2,
  },
  background: { default: "#F7F7F7", alt: "#fff" },
  typography: {
    fontFamily: [
      "Gellix-Regular",
      "Gellix-Medium",
      "Gellix-SemiBold",
      "Gellix-Bold",
      "Gellix-ExtraBold",
      "Proxima_Nova-Regular",
      "Proxima_Nova-SemiBold",
      "Proxima_Nova-Bold",
      "sans-serif",
    ].join(","),
    fontWeightLight: 400,
    fontWeightBold: 600,
    fontWeightBolder: 900,
    h1: {
      fontFamily: "Gellix-SemiBold",
    },
    h2: {
      fontFamily: "Gellix-SemiBold",
    },
    h3: {
      fontFamily: "Gellix-SemiBold",
    },
    h4: {
      fontFamily: "Gellix-SemiBold",
    },
    h5: {
      fontFamily: "Gellix-SemiBold",
    },
    h6: {
      fontFamily: "Gellix-SemiBold",
    },
    subtitle1: {
      fontFamily: "Proxima_Nova-Bold",
    },
    subtitle2: {
      fontFamily: "Proxima_Nova-SemiBold",
    },
    body1: {
      fontFamily: "Proxima_Nova-Regular",
    },
    body2: {
      fontFamily: "Proxima_Nova-Regular",
    },
    button: {
      fontFamily: "Gellix-Bold",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          borderRadius: 5,
          letterSpacing: "0.8px",
          textTransform: "uppercase",
          paddingLeft: "30px",
          paddingRight: "30px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
          fontSize: "inherit",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#4D4D4D",
          ":hover": {
            backgroundColor: "#F2F2F2",
          },
          "&.Mui-disabled": {
            color: "#CCC",
          },
        },
      },
    },
  },
});

export default theme;
