import { Card, Grid, Checkbox } from "@mui/material";
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
        <Grid spacing={1} container direction='row'>
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
                border: "1px solid",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start",
              }}>
              {props.title}{" "}
            </Box>
          </Grid>
          <Grid item xs={2}>
            {done ? " Action Box" : "!Done"}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default TodoListItem;
