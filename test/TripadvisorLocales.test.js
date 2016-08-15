'use strict'

import {expect} from 'chai'
import * as TripadvisorLocales from '../src/TripadvisorLocales'

describe('TripadvisorLocales', () => {
	describe('bestDomainFor', () => {
		it ('gives first priority to locale domains', () => {
			// We test 'fr_CH' because there's a different domain for the country 'CH'
			expect(TripadvisorLocales.bestDomainFor({
				locale: 'fr_CH'
			})).to.equal('fr.tripadvisor.ch')
		})
		
		it ('gives second priority to country locales', () => {
			// We test 'ar_EG' because there's a different domain for the language 'ar'
			expect(TripadvisorLocales.bestDomainFor({
				locale: 'ar_EG'
			})).to.equal('www.tripadvisor.com.eg')
		})
		
		it ('gives third priority to language locales', () => {
			expect(TripadvisorLocales.bestDomainFor({
				locale: 'ar_AE'
			})).to.equal('ar.tripadvisor.com')
		})
		
		it ('falls back to United States', () => {
			expect(TripadvisorLocales.bestDomainFor({
				locale: 'xx_XX'
			})).to.equal('www.tripadvisor.com')
		})
	})
	
	describe('bestPageUrlFor', () => {
		it ('builds a URL using bestDomainFor', () => {
			expect(TripadvisorLocales.bestPageUrlFor({
				locale: 'en_US',
				locationId: '1234'
			})).to.equal('https://www.tripadvisor.com/1234')
		})
	})
})
