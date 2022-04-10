import React from "react";
import line1 from "../assets/icons/line1.svg";
import line2 from "../assets/icons/line2.svg";
import playIcon from "../assets/icons/playIcon.svg";
import metrics from "../assets/images/metrics.png";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Main = () => {
  return (
    <Box mt="138px">
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          flexDirection: "column",
        }}
      >
        <img style={lineStyles} src={line1} alt="lines" />
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
          }}
        >
          <Box width="41%" ml="100px">
            <Typography
              variant="h2"
              component="div"
              sx={{
                //mr: 2,
                ml: 2,
                display: { xs: "none", md: "flex" },
                ...headerSize,
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
                //mr: 2,
                ml: 2,
                display: {
                  xs: "none",
                  md: "flex",
                  ...textOne,
                  ...textSecondary,
                },
              }}
            >
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </Typography>
            <Box
              sx={{
                //flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "flex-start",
                ml: 2,
                mt: "26px",
              }}
            >
              <Button
                sx={{
                  my: 2,
                  mr: "50px",
                  display: "block",
                  borderRadius: "47px",
                  "&: hover": {
                    background: "#2621be",
                  },
                  ...buttonSize,
                }}
              >
                Get Started
              </Button>
              <Box
                sx={{
                  //flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ ...playBorder, ...flexBox }}>
                  <Box sx={triangle}></Box>
                </Box>
                <Typography
                  variant="h6"
                  //component="div"
                  sx={{
                    mr: 2,
                    ml: 2,
                    cursor: "pointer",
                    display: { xs: "none", md: "flex" },
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
              display: { xs: "none", md: "block" },
            }}
          >
            <img style={{ ...styleOne }} src={metrics} alt="metrics" />
          </Box>
        </Box>
        <img style={lineStylesTwo} src={line2} alt="lines" />
      </Box>
    </Box>
  );
};

const lineStyles: React.CSSProperties = {
  width: "100%",
  position: "absolute",
  zIndex: -10,
  top: "6rem",
};
const lineStylesTwo: React.CSSProperties = {
  width: "100%",
  position: "absolute",
  zIndex: -10,
  bottom: "-4rem",
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
  top: 0,
  bottom: 0,
  left: -130,
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
const alignCenter: React.CSSProperties = {
  alignItems: "center",
};
const justifyCenter: React.CSSProperties = {
  justifyContent: "center",
};
const flexBox: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
const buttonSize: React.CSSProperties = {
  background: "#3734A9",
  color: "white",
  width: "162px",
  height: "60px",
  boxShadow:
    "0px 67px 80px rgba(55, 52, 169, 0.07), 0px 43.4259px 46.8519px rgba(55, 52, 169, 0.0531481), 0px 25.8074px 25.4815px rgba(55, 52, 169, 0.0425185), 0px 13.4px 13px rgba(55, 52, 169, 0.035), 0px 5.45926px 6.51852px rgba(55, 52, 169, 0.0274815), 0px 1.24074px 3.14815px rgba(55, 52, 169, 0.0168519)",
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
const buttonTextOne: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "30px",
};
const buttonTextTwo: React.CSSProperties = {
  fontSize: "17px",
  lineHeight: "30px",
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
const colorText: React.CSSProperties = {
  color: "#3734A9",
};
const textSecondary: React.CSSProperties = {
  color: "#64607D",
};
const colorBackground: React.CSSProperties = {
  background: "#3734A9",
};
export default Main;
