import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const Card4 = () => {
  return (
    <Grid container gutter={12}>
      <Grid item sm={12} xs={9}>
        <Card style={{padding: '1em'}}>
          <Typography component="p">
            Curabitur lobortis id lorem id bibendum.
            Ut id consectetur magna. Quisque volutpat
            augue enim, pulvinar lobortis nibh lacinia
            at. Vestibulu.
          </Typography>
          <Button raised style={{ float: 'right'}}>
            Click Me
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Card4;
