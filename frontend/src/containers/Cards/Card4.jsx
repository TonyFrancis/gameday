import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const Card4 = () => {
  return (
    <Card style={{padding: '1em'}}>
      <Grid container gutter={12}>
        <Grid item xs={6}>
          <Typography component="p">
            Curabitur lobortis id lorem id bibendum.
            Ut id consectetur magna. Quisque volutpat
            augue enim, pulvinar lobortis nibh lacinia
            at. Vestibulu.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button raised style={{ float: 'right'}}>
            Click Me
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Card4;
