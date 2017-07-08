import React from 'react'
import Grid from 'material-ui/Grid';

const Topic = () => {
  return (
    <div className="w3-center">
       <Grid container gutter={24}>
         <Grid item xs={3}/>
         <Grid  item xs={6} className="w3-center">
           Donec facilisis tortor ut augue lacinia, at viverra
           est semper. Sed sapien metus, scelerisque nec
           pharetra id, tempor a tortor.
         </Grid>
         <Grid item xs={3}/>
       </Grid>
    </div>
  );
}

export default Topic;
