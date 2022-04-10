import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Banner from "./components/Banner";
import FeaturedOne from "./components/FeaturedOne";
import FeaturedTwo from "./components/FeaturedTwo";
import FeaturedThree from "./components/FeaturedThree";
import FeaturedFour from "./components/FeaturedFour";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import "./assets/fonts/fonts.css";

type Theme = {
  typography: {
    fontFamily: (string & {}) | undefined;
  };
};
const Manrope: Theme = createTheme({
  typography: {
    fontFamily: ["Manrope"].join(","),
  },
});

function App() {
  return (
    <Box>
      <ThemeProvider theme={Manrope}>
        <Navbar />
        <Main />
        <Banner />
        <FeaturedOne />
        <FeaturedTwo />
        <FeaturedThree />
        <FeaturedFour />
        <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default App;
