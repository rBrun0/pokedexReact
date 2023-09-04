import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PokemonCardCard({name, image, types}) {

  const typeHandler = () => {
    if(types[1]){
      return types[0].type.name + " " + types[1].type.name
    }

    return(types[0].type.name)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {typeHandler()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {/* Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica */}
        </Typography> 
      </CardContent>
      <CardActions>
     
      </CardActions>
    </Card>
  );
}