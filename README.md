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
- fbItemQuery: query all objects (at a given path) who have a child-item that fits a certain `value-condition (equalTo)` or `range-condition (startAt, endAt)`
- bItemQuery special case : query all objects with existing child-item

### Save
- fbPathSave: Saves an object at given path

# 


