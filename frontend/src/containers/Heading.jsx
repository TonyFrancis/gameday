import React from 'react'
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';

const Heading = () => {
  const playIcon = {
    height: 38,
    width: 38,
  };
  return (
    <div style={{height: '10em'}}>
      <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
        <div className="w3-display-topleft w3-padding-large w3-xlarge">
          Hello World
        </div>
        <div className="w3-display-left">
          <Grid container gutter={24}>
            <Grid item xs={12} sm={12}>
              <h4 className="w3-xxlarge w3-animate-top" style={{ paddingLeft: 20}}>
                Mauris non tempor quam, et lacinia sap.
              </h4>
              <h4 className="w3-small w3-animate-top" style={{ paddingLeft: 20}}>
                Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere.
              </h4>
              <h4 className="w3-small w3-animate-top" style={{ paddingLeft: 20}}>
              <IconButton aria-label="Play/pause">
                <PlayArrowIcon color="white" />
              </IconButton>
              Play video
              </h4>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Heading;
