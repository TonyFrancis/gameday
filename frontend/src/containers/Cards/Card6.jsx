import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';


const Card6 = () => {
  let smallCard = []
  for (let i=0;i <8; i++) {
    smallCard.push(
      <Grid item sm={9} xs={6} key={i}>
        <Card style={{ padding: '1em' }}>
          <CardMedia>
            <img src="http://via.placeholder.com/50x50" role="tile" />
          </CardMedia>
        </Card>
      </Grid>
    )
  }
  return (
    <div className="w3-center">
      <Card style={{ padding: '1em'}}>
        <Grid container gutter={12} style={{ padding: '1em'}}>
          <Grid item sm={12}>
              <CardContent>
                <Typography component="p">
                  Mauris non tempor quam, et lacinia sapien.
                  Mauris accumsan eros eget libero posuere vulputate.
                  Etiam elit elit, elementum sed varius at, adipiscing
                  vitae est. Sed nec felis pellentesque, lacinia dui sed,
                   ultricies sapien. Pellentesque or.
                </Typography>
              </CardContent>
          </Grid>
          {smallCard}
        </Grid>
      </Card>
    </div>

  )
}
export default Card6;
