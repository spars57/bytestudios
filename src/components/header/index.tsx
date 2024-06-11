import { AppBar, Box, BoxProps, Container, Toolbar } from "@mui/material";
import { FC } from "react";
import HeaderLogo from "../logo";

//bgcolor="#200C74" height={75}
interface HeaderProps extends BoxProps {
  onImageClick: () => unknown;
}
const Header: FC<HeaderProps> = ({ onImageClick, ...props }) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            height={80}
            display="flex"
            alignItems="center"
            width="100%"
            justifyContent={"space-between"}
            {...props}
          >
            <HeaderLogo
              onClick={onImageClick}
              styles={{ overflow: "hidden" }}
            />
            {/* <Box>
              <Button variant="outlined" color="secondary">
                Login
              </Button>
            </Box> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
