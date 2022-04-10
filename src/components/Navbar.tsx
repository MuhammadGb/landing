import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const normalWidth: string[] = ["Product", "Template", "Blog", "Pricing"];
const smallWidth: string[] = [
  "Product",
  "Template",
  "Blog",
  "Pricing",
  "Signin",
  "Start Free",
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] =
    React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] =
    React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "static",
        backgroundColor: "transparent",
        display: "flex",
        height: "6rem",
        ...alignCenter,
      }}
    >
      <Button
        sx={{
          mr: 2,
          ml: 6,
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "27px",
          display: { xs: "none", md: "flex" },
          ...textColor,
        }}
      >
        AR Shakir
      </Button>

      {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography> */}
      <Box
        sx={{
          flexGrow: 1,
          border: "2px solid red",
          display: { xs: "none", md: "flex" },
          ...justifyCenter,
        }}
      >
        {normalWidth.map((page: string) => (
          <Box
            sx={{
              display: "flex",
              ...alignCenter,
              ...justifyCenter,
            }}
          >
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                textTransform: "none",
                ...textFont,
              }}
            >
              {page}
            </Button>
            {page === "Product" && (
              <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
            )}
            {page === "Template" && (
              <KeyboardArrowDownIcon sx={{ cursor: "pointer" }} />
            )}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          border: "2px solid red",
          display: { xs: "none", md: "flex" },
          textTransform: "none",
          ...alignCenter,
          ...justifyCenter,
          ...textFont,
        }}
      >
        <Button sx={{ my: 2, mr: 6, color: "black", display: "block" }}>
          Signin
        </Button>
        <Button
          sx={{
            my: 2,
            "&: hover": {
              background: "#2621be",
            },
            ...buttonSize,
          }}
        >
          Start Free
        </Button>
      </Box>

      <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
            ...textFont,
          }}
        >
          {smallWidth.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography color="black" textAlign="center">
                {page}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Container>
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
const textColor: React.CSSProperties = {
  color: "black",
};
const textFont: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "19px",
};
const buttonSize: React.CSSProperties = {
  background: "#3734A9",
  width: "137px",
  height: "52px",
  display: "block",
  borderRadius: "7px",
  color: "white",
  boxShadow:
    "0px 67px 80px rgba(55, 52, 169, 0.07), 0px 43.4259px 46.8519px rgba(55, 52, 169, 0.0531481), 0px 25.8074px 25.4815px rgba(55, 52, 169, 0.0425185), 0px 13.4px 13px rgba(55, 52, 169, 0.035), 0px 5.45926px 6.51852px rgba(55, 52, 169, 0.0274815), 0px 1.24074px 3.14815px rgba(55, 52, 169, 0.0168519)",
};
export default ResponsiveAppBar;
