import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import logoName from '../../assets/icorns/profile.png'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>
  createStyles({
    image:{
      background: 'transparent  0% 0% no-repeat padding-box',
      border:' 2px solid #CBCCD1',
      opacity:' 1',
      alignItems: 'center',
    },
    button: {
      background: '#181D331F 0% 0% no-repeat padding-box',
      borderRadius: '4px',
      opacity: '1',
    },
    upload: {
      textAlign: 'left',
      font:' SemiBold 14px/21px Poppins',
      letterSpacing: 0,
      color:'#4DB6AC',
      textTransform: 'uppercase',
      opacity: '1',
    },
    skip:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
  })
);

const ImageUploadSetting = (props) => {
  const classes = useStyles();

  

  return (
      <div>
        <Typography variant="h4" className={classes.tittle} >Set profile picture</Typography>
        <img src={logoName} alt="profile"  className='classes.image' />
        <Button  disabled className='' fullWidth>Upload</Button>
        <Button variant="contained" disabled className='' fullWidth>Complete</Button>
        <Button  className='' fullWidth>Skip</Button>
      </div>
  );
};

export default ImageUploadSetting;