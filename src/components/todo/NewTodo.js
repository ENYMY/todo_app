import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const NewTodo = (props) => {
  return (
    <Card>
      <Grid container spacing={2} direction='column' alignItems='center'>
        <Grid item xs={10}>
          <Typography variant='h4'>Add Todo</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h4'>
            <Grid container direction='column' spacing={3}>
              <Grid item>
                <TextField id='title' label='Title' variant='filled' />
              </Grid>
              <Grid item>
                <TextField
                  id='description'
                  label='Description'
                  variant='filled'
                />
              </Grid>
            </Grid>
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ margin: "5px" }}>
          <Grid container direction='row' spacing={30}>
            <Grid item xs={6}>
              <Button variant='outlined'>Clear</Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant='outlined'>Add</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
export default NewTodo;
