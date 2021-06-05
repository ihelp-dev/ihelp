import { createMuiTheme} from '@material-ui/core/styles';
import { indigo, red} from "@material-ui/core/colors";

export const theme = createMuiTheme({
    palette: {
      // type: "dark",
      primary : indigo,
      secondary : red,
      background: {
        default: "azure"
      }
    },
    overrides: {
      MuiAppBar: {
        root : {
          transition : 'translateZ(0)',
        },
      },
    }
})