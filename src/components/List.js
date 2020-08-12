import React from "react";
import ListItem from './ListItem';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    padding: "20px 0px",
  },
}));

export default function List({ todos, ...actions }) {
  const classes = useStyles();
  
  return (
    <div className={classes.list}>
      {todos &&
        todos.map((todo, key) => {
          return (
            <ListItem key={key} id={key} todo={todo} {...actions} />
          )
        })}
    </div>
  );
}
