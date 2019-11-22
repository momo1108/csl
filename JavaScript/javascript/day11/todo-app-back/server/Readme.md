# JSON-SERVER

## Getting started

### Install 
```shell
npm install -g  json server
```

### Run server

```shell
json-server --watch db.json --port 5000
```

#### Modify Scripts

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "json-server --watch db.json --port 5000",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```