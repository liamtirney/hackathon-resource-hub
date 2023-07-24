import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function StoriesTile( { data }) {
  const openLink = (url) => () => {window.open(url)};
  return (
    <Card 
      raised
      sx={{
        maxWidth: 280,
        margin: "0 auto",
        mb: 5
      }}
    >
      <CardActionArea onClick={openLink(data.link)}>
        <CardMedia
          height="340"
          component="img"
          image={data.image}
          title={data.name}
          alt="Story owner's image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign="center">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.tagLine}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
