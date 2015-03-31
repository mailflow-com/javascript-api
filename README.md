# mailflow-js

npm-install

use "ENV=production grunt" to minimize


$mailflow.setup(*PUBLIC KEY*);

// pre-exsisting contact
$mailflow.contacts('email@mailflow.com').tag(['first tag', 'second tag']);

// tag and assign flow
$mailflow.contacts('email@mailflow.com').tag(['first tag', 'second tag'], true);

// delete tag
$mailflow.tags(12).delete();

// untag contact
$mailflow.contacts('email@mailflow.com').untag(12);
