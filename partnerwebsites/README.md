To create a partner -> website mapping
sh partner_website_mapping.sh
curl -XPUT localhost:9200/_bulk --data-binary @partnerwebsite.json

query: http://localhost:9200/partner/_search?q=partnerId:2450

