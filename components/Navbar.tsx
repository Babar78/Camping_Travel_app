"use client";
import React from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

// Logged In Avatar
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  const [openProfileMenu, setOpenProfileMenu] =
    React.useState<HTMLElement | null>(null);
  const open = Boolean(openProfileMenu);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenProfileMenu(event.currentTarget);
  };
  const handleClose = () => {
    setOpenProfileMenu(null);
  };

  return (
    pathname !== "/login" &&
    pathname !== "/signup" && (
      <nav className="flexBetween max-container padding-container relative z-30 py-5 bg-transparent min-h-[100px]">
        <Link href="/">
          <Image
            src="/hilink-logo.svg"
            alt="logo"
            width={74}
            height={29}
            className="w-auto h-auto"
          />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                passHref
                className={`regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold ${
                  pathname === link.href ? "bold-16" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          {!isLoggedIn ? (
            <Link href="/login">
              <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
              />
            </Link>
          ) : (
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="User Account">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 36, height: 36 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={openProfileMenu}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                className="regular-16"
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonIcon
                      sx={{
                        width: "24px !important",
                        height: "24px !important",
                      }}
                    />
                  </ListItemIcon>
                  Profile
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings
                      sx={{
                        width: "24px !important",
                        height: "24px !important",
                      }}
                    />
                  </ListItemIcon>
                  Account Settings
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout
                      sx={{
                        fontSize: "20px !important",
                      }}
                    />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </div>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </nav>
    )
  );
};

export default Navbar;
