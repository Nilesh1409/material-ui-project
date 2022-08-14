import {makeStyles} from "@material-ui/core/styles";
import { red } from '@material-ui/core/colors';
import { CardContent, CardMedia } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  mainDiv : {
    // backgroundColor : "red",
    padding : "20px",
  },
  icon : {
    margin : "0 10px",
  },
  buttons : {
    marginTop : "30px",
  },
  gridCard : {
    padding : "20px",
  },
    card : {
        height : "100%",
        display : "flex",
        flexDirection : "column",
    },
  cardMedia : {
   paddingTop : "56.25%", // 16:9
  },
  cardAction : {

  },
  cardContent : {
    flexGrow : 1,
  },

}))

export {useStyle};