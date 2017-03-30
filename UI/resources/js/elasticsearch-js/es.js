var elasticsearch = require('./node_modules/elasticsearch/src/elasticsearch');

var client = new elasticsearch.Client({
  host: 'http://172.28.46.6:9200',
  log: 'trace'
});


client.ping({
  requestTimeout: 30000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});


client.search({
  index: 'test',
  type: 'product',
  body: {
    "query": {
            "ids" : {
                "values" : ["1"]
            }
        }

  }
})
