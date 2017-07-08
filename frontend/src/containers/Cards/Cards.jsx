import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const Cards = ({ image, heading, text }) => {
  return (
    <Card style={{ padding: 16}}>
      <CardMedia>
         <img src={image} alt="representation" />
      </CardMedia>
      <CardContent>
        <Typography type="headline" component="h2">
          {heading}
        </Typography>
        <Typography component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

Cards.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default Cards;
