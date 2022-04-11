//import React from "react";
import line3 from "../assets/icons/line3.svg";
import manyBirds from "../assets/icons/manyBirds.svg";
import charts from "../assets/images/charts.png";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";

const FeaturedFour = () => {
  return (
    <Box
      mt="68px"
      sx={{
        "@media only screen and (max-device-width: 500px)": {
          mt: "18px",
        },
      }}
    >
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          flexDirection: "column",
          padding: "68px",
          paddingBottom: "120px",
          "@media only screen and (max-device-width: 500px)": {
            padding: "18px",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            padding: "20px",
            borderRadius: "15px",
            border: "1px solid#DEE1E6",
            display: "flex",
            ...shadowFour,
            "@media only screen and (max-device-width: 500px)": {
              padding: "5px",
              width: "97%",
              flexDirection: "column",
              ...alignCenter,
              ...justifyCenter,
            },
          }}
        >
          <Box
            width="80%"
            mr="55px"
            sx={{
              "@media only screen and (max-device-width: 500px)": {
                mr: "5px",
                width: "100%",
              },
            }}
          >
            <Typography
              variant="h6"
              //noWrap
              component="div"
              sx={{
                mt: "22px",
                //mr: 2,
                ml: 2,
                display: "flex",
                ...textFive,
                ...colorTextTwo,
                ...textWeightOne,
                "@media only screen and (max-device-width: 500px)": {
                  fontSize: "14px",
                  lineHeight: "23px",
                  width: "94%",
                },
              }}
            >
              And residence for met the estimable disposing. Mean if he they
              been no hold mr. Is at much do made took held help.
            </Typography>
          </Box>
          <Box
            width="20%"
            ml="0px"
            mr="0px"
            sx={{
              "@media only screen and (max-device-width: 500px)": {
                width: "100%",
              },
            }}
          >
            <Button
              sx={{
                my: 2,
                mt: 4,
                textTransform: "none",
                borderRadius: "47px",
                "&: hover": {
                  background: "#fa5f34",
                },
                ...buttonSizeTwo,
                "@media only screen and (max-device-width: 500px)": {
                  width: "97%",
                  height: "46px",
                  ml: 1,
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
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
const buttonSizeTwo: React.CSSProperties = {
  background: "#FF7F5C",
  color: "white",
  width: "214px",
  height: "62px",
  boxShadow:
    "0px 100px 80px rgba(255, 127, 92, 0.07), 0px 64.8148px 46.8519px rgba(255, 127, 92, 0.0531481), 0px 38.5185px 25.4815px rgba(255, 127, 92, 0.0425185), 0px 20px 13px rgba(255, 127, 92, 0.035), 0px 8.14815px 6.51852px rgba(255, 127, 92, 0.0274815), 0px 1.85185px 3.14815px rgba(255, 127, 92, 0.0168519)",
};
const shadowFour: React.CSSProperties = {
  boxShadow: "0px 24px 34px rgba(0, 0, 0, 0.03)",
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
const colorTextTwo: React.CSSProperties = {
  color: "#757095",
};
const textSecondary: React.CSSProperties = {
  color: "#64607D",
};
const colorBackground: React.CSSProperties = {
  background: "#3734A9",
};
export default FeaturedFour;
