import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const Card5 = () => {
return (
  <Grid container gutter={12}>
    <Grid item sm={4} xs={12}>
      <Card style={{ padding: '1em'}}>
        <CardMedia>
          <img src="http://via.placeholder.com/250x250" role="placeholder" />
        </CardMedia>
      </Card>
    </Grid>
    <Grid item sm={4} xs={12}>
      <Card style={{ padding: '1em'}}>
        <CardMedia>
          <img src="http://via.placeholder.com/160x160" role="placeholder" />
        </CardMedia>
        <CardContent>
          <Typography type="headline" component="h2">
            Heading
          </Typography>
          <Typography component="p">
            Content
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item sm={4} xs={12}>
      <Card style={{ padding: '1em'}}>
        <CardMedia>
          <img src="http://via.placeholder.com/250x250" role="placeholder" />
        </CardMedia>
      </Card>
    </Grid>
    <Grid item sm={4} xs={12}>
      <Card style={{ padding: '1em'}}>
        <CardMedia>
          <img src="http://via.placeholder.com/150x250" role="placeholder" />
        </CardMedia>
      </Card>
    </Grid>
    <Grid item sm={4} xs={12}>
      <Card style={{ padding: '1em'}}>
        <CardMedia>
          <img src="http://via.placeholder.com/350x250" role="placeholder" />
        </CardMedia>
      </Card>
    </Grid>
    <Grid>
      <Card style={{ padding: '1em'}}>
        <CardMedia>
          <img src="http://via.placeholder.com/250x250" role="placeholder" />
        </CardMedia>
      </Card>
    </Grid>
  </Grid>
)
}

export default Card5;
