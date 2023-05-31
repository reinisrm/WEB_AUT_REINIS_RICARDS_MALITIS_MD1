import BasePage from "./base.page";

class selectPage extends BasePage {

    static get url(){
        return "/selectable";
    }
    static get gridOption() {
        return cy.get("#demo-tab-grid");
    }
    static get twoOption() {
        return cy.get(".list-group-item-action").contains("Two");
    }   
      static get fourOption() {
        return cy.get(".list-group-item-action").contains("Four");
    }
      static get sixOption() {
        return cy.get(".list-group-item-action").contains("Six");
    }
      static get eightOption() {
        return cy.get(".list-group-item-action").contains("Eight");
    }
    static get oneOption() {
        return cy.get(".list-group-item-action").contains("One");
    }
    static get threeOption() {
        return cy.get(".list-group-item-action").contains("Three");
    }
    static get fiveOption() {
        return cy.get(".list-group-item-action").contains("Five");
    }
    static get sevenOption() {
        return cy.get(".list-group-item-action").contains("Seven");
    }
    static get nineOption() {
        return cy.get(".list-group-item-action").contains("Nine");
    }
   


}

export default selectPage;