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
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

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
  // const [anchorElNav, setAnchorElNav] =
  //   React.useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] =
  //   React.useState<null | HTMLElement>(null);

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "static",
        backgroundColor: "transparent",
        display: "flex",
        height: "6rem",
        ...alignCenter,
        justifyContent: { xs: "space-between", md: "" },
      }}
    >
      <Button
        sx={{
          mr: 2,
          ml: { xs: 1, md: 6 },
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "27px",
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
            key={page}
          >
            <Button
              //onClick={handleCloseNavMenu}
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
            textTransform: "none",
            "&: hover": {
              background: "#2621be",
            },
            ...buttonSize,
          }}
        >
          Start Free
        </Button>
      </Box>

      <Stack direction="row" spacing={2}>
        <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <MenuIcon />
          </IconButton>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper elevation={0}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      {smallWidth.map((page, index) => (
                        <MenuItem key={index} onClick={handleClose}>
                          <Typography color="black" textAlign="center">
                            {page}
                          </Typography>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Box>
      </Stack>
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
