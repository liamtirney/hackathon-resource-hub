import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import Box from '@mui/material/Box';

export default function StoriesTile( { data }) {
  const openLink = (url) => () => {window.open(url)};
  return (
    <Card sx={{ maxWidth: 345, mb: 5 }}>
      <CardActionArea onClick={openLink(data.link)}>
        <CardMedia
          sx={{ height: 240, width: 340, margin: "auto" }}
          component="img"
          image={data.image}
          title="Story owner's name and image"
          alt="Story owner's name and image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign="center">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.tagLine}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center', paddingTop: 0 }}>
        <Box sx={{ 
				// flexGrow: 1,
				// display: 'flex',
			}}>
          <Button size="large" onClick={openLink(data.link)}>
            <PlayCircleIcon/>
          </Button>
          <Button size="large" onClick={openLink(data.githubLink)}>
            <GitHubIcon/>
          </Button>
          <Button size="large" onClick={openLink(data.sampleCodeLink)}>
            <CodeIcon/>
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
