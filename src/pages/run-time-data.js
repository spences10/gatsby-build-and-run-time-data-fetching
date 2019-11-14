import Dump from '@wesbos/dump'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default () => {
  const [tweets, setTweets] = useState({})
  useEffect(() => {
    async function getTweets() {
      const res = await axios({
        url: 'https://www.graphqlhub.com/graphql',
        method: 'post',
        data: {
          query: `
            {
              twitter {
                user (identifier: name, identity: "spences10") {
                  created_at
                  description
                  id
                  screen_name
                  name
                  profile_image_url
                  url
                  tweets_count
                  followers_count
                  tweets(limit: 10) {
                    text
                    retweets {
                      user {
                        screen_name
                      }
                      in_reply_to_tweet_id
                    }
                  }
                }
              }
            }
          `,
        },
      })
      const { data } = res.data
      setTweets(data)
    }
    getTweets()
  }, [tweets])
  return (
    <div
      style={{
        textAlign: 'center',
        width: '800px',
        margin: '50px auto',
      }}
    >
      <div style={{ textAlign: 'left' }}>
        <Dump GraphQLResponse={tweets} />
      </div>
    </div>
  )
}
