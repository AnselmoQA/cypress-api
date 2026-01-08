class AuthService {

  login(email, password) {
    return cy.request({
      method: 'POST',
      url: '/login',
      body: {
        email: email,
        password: password
      },
      failOnStatusCode: false
    })
  }

}

export default new AuthService()
