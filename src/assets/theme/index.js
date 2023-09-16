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
      main: "#6C83F3",
      gradient: "linear-gradient(270deg, #000000 0%, #404041 100%)",
    },
    secondary: {
      light: "#F95864",
      mediumLight: "#FF3250",
      main: "#FFD056",
      gradient: "linear-gradient(90deg, #FFECEC 0%, #FCDBD1 100%)",
    },
    action: {
      // The color of an active action like an icon button.
      active: "#5B6EEB",
      // The color of an hovered action.
      hover: "#EDF3FF",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "#5B6EEB",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "#D0D0D0",
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
      primary: "#0E0E1C",
      secondary: "#727272",
    },

    custom: {
      light: "#00E8BB",
      main: "#FFE843",
      dark: "#5B6EEB",
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
      main: "#61BD85",
    },
    error: {
      light: "#F9EBEC",
      main: "#D95353",
    },

    contrastThreshold: 3,

    tonalOffset: 0.2,
  },
  background: { default: "#F7F7F7", alt: "#fff" },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontWeightLight: 400,
    fontWeightLight: 500,
    fontWeightBold: 600,
    fontWeightBolder: 900,
    h1: {
      fontFamily: "Roboto",
      fontWeightBold: 700,
    },
    h2: {
      fontFamily: "Roboto",
      fontWeightBold: 600,
    },
    h3: {
      fontFamily: "Roboto",
      fontWeightBold: 500,
    },
    h4: {
      fontFamily: "Roboto",
      fontWeightBold: 400,
    },
    h5: {
      fontFamily: "Roboto",
      fontWeightBold: 500,
    },
    h6: {
      fontFamily: "Roboto",
      fontWeightBold: 500,
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontWeightBold: 500,
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontWeightBold: 400,
    },
    body1: {
      fontFamily: "Roboto",
      fontWeightBold: 400,
      colo: "#727272",
    },
    body2: {
      fontFamily: "Roboto",
      fontWeightBold: 400,
      colo: "#727272",
    },
    button: {
      fontFamily: "Roboto",
      fontWeightBold: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "2rem",
          textTransform: "capitalize",
          border: "1.5px solid #5B6EEB",
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
