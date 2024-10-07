---
Type: Literature Note
Related:
  - "[[System Design]]"
Status: Reading
Created At: 2024-09-14T18:04:18
tags:
  - "#system-design"
  - later
  - youtube
Source:
  - https://www.youtube.com/watch?v=zgIyzEEXfiA
---
<div class="center"><img src="https://i.imgur.com/PbmWVFk.png" /></div>

### Key takeaways
- Before solving a system design problem, I need to define requirements such as traffic, storage, compute units, etc => ==This is usually not mentioned first, I have to ask the interviewer for more information! ==

- Care more about algorithms used, and their pros and cons. For e.g, the author mentioned 2 algorithms using hash or random 7 numbers. If using a hash algorithm like md5, should be careful about its vulnerability such as [[Collision Attack|collision attack]].

- Basic elements of a URL Shortener system: server, load balancer, database (SQL/NoSQL), cache, message queue

- Load balancer is everywhere! From client -> server, server -> database, server -> cache, etc

- [[Base62]] is different from [[Base64]]!

---
Related:
- https://medium.com/@sandeep4.verma/system-design-scalable-url-shortener-service-like-tinyurl-106f30f23a82