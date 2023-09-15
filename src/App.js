import "@fontsource/inter/variable.css";
import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import theme from "assets/theme";
import { Notification } from "components";
import { Container, Sidebar } from "layout";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { store } from "redux/store";
import RoutesPath from "router";
import { __TOKEN } from "utils/constant";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  localStorage.setItem("authToken", __TOKEN);

  function handleScroll(e) {
    if (
      e.target.tagName.toLowerCase() === "input" &&
      e.target.type === "number" &&
      e.target === document.activeElement &&
      !e.target.readOnly
    ) {
      e.target.readOnly = true;
      setTimeout(
        function (el) {
          el.readOnly = false;
        },
        0,
        e.target
      );
    }
  }

  document.addEventListener("wheel", function (e) {
    handleScroll(e);
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Notification />
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <Stack direction="row">
            {/* Enable side if needed */}
            {/* <Sidebar /> */}
            <Container
              sx={{
                // width: "calc( 100% - 300px )",
                // maxWidth: { xs: "calc( 100% - 300px )" },
                bgcolor: "secondary.background",
                ml: "auto",
                mr: 0,
                p: { xs: 0 },
              }}
            >
              <RoutesPath />
            </Container>
          </Stack>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
