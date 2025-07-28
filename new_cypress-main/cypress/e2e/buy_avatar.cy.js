describe('Покупка  аватара', function () {
    it('Проверяем покупку нового аватара', function () {
        cy.visit('https://pokemonbattle.ru/login') // перейти на сайт
        cy.get('#k_email').type('ruxaker@yandex.ru') // ввести верный логин без
        cy.get('#k_password').type('01August2014') // ввести верный пароль пароль
        cy.get('.MuiButton-root').click() // подтвердить
        cy.get('.header_card_trainer').click()
        cy.get('[data-qa="shop"]').click()
        cy.get('.available > button').last().click() // выбор последних аватаров
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4960145180756986') // вводим номер карты
        cy.wait(4000)
        cy.get(':nth-child(1) > .style_1_base_input').type('1127') // вводим срок карты
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125') // вводим код карты
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('TEST TEST') // ввести фамилию и имя
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click()
        cy.get('.style_1_base_input').type('56456')
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click()
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно').should('be.visible')
    })
})