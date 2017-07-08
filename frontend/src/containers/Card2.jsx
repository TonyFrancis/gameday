import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const Cards2 =  () => {
  return (
    <Card style={{padding: '1em'}}>
      <Grid container gutter={12}>
        <Grid item sm={6}>
            <CardContent>
            <Typography type="headline" component="h2">
              Vestibulum rutrum quam vitae fringilla
              tincidunt. Suspendisse nec tortor urna.
              Ut laoreet sodales nisi,.
            </Typography>
            <Typography component="p">
              Mauris non tempor quam, et lacinia sapien. Mauris
               accumsan eros eget libero posuere vulputate. Etiam
                elit elit, elementum sed varius at, adipiscing vitae
                est. Sed nec felis pellentesque, lacinia dui sed, ultricies
                 sapien. Pellentesque orci lectus, consectetur vel posuere
                  posuere, rutrum eu ipsum.
              Aliquam eget odio sed ligula iaculis consequat at eget.
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <Button raised>
              Learn More
            </Button>
          </CardActions>
        </Grid>
        <Grid item sm={6}>
          <CardMedia>
            <img src='http://via.placeholder.com/250x250' alt="representation" />
          </CardMedia>
        </Grid>
      </Grid>
    </Card>
  )
};

export default Cards2;
