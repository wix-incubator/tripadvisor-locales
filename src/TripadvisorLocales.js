'use strict'

import * as Tripadvisor from './Tripadvisor'
import _ from 'lodash'


export const bestDomainFor = ({locale}) => {
	const localeDomain = Tripadvisor.localeDomains[locale]
	if (localeDomain) {
		return localeDomain
	}
	
	const country = locale.substr(3, 2)
	const countryDomain = Tripadvisor.countryDomains[country]
	if (countryDomain) {
		return countryDomain
	}
	
	const language = locale.substr(0, 2)
	const languageDomain = Tripadvisor.languageDomains[language]
	if (languageDomain) {
		return languageDomain
	}
	
	return Tripadvisor.countryDomains['US']
}

export const bestPageUrlFor = ({locale, locationId}) => {
	return `https://${bestDomainFor({locale})}/${locationId}`
}