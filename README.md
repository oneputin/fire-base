# \<fire-base\>

alternative polymer elements to support firebase based  applications

# Supporting
- database
- storage
- auth
 
# Range-Queries
+ realized by startAt, endAt 
+ string queries are case-sensitive : all "uppercases" first
+ numeric queries : ???   

# Basic elements of fire-base
## fire-query.html
queries or saves data(sets) 
### Query
- fbPathQuery: query all objects fitting given path 
- fbItemQuery: query all objects (at a given path) who have a child-item that fits a certain `value-condition` or `range-condition`

### Save
- fbPathSave: Saves an object at given path

# fbItemQuery - details

## item-exist query
Return all documents which have a given property (item)

## value query
Return documents which have exact the queried value of a given property (item)

## range queries
are built using startAt()- endAt()-filters. 
  
# fbPathSave - details
requires all components (path, key, content) to be synced before Save

## 

