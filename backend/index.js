require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "AmalGupta",
  "id": 5887966,
  "node_id": "MDQ6VXNlcjU4ODc5NjY=",
  "avatar_url": "https://avatars.githubusercontent.com/u/5887966?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AmalGupta",
  "html_url": "https://github.com/AmalGupta",
  "followers_url": "https://api.github.com/users/AmalGupta/followers",
  "following_url": "https://api.github.com/users/AmalGupta/following{/other_user}",
  "gists_url": "https://api.github.com/users/AmalGupta/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AmalGupta/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AmalGupta/subscriptions",
  "organizations_url": "https://api.github.com/users/AmalGupta/orgs",
  "repos_url": "https://api.github.com/users/AmalGupta/repos",
  "events_url": "https://api.github.com/users/AmalGupta/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AmalGupta/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Amal Gupta",
  "company": null,
  "blog": "",
  "location": "Noida",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 24,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2013-11-08T11:43:37Z",
  "updated_at": "2025-02-27T14:17:59Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
   res.send('Twitter API Endpoint')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>')
})

app.get('/account', (req, res) => {
    res.send('<h2>User Account</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})