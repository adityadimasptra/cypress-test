// cypress/pages/LoginPage.js

class LoginPage {
  // Selectors
  emailInput = '[placeholder="Masukkan email atau no. handphone Anda"]';
  passwordInput = '[placeholder="Masukkan kata sandi Anda"]'
  nextButton = 'Selanjutnya';
  loginButton = 'Masuk';
  pageUrl = 'webappv1/#/login'

  // Methods
  enterEmail(email) {
    cy.get(this.emailInput).type(email);
  }

  enterPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickNext() {
    cy.get('button').contains(this.nextButton).click();
  }
  
  clickLogin() {
    cy.get('button').contains(this.loginButton).click();
  }

  // loginFlow(email, password) {
  //   this.enterEmail(email);
  //   this.clickNext();
  //   this.enterPassword(password);
  //   this.clickLogin()
  // }

  loginFlow(email, password) {
    this.enterEmail(email);
    this.clickNext();
    this.enterPassword(password);
    cy.get(this.passwordInput)
      .parent()
      .parent()
      .parent()
      .find('button')
      .then(($btn) => {
        if ($btn.text().includes('Selanjutnya')) {
          cy.wrap($btn).click();
        } else {
          cy.wrap($btn).click();
        }
      })
  }
}

export default LoginPage;
