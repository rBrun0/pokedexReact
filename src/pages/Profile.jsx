import React from 'react'
import NavBar from '../components/NavBar'
import { Container, Typography, Box } from '@mui/material'

const Profile = ({pokemonData}) => {
  console.log(pokemonData)
  return (
    <>
    <NavBar hideSearch/>
    <Container maxWidth="md" style={{display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
      <Typography variant='h5'>{pokemonData.name}</Typography>
      <Box component="img" src={pokemonData.sprites.front_default} width="50%"></Box>
    </Container>
    </>
  )
}

export default Profile