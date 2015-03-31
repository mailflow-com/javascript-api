# Mailflow-js
Install dependancies
```sh
npm-install
```

Build dist
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

Delete tag from mailflow user 
```
$mailflow.tags(12).delete();
```

Remove tag from contact
```
$mailflow.contacts('email@mailflow.com').untag(12);
```
