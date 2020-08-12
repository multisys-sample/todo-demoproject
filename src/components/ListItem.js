import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    padding: "5px",
    position: "relative",
    border: "1px solid grey",
    borderRadius: 5,
    background: "#FEFEFE",
    marginBottom: 10,
  },
  list: {
    padding: "20px 0px",
  },
  checkbox: {
    position: "absolute",
    top: 15,
    left: 10,
  },
  input: (props) => ({
    padding: "5px",
    width: "80%",
    fontSize: 20,
    background: "#FEFEFE",
    border: "none",
    textDecoration: props.done ? "line-through" : "none",
    "&:focus": {
      outline: "none",
    },
  }),
  delete: {
    position: "absolute",
    top: 14,
    right: 10,
    color: "red",
    cursor: "pointer",
  },
}));

export default function ListItem({ id, todo, ...actions }) {
  const { text, done } = todo;
  const { onUpdate, onDelete, onDone } = actions;

  const classes = useStyles({ done });

  const handleEnter = (e) => {
    if (e.key === "Enter") onUpdate({ key: id, text });
  };

  const handleDone = (e) => {
    onDone({ key: id, done: e.target.checked });
  };

  return (
    <div className={classes.item}>
      <Checkbox color="default" onChange={handleDone} />
      <input
        contentEditable
        type="text"
        className={classes.input}
        defaultValue={text}
        onKeyPress={handleEnter}
      />
      <Close
        className={classes.delete}
        onClick={() => {
          onDelete({ key: id });
        }}
      />
    </div>
  );
}
