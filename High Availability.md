---
Type: Technology
Related:
  - "[[System Design]]"
Status: Done
Created At: 2024-09-11T14:13:59
tags:
  - system-design
  - tech
---
> [!link] Reference link
> [3 khái niệm microservices](https://anonystick.com/blog-developer/3-khai-niem-ma-backend-chem-nhieu-va-sai-nhieu-nhat-202107212193512)
## Tính chất của hệ thống phân tán

<iframe width="100%" height="415" src="https://www.youtube.com/embed/EKLVEQs3USA?si=bKnfHSYHFdJ26RmK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### [[Nine fives]]
<div class="center"><img src="https://i.imgur.com/6zXKN8O.png" /></div>

Keynotes:
- Liên quan tới định lý CAP
- HA chỉ đảm bảo dữ liệu được response (it works) <-> mà không đảm bảo dữ liệu nhất quán
- 3 cách triển khai (Primary-Backup, Primary-Secondary, Primary-Primary)

**Primary - Backup**

<div class="center"><img src="https://i.imgur.com/4eYLM3p.png" /></div>

**Primary - Secondary**
<div class="center"><img src="https://i.imgur.com/YhZ4pXs.png" /></div>

**Primary - Primary**
<div class="center"><img src="https://i.imgur.com/VKrS98t.png" /></div>
