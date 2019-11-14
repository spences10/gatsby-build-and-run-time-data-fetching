import Dump from '@wesbos/dump'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'

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
    <Layout>
      <div>
        <div style={{ textAlign: 'left' }}>
          <Dump tweets={runTimeData} GraphQLResponse={runTimeData} />
        </div>
      </div>
    </Layout>
  )
}
