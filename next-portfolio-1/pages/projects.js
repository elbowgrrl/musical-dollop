import Link from "next/link";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

//this is wrong. I should have made a Card component in a separate file and then mapped the data to that.

function Projects() {
  const projectData = [
    {
      id: 1,
      title: "project1",
      desc: "Ally is a mood boosting app with a textless/languageless UI providing users with a nonintrusive space to let go of their thoughts with calming interactions and a relaxing, enjoyable sensory experience.",
      img: "https://i.imgur.com/7juREyw.png"
    },
    {
      id: 2,
      title: "project1",
      desc: "Ally is a mood boosting app with a textless/languageless UI providing users with a nonintrusive space to let go of their thoughts with calming interactions and a relaxing, enjoyable sensory experience.",
      img: "https://i.imgur.com/N6xA7mN.jpeg"
    },
    {
      id: 3,
      title: "project1",
      desc: "Ally is a mood boosting app with a textless/languageless UI providing users with a nonintrusive space to let go of their thoughts with calming interactions and a relaxing, enjoyable sensory experience.",
      img: "https://i.imgur.com/7juREyw.png"
    },
    {
      id: 4,
      title: "project1",
      desc: "Ally is a mood boosting app with a textless/languageless UI providing users with a nonintrusive space to let go of their thoughts with calming interactions and a relaxing, enjoyable sensory experience.",
      img: "https://i.imgur.com/7juREyw.png"
    },
    {
      id: 5,
      title: "project1",
      desc: "Ally is a mood boosting app with a textless/languageless UI providing users with a nonintrusive space to let go of their thoughts with calming interactions and a relaxing, enjoyable sensory experience.",
      img: "https://i.imgur.com/7juREyw.png"
    },
    {
      id: 6,
      title: "project1",
      desc: "Ally is a mood boosting app with a textless/languageless UI providing users with a nonintrusive space to let go of their thoughts with calming interactions and a relaxing, enjoyable sensory experience.",
      img: "https://i.imgur.com/7juREyw.png"
    }
  ];

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

export default Projects;
