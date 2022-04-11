import React from "react";
import line1 from "../assets/icons/line1.svg";
import line2 from "../assets/icons/line2.svg";
import playIcon from "../assets/icons/playIcon.svg";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const sponsors: string[] = [logo1, logo2, logo3, logo4, logo5, logo6];
const Banner = () => {
  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        component="div"
        sx={{
          textAlign: "center",
          mb: 4,
          ...textTwo,
          "@media only screen and (max-device-width: 500px)": {
            fontSize: "18px",
            lineHeight: "26px",
            ml: 4,
            mr: 4,
          },
        }}
      >
        Over 32k+ software businesses growing with AR Shakir
      </Typography>
      <Box
        sx={{
          display: "flex",
          ...justifyCenter,
          "@media only screen and (max-device-width: 500px)": {
            flexWrap: "wrap",
          },
        }}
      >
        {sponsors.map((sponsor: string, index: number) => (
          <Box
            sx={{
              display: "flex",
              ...alignCenter,
              ...justifyCenter,
              mr: 3,
              ml: 3,
              "@media only screen and (max-device-width: 500px)": {
                margin: 3,
              },
            }}
            key={index}
          >
            <img src={sponsor} alt="sponsor" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const flexBox: React.CSSProperties = {
  display: "flex",
};
const alignCenter: React.CSSProperties = {
  alignItems: "center",
};
const justifyCenter: React.CSSProperties = {
  justifyContent: "center",
};
const lineStyles: React.CSSProperties = {
  width: "98%",
  position: "absolute",
  zIndex: -10,
  top: "6rem",
};
const lineStylesTwo: React.CSSProperties = {
  width: "98%",
  position: "absolute",
  zIndex: -10,
  bottom: "-14rem",
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
  width: "100%",
  height: "auto",
  top: 0,
  bottom: 0,
  left: 0,
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
const flexRow: React.CSSProperties = {
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
  fontSize: "60px",
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
  fontSize: "20px",
  lineHeight: "30px",
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
const textFive: React.CSSProperties = {
  fontSize: "22px",
  lineHeight: "32px",
  letterSpacing: "0.02em",
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

export default Banner;
