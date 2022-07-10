// import all icons from shared/assets
import bugIcon from '../assets/pokemon-bug-type.svg'
import darkIcon from '../assets/pokemon-dark-type.svg'
import dragonIcon from '../assets/pokemon-dragon-type.svg'
import electricIcon from '../assets/pokemon-electric-type.svg'
import fairyIcon from '../assets/pokemon-fairy-type.svg'
import fightingIcon from '../assets/pokemon-fighting-type.svg'
import fireIcon from '../assets/pokemon-fire-type.svg'
import flyingIcon from '../assets/pokemon-flying-type.svg'
import ghostIcon from '../assets/pokemon-ghost-type.svg'
import grassIcon from '../assets/pokemon-grass-type.svg'
import groundIcon from '../assets/pokemon-ground-type.svg'
import iceIcon from '../assets/pokemon-ice-type.svg'
import normalIcon from '../assets/pokemon-normal-type.svg'
import poisonIcon from '../assets/pokemon-poison-type.svg'
import psychicIcon from '../assets/pokemon-psychic-type.svg'
import rockIcon from '../assets/pokemon-rock-type.svg'
import steelIcon from '../assets/pokemon-steel-type.svg'
import waterIcon from '../assets/pokemon-water-type.svg'

export type PokemonType = keyof typeof pokemonTypeColors
export type PokemonTypeIcon = keyof typeof pokemonTypeIcons

export const pokemonTypeColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
}

export const pokemonTypeIcons = {
  fire: fireIcon,
  normal: normalIcon,
  water: waterIcon,
  electric: electricIcon,
  grass: grassIcon,
  ice: iceIcon,
  fighting: fightingIcon,
  poison: poisonIcon,
  ground: groundIcon,
  flying: flyingIcon,
  psychic: psychicIcon,
  bug: bugIcon,
  rock: rockIcon,
  ghost: ghostIcon,
  dragon: dragonIcon,
  dark: darkIcon,
  steel: steelIcon,
  fairy: fairyIcon
}
