import React from "react";
import {Typography,AppBar,CssBaseline,Toolbar,Container,Grid,Button,Card,CardMedia,CardContent,CardActions} from "@material-ui/core"
import {CallMissedSharp, PhotoCamera} from "@material-ui/icons";
import {useStyle} from "../style";

let cards = [1,2,3,4,5,6,7,8,9,10]

const Home = () => {
    const classes = useStyle();


    return (<>
    <CssBaseline/>
    <AppBar position="relative">
    <Toolbar>
      <PhotoCamera className={classes.icon} />
      <Typography variant="h6"  >
        Photo Gallery
      </Typography>
    </Toolbar>
    </AppBar>
    <main>
      <div className={classes.mainDiv} >
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom >
            This is Photo Gallery
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary">
            Here you can see all the photos you have taken in your life. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
          </Typography>
        </Container>
        <div>
          <Grid container spacing={3} justify="center">
            <Grid item>
              <Button className={classes.buttons} variant="contained" color="primary">SEE PHOTO</Button>
            </Grid>
            <Grid item>
              <Button className={classes.buttons}  variant="outlined" color="primary">
                MORE
              </Button>
            </Grid>
          </Grid>
        </div>
        </div>
        <Container className={classes.gridCard} >
        <Grid  container spacing={4} >
          {
            cards.map((card,index)=>(
              
              <Grid key={`${index}`} xs={12} sm={6} md={4}  item >
                <Card className={classes.card} >
                  <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" 
                  title="Image title"
                  ></CardMedia>
                  <CardContent className={classes.cardContent} >
                    <Typography variant='h5' gutterBottom >
                      Heading
                    </Typography>
                    <Typography variant="p">
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardAction} >
                    <Button size="small" color="primary">
                      VIEW
                    </Button>
                    <Button size="small" color="secondary">
                      EDIT
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
           
            ))
          }
          </Grid>
        </Container>
    </main>
    <footer>
      <Typography variant="h5" align="center" color="primary" >
        Footer titile
      </Typography>
      <Typography variant="subtitle1" align="center" color="secondary" >
        This is a footer section lorem ipsum dolor sit amet 
      </Typography>
    </footer>
    </>)
}
export default Home;