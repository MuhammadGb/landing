import React from "react";
import lines4 from "../assets/icons/lines4.svg";
import playIcon from "../assets/icons/playIcon.svg";
import profiles from "../assets/images/profiles.png";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const FeaturedThree = () => {
  return (
    <Box mt="48px">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box position="relative">
          <Box
            component="img"
            sx={{
              ...lineStyles,
              "@media only screen and (max-device-width: 500px)": {
                display: "none",
              },
            }}
            src={lines4}
            alt="lineStyles"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            "@media only screen and (max-device-width: 500px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box
            width="42%"
            ml="100px"
            mr="115px"
            sx={{
              "@media only screen and (max-device-width: 500px)": {
                width: "96%",
                ml: "10px",
                mr: "0px",
              },
            }}
          >
            <Typography
              variant="h2"
              component="div"
              gutterBottom
              sx={{
                mb: 3,
                ml: 2,
                textTransform: "uppercase",
                display: "flex",
                ...textZero,
                ...colorText,
                ...textWeightTwo,
                "@media only screen and (max-device-width: 500px)": {
                  fontSize: "16px",
                  lineHeight: "21px",
                },
              }}
            >
              Our Feature
            </Typography>
            <Typography
              variant="h2"
              component="div"
              sx={{
                //mr: 2,
                ml: 2,
                display: "flex",
                ...textThree,
                ...textWeightTwo,
                "@media only screen and (max-device-width: 500px)": {
                  fontSize: "26px",
                  lineHeight: "42px",
                  width: "90%",
                },
              }}
            >
              All payments are linked to your Financy account
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
                ...subTextOne,
                ...colorTextTwo,
                ...textWeightOne,
                "@media only screen and (max-device-width: 500px)": {
                  fontSize: "16px",
                  lineHeight: "26px",
                  width: "90%",
                },
              }}
            >
              Why kept very ever home mrs. Considered sympathize ten uncommonly
              occasional assistance sufficient not. Letter of on become he
              tended active enable to.
            </Typography>
            <Box
              sx={{
                //flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                ml: 2,
                mt: "16px",
              }}
            >
              <Button
                sx={{
                  my: 2,
                  textTransform: "none",
                  borderRadius: "7px",
                  "&: hover": {
                    background: "#2621be",
                  },
                  ...buttonSize,
                  "@media only screen and (max-device-width: 500px)": {
                    width: "126px",
                    height: "48px",
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
          <Box
            position="relative"
            sx={{
              width: "50%",
              left: "0rem",
              display: "block",
              "@media only screen and (max-device-width: 500px)": {
                width: "96%",
              },
            }}
          >
            <Box
              component="img"
              sx={{
                ...styleOne,
                "@media only screen and (max-device-width: 500px)": {
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  left: 0,
                  top: "2rem",
                },
              }}
              src={profiles}
              alt="profiles"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const lineStyles: React.CSSProperties = {
  width: "100%",
  position: "absolute",
  zIndex: -10,
  top: "-2.3rem",
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
  top: "-5.5rem",
  bottom: 0,
  left: -140,
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
const subTextOne: React.CSSProperties = {
  fontSize: "18px",
  lineHeight: "26px",
  letterSpacing: "-0.02em",
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
export default FeaturedThree;
