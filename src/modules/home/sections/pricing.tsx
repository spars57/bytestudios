import { Box, Button, Grid, Link, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import scrollElementToViewById from "../../../utils/scroll-element-to-view";

const Pricing: FC = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        mt={5}
        p={5}
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        width="100%"
      >
        <Typography
          sx={{ typography: { sm: "h2", md: "h1", xs: "h3" } }}
          textAlign={"center"}
        >
          LET'S TALK TODAY,
        </Typography>
        <Typography
          sx={{ typography: { sm: "h3", md: "h1", xs: "h3" } }}
          textAlign={"center"}
        >
          WE START TOMORROW
        </Typography>
      </Box>
      <Grid container spacing={1} p={1}>
        <Grid item sm={12} md={6} width={"100%"}>
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            width="100%"
            borderRadius={4}
            border={`1px solid ${theme.palette.primary.main}`}
          >
            <Typography
              paddingTop={4}
              paddingBottom={2}
              variant="h5"
              fontWeight={"bold"}
              textAlign={"center"}
            >
              MAINTENANCE & GROWTH
            </Typography>
            <Typography variant="caption" textAlign={"center"}>
              One request at time.
            </Typography>
            <Typography variant="caption" textAlign={"center"}>
              Pause or cancel anytime.
            </Typography>
            <Typography
              marginTop={2}
              variant="h6"
              fontWeight={"bold"}
              textAlign={"center"}
            >
              3,000€-8,000€/m
            </Typography>
            <Box
              mt={1}
              mb={0.5}
              display="flex"
              width={"100%"}
              justifyContent={"center"}
            >
              <Button
                variant="contained"
                sx={{ width: 200 }}
                onClick={() => scrollElementToViewById("contact")}
              >
                get started
              </Button>
            </Box>
            <Box my={1} display="flex" width={"100%"} justifyContent={"center"}>
              <Link onClick={() => scrollElementToViewById("contact")}>
                Book a call
              </Link>
            </Box>
            <Box p={1}>
              <Typography variant="caption" fontWeight={"bold"}>
                What's included:
              </Typography>
              <Typography variant="caption">
                <ul>
                  <li>
                    <b>One request at a time.</b>
                  </li>
                  <li>Average 2-4 day delivery</li>
                  <li>Signed NDA if necessary</li>
                  <li>Unlimited users</li>
                  <li>24 Hour onboarding</li>
                  <li>1st-Month Satisfaction Guarantee</li>
                  <li>Easy credit-card payments</li>
                  <li>Pause or cancel anytime</li>
                </ul>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} md={6} width={"100%"}>
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            borderRadius={4}
            border={`1px solid ${theme.palette.primary.main}`}
          >
            <Typography
              paddingTop={4}
              paddingBottom={2}
              variant="h5"
              fontWeight={"bold"}
              textAlign={"center"}
            >
              E2E DEVELOPMENT
            </Typography>
            <Typography variant="caption" textAlign={"center"}>
              Your product or MVP, built for you, start to finish.
            </Typography>
            <Typography variant="caption" textAlign={"center"}>
              Same Benefits.
            </Typography>
            <Typography
              marginTop={2}
              variant="h6"
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Custom
            </Typography>
            <Box
              mt={1}
              mb={0.5}
              display="flex"
              width={"100%"}
              justifyContent={"center"}
            >
              <Button
                variant="contained"
                sx={{ width: 200 }}
                onClick={() => scrollElementToViewById("contact")}
              >
                get started
              </Button>
            </Box>
            <Box my={1} display="flex" width={"100%"} justifyContent={"center"}>
              <Link onClick={() => scrollElementToViewById("contact")}>
                Book a call
              </Link>
            </Box>
            <Box p={1}>
              <Typography variant="caption" fontWeight={"bold"}>
                What's included:
              </Typography>
              <Typography variant="caption">
                <ul>
                  <li>
                    <b>A dedicated project manager</b>
                  </li>
                  <li>Demos & updates shipped every 1-2 weeks on average</li>
                  <li>Signed NDA if necessary</li>
                  <li>Unlimited users</li>
                  <li>24 Hour onboarding</li>
                  <li>1st-Month Satisfaction Guarantee</li>
                  <li>Easy credit-card payments</li>
                  <li>Pause or cancel anytime</li>
                </ul>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Pricing;
