import Link from "next/link";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// Now bring in the props
function ProjectCard() {
  return (
    <main>
      <h1>Projects</h1>
      {projectData.map((data) => {
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={data.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      })}
      <Link href="/">
        <a>Home</a>
      </Link>
    </main>
  );
}

export default ProjectCard;