describe('Проверка смены и покупки аватара', function () {

   it('Смена и покупка аватара', function () {
        cy.visit('https://pokemonbattle.ru'); // Зайти на сайт
        cy.get('#k_email').type('katerina358897785g@yandex.ru');  // Ввела логин
        cy.get('#k_password').type('358897785Katya'); // Ввела пароль
        cy.get('.MuiButton-root').click(); // Нажала войти
        cy.get('.header_card_trainer').click(); // Нажала на аватар тренера
        cy.get('.k_mobile > :nth-child(5)').click(); // Нажала на смену аватар
        cy.get('.available > button').first().click() // Нажать на купить
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620 8691 1363 2996'); // Вводим номер карты
        cy.get(':nth-child(1) > .style_1_base_input').type('1225'); // вводим срок действия карты
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // Вводим CVV карты
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Zavidonova Ekaterina'); // Вводим имя владельца карты
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажать оплатить
        cy.get('.style_1_base_input').type('56456'); // Ввести код подтверждения
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); //Нажать оплатить
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // Проверка, что появился текст "Покупка прошла успешно"
    })

})

