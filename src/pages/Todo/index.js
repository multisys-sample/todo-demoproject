import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";

import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

import { makeSelectTodo } from "../../store/todo/Selector";
import { addTodo } from "../../store/todo/Action";
import { updateTodo } from "../../store/todo/Action";
import { deleteTodo } from "../../store/todo/Action";
import { doneTodo } from "../../store/todo/Action";

import Input from "../../components/Input";
import List from "../../components/List";
import useUpdateCounter from '../../utils/useUpdateCounter';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: 500,
    margin: "50px auto",
    padding: theme.spacing(4),
  },
}));

const Todo = ({
  todos,
  addTodo,
  updateTodo,
  deleteTodo,
  doneTodo,
  ...props
}) => {
  const classes = useStyles();
  const [updateCount] = useUpdateCounter(todos)

  return (
    <div>
      <h1>Updates: {updateCount}</h1>
      <Paper elevation={3} className={classes.wrapper}>
        <Input onAdd={(value) => addTodo(value)} />
        <List
          todos={todos}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
          onDone={doneTodo}
        />
      </Paper>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodo(),
});

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (props) => dispatch(addTodo(props)),
    updateTodo: (props) => dispatch(updateTodo(props)),
    deleteTodo: (props) => dispatch(deleteTodo(props)),
    doneTodo: (props) => dispatch(doneTodo(props)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Todo);
