/// <reference types='cypress' />
import LoginPage from '../../pom/login'
import DashboardPage from '../../pom/dashboard'
// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Login Feature', () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  beforeEach(() => {
    cy.visit(loginPage.pageUrl)
  })

  it('Failed login with invalid password', () => {
    loginPage.loginFlow('penguinads02@gmail.com', 'admin123')
    cy.contains('Kata Sandi yang Anda Masukkan Salah').should('be.visible')
  })

  it('Failed login with invalid email', () => {
    loginPage.enterEmail('random@random.com')
    loginPage.clickNext()
    cy.contains('Email tidak terdaftar. Silahkan registrasi terlebih dahulu.').should('be.visible')
  })

  it('Successfully login', () => {
    loginPage.loginFlow('penguinads02@gmail.com', 'Meanwhile1!@#')
    cy.get(this.passwordInput)
      .parent()
      .parent()
      .parent()
      .find('button')
      .then(($btn) => {
        if ($btn.text().includes('Selanjutnya')) {
          cy.contains('Masukkan kode verifikasi yang dikirimkan melalui Email ke').should('be.visible')
        } else {
          cy.url().should('include', dashboardPage.pageUrl)
        }
      })
  })
})

describe('API Login Feature', () => {
  it('Login should return status code 200', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      body: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
      expect(response.body.token).to.not.be.empty
    });
  });

  it('Login should successfully less than 1000ms', () => {
    const start = new Date().getTime();

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      body: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    }).then((response) => {
      const end = new Date().getTime();
      const duration = end - start;
      expect(response.status).to.eq(200);
      expect(duration, `got response time: ${duration}ms`).to.be.lessThan(1000);
    });
  });

  it('Should handle multiple login requests', () => {
    const numberOfRequests = 10;

    for (let i = 0; i < numberOfRequests; i++) {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: {
          email: 'eve.holt@reqres.in',
          password: 'cityslicka'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    }
  });
});

