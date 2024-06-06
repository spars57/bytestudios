import {
  Box,
  BoxProps,
  Collapse,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import React, { FC, ReactNode } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { makeStyles } from "@mui/styles";

type Props = {
  question: string;
  response: ReactNode;
  timeout?: number;
} & BoxProps;

const useStyles = makeStyles({
  root: {
    "&:hover": {
      fontWeight: "bold",
    },
  },
});

const FrequentlyAskedQuestion: FC<Props> = ({
  question,
  response,
  timeout = 0,
  ...props
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <Box
      onClick={open ? onClose : onOpen}
      p={1}
      display="flex"
      flexDirection="column"
      width="100%"
      style={{ cursor: "pointer" }}
      {...props}
    >
      <Slide direction="left" in={true} timeout={timeout}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
          width="100%"
          py={1}
        >
          <Typography className={classes.root} variant="h6">
            {question}
          </Typography>
          <IconButton onClick={open ? onClose : onOpen}>
            {open ? (
              <RemoveIcon fontSize="small" />
            ) : (
              <AddIcon fontSize="small" />
            )}
          </IconButton>
        </Box>
      </Slide>
      <Collapse in={open}>
        <Box my={2}>
          <Typography variant="body2">{response}</Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

export default FrequentlyAskedQuestion;
