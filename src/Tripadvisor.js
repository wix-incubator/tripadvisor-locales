'use strict'

// The data below is based on the language selector in www.tripadvisor.com
// Also see: https://developer-tripadvisor.com/content-api/supported-languages/

// Maps languages to TripAdvisor domains
export const languageDomains = {
    'ar': 'ar.tripadvisor.com' // Arabic
}

// Maps countries to TripAdvisor domains
export const countryDomains = {
    'US': 'www.tripadvisor.com',    // United States
    'BR': 'www.tripadvisor.com.br', // Brazil
    'MX': 'www.tripadvisor.com.mx', // Mexico
    'AR': 'www.tripadvisor.com.ar', // Argentina
    'CL': 'www.tripadvisor.cl',     // Chile
    'CO': 'www.tripadvisor.co',     // Colombia
    'PE': 'www.tripadvisor.com.pe', // Peru
    'VE': 'www.tripadvisor.com.ve', // Venezuela
    'EG': 'www.tripadvisor.com.eg', // Egypt
	'ZA': 'www.tripadvisor.co.za',  // South Africa
	'IL': 'www.tripadvisor.co.il',  // Israel
	'GB': 'www.tripadvisor.co.uk',  // United Kingdom
	'IT': 'www.tripadvisor.it',     // Italy
	'ES': 'www.tripadvisor.es',     // Spain
	'DE': 'www.tripadvisor.de',     // Germany
	'FR': 'www.tripadvisor.fr',     // France
	'SE': 'www.tripadvisor.se',     // Sweden
	'NL': 'www.tripadvisor.nl',     // Netherlands
	'TR': 'www.tripadvisor.com.tr', // Turkey
	'DK': 'www.tripadvisor.dk',     // Denmark
	'IE': 'www.tripadvisor.ie',     // Ireland
	'CZ': 'www.tripadvisor.cz',     // Czech Republic
	'AT': 'www.tripadvisor.at',     // Austria
	'GR': 'www.tripadvisor.com.gr', // Greece
	'FI': 'www.tripadvisor.fi',     // Finland
	'HU': 'www.tripadvisor.co.hu',  // Hungary
	'NO': 'no.tripadvisor.com',     // Norway
	'PL': 'pl.tripadvisor.com',     // Poland
	'RU': 'www.tripadvisor.ru',     // Russia
	'SK': 'www.tripadvisor.sk',     // Slovakia
	'RS': 'www.tripadvisor.rs',     // Serbia
	'CH': 'www.tripadvisor.ch',     // Switzerland
	'BE': 'www.tripadvisor.be',     // Belgium
	'JP': 'www.tripadvisor.jp',     // Japan
	'CN': 'www.tripadvisor.cn',     // China (there's also China - Internationa Edition: cn.tripadvisor.com)
	'IN': 'www.tripadvisor.in',     // India
	'AU': 'www.tripadvisor.com.au', // Australia
	'MY': 'www.tripadvisor.com.my', // Malaysia
	'NZ': 'www.tripadvisor.co.nz',  // New Zealand
	'PH': 'www.tripadvisor.com.ph', // Philippines
	'SG': 'www.tripadvisor.com.sg', // Singapore
	'ID': 'www.tripadvisor.co.id',  // Indonesia
	'KR': 'www.tripadvisor.co.kr',  // South Korea
	'TH': 'th.tripadvisor.com',     // Thailand
	'VN': 'www.tripadvisor.com.vn', // Vietnam
	'TW': 'www.tripadvisor.com.tw', // Taiwan
	'HK': 'en.tripadvisor.com.hk'   // Hong Kong
}


// Maps locales to TripAdvisor domains
export const localeDomains = {
    'en_CA': 'www.tripadvisor.ca',   // English (Canada)
    'fr_CA': 'fr.tripadvisor.ca',    // French (Canada)
	'fr_CH': 'fr.tripadvisor.ch',    // French (Switzerland)
	'it_CH': 'it.tripadvisor.ch',    // Italian (Switzerland)
	'fr_BE': 'fr.tripadvisor.be',    // French (Belgium)
	'en_HK': 'en.tripadvisor.com.hk' // English (Hong Kong)
}
