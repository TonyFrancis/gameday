import React from 'react'
import Cards from './Cards';
import Grid from 'material-ui/Grid';

const CardList = () => {
  const cardContent = [
    {
      image: 'http://via.placeholder.com/250x250',
      heading: 'Heading - 1',
      text: 'In hac habitasse platea dictumst.\
      Vivamus adipiscing fermentum quam volutpat al.',
    },
    {
      image: 'http://via.placeholder.com/250x250',
      heading: 'Heading - 2',
      text: 'In hac habitasse platea dictumst.\
      Vivamus adipiscing fermentum quam volutpat al.',
    },
    {
      image: 'http://via.placeholder.com/250x250',
      heading: 'Heading - 3',
      text: 'In hac habitasse platea dictumst.\
      Vivamus adipiscing fermentum quam volutpat al.',
    },
  ];
  const content = cardContent.map( (content, index) => (
    <Grid key={index} item sm={4}>
      <Cards
        heading={content.heading}
        image={content.image}
        text={content.text}
      />
    </Grid>
));
  return (
    <Grid container gutter={12} style={{ marginTop: 30,}}>
      {content}
    </Grid>
  )
};
export default CardList;
