curl -XPUT http://localhost:9200/partner -d '
{
 "mappings" : {
  "_default_" : {
   "properties" : {
    "url" : {"type": "string" },
    "partnerId" : { "type" : "integer" }
   }
  }
 }
}
';