/*var elasticsearch = require('./node_modules/elasticsearch/src/elasticsearch');

var client = new elasticsearch.Client({
  host: 'http://172.28.46.6:9200',
  log: 'trace'
});

/*
client.ping({
  requestTimeout: 30000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

/*
result = client.search({
  index: 'test',
  type: 'product',
  body: {
    "query": {
            "ids" : {
                "values" : ["1"]
            }
        }

  }
});
console.log(result);*/
/*
console.log("start second");

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
    "size":  2

  }
},function (error, response)
{
 console.log("print response");
 console.log(response.hits.hits);
 objects = response.hits.hits;
 console.log(objects[0]._source.brandEnrichment);
 console.log(objects.keys.length)

}

)*/


function getResult() {
    var elasticsearch = require('./node_modules/elasticsearch/src/elasticsearch');

//    var objects;
    var client = new elasticsearch.Client({
        host: 'http://172.28.46.6:9200',
        log: 'trace'
    });

     client.search({
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
    },function (error, response)
    {
       // console.log("print response");
        /// console.log(response.hits.hits);
        objects = response.hits.hits;
console.log("print response inside");
console.log(objects);
        return objects
        // console.log(objects[0]._source.brandEnrichment);

    }

    )

    }


/*var object = getResult();

function sleep() {
   setTimeout(function() {console.log("print response outside");
                           console.log(objects);


                           }, 300);
}

sleep();*/
