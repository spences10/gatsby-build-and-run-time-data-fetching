import Dump from '@wesbos/dump'
import React from 'react'

export default ({ data }) => {
  const {
    rickAndMorty: { characters },
  } = data
  return (
    <div
      style={{
        textAlign: 'center',
        width: '800px',
        margin: '50px auto',
      }}
    >
      {characters.results.map(character => (
        <>
          <h2>{character.name}</h2>
          <p>Species: {character.species}</p>
          <img src={character.image} />
        </>
      ))}
      <div style={{ textAlign: 'left' }}>
        <Dump GraphQLResponse={data} />
      </div>
    </div>
  )
}

export const GatsbyQuery = graphql`
  {
    rickAndMorty {
      characters {
        results {
          name
          species
          image
        }
      }
    }
  }
`
