import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

interface LinkItem {
  name: string;
  link: string;
}

interface CustomBreadcrumbsProps {
  linksArray: LinkItem[];
  currentPage: string;
  linksColor?: string;
  currentPageColor?: string;
}

const CustomBreadcrumbs = ({
  linksArray,
  currentPage,
  linksColor,
  currentPageColor,
}: CustomBreadcrumbsProps) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      className={`${linksColor && "text-white"}`}
    >
      {linksArray.map((link, index) => (
        <Link
          key={index}
          sx={{
            color: `${linksColor ? linksColor : "inherit"}`,
          }}
          color="inherit"
          href={link.link}
        >
          {link.name}
        </Link>
      ))}
      <Typography
        sx={{
          color: `${currentPageColor ? currentPageColor : "white"}`,
        }}
      >
        {currentPage}
      </Typography>
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
