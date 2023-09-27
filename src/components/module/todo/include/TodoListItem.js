import { Card, Grid, Checkbox, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import todoContext from "../../store/todo-store";

const TodoListItem = (props) => {
  const todoCtx = useContext(todoContext);

  const [done, setDone] = useState(false);

  const doneHandler = (event) => {
    setDone(event.target.checked);
  };

  const deleteTodoHandler = (id) => {
    todoCtx.deleteTodo(id);
  };
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          width: "950px",
          height: "70px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}>
        <Grid spacing={1} container direction='row' alignItems='center'>
          <Grid item xs={1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Checkbox onChange={doneHandler} value={done} />
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}>
              <Typography component={done ? "s" : "p"}>
                {props.title}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            {/* <Button>Edit</Button> */}
            <Button onClick={deleteTodoHandler.bind(this, props.id)}>
              Delete
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default TodoListItem;
