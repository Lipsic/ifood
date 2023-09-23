import { makeStyles } from "@mui/material";

const useStyles = makeStyles({
  body: {
    padding: "0",
    margin: "0",
    backgroundColor: "#f2f2f2",
    "&:hover": {
      backgroundColor: "#f9f9f9",
    },
  },
});

const classes = useStyles();
