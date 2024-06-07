import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  svg: string;
  title: string;
  message: string;
};

const Benefit: FC<Props> = ({ svg, title, message }) => {
  return (
    <Grid item xs={4}>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          p={2}
          justifyContent="center"
        >
          <img height={100} src={svg} />
        </Box>
        <Typography variant="body2" fontWeight="bold" textAlign="center">
          {title}
        </Typography>
        <Typography marginTop={1} variant="caption" textAlign="center">
          {message}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Benefit;
