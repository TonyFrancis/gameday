import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const Card3 = () => {
  return (
    <Grid container gutter={12}>
      <Grid item sm={12} xs={9}>
        <img src="http://via.placeholder.com/1200x250"/>
      </Grid>
      <Grid item sm={4} xs={9} style={{ top: '-7em', left: '50em', float: 'right', position: 'relative'}}>
        <Card style={{ width: '20em'}}>
          <CardContent>
            <Typography component="p">
              Mauris non tempor quam, et lacinia sapien.
              Mauris accumsan eros eget libero posuere vulputate.
              Etiam elit elit, elementum sed varius at, adipiscing
              vitae est. Sed nec felis pellentesque, lacinia dui sed,
              ultricies sapien..
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Card3;
