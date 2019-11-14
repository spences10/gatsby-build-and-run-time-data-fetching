import Dump from '@wesbos/dump'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default () => {
  const [runTimeData, setRunTimeData] = useState({})
  useEffect(() => {
    async function getRunTimeData() {
      const res = await axios({
        url: 'https://spotify-graphql-server.herokuapp.com/graphql',
        method: 'post',
        data: {
          query: `
            {
              queryArtists(byName:"Andy C") {
                name
                id
                image
                albums {
                  name
                  image
                }
              }
            }
          `,
        },
      })
      const { data } = res.data
      setRunTimeData(data)
    }
    getRunTimeData()
  }, [])
  return (
    <div
      style={{
        textAlign: 'center',
        width: '800px',
        margin: '50px auto',
      }}
    >
      <div style={{ textAlign: 'left' }}>
        <Dump tweets={runTimeData} GraphQLResponse={runTimeData} />
      </div>
    </div>
  )
}
