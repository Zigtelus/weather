# О проекте
## Описание функционала
Проект состоит из двух страниц
1) Погода - отображение погоды по открытой API
2) Блог   - добавление статей, комментарием и их изменение
Но так же имеется регистрация полльзователей, но без токена

[ссылка на задеплоенный проект] (http://weather-gts.ru/weather/)


## Клиентская часть
В проекте были применены почти все навыки, которыми я обладал к 2023 году.

### Чем я горжусь в проекте
- ХОКи                                                - `карточек с анимацией и скроллбаром`;
- Задержкой в несколько сотых секунд при вводе города - `что бы запрос шел на сервер, только когда человек ввел полностью название города, список городов захардкожен и в этом нет смысла, но планировалось собственное АПИ`;
- Интересная анимация погоды на css                   - `реализовано`;
- Бесконечные всплывающие сообщения                   - `реализовано`;

### Что не реализовано или реализовано плохо:
- АПИ по городам                          - `не реализовано, все захардкожено в файле ТС, даже не в json`;
- Смена языка                             - `не реализовано. Честно говоря, на тот момент я не знал, как это верно реализовать`;
- HOCs                                    - `в директории HOCs есть ХОКИ, которые не доделаны`;
- Всплывающие ссобщения                   - `они бесконечны, но имеют большое количество захардкоженных экшенов, чего легко можно избежать`;
- WEBPACK                                 - `изначально свою сборку делать не стал и в итоге переделывать не стал`;
- Alias для импорта                       - `во многих местах можно было избежать длинных путей, а использовать просто алиасы`;
- Карточеки погоды для ветра              - `анимации нет, просто картинка вверхнем правом углу ветра появляется. Конечно, хотелось бы реализовать и для зимы и т д, но увы, времени для этого нет.`;
- Перенос строки в статьях и комментариях - `сейчас красиво отображаться будет статья, только если текст отправить в разметке`;
- Русский язык вперемешку с английским    -  `русский язык появился, когда я уже вносил последние правки, что бы закрыть навсегда для себя этот проект`;


### Технологии
**React**                  
**Redux Toolkit (RTK)**    
**React-router-dom**       
**TypeScript**             
**HOOK**                   
**Axios**                 
**SASS**                  

### Особенности
**HOC**                   
**Declare**
**function components** 


## Серверная часть
Данный backend был написан в начале 2023 года в хранился в другой репозитории. Это мой первый бэк, который был написан для лучшего понимания взаимосвязи фронта с бэком. 

### Чем я горжусь в проекте
Я горжусь всем, но особенно:
- Сохранение файлов - картинки передаются на сервер в виде бинарных данных и дальше сохраняется на сервере 

### Что не реализовано
- статистика                        - эта часть была начата, но решил не завершать
- аутентификация при помощи токенов - начал, но не завершил, так как было интереснее подправить клиентскую часть

### Технологии
**NestJs**
**TypeScript**
**MongoDB**     - нереалиционная БД


## Как запустить проект
Запустить проект возможно двумя способами, но проще всего будет через докер;

### Через npm
1) Откройте термин на одном уровне с директориями server и client;
2) npm --prefix ./client run start;
3) npm --prefix ./server run start;
4) Открываем проект по ссылке [ссылка на страницу с запущенным проектом](http://localhost:8080/weather);


### Через Докер
1) Запустите докер;
2) Откройте термин на одном уровне с директориями server и client;
3) docker-compose up --build;
4) Открываем проект по ссылке [ссылка на страницу с запущенным проектом](http://localhost:3020/weather);

## Как проект был залит на хостинг beget.ru

### Клиентская часть
1) Директория build клиноруется на хостинг
2) Прописываем в .htaccess для апача, что бы пути на сайте работали корректно

### Серверная часть
1) В директорию build помещается node_modules и uploads
2) Директория build клиноруется на хостинг
3) Все из файла env прописывается зардкодом, так как у них нет переменных окружения
