describe('Dashboard page', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.server();

    cy.route('GET', 'https://api.github.com/users/*').as('GitHubApi');
  });

  it('Should be able to visit page and see all global elements', () => {
    cy.get('[data-cy=header]')
      .should('be.visible')
      .and('contain', 'GitHub users');

    cy.get('[data-cy=search-bar]').should('be.visible');

    cy.get('[data-cy=search-bar] input')
      .should('be.visible')
      .and('not.be.disabled');

    cy.get('[data-cy=search-bar] button')
      .should('be.visible')
      .and('not.be.disabled');
  });

  it('Should be able to search an user using SearchBar button', () => {
    cy.get('[data-cy=search-bar] input').type('facebook');

    cy.get('[data-cy=search-bar] button').click();
  });

  it('Should be able to search an user using SearchBar then pressing Enter key', () => {
    cy.get('[data-cy=search-bar] input').type('facebook').type('{enter}');
  });

  it('Should show loading after a search', () => {
    cy.get('[data-cy=search-bar] input')
      .type('facebook/react-native')
      .type('{enter}');

    cy.get('[data-cy=loading-icon]').should('be.visible');
  });

  it('Should show message if does not have any user in local storage', () => {
    cy.clearLocalStorage('@Github:users');

    cy.get('[data-cy=no-users-message]')
      .should('be.visible')
      .and('contain', 'Use text input to search by an user.');
  });

  it('Should receive correct data on search', () => {
    cy.get('[data-cy=search-bar] input').type('facebook').type('{enter}');

    cy.wait('@GitHubApi').then(xmlHttpResponse => {
      expect(xmlHttpResponse.status).to.eql(200);

      expect(xmlHttpResponse.response.body).to.have.property('id');
      expect(xmlHttpResponse.response.body).to.have.property('avatar_url');
      expect(xmlHttpResponse.response.body).to.have.property('name');
      expect(xmlHttpResponse.response.body).to.have.property('login');
      expect(xmlHttpResponse.response.body).to.have.property('bio');
      expect(xmlHttpResponse.response.body).to.have.property('html_url');
    });
  });

  it('Should show error message when not found an user', () => {
    cy.get('[data-cy=search-bar] input')
      .type('kçjbndçfovuhasgdfkmgnzxkuchv')
      .type('{enter}');

    cy.wait('@GitHubApi').then(() => {
      cy.get('[data-cy=error-message]').should('be.visible');
    });
  });

  it('Should remove error message after 2 seconds', () => {
    cy.get('[data-cy=search-bar] input')
      .type('kçjbndçfovuhasgdfkmgnzxkuchv')
      .type('{enter}');

    cy.wait('@GitHubApi').then(() => {
      cy.get('[data-cy=error-message]').should('be.visible');
    });

    cy.wait(2000);

    cy.get('[data-cy=error-message]').should('not.exist');
  });

  it('Should save user datas received from github on LocalStorage', () => {
    cy.get('[data-cy=search-bar] input').type('facebook').type('{enter}');

    cy.wait('@GitHubApi').then(() => {
      expect(localStorage.getItem('@GitHub:users')).exist;
    });
  });

  it('Should show user card after a successfull request to GitHub api', () => {
    cy.get('[data-cy=search-bar] input').type('facebook').type('{enter}');

    cy.wait('@GitHubApi').then(() => {
      cy.get('[data-cy=user-card]').should('be.visible');
    });
  });

  it('Should user card based on datas received from GitHub api', () => {
    cy.get('[data-cy=search-bar] input').type('facebook').type('{enter}');

    cy.wait('@GitHubApi').then(xmlHttpResponse => {
      cy.log(xmlHttpResponse.response.body);

      const { body } = xmlHttpResponse.response;

      cy.get('[data-cy=user-card]')
        .should('be.visible')
        .children()
        .should('have.length', 4);

      cy.get('[data-cy=user-card] [data-cy=delete-user]')
        .should('be.visible')
        .and('not.be.disabled');

      cy.get('[data-cy=user-card] [data-cy=user-avatar]')
        .should('be.visible')
        .and('to.have.prop', 'src', body.avatar_url);

      cy.get('[data-cy=user-card] [data-cy=user-name]')
        .should('be.visible')
        .and('contain', body.name);

      cy.get('[data-cy=user-card] [data-cy=user-login]')
        .should('be.visible')
        .and('contain', body.login);

      cy.get('[data-cy=user-card] [data-cy=user-bio]')
        .should('be.visible')
        .and('contain', body.bio);

      cy.get('[data-cy=user-card] [data-cy=user-profile-link]')
        .should('be.visible')
        .and('to.have.prop', 'href', body.html_url);
    });
  });

  it('Should remove a user click in the remove button', () => {
    cy.get('[data-cy=search-bar] input').type('facebook').type('{enter}');

    cy.wait('@GitHubApi').then(xmlHttpResponse => {
      cy.get('[data-cy=user-card] [data-cy=delete-user]').click();

      cy.get('[data-cy=user-card]').should('not.be.visible');
    });
  });

  it('Should be able to have more then one user in screen', () => {
    cy.get('[data-cy=search-bar] input').type('facebook').type('{enter}');

    cy.wait('@GitHubApi');

    cy.get('[data-cy=search-bar] input').type('vue').type('{enter}');

    cy.wait('@GitHubApi');

    cy.get('[data-cy=search-bar] input').type('angular').type('{enter}');

    cy.wait('@GitHubApi');

    cy.get('[data-cy=user-card]').should('have.length', 3);
  });

  it('Should not be able to have duplicated users in screen', () => {
    cy.get('[data-cy=search-bar] input').type('facebook').type('{enter}');

    cy.wait('@GitHubApi');

    cy.get('[data-cy=search-bar] input').type('facebook').type('{enter}');

    cy.wait('@GitHubApi');

    cy.get('[data-cy=user-card]').should('have.length', 1);
  });

  it('Should be able to delete one user when have 3 in screen', () => {
    cy.get('[data-cy=search-bar] input').type('facebook').type('{enter}');

    cy.wait('@GitHubApi');

    cy.get('[data-cy=search-bar] input').type('vue').type('{enter}');

    cy.wait('@GitHubApi');

    cy.get('[data-cy=search-bar] input').type('angular').type('{enter}');

    cy.wait('@GitHubApi');

    cy.get('[data-cy=user-card]').should('have.length', 3);

    cy.get('[data-cy=user-card]').first().children('button').click();

    cy.get('[data-cy=user-card]').should('have.length', 2);
  });
});
