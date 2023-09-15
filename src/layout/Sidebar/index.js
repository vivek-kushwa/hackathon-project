import {
   AppBar,
   List,
   ListItem,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import logo from "assets/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";


import { PAGE_ICONS } from "utils/constant";

const content = [
  
];

const Sidebar = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const pathArray = location?.pathname?.split("/"); // split the URL path into an array of strings
   const splitPath = `${pathArray[1]}`; // extract the first element and prepend a "/"

   const handleNavigate = path => {
      navigate(path);
   };
   return (
      <AppBar
         position="fixed"
         sx={{
            left: 0,
            bgcolor: "primary",
            width: 300,
            maxWidth: { xs: 300 },
            height: "100vh",
            p: { xs: "1rem !important" },
         }}>
         <Box mb={1} mx="auto">
            <img src={logo} alt="logo" />
         </Box>
         <Stack direction={"column"} alignItems="space-between" height={"88%"}>
            <Box>
               <nav aria-label="main mailbox folders">
                  <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                     {content.map(item => (
                        <ListItem
                           key={item.To}
                           disablePadding
                           onClick={() => handleNavigate(item.To)}>
                           <ListItemButton
                              sx={{
                                 bgcolor: splitPath.includes(item.To.replace("/", "").slice(0, -1))
                                    ? "neutrals.A100"
                                    : "",
                                 color: !splitPath.includes(item.To.replace("/", "").slice(0, -1))
                                    ? "neutrals.A80"
                                    : "common.white",
                                 borderRadius: 1,
                                 fontSize: 16,
                                 fontFamily: "Gellix-SemiBold",
                                 "&:hover ": {
                                    bgcolor: "neutrals.A100",
                                 },
                              }}>
                              <ListItemIcon
                                 sx={{
                                    color: "inherit",
                                    pr: 1.5,
                                    minWidth: "auto",
                                    fontSize: 19,
                                 }}>
                                 {PAGE_ICONS[item.Title]}
                              </ListItemIcon>
                              <ListItemText
                                 primary={item.Title}
                                 primaryTypographyProps={{
                                    fontSize: "inherit",
                                    fontFamily: "inherit",
                                 }}
                              />
                           </ListItemButton>
                        </ListItem>
                     ))}
                  </List>
               </nav>
            </Box>
         </Stack>
      </AppBar>
   );
};

export default Sidebar;
