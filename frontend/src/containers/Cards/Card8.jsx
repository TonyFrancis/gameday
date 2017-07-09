import React from 'react'
import Grid from 'material-ui/Grid';

const Card8 = () => {
  return (
    <Grid container gutter={12} style={{ padding: '1em'}}>
      <Grid item sm={6} xs={9}>
        <img src="http://via.placeholder.com/250x250" alt="role" />
      </Grid>
      <Grid item sm={6} xs={9}>
        <img src="http://via.placeholder.com/250x250" alt="role" />
      </Grid>
    </Grid>
  )
}

export default Card8;
