import { Box, Grid, Link, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import scrollElementToViewById from "../../utils/scroll-element-to-view";
import HeaderLogo from "../logo";

const Footer: FC = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      mt={20}
      width="100%"
      style={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Grid item sm={0} md={2}></Grid>
      <Grid item sm={12} md={8}>
        <Grid container spacing={2} p={1} mt={1} display="flex">
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            width={"100%"}
            justifyContent={"center"}
          >
            <HeaderLogo onClick={() => scrollElementToViewById("home")} />
          </Grid>
          {/*About*/}
          <Grid
            item
            xs={6}
            md={4}
            display="flex"
            width={"100%"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Box mb={1}>
              <Typography
                width={"100%"}
                display="flex"
                justifyContent={"center"}
                textAlign={"center"}
                variant="button"
                style={{ fontSize: 12 }}
              >
                About
              </Typography>
            </Box>
            <Box
              my={0.6}
              width={"100%"}
              display="flex"
              justifyContent={"center"}
              textAlign={"center"}
            >
              <Link
                color="primary.contrastText"
                variant="body1"
                onClick={() => scrollElementToViewById("pricing")}
              >
                Pricing
              </Link>
            </Box>
            <Box
              my={0.6}
              width={"100%"}
              display="flex"
              justifyContent={"center"}
              textAlign={"center"}
            >
              <Link
                color="primary.contrastText"
                variant="body1"
                onClick={() => scrollElementToViewById("faqs")}
              >
                FAQs
              </Link>
            </Box>
          </Grid>
          {/*Follow Us*/}
          <Grid
            item
            xs={6}
            md={4}
            display="flex"
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Box
              mb={1}
              width={"100%"}
              display="flex"
              justifyContent={"center"}
              textAlign={"center"}
            >
              <Typography variant="button" style={{ fontSize: 12 }}>
                Follow Us
              </Typography>
            </Box>
            <Box
              my={0.6}
              width={"100%"}
              display="flex"
              justifyContent={"center"}
              textAlign={"center"}
            >
              <Link
                href="https://instagram.com/bytestudios.sda"
                color="primary.contrastText"
                variant="body1"
              >
                Instagram
              </Link>
            </Box>
            <Box
              my={0.6}
              width={"100%"}
              display="flex"
              justifyContent={"center"}
              textAlign={"center"}
            >
              <Link
                href="https://www.linkedin.com/company/bytestudios-sda"
                color="primary.contrastText"
                variant="body1"
              >
                LinkedIn
              </Link>
            </Box>
          </Grid>
          {/*Copyright*/}
          <Grid item xs={12} width="100%" display="flex">
            <Typography variant="caption" textAlign={"center"} width={"100%"}>
              Copyright © 2024 <b>Bytestudios.Ltd.</b>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={0} md={2}></Grid>
    </Grid>
  );
};

export default Footer;
