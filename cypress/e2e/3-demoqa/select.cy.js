import selectPage from "../../pageObjects/selectPage.page";

describe("Select", () => {

    context.only("Select scenarios", () => {
        beforeEach(() => {     
            selectPage.visit();
        });

        it("Select scenarios", () => {
            //Click "Grid"
            selectPage.gridOption.click();
            //Click-“Two”,“Four”,“Six”,“Eight”
            selectPage.twoOption.click();
            selectPage.fourOption.click();
            selectPage.sixOption.click();
            selectPage.eightOption.click();
            //Validate that“Two”,“Four”,“Six”,“Eight” are highlighted
            selectPage.twoOption.should("have.class", "list-group-item active list-group-item-action");
            selectPage.fourOption.should("have.class", "list-group-item active list-group-item-action");
            selectPage.sixOption.should("have.class", "list-group-item active list-group-item-action");
            selectPage.eightOption.should("have.class", "list-group-item active list-group-item-action");
            //Validate that “One”,“Three”,“Five”,“Seven”,“Nine” are not highlighted
            selectPage.oneOption.should("not.have.class", "list-group-item active list-group-item-action");
            selectPage.threeOption.should("not.have.class", "list-group-item active list-group-item-action");
            selectPage.fiveOption.should("not.have.class", "list-group-item active list-group-item-action");
            selectPage.sevenOption.should("not.have.class", "list-group-item active list-group-item-action");
            selectPage.nineOption.should("not.have.class", "list-group-item active list-group-item-action");
        });   
       

    });
});

