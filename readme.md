## Referral Code Generator

[![npm (scoped)](https://img.shields.io/npm/v/referral-code-generator.svg)](https://www.npmjs.com/package/referral-code-generator)
[![npm (scoped)](https://img.shields.io/badge/npm-referral--code--generator-brightgreen.svg)](https://www.npmjs.com/package/referral-code-generator)

> A package that helps you generate referral code for your users.

#### Installation

```
$ npm install referral-code-generator
```

#### Features
```
* Little and easy to use.
* Generate random and custom referral code.
```

#### Usage

```javascript
import referralCodeGenerator from 'referral-code-generator'
```
OR

```javascript
let referralCodeGenerator = require('referral-code-generator')
```

#### Generating your referral code

```javascript
example 1: 

referralCodeGenerator.alpha('lowercase', 12)

result: the above code will return 12 random alphabets in lowercase.
```

```javascript
example 2: 

referralCodeGenerator.alphaNumeric('uppercase', 8, 7)

result: the above code will return 8 alphabets and 7 numbers respectively.
```

```javascript
example 3: 

referralCodeGenerator.custom('lowercase', 6, 6, 'temitope');

result: the above code will return 6 letters from the supplied username and 6 random numbers.
```

#### Parameters

```
username: This is your user's unique name.

wordlength: The number of alphabets you want to extract from the username to form the referral code.

numberlength: The number of random digits you want to generate.

type: The word case format you want. [uppercase, lowercase].
```
