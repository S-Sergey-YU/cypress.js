describe('Проверка формы авторизации', function () {
    it('Валидация на наличие @ в логине', function () {
        cy.visit('https://login.qa.studio/') // перейти на сайт
        cy.get('#mail').type('germandolnikov.ru') // ввести логин без "@"
        cy.get('#pass').type('qa_one_love999') // ввести любой пароль
        cy.get('#loginButton').click() // нажать войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации') // получили сообщение
        cy.get('#exitMessageButton > .exitIcon').click() // закрыли окно
    })

    it('Приведение логина к нижнему регистру и успешная авторизация', function () {
        const login = 'GerMan@Dolnikov.ru' // ввести логин с верхним регистром
        cy.visit('https://login.qa.studio/') // перейти на сайт
        cy.get('#mail').type(login.toLowerCase()) // преобразуем на нижний регистр
        cy.get('#pass').type('qa_one_love1') // ввести пароль
        cy.get('#loginButton').click() // нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно') // получили соощение
    })

    it('Кейс на проверку логина и пароля', function () {
        cy.visit('https://login.qa.studio/') // перейти на сайт
        cy.get('#mail').type('german@dolnikov.ru') // ввести верный логин
        cy.get('#pass').type('qa_one_love1') // ввести верный пароль
        cy.get('#loginButton').click() // нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно') // получили сообщение
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // проверяем видимость крестика
        cy.get('#exitMessageButton > .exitIcon').click() // закрыли окно
    })

    it('Кейс на восстановление пароля', function () {
        cy.visit('https://login.qa.studio/') // перейти на сайт
        cy.get('#forgotEmailButton').click() // Кликнуть на кнопку "Забыть пароль?"
        cy.get('#mailForgot').type('german@dolnikov.ru') // ввести пароль
        cy.get('#restoreEmailButton').click() // нажать отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') // получили сообщение
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // проверка на видимость крестика
        cy.get('#exitMessageButton > .exitIcon').click() // закрыли форму
    })

    it('Кейс на проверку верного логина и неверного пароля', function () {
        cy.visit('https://login.qa.studio/') // перейти на сайт
        cy.get('#mail').type('german@dolnikov.ru') // ввести верный логин
        cy.get('#pass').type('qa_one_one_love') // ввести неверный пароль
        cy.get('#loginButton').click() // нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет') // получили сообщение
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // проверяем видимость крестика
        cy.get('#exitMessageButton > .exitIcon').click() // закрыли окно
    })

    it('Кейс на проверку неверного логина и верного пароля', function () {
        cy.visit('https://login.qa.studio/') // перейти на сайт
        cy.get('#mail').type('german_qa@dolnikov.ru') // ввести неверный логин
        cy.get('#pass').type('qa_one_love1') // ввести верный пароль
        cy.get('#loginButton').click() // нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет') // получили сообщение
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // проверяем видимость крестика
        cy.get('#exitMessageButton > .exitIcon').click() // закрыли окно
    })
})