import {Locators} from "./Locators";
import {Locators_main} from "./Locators";

export var urls_onliner = ['https://catalog.onliner.by/mobile','https://catalog.onliner.by/headphones',
    'https://catalog.onliner.by/smartwatch',
    'https://catalog.onliner.by/smartwatch', 'https://catalog.onliner.by/portablecharger', 'https://catalog.onliner.by/memcards',
    'https://catalog.onliner.by/phonecase', 'https://catalog.onliner.by/protectiveglass', 'https://catalog.onliner.by/phoneaccum',
    'https://catalog.onliner.by/bt', 'https://catalog.onliner.by/selfiestick', 'https://catalog.onliner.by/cable?cable_usage',
    'https://catalog.onliner.by/carholder', 'https://catalog.onliner.by/chargersmobile', 'https://catalog.onliner.by/chargersmobile',
    'https://catalog.onliner.by/speakerdock'
]

export class CatalogMainPage {
    //urls_array = urls_onliner
    visit_page = (URL) => cy.visit(URL)
    get_and_click = (Locators_main) => cy.get(Locators_main).click()
    hover_mobiles = () => cy.contains('Мобильные телефоны и аксессуары').realHover()
    xpath_click = (Locators) => cy.xpath(Locators).first().click({force:true})
    comparing_urls = (url) => cy.url().should('include', url)


        //urls_onliner().each(url_onliner)) =>{
}





