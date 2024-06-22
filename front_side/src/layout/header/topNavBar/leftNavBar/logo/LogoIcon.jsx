import { Avatar, IconButton } from "@mui/material";
import React from "react";
import NavBarLink from "../../../../../routes/components/NavBarLink";
import ROUTES from "../../../../../routes/routesModel";

export default function LogoIcon() {

    return (
        <>
        <NavBarLink to={ROUTES.ROOT}>
        <IconButton>
            <Avatar src="assets/images/SadisLogoIcon.jpg" alt="Sadis Icon" sx={{ width: 50, height: 50 }}/>
          </IconButton>
        </NavBarLink>
        </>
    );
}
