//Importi
import { AppointmentPage } from "../pageObjects/appointment.page";
import { HistoryPage } from "../pageObjects/history.page";
import { LoginPage } from "../pageObjects/login.page";
import { MainPage } from "../pageObjects/main.page";
import { Summary } from "../pageObjects/Summary.page";




describe('DEMO', () => {

  it('Make An Appointment', () => { 

    // Sākums 
    
    MainPage.visitMainPage;
    MainPage.pressMakeAppointment.click();

    //Reģistrācija

    //User and parole

    cy.get("[aria-describedby='demo_username_label']").invoke('val').then(username => {
      LoginPage.enterUsername.type(username);
    });
    cy.get("[aria-describedby='demo_password_label']").invoke('val').then(password => {
      LoginPage.enterPassword.type(password);
    });

    LoginPage.pressLoginButton.click();
    AppointmentPage.clickFacility.select("Seoul CURA Healthcare Center");
    AppointmentPage.clickCheckbox.click();
    AppointmentPage.clickRadioButton.click();
    AppointmentPage.enterVisitDate.click();
    AppointmentPage.clickDate30.click();
    AppointmentPage.writeComment.type("CURA Healthcare Service");
    AppointmentPage.bookAppointmentBtn.click();

    //Pārbauda 

    AppointmentSummary.checkFacility.should("have.text", "Seoul CURA Healthcare Center");
    AppointmentSummary.checkReadMission.should("have.text", "Yes");
    AppointmentSummary.checkProgram.should("have.text", "Medicaid");
    AppointmentSummary.checkDate.should("have.text", "30/03/2024");
    AppointmentSummary.checkComment.should("have.text", "CURA Healthcare Service");

  });

  it.only('Make An Appointment', () => {
    MainPage.visitMainPage;
    MainPage.pressMakeAppointment.click();

    //Reģistrācija

    //User and parole

    cy.get("[aria-describedby='demo_username_label']").invoke('val').then(username => {
      LoginPage.enterUsername.type(username);
    });
    cy.get("[aria-describedby='demo_password_label']").invoke('val').then(password => {
      LoginPage.enterPassword.type(password);
    });

    LoginPage.pressLoginButton.click();
    LoginPage.clickMenuButton.click();
    LoginPage.checkIfSidebarActive.should("have.class", "active");
    LoginPage.goToHistory.click();
    HistoryPage.checkIfNoAppoinment.should("have.text", "No appointment.");

  });

})