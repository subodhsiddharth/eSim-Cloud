import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(5, 3),
    backgroundColor: "#f4f6f8",
    height: "100vh",
    overflow: "auto",
  },
}));

export default function LayoutMain(props) {
  const classes = useStyles();

  return (
    <>
      {/* Display content of layout */}
      <main className={classes.content}>{props.children}</main>
    </>
  );
}
