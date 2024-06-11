import { Box, Button, Grid, Link, Typography, useTheme } from "@mui/material";
import { FC } from "react";

const ContactUs: FC = () => {
  const theme = useTheme();
  return (
    <Grid id="contact" container mx={1}>
      <Grid item sm={0} md={3}></Grid>
      <Grid item sm={12} md={6}>
        <Grid container mx={1}>
          <Grid item xs={12}>
            <Typography
              mt={5}
              sx={{ typography: { sm: "h3", md: "h2" } }}
              fontWeight={"bold"}
              textAlign={"center"}
              display={"flex"}
              justifyContent={"center"}
            >
              <div>Contact</div>&nbsp;<b>us</b>
            </Typography>
            <Typography
              mt={2}
              variant="subtitle1"
              textAlign={"center"}
              display={"flex"}
              justifyContent={"center"}
            >
              Schedule a free presentation meeting with our team to align how
              our services can help your business grow.
            </Typography>
            <Box display="flex" width="100%" justifyContent="center" mt={4}>
              <Button variant="contained">
                <Link
                  style={{ textDecoration: "none" }}
                  color={theme.palette.primary.contrastText}
                  href="mailto:bruno.moisao@bytestudios.dev"
                >
                  Send us an email
                </Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={0} md={3}></Grid>
    </Grid>
  );
};

export default ContactUs;
