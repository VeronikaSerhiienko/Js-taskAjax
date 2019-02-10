# Js-taskAjax
[i`m a github pages](https://veronikaserhiienko.github.io/Js-taskAjax/build)

## Task1

Отправить XMLHttpRequest по [адресу](https://mate-academy.github.io/phone-catalogue-static/phones/phones.json) и получить данные. Вывести полученные данные в консоль.

## Task2

Переписать последнее задание с "Homework - JS6 - DOM" про галлерею карточек таким образом, чтобы данные для карточек получать в запросе по [адресу](https://tanuhaua.github.io/datas-file-json/data.json)

## Task3

Получить список посетителей с [адреса](https://tanuhaua.github.io/datas-file-json/visitors.json) и отобразить в виде таблицы со столбцами:

* Visitor id
* Registration date (в формате YYYY.MM.DD)
* Name
* Email
* Description

Организовать сортировку строк по каждому столбцу в порядке возрастания и убывания (сортировка при клике на название колонки). 

По умолчанию отсортировать по Visitor id.

## Task4 

Организовать динамическую загрузку и отображение данных.
Необходимо отображать список пользователей по 20 строк.
Внизу есть кнопка "Показать больше".
При нажатии на кнопку "Показать больше" должно отображаться еще 20 строк.
Когда данных больше нет - прятать кнопку.
Запросы за данными выполнять:
  по [адресу](https://tanuhaua.github.io/datas-file-json/dynamic-loading/1/users.json) 1-20 пользователей, 
  по [адресу](https://tanuhaua.github.io/datas-file-json/dynamic-loading/2/users.json) 21-40 пользователей
и т.д.
Структура ответа ("loadMore" показывает есть ли еще данные):
```
{
"page": 4,
"loadMore": false,
"data": [{},{}]
}
```