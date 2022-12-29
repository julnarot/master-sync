const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const rq = require('request')
const port = 3030


// const data = require("./DATA.json");
// module.exports = data

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    const count = data.length;
    response.json({ data, count });
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
  callRequest(generateRequest())
})


function generateRequest(params) {
     return {
        method: 'GET',
        url: `https://api.github.com/users/julnarot`,
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            // 'kadme.security.token': configGral.ambar_token,
            // 'ticket': ticket,
        },
        // body: JSON.stringify({
        //     "query": {
        //         "classname": `${namespace}:${classname}`,
        //         "ge": [{"kmeta:LastModified": dt.toISOString() }]
        //     },
        //     "scroll": true,
        //     "loadProperties":loadProperties,
        //     ...pagination
        // })
    }
}

function callRequest(params) {
    return new Promise((resolve, reject) => {
        rq(params, (error, response, body)=>{
            console.log("http calling.... ")
            if(response.statusCode == 200) {
                console.log("RESOLVE: ")
                console.log(body)
                resolve(body)
            } else {
                console.log("error! :(  ")
            } 
            console.log("STATUS: ", response.statusCode)
        })
    });
}