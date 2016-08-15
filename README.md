# tripadvisor-locales

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

Infers the best TripAdvisor URL for a given locale

### Usage
Install the library with `npm install tripadvisor-locales`

```javascript
var TripadvisorLocales = require('tripadvisor-locales');

TripadvisorLocales.bestDomainFor('en_US'); //-> 'www.tripadvisor.com'
TripadvisorLocales.bestDomainFor("en_CA"); //-> 'www.tripadvisor.ca'

TripadvisorLocales.bestPageUrlFor({locale: 'en_US', locationId:'1234'}); //-> 'https://www.tripadvisor.com/1234'
```

[downloads-image]: https://img.shields.io/npm/dm/tripadvisor-locales.svg

[npm-url]: https://npmjs.org/package/tripadvisor-locales
[npm-image]: https://img.shields.io/npm/v/tripadvisor-locales.svg
