import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

export default function TutorialsTile( { data }) {
  const openLink = (url) => () => {window.open(url)};

  return (
    <Card sx={{ 
      display: 'flex', flexDirection: 'column', 
      maxWidth: 345, mb: 5 }}>
      <CardActionArea sx={{ height: '100%', marginTop: 0 }} onClick={openLink(data.link)}>
        <CardMedia
          sx={{ height: 140 }}
          image={data.image}
          title="tutorial name"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ marginTop: 0, justifyContent:"space-evenly" }}>
        <Box>
          <Button size="large" onClick={openLink(data.link)}>
            <LinkIcon/>
          </Button>
          <Tooltip title="GitHub" placement="top">
            <Button size="large" onClick={openLink(data.githubLink)}
            >
              <GitHubIcon/>
            </Button>
          </Tooltip>
          <Tooltip title="Sample Code" placement="top">
            <Button size="large" onClick={openLink(data.sampleCodeLink)}
            >
              <CodeIcon/>
            </Button>
          </Tooltip>
        </Box>
      </CardActions>
    </Card>
  );
}
