import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { FC } from "react";
import HeaderLogo from "../logo";

//bgcolor="#200C74" height={75}
type HeaderProps = {
  onImageClick: () => unknown;
};
const Header: FC<HeaderProps> = ({ onImageClick }) => {
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
