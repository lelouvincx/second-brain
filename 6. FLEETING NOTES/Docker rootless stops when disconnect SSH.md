---
Type: Fleeting Note
Related: 
tags:
  - tech
  - fleeting-note
---

> [!link] From
> https://devops.stackexchange.com/questions/16949/docker-containers-are-being-restarted-after-logging-in-via-ssh
> Official troubleshoot from podman:
> https://github.com/containers/podman/blob/main/troubleshooting.md#17-rootless-containers-exit-once-the-user-session-exits

When running docker rootless, the services keep stopping when disconnecting SSH server. Then, the solution is simple:

```bash
loginctl enable-linger $UID
```
