import { SelectablePage } from "../pageObjects/selectable.page";

describe("DemoQA", () => {
  context("Grid", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("Grid", () => {

      //Izvēlas grid

      SelectablePage.selectGrid.click();

      // selects 2 , 4  , 6 , 8 

      SelectablePage.selectSquare("Two").click();
      SelectablePage.selectSquare("Four").click();
      SelectablePage.selectSquare("Six").click();
      SelectablePage.selectSquare("Eight").click();

      // Pārbauda vai poga ir aktīva ( zils )

      SelectablePage.selectSquare("Two").should('have.class', 'active');
      SelectablePage.selectSquare("Four").should('have.class', 'active');
      SelectablePage.selectSquare("Six").should('have.class', 'active');
      SelectablePage.selectSquare("Eight").should('have.class', 'active');
      
      //Pārbauda vai ir (peleks) 
      
      SelectablePage.selectSquare("One").should('not.have.class', 'active');
      SelectablePage.selectSquare("Three").should('not.have.class', 'active');
      SelectablePage.selectSquare("Five").should('not.have.class', 'active');
      SelectablePage.selectSquare("Seven").should('not.have.class', 'active');
      SelectablePage.selectSquare("Nine").should('not.have.class', 'active');
    });
  })
})