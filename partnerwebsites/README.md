To create a partner -> website mapping

1. sh partner_website_mapping.sh

2. curl -XPUT localhost:9200/_bulk --data-binary @partnerwebsite.json

query: http://localhost:9200/partner/_search?q=partnerId:2450

