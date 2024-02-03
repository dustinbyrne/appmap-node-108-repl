Install dependencies and run the web service via `appmap-node`

```sh
$ yarn && yarn start:appmap
```

Then, `curl` the example endpoint

```sh
$ curl localhost:3000/hello
```

An AppMap should be created which reproduces the issue.
