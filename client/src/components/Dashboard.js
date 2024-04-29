import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const homes = [
  { id: 1, title: 'Home 1', image: 'url-to-image-1', description: 'Description 1' },
  { id: 2, title: 'Home 2', image: 'url-to-image-2', description: 'Description 2' },
  // Add more homes as needed
];

function Dashboard() {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => {/* Add home logic */}}>
        Add Home
      </Button>
      {homes.map((home) => (
        <Card key={home.id}>
          <CardMedia
            component="img"
            alt={home.title}
            height="140"
            image={home.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {home.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {home.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Dashboard;