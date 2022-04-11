import React from "react";
import line1 from "../assets/icons/line1.svg";
import line2 from "../assets/icons/line2.svg";
import playIcon from "../assets/icons/playIcon.svg";
import metrics from "../assets/images/metrics.png";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as CSS from "csstype";

type CSSProperties = CSS.Properties<string | number>;

const Main = () => {
  return (
    <Box sx={{ mt: { xs: "8px", md: "138px" } }}>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          flexDirection: "column",
        }}
      >
        <Box
          component="img"
          sx={{
            ...lineStyles,
            "@media only screen and (max-device-width: 500px)": {
              top: "0rem",
              position: "absolute",
            },
          }}
          src={line1}
          alt="line1"
        />
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "41%" },
              ml: { xs: "10px", md: "100px" },
            }}
          >
            <Typography
              variant="h2"
              component="div"
              sx={{
                //mr: 2,
                ml: 2,
                display: { md: "flex" },
                ...headerSize,
                "@media only screen and (max-device-width: 500px)": {
                  fontSize: "36px",
                  lineHeight: "53px",
                  letterSpacing: "-0.03em",
                  width: "85%",
                },
              }}
            >
              Managing business payments has never been easier
            </Typography>
            <Typography
              variant="h6"
              //noWrap
              component="div"
              sx={{
                width: "446px",
                mt: "22px",
                ml: 2,
                display: "flex",
                ...textOne,
                ...textSecondary,
                "@media only screen and (max-device-width: 500px)": {
                  fontSize: "15px",
                  lineHeight: "30px",
                  letterSpacing: "-0.02em",
                  width: "85%",
                  mr: 0,
                },
              }}
            >
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </Typography>
            <Box
              sx={{
                //flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                ml: 2,
                mt: "26px",
                "@media only screen and (max-device-width: 500px)": {
                  mr: 2,
                },
              }}
            >
              <Button
                sx={{
                  my: 2,
                  mr: "50px",
                  display: "block",
                  borderRadius: "47px",
                  textTransform: "none",
                  "&: hover": {
                    background: "#2621be",
                  },
                  ...buttonSize,
                  "@media only screen and (max-device-width: 500px)": {
                    width: "129px",
                    height: "37px",
                  },
                }}
              >
                Get Started
              </Button>
              <Box
                sx={{
                  //flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    ...playBorder,
                    ...flexBox,
                    "@media only screen and (max-device-width: 500px)": {
                      width: "48px",
                      height: "48px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      ...triangle,
                      "@media only screen and (max-device-width: 500px)": {
                        borderTop: "6px solid transparent",
                        borderLeft: "11px solid white",
                        borderBottom: "6px solid transparent",
                      },
                    }}
                  ></Box>
                </Box>
                <Typography
                  variant="h6"
                  //component="div"
                  sx={{
                    mr: 1,
                    ml: 1,
                    cursor: "pointer",
                    "@media only screen and (max-device-width: 500px)": {
                      fontSize: "12px",
                      lineHeight: "21px",
                    },
                  }}
                >
                  See How It Works
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            position="relative"
            sx={{
              width: "50%",
              top: "-6rem",
              display: "block",
              "@media only screen and (max-device-width: 500px)": {
                width: "375.94px",
                height: "319px",
                top: "2.6rem",
              },
            }}
          >
            {" "}
            <Box
              component="img"
              sx={{
                ...styleOne,
                "@media only screen and (max-device-width: 500px)": {
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  left: 0,
                },
              }}
              src={metrics}
              alt="metrics"
            />
          </Box>
        </Box>
        <img style={lineStylesTwo} src={line2} alt="lines" />
      </Box>
    </Box>
  );
};
const lineStyles: CSSProperties = {
  width: "100%",
  position: "absolute",
  zIndex: -10,
  top: "6rem",
};
const lineStylesTwo: CSSProperties = {
  width: "100%",
  position: "absolute",
  zIndex: -10,
  bottom: "-4rem",
};
const border: CSSProperties = {
  border: "2px solid maroon",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
const styleOne: CSSProperties = {
  position: "absolute",
  width: "auto",
  height: "auto",
  top: 0,
  bottom: 0,
  left: -130,
  right: 0,
};
const triangle: CSSProperties = {
  width: 0,
  height: 0,
  borderTop: "10px solid transparent",
  borderLeft: "15px solid white",
  borderBottom: "10px solid transparent",
};
const playBorder: CSSProperties = {
  borderRadius: "50%",
  background: "#22D497",
  width: "60px",
  height: "60px",
  boxShadow:
    "0px 100px 80px rgba(34, 212, 151, 0.07), 0px 64.8148px 46.8519px rgba(34, 212, 151, 0.0531481), 0px 38.5185px 25.4815px rgba(34, 212, 151, 0.0425185), 0px 20px 13px rgba(34, 212, 151, 0.035), 0px 8.14815px 6.51852px rgba(34, 212, 151, 0.0274815), 0px 1.85185px 3.14815px rgba(34, 212, 151, 0.0168519)",
};
const alignCenter: CSSProperties = {
  alignItems: "center",
};
const justifyCenter: CSSProperties = {
  justifyContent: "center",
};
const flexBox: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
const buttonSize: CSSProperties = {
  background: "#3734A9",
  color: "white",
  width: "162px",
  height: "60px",
  boxShadow:
    "0px 67px 80px rgba(55, 52, 169, 0.07), 0px 43.4259px 46.8519px rgba(55, 52, 169, 0.0531481), 0px 25.8074px 25.4815px rgba(55, 52, 169, 0.0425185), 0px 13.4px 13px rgba(55, 52, 169, 0.035), 0px 5.45926px 6.51852px rgba(55, 52, 169, 0.0274815), 0px 1.24074px 3.14815px rgba(55, 52, 169, 0.0168519)",
};
const headerSize: CSSProperties = {
  fontWeight: 800,
  fontSize: "50px",
  lineHeight: "80px",
};
const textWeightOne: CSSProperties = {
  fontWeight: 400,
};
const textWeightTwo: CSSProperties = {
  fontWeight: 800,
};
const buttonTextOne: CSSProperties = {
  fontSize: "16px",
  lineHeight: "30px",
};
const buttonTextTwo: CSSProperties = {
  fontSize: "17px",
  lineHeight: "30px",
};
const textSubZero: CSSProperties = {
  fontSize: "18px",
  lineHeight: "26px",
};
const textZero: CSSProperties = {
  fontSize: "18px",
  lineHeight: "25px",
};
const textOne: CSSProperties = {
  fontSize: "18px",
  lineHeight: "30px",
};
const textFive: CSSProperties = {
  fontSize: "22px",
  lineHeight: "32px",
  letterSpacing: "0.02em",
};
const textTwo: CSSProperties = {
  fontSize: "22px",
  lineHeight: "30px",
};
const textThree: CSSProperties = {
  fontSize: "50px",
  lineHeight: "56px",
};
const textFour: CSSProperties = {
  fontSize: "24px",
  lineHeight: "30px",
};
const colorText: CSSProperties = {
  color: "#3734A9",
};
const textSecondary: CSSProperties = {
  color: "#64607D",
};
const colorBackground: CSSProperties = {
  background: "#3734A9",
};
export default Main;
