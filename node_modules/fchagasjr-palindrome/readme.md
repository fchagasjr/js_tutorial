# Phrase object (with palindrome detector)

This is a sample NPM module created in [Learn Enough Javascript to Be Dangerous](https://www.learnenough.com/course/javascript/) by Michael Hartl.

The module can be used as follows:

```bash
$ npm install --global fchagasjr-palindrome
$ vim test.js
let Phrase = require("fchagasjr-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```