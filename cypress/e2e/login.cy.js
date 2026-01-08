import authService from '../services/auth.service'

describe('Login - API ServeRest', () => {

  it('Deve realizar login com sucesso', () => {
    
    cy.fixture('user').then(user => {

      authService.login(user.email, user.password)
        .then((response) => {

          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('authorization')
          expect(response.body.message).to.eq('Login realizado com sucesso')

        })

    })

  })

})
