import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const Card7 = () => {
  return (
    <div className="w3-center">
      <Grid container gutter={12}>
        <Grid item sm={12} xs={9}>
          <Card>
            <CardContent>
              <Typography type="headline" component="h2">
                Vestibulum rutrum quam vitae.
              </Typography>
              <Typography component="p">
                Vestibulum rutrum quam vitae fringilla tincidunt.
                Suspendisse nec tortor urna. Ut laoreet sodales nisi,
                quis iaculis nulla iaculis vitae. Donec sagittis faucibus
                lacus eget blandit. Mauris vitae ultricies metus,
                at condimentum nulla. Done.
              </Typography>
            </CardContent>
            <CardActions style={{ float: 'center'}}>
              <Button raised style={{    display: 'block',
                  margin: '0 auto'}}>
                Contact Us
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Card7;
