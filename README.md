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

# SETUP / INIT / AUTH

## SETUP from configfiles ore localstorage
fbapp-configuration-file with 1..n 'key-ed' fb-configs can be passed to `<fire-base>` as property 'fbconf'.  
If 'app'-property is given in `<fire-base>` this conf is used to initialize the fbApp. The conf-object is stored into localstorage.     
If `<fire-base>` is called without fb and fbconf, the app can be inited from storage.

## AUTH using promises
fb-objects are activated after authentification-process only !?!
