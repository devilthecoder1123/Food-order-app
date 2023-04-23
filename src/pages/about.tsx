import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const about: React.FC = () => {
  return (
    <Grid
      container
      spacing={0}
      style={{
        marginTop: 40,
        marginBottom: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/img/northladderimg.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", color: "#1f0a54" }}
          >
            We are NorthLadder
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We are a passionate group and we exist to create transparency and
            convenience for customers while selling their pre-owned assets in a
            manner that provides the best value to them.
          </Typography>
        </CardContent>
        <CardActions>
          <a href="https://www.northladder.com/ae-en/about-us/" target="_blank">
            {" "}
            <Button size="small">Learn More</Button>
          </a>
          <Button>
            <Link href="/">Back to home</Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default about;
