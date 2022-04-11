//import React from "react";
import line3 from "../assets/icons/line3.svg";
import manyBirds from "../assets/icons/manyBirds.svg";
import charts from "../assets/images/charts.png";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputBase from "@mui/material/InputBase";
import FormHelperText from "@mui/material/FormHelperText";
import "../assets/fonts/fonts.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

type Theme = {
  typography: {
    fontFamily: (string & {}) | undefined;
  };
};
const Gilroy: Theme = createTheme({
  typography: {
    fontFamily: ["Gilroy"].join(","),
  },
});

const Footer = () => {
  const company: string[] = ["About Us", "Careers", "Blog", "Pricing"];
  const products: string[] = [
    "Invoicing Platform",
    "Accounting Plateform",
    "Create Proposal",
    "Contracts",
  ];
  const resources: string[] = [
    "Proposal Template",
    "Invoice Template",
    "Tuturoial",
    "How to write a contract",
  ];
  return (
    <Box mt="68px">
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          flexDirection: "column",
          background: "#1B1C31",
          padding: "108px 0px 30px 0px",
          paddingBottom: "30px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "90%",
            mb: 10,
            padding: "0px 78px",
            display: "flex",
            "@media only screen and (max-device-width: 500px)": {
              flexDirection: "column",
              padding: "0px 18px",
            },
          }}
        >
          <Box
            width="44%"
            mr="55px"
            sx={{
              "@media only screen and (max-device-width: 500px)": {
                width: "98%",
                mr: "15px",
                mb: 9,
              },
            }}
          >
            <Typography
              variant="h2"
              component="div"
              gutterBottom
              sx={{
                //mr: 2,
                ml: 2,
                textTransform: "uppercase",
                ...textZero,
                ...colorWhite,
                ...textWeightTwo,
                "@media only screen and (max-device-width: 500px)": {
                  fontSize: "20px",
                  lineHeight: "27px",
                },
              }}
            >
              AR Shakir
            </Typography>
            <Typography
              variant="h6"
              //noWrap
              component="div"
              sx={{
                mt: "22px",
                //mr: 2,
                ml: 2,
                display: "flex",
                opacity: "0.4",
                ...footerSubText,
                ...colorWhite,
                ...textWeightZero,
                "@media only screen and (max-device-width: 500px)": {
                  fontSize: "16px",
                  lineHeight: "26px",
                },
              }}
            >
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment.
            </Typography>
          </Box>
          <Box
            width="55%"
            ml="35px"
            mr="0px"
            sx={{
              display: "flex",
              ...justifyBetween,
              "@media only screen and (max-device-width: 500px)": {
                flexDirection: "column",
                width: "98%",
                ml: "0px",
                ...alignCenter,
              },
            }}
          >
            <Box
              sx={{
                ml: "0px",
                display: "flex",
                flexDirection: "column",
                ...alignStart,
                "@media only screen and (max-device-width: 500px)": {
                  ...alignCenter,
                  mb: 6,
                },
              }}
            >
              <Typography
                variant="h2"
                component="div"
                gutterBottom
                sx={{
                  mb: 4,
                  ...colorWhite,
                  ...footerText,
                }}
              >
                Company
              </Typography>
              {company.map((cmpny: string) => (
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  key={cmpny}
                  sx={{
                    mb: 2,
                    ...colorWhite,
                    ...footerTextCol,
                    ...textWeightZero,
                  }}
                >
                  {cmpny}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                ml: "10px",
                display: "flex",
                flexDirection: "column",
                ...alignStart,
                "@media only screen and (max-device-width: 500px)": {
                  ...alignCenter,
                  mb: 6,
                },
              }}
            >
              <Typography
                variant="h2"
                component="div"
                gutterBottom
                sx={{
                  mb: 4,
                  ...colorWhite,
                  ...footerText,
                }}
              >
                Product
              </Typography>
              {products.map((product: string) => (
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  key={product}
                  sx={{
                    mb: 2,
                    ...colorWhite,
                    ...footerTextCol,
                  }}
                >
                  {product}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                ml: "10px",
                display: "flex",
                flexDirection: "column",
                ...alignStart,
                "@media only screen and (max-device-width: 500px)": {
                  ...alignCenter,
                  mb: 0,
                },
              }}
            >
              <Typography
                variant="h2"
                component="div"
                gutterBottom
                sx={{ mb: 4, ...colorWhite, ...footerText }}
              >
                Resources
              </Typography>
              {resources.map((resource: string) => (
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  key={resource}
                  sx={{
                    mb: 2,
                    ...colorWhite,
                    ...footerTextCol,
                  }}
                >
                  {resource}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
        <ThemeProvider theme={Gilroy}>
          <Box
            sx={{
              mt: 0,
              borderTop: "1px solid #404444",
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              mb: 2,
              ...alignCenter,
            }}
          >
            <Typography
              variant="h2"
              component="div"
              gutterBottom
              sx={{
                mb: 1,
                mt: 5,
                ...colorWhite,
                ...textWeightThree,
                fontSize: "12px",
                lineHeight: "32px",
              }}
            >
              2022 AR Shakir. All rights reserved.
            </Typography>
            <Typography
              variant="h2"
              component="div"
              gutterBottom
              sx={{
                mb: 1,
                mt: 1,
                ...colorWhite,
                ...textWeightThree,
                fontSize: "12px",
                lineHeight: "32px",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="h2"
              component="div"
              gutterBottom
              sx={{
                mb: 1,
                mt: 1,
                ...colorWhite,
                ...textWeightThree,
                fontSize: "12px",
                lineHeight: "32px",
              }}
            >
              Terms of Services
            </Typography>
            <Typography
              variant="h2"
              component="div"
              gutterBottom
              sx={{
                mb: 6,
                mt: 6,
                ...colorWhite,
                ...textWeightThree,
                fontSize: "12px",
                lineHeight: "32px",
              }}
            >
              Supported by Microsoft Startup
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 3,
              borderTop: "1px solid #404444",
              padding: "28px 78px 0px",
              display: { xs: "none", md: "flex" },
              ...justifyBetween,
              height: "10%",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                ml: 6,
                ...colorWhite,
                ...footerTextBottom,
                ...textWeightThree,
              }}
            >
              2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of
              Services
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                mr: 6,
                ...colorWhite,
                ...footerTextBottom,
                ...textWeightThree,
              }}
            >
              Supported by Microsoft Startup
            </Typography>
          </Box>
        </ThemeProvider>
      </Box>
    </Box>
  );
};

const birdStyle: React.CSSProperties = {
  position: "absolute",
  //zIndex: 10,
  top: "-1.5rem",
  right: 0,
};
const border: React.CSSProperties = {
  border: "2px solid maroon",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
const styleOne: React.CSSProperties = {
  position: "absolute",
  width: "auto",
  height: "auto",
  top: "-1rem",
  bottom: 0,
  left: -80,
  right: 0,
};
const triangle: React.CSSProperties = {
  width: 0,
  height: 0,
  borderTop: "10px solid transparent",
  borderLeft: "15px solid white",
  borderBottom: "10px solid transparent",
};
const playBorder: React.CSSProperties = {
  borderRadius: "50%",
  background: "#22D497",
  width: "60px",
  height: "60px",
  boxShadow:
    "0px 100px 80px rgba(34, 212, 151, 0.07), 0px 64.8148px 46.8519px rgba(34, 212, 151, 0.0531481), 0px 38.5185px 25.4815px rgba(34, 212, 151, 0.0425185), 0px 20px 13px rgba(34, 212, 151, 0.035), 0px 8.14815px 6.51852px rgba(34, 212, 151, 0.0274815), 0px 1.85185px 3.14815px rgba(34, 212, 151, 0.0168519)",
};
const alignStart: React.CSSProperties = {
  alignItems: "flex-start",
};
const alignCenter: React.CSSProperties = {
  alignItems: "center",
};
const justifyCenter: React.CSSProperties = {
  justifyContent: "center",
};
const justifyBetween: React.CSSProperties = {
  justifyContent: "space-between",
};
const flexBox: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
const buttonSizeTwo: React.CSSProperties = {
  background: "#FF7F5C",
  color: "white",
  width: "356px",
  height: "60px",
  boxShadow:
    "0px 67px 80px rgba(255, 127, 92, 0.07), 0px 43.4259px 46.8519px rgba(255, 127, 92, 0.0531481), 0px 25.8074px 25.4815px rgba(255, 127, 92, 0.0425185), 0px 13.4px 13px rgba(255, 127, 92, 0.035), 0px 5.45926px 6.51852px rgba(255, 127, 92, 0.0274815), 0px 1.24074px 3.14815px rgba(255, 127, 92, 0.0168519)",
};
const headerSize: React.CSSProperties = {
  fontWeight: 800,
  fontSize: "50px",
  lineHeight: "80px",
};
const textWeightOne: React.CSSProperties = {
  fontWeight: 400,
};
const textWeightTwo: React.CSSProperties = {
  fontWeight: 800,
};
const textWeightZero: React.CSSProperties = {
  fontWeight: 500,
};
const textWeightThree: React.CSSProperties = {
  fontWeight: 700,
};
const buttonTextOne: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "30px",
};
const buttonTextTwo: React.CSSProperties = {
  fontSize: "17px",
  lineHeight: "30px",
};
const footerSubText: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "26px",
};
const footerText: React.CSSProperties = {
  fontSize: "21px",
  lineHeight: "24px",
};
const footerTextBottom: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "26px",
  letterSpacing: "0.02em",
};
const footerTextCol: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "24px",
};
const textSubZero: React.CSSProperties = {
  fontSize: "18px",
  lineHeight: "26px",
};
const textZero: React.CSSProperties = {
  fontSize: "18px",
  lineHeight: "25px",
};
const textOne: React.CSSProperties = {
  fontSize: "18px",
  lineHeight: "30px",
};
const textFive: React.CSSProperties = {
  fontSize: "22px",
  lineHeight: "32px",
  letterSpacing: "0.02em",
};
const textTwo: React.CSSProperties = {
  fontSize: "22px",
  lineHeight: "30px",
};
const textThree: React.CSSProperties = {
  fontSize: "50px",
  lineHeight: "56px",
};
const textFour: React.CSSProperties = {
  fontSize: "24px",
  lineHeight: "30px",
};
const colorWhite: React.CSSProperties = {
  color: "white",
};
const colorTextTwo: React.CSSProperties = {
  color: "#757095",
};
const textSecondary: React.CSSProperties = {
  color: "#64607D",
};
const colorBackground: React.CSSProperties = {
  background: "#3734A9",
};
export default Footer;
