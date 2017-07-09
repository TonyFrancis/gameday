import React from 'react'
import Grid from 'material-ui/Grid';

const Topic = () => {
  return (
    <div className="w3-center">
       <Grid container gutter={12}>
         <Grid item sm={3}/>
         <Grid  item xs={12} sm={9} className="w3-center">
           Donec facilisis tortor ut augue lacinia, at viverra
           est semper. Sed sapien metus, scelerisque nec
           pharetra id, tempor a tortor.
         </Grid>
         <Grid item sm={3}/>
       </Grid>
    </div>
  );
}

export default Topic;
