import { Box, Button, Grid, Grow, Slide, Typography } from "@mui/material";
import { FC } from "react";
import scrollElementToViewById from "../../../utils/scroll-element-to-view";

const About: FC = () => {
  return (
    <Box
      mt={3}
      height={450}
      display="flex"
      p={2}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box p={2} id="home">
        <Slide direction="right" in={true} timeout={1000}>
          <Typography
            px={5}
            sx={{ typography: { sm: "h5", md: "h3", xs: "h5" } }}
          >
            <Box display="flex">
              <div style={{ opacity: 0.6 }}>We help</div>&nbsp;
              <b>startups</b>
            </Box>
            <Box display="flex">
              <div>design, develop &</div>&nbsp;
              <b>ship</b>
            </Box>
            <Box display="flex">
              <div>software</div>&nbsp;
              <div style={{ opacity: 0.6 }}>in</div>&nbsp;
              <b>weeks</b>
              <div style={{ opacity: 0.6 }}>.</div>
            </Box>
            <Box display="flex">
              <div style={{ opacity: 0.6 }}>With a</div>&nbsp;
              <div style={{ fontStyle: "italic" }}>Twist</div>
              <div style={{ opacity: 0.6 }}>.</div>
            </Box>
          </Typography>
        </Slide>
        <Grid container mt={3} spacing={1}>
          <Grid item sm={12} md={6}>
            <Grow in={true} timeout={2000}>
              <Button
                sx={{ width: "100%" }}
                variant="contained"
                onClick={() => scrollElementToViewById("contact")}
              >
                Book an intro call
              </Button>
            </Grow>
          </Grid>
          <Grid item sm={12} md={6}>
            <Grow in={true} timeout={4000}>
              <Button
                sx={{ width: "100%" }}
                variant="contained"
                color="inherit"
                onClick={() => scrollElementToViewById("twist")}
              >
                What is the twist?
              </Button>
            </Grow>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
