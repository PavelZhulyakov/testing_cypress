import {CatalogMainPage} from './MainPageOnliner'
import {Locators} from './Locators'
import {Locators_main} from './Locators'
import {urls_onliner} from './MainPageOnliner'


describe('The Catalog main Page', () => {
	Object.values(Locators).forEach((locators) => {
		const catalogPage = new CatalogMainPage()
		it('Successfully loads Mobile page' + locators[1], () => {
			catalogPage.visit_page('https://catalog.onliner.by/')
			// catalogPage.get_and_click(Locators.Electronika)
			cy.contains('Электроника').click()
			// catalogPage.xpath_click(Locators.Mobilephones_acess)
			catalogPage.hover_mobiles()
			catalogPage.xpath_click(locators[0])
			catalogPage.comparing_urls(locators[1])
		}
		)
	})
})


