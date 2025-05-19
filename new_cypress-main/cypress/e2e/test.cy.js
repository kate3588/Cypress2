import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"

describe('Проверка авторизации', function () {
   
    beforeEach('Начало теста', function () {
         cy.visit('/');
          });

    afterEach('Конец теста', function () {
         cy.get(result_page.close).should('be.visible'); // Есть крестик и он виден для пользователя
        });

   it('Верный пароль и верный логин', function () {
        cy.get(main_page.email).type(data.login); // Ввели верный логин
        cy.get(main_page.password).type(data.password);  // Ввели верный пароль
        cy.get(main_page.login_button).click(); // Нажал войти
        cy.get(result_page.title).contains('Авторизация прошла успешно');  // Проверяю, что после аторизации вижу текст
        cy.get(result_page.title).should('be.visible');    //Текст виден пользователю
    })

    it('Провера восстановления пароля', function () {
        cy.get(main_page.fogot_pass_btn).click(); // Нажимаю восстановить пароля
        cy.get(recovery_password_page.email).type(data.login);  // Ввел почту для восстановления пароля
        cy.get(recovery_password_page.send_button).click(); // Нажимаю "Отправить код"
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');  // Проверяю на совпадение текст
        cy.get(result_page.title).should('be.visible');    //Текст виден пользователю
         })

    it('Неверный пароль и верный логин', function () {
        cy.get(main_page.email).type(data.login); // Ввели верный логин
        cy.get(main_page.password).type('iLoveqastudio145');  // Ввели неверный пароль
        cy.get(main_page.login_button).click(); // Нажал войти
        cy.get(result_page.title).contains('Такого логина или пароля нет');  // Проверяю, что после аторизации вижу текст
        cy.get(result_page.title).should('be.visible');    //Текст виден пользователю
       }) 

    it('Верный пароль и неверный логин', function () {
        cy.get(main_page.email).type('gerrman@dolnikov.ru'); // Ввели неверный логин
        cy.get(main_page.password).type(data.password);  // Ввели верный пароль
        cy.get(main_page.login_button).click(); // Нажал войти
        cy.get(result_page.title).contains('Такого логина или пароля нет');  // Проверяю, что после аторизации вижу текст
        cy.get(result_page.title).should('be.visible');    //Текст виден пользователю
       })
       
    it('Проверка на логин без @', function () {
        cy.get(main_page.email).type('germandolnikov.ru'); // Ввели  логин без @
        cy.get(main_page.password).type(data.password);  // Ввели верный пароль
        cy.get(main_page.login_button).click(); // Нажал войти
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');  // Проверяю, что вижу текст
        cy.get(result_page.title).should('be.visible');    //Текст виден пользователю
         })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); // Ввели неверный логин ( заглавные и строчные буквы)
        cy.get(main_page.password).type(data.password);  // Ввели верный пароль
        cy.get(main_page.login_button).click(); // Нажал войти
        cy.get(result_page.title).contains('Авторизация прошла успешно');  // Проверяю, что после аторизации вижу текст
        cy.get(result_page.title).should('be.visible');    //Текст виден пользователю
         })

})    