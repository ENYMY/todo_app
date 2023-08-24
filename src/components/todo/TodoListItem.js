import { Card, Grid, Checkbox, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const TodoListItem = (props) => {
  const [done, setDone] = useState(false);

  const doneHandler = (event) => {
    setDone(event.target.checked);
  };
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          width: "900px",
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
            <Button>Edit</Button>
            <Button>Delete</Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default TodoListItem;
