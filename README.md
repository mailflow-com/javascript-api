# Mailflow-js
Install dependancies
```sh
$ npm-install
```

Development
```sh
  $ grunt develop
```

Build distribution (production/prototype/staging/development)
```sh
$ ENV=production grunt
```

### Examples
Setup with mailflow public api key
```
$mailflow.setup(*PUBLIC KEY*);
```

Tag prexsisting contact
```
$mailflow.contacts('email@mailflow.com').tag(['first tag', 'second tag']);
```

Tag pre-exisiting contact and add to any new flows if applicable
```
$mailflow.contacts('email@mailflow.com').tag(['first tag', 'second tag'], true);
```

Remove tag from contact
```
$mailflow.contacts('email@mailflow.com').untag(['first tag']);
```
