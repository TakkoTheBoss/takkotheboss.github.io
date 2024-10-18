---
title: Networking
---

This contains the submodules for the Networking module of the core library.

# Modules

## Requests

This submodule provides capability to send http requests to a server.

### Submodule Functions
#### *rqheavy*
- HTTP Request containing: HTTP Method; URL; User Agent; Payload; Content Type.
- Returns: Response Code; Response Headers; Response Body.
- Notes: If the request method is anything other than "POST" then leave payload as an empty string.

*Syntax*:

    rqheavy: <http-method>, <url>, <user-agent>, <payload>, <content-type>

*Example*:

    rre: rqheavy: "GET", "https://takkotheboss.github.io", "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36", "\"key\": \"value\", "application/json"
    rcode: rre.a
    rheaders: rre.b
    rbody: rre.c