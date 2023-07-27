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
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import Box from '@mui/material/Box';

export default function ApisTile( { data }) {
    const openLink = (url) => () => {
        window.open(url)
    };

    // if (!data) (
    //     return null;
    // )

    const youtubeButtons = data.youtubeLinks.map((linkObj, index) => (
        <Button key={index} size="large" onClick={openLink(linkObj.link)}>
            <PlayCircleIcon />
        </Button>
    ));
    
    const articleButtons = data.articleLinks.map((linkObj, index) => (
        <Button key={index} size="large" onClick={openLink(linkObj.link)}>
            <ArticleIcon />
        </Button>
    ));

    return (
      <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: 345, minWidth: 345, mb: 5 }}>
        <CardActionArea onClick={openLink(data.docsLink)}>
          <CardMedia
            sx={{ height: 140 }}
            image={data.image}
            title="api name"
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
        <CardActions sx={{ marginTop: 'auto', justifyContent: 'center', paddingTop: 0 }}>
          <Box sx={{ 
                // flexGrow: 1, 
                // display: 'flex' 
            }}>
            <Button size="large" onClick={openLink(data.docsLink)}>
              <CodeIcon />
            </Button>
            {youtubeButtons}
            {articleButtons}
          </Box>
        </CardActions>
      </Card>
    );
  }