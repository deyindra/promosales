// content of index.js
const http = require('http')  
const port = 3000

const requestHandler = (request, response) => {

var elasticsearch = require('./node_modules/elasticsearch/src/elasticsearch');

var client = new elasticsearch.Client({
  host: 'http://172.28.46.6:9200',
  log: 'trace'
});


var result2 = client.search({
  index: 'test',
  type: 'product',
  body: {
"sort": [
   {
     "discount": {"order": "desc"}
   }
], "query": {
        "term": {
          "partnerId": 6211
        }
    },
    "size":  1

  }
},function (error, esResponse)
{
 console.log("print response");
// console.log(esResponse.hits.hits);
 objects = esResponse.hits.hits;
 console.log(objects[0]._source.brandEnrichment);
 console.log(objects.keys.length)
 response.end(objects);
  console.log(request.url)
 response.end(objects);

}

)

}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
