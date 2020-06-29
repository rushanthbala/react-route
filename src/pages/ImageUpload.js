import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import ImageUploadImage from '../assets/images/SetProf.png';
import ImageUploadSetting from '../components/imageUpload/ImageUploadSetting';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  cart: {
    maxWidth: '430px',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  tittle:{
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    font:' Bold 32px/40px PT Sans',
    letterSpacing:' 0px',
    color: '#181D33',
    opacity:' 1',
  }
});

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        email: '',
        password: '',
      },
    };
  }

  render() {
    const { classes } = this.props;
    const { initialValues } = this.state;

    return (
      <PublicLayout
        image={ImageUploadImage}
        title="Integrous data collections"
        text="Streaming highly reliable and accurate qualitative data from trusted sources for lucid analysis and effective decision making."
      >
        <div className={classes.cart}>
             <ImageUploadSetting initialValues={initialValues} />
        </div>
      </PublicLayout>
    );
  }
}

export default withStyles(styles)(ImageUpload);