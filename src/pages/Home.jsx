import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'
import { Container, Grid, Box } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = ({setPokemonData}) => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {

    getPokemons()
  }, [])

  const navigate = useNavigate()


  const getPokemons = () => {

    let endpoints = [];

    for (let i = 1; i < 50; i++){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    console.log(endpoints)
      axios.all(endpoints.map((endpoint) => (
        axios.get(endpoint)
        ))).then((res) => setPokemons(res))
  }

  const pokemonFilter = (name) => {
    var filteredPokemons = []

    if(name === "") {
      getPokemons()
    }

    for (var i in pokemons){
      if(pokemons[i].data.name.includes(name)){
        filteredPokemons.push(pokemons[i])
        
      }
    }

    setPokemons(filteredPokemons)
  }

  const pokemonPickHandler = (pokemonData) => {
    setPokemonData(pokemonData)
    navigate("/profile")
  }

  

  return (
    <div>
        <Container maxWidth="false">
        <NavBar  pokemonFilter={pokemonFilter}/>
            <Grid container>
              {
                pokemons.map((pokemon, key) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                    <Box onClick={() => pokemonPickHandler(pokemon.data)}>
                <PokemonCard name={pokemon.data.name} image= {pokemon.data.sprites.front_default} types={pokemon.data.types}/>
                </Box>
                </Grid>
                ))
              }
              
              
                
            </Grid> 
        </Container>
        
    </div>
  )
  }


export default Home