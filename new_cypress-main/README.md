<h2>UI Автотесты на фреймворке Cypress</h2>

> **Статус проекта:**
> Публичный проект: https://login.qa.studio/
> 

## Описание проекта и задачи
Автоматизировать часть проверок регресса с помощью Cypress

## Тест-кейсы, которые автоматизировал
* Валидация на наличие @ в логине
* Приведение логина к нижнему регистру и успешная авторизация
* Кейс на проверку логина и пароля
* Кейс на восстановление пароля
* Кейс на проверку верного логина и неверного пароля
* Кейс на проверку неверного логина и верного пароля

## Детали реализации

1. baseUrl вынесен в переменные конфига
![image](https://raw.githubusercontent.com/S-Sergey-YU/cypress.js/refs/heads/main/new_cypress-main/baseUrl.png)

2. Применение хуков beforeEach и afterEach
![image](https://raw.githubusercontent.com/S-Sergey-YU/cypress.js/refs/heads/main/new_cypress-main/beforeEach_afterEach.png)

3. Переменные данные для авторизации вынесены в отдельный файл
![image](https://raw.githubusercontent.com/S-Sergey-YU/cypress.js/refs/heads/main/new_cypress-main/Variables.png)

4. Каждая страница описана в формате объекта с локаторами
![image](https://raw.githubusercontent.com/S-Sergey-YU/cypress.js/refs/heads/main/new_cypress-main/locators.png)

## Локальный запуск тестов (из терминала)
1. Скачать проект
2. Перейти в терминале в директорию проекта
2. Выполнить команду:
```
npx cypress run --spec cypress/e2e/lesson_locators.cy.js --browser chrome
```
Ожидаемый результат: получим отчет о прохождении тестов.

## Локальный запуск через Cypress UI
1. Скачать проект и открыть в терминале.
2. Перейти в директорию проекта.
3. В терминале в папке с проектом запустить npm `install --save-dev cypress@12.7.0`
4. В терминале в папке с проектом запустить npm `npm i`
5. В терминале в папке с проектом запустить npm `npx cypress open`
6. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
7. Выбрать спеку lesson_locators

Ожидаемый результат: получим отчет о прохождении тестов.

## Автор

Сергей Садухин ([@Sergey_S_Y](https://t.me/Sergey_S_Y))
