import { withStyles } from "@material-ui/core";

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiPaginationItem-root': {
      color: '#356aa1'
    },
    '.MuiPaginationItem-textPrimary.Mui-selected': {
      backgroundColor: '#356aa1'
    },
    '.MuiInput-underline': {
      border: 'none',
      '&:hover': {
        '&:not(.Mui-disabled)':{
          '&::before': {
            border: 'none'
          }
        }        
      },
      '&::before': {
        border: 'none'
      }
    },
    '.MuiSvgIcon-root': {
      // fill: '#ffffff'
    },
    '.MuiInputBase-root': {
      fontFamily: 'Karla'
    },
    '.MuiMenuItem-root': {
      fontFamily: 'Karla'
    }
  },
})(() => null);

export default GlobalCss;
