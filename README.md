# weather


Какие технологии были применины на FRONT-END:
1) React
2) TypeScript
3) ToolKit
4) Scss modules

Так же были применимы Хуки и ХОКи (для сролл бара и погодные картинки)

Ссылка на демонстрационный вариант: https://weather-front-deploy.herokuapp.com/weather

Какие технологии были применины на BACK-END:
1) NestJs
2) TypeScript
3) MongoDB
4) Загружено на Heroku и залито на ГитХаб ( https://github.com/Zigtelus/weather-back ) - последние изменения на бэке ведутся на приватном репозитории



Принцип работы приложения:
1) Если пользователь рпзрешает доступ к геоданным - берется ближайший населенный пункт имеющий метиостанцию
2) В случае если доступ к геоданным пользователя отклолен - грузятся данные по погоде в Москве

Описание картинок погоды:
1) Солце/месяц - нет облаков
2) Солце/месяц и до двух облаков - небольшая облачность
3) Два облака и нет месяца/солнца - большая облачность
4) пунктирные линии на искосок - дождь
5) Три полосы с завитками в верхнем левом углу - сильный ветер

В данны момент добавлено три страны: Казахстан, Армения и Россия

Важно: на болшинстве мобильных устрйоств браузеры по умолчанию не имеют досутпа к геоданным, поэтому там даже разрешения не запроашивается и сразу выдает Москву
