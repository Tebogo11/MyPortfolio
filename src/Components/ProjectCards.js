import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    width: 500,
    margin: 20,
  },
  media: {
    height: 300,
    backgroundColor: "black",
  },
});

const ProjectCards = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image.default}
          title={props.title}
        />
        <CardContent className="CardStyle">
          <Typography gutterBottom variant="h5" component="h2">
            <h3 className="tl"> {props.title}</h3>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p className="tl" style={{ color: "whitesmoke" }}>
              {props.description}
            </p>
          </Typography>
          <h5 className="tl f6">Software and Tools</h5>
          <p className="tl">{props.Software}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.Access.map((link) => {
          return (
            <Button size="small" color="primary">
              <a href={link.Link} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </Button>
          );
        })}
      </CardActions>
    </Card>
  );
};

export default ProjectCards;
