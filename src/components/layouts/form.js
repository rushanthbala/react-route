import {
    createStyles,
    Theme,
    withStyles,
  } from '@material-ui/core/styles';
  import InputBase from '@material-ui/core/InputBase';
  import TextField, { TextFieldProps } from '@material-ui/core/TextField';
  

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: '0px',
          
      },
    },
    inputPlaceholder: { /* Internet Explorer 10-11 */
      color:'#181D333E'
     },
    input: {
      borderRadius: 4,
      position: 'relative',
      background:'#FFFFFF 0% 0% noRepeat paddingBox',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      letterSpacing:'0px',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      opacity: 1,
      color:'#181D33',
      // Use the system font instead of the default Roboto font.
      font:' Regular 14px/18px PT Sans',
      '&:focus': {
        boxShadow: `0px 0px 8px #0000000A`,
        borderColor:'  0.75px solid #3F44511F',
      },
    },
  }),
)(InputBase);


export default BootstrapInput