const usaCities = [
  {
      "ru": "New York",
      "en": "Нью-Йорк"
  },
  {
      "ru": "Los Angeles",
      "en": "Лос-Анджелес"
  },
  {
      "ru": "Chicago",
      "en": "Чикаго"
  },
  {
      "ru": "Houston",
      "en": "Хьюстон"
  },
  {
      "ru": "Phoenix",
      "en": "Финикс"
  },
  {
      "ru": "Philadelphia",
      "en": "Филадельфия"
  },
  {
      "ru": "San Antonio",
      "en": "Сан-Антонио"
  },
  {
      "ru": "San Diego",
      "en": "Сан-Диего"
  },
  {
      "ru": "Dallas",
      "en": "Даллас"
  },
  {
      "ru": "San Jose",
      "en": "Сан-Хосе"
  },
  {
      "ru": "Austin",
      "en": "Остин"
  },
  {
      "ru": "Jacksonville",
      "en": "Джэксонвилл"
  },
  {
      "ru": "Fort Worth",
      "en": "Форт-Уэрт"
  },
  {
      "ru": "Columbus",
      "en": "Колумбус"
  },
  {
      "ru": "Indianapolis",
      "en": "Индианаполис"
  },
  {
      "ru": "Charlotte",
      "en": "Шарлотт"
  },
  {
      "ru": "San Francisco",
      "en": "Сан-Франциско"
  },
  {
      "ru": "Seattle",
      "en": "Сиэтл"
  },
  {
      "ru": "Denver",
      "en": "Денвер"
  },
  {
      "ru": "Oklahoma City",
      "en": "Оклахома-Сити"
  },
  {
      "ru": "Nashville",
      "en": "Нашвилл"
  },
  {
      "ru": "El Paso",
      "en": "Эль-Пасо"
  },
  {
      "ru": "Вашингтон",
      "en": "Вашингтон"
  },
  {
      "ru": "Washington",
      "en": "Бостон"
  },
  {
      "ru": "Boston",
      "en": "Лас-Вегас"
  },
  {
      "ru": "Las Vegas",
      "en": "Портленд"
  },
  {
      "ru": "Portland",
      "en": "Детройт"
  },
  {
      "ru": "Detroit",
      "en": "Луисвилл"
  },
  {
      "ru": "Louisville",
      "en": "Мемфис"
  },
  {
      "ru": "Memphis",
      "en": "Балтимор"
  },
  {
      "ru": "Baltimore",
      "en": "Милуоки"
  },
  {
      "ru": "Milwaukee",
      "en": "Альбукерке"
  },
  {
      "ru": "Albuquerque",
      "en": "Фресно"
  },
  {
      "ru": "Fresno",
      "en": "Тусон"
  },
  {
      "ru": "Tucson",
      "en": "Сакраменто"
  },
  {
      "ru": "Sacramento",
      "en": "Меса"
  },
  {
      "ru": "Mesa",
      "en": "Канзас-Сити"
  },
  {
      "ru": "Kansas City",
      "en": "Атланта"
  },
  {
      "ru": "Atlanta",
      "en": "Омаха"
  },
  {
      "ru": "Omaha",
      "en": "Колорадо-Спрингс"
  },
  {
      "ru": "Colorado Springs",
      "en": "Роли"
  },
  {
      "ru": "Raleigh",
      "en": "Верджиния-Бич"
  },
  {
      "ru": "Virginia Beach",
      "en": "Лонг-Бич"
  },
  {
      "ru": "Long Beach",
      "en": "Майами"
  },
  {
      "ru": "Miami",
      "en": "Окленд"
  },
  {
      "ru": "Oakland",
      "en": "Миннеаполис"
  },
  {
      "ru": "Minneapolis",
      "en": "Талса"
  },
  {
      "ru": "Tulsa",
      "en": "Бейкерсфилд"
  },
  {
      "ru": "Bakersfield",
      "en": "Уичито"
  },
  {
      "ru": "Wichita",
      "en": "Арлингтон"
  },
  {
      "ru": "Arlington",
      "en": "Орора"
  },
  {
      "ru": "Aurora",
      "en": "Тампа"
  },
  {
      "ru": "Tampa",
      "en": "Новый Орлеан"
  },
  {
      "ru": "New Orleans",
      "en": "Кливленд"
  },
  {
      "ru": "Cleveland",
      "en": "Анахайм"
  },
  {
      "ru": "Anaheim",
      "en": "Гонолулу"
  },
  {
      "ru": "Honolulu",
      "en": "Хендерсон"
  },
  {
      "ru": "Henderson",
      "en": "Стоктон"
  },
  {
      "ru": "Stockton",
      "en": "Лексингтон"
  },
  {
      "ru": "Lexington",
      "en": "Корпус-Кристи"
  },
  {
      "ru": "Corpus Christi",
      "en": "Риверсайд"
  },
  {
      "ru": "Riverside",
      "en": "Санта-Ана"
  },
  {
      "ru": "Santa Ana",
      "en": "Орландо"
  },
  {
      "ru": "Orlando",
      "en": "Ирвайн"
  },
  {
      "ru": "Irvine",
      "en": "Цинциннати"
  },
  {
      "ru": "Cincinnati",
      "en": "Ньюарк"
  },
  {
      "ru": "Newark",
      "en": "Сент-Пол"
  },
  {
      "ru": "Saint Paul",
      "en": "Питтсбург"
  },
  {
      "ru": "Pittsburgh",
      "en": "Гринсборо"
  },
  {
      "ru": "Greensboro",
      "en": "Сент-Луис"
  },
  {
      "ru": "St. Louis",
      "en": "Линкольн"
  },
  {
      "ru": "Lincoln",
      "en": "Плейно"
  },
  {
      "ru": "Plano",
      "en": "Анкоридж"
  },
  {
      "ru": "Anchorage",
      "en": "Дарем"
  },
  {
      "ru": "Durham",
      "en": "Джерси-Сити"
  },
  {
      "ru": "Jersey City",
      "en": "Чандлер"
  },
  {
      "ru": "Chandler",
      "en": "Чула-Виста"
  },
  {
      "ru": "Chula Vista",
      "en": "Буффало"
  },
  {
      "ru": "Buffalo",
      "en": "Норт-Лас-Вегас"
  },
  {
      "ru": "North Las Vegas",
      "en": "Гилберт"
  },
  {
      "ru": "Gilbert",
      "en": "Мадисон"
  },
  {
      "ru": "Madison",
      "en": "Рино"
  },
  {
      "ru": "Reno",
      "en": "Толидо"
  },
  {
      "ru": "Toledo",
      "en": "Форт-Уэйн"
  },
  {
      "ru": "Fort Wayne",
      "en": "Лаббок"
  },
  {
      "ru": "Lubbock",
      "en": "Сент-Питерсберг"
  },
  {
      "ru": "St. Petersburg",
      "en": "Ларедо"
  },
  {
      "ru": "Laredo",
      "en": "Ирвинг"
  },
  {
      "ru": "Irving",
      "en": "Чесапик"
  },
  {
      "ru": "Chesapeake",
      "en": "Уинстон-Сейлем"
  },
  {
      "ru": "Winston-Salem",
      "en": "Глендейл"
  },
  {
      "ru": "Glendale",
      "en": "Скоттсдейл"
  },
  {
      "ru": "Scottsdale",
      "en": "Гарленд"
  },
  {
      "ru": "Garland",
      "en": "Бойсе"
  },
  {
      "ru": "Boise",
      "en": "Норфолк"
  },
  {
      "ru": "Norfolk",
      "en": "Спокан"
  },
  {
      "ru": "Spokane",
      "en": "Фримонт"
  },
  {
      "ru": "Fremont",
      "en": "Ричмонд"
  },
  {
      "ru": "Richmond",
      "en": "Санта-Кларита"
  },
  {
      "ru": "Santa Clarita",
      "en": "Сан-Бернардино"
  },
  {
      "ru": "San Bernardino",
      "en": "Батон-Руж"
  },
  {
      "ru": "Baton Rouge",
      "en": "Хайалиа"
  },
  {
      "ru": "Hialeah",
      "en": "Такома"
  },
  {
      "ru": "Tacoma",
      "en": "Модесто"
  },
  {
      "ru": "Modesto",
      "en": "Порт-Сент-Люси"
  },
  {
      "ru": "Port St. Lucie",
      "en": "Хантсвилл"
  },
  {
      "ru": "Huntsville",
      "en": "Де-Мойн"
  },
  {
      "ru": "Des Moines",
      "en": "Морено-Валли"
  },
  {
      "ru": "Moreno Valley",
      "en": "Фонтана"
  },
  {
      "ru": "Fontana",
      "en": "Фриско"
  },
  {
      "ru": "Frisco",
      "en": "Рочестер"
  },
  {
      "ru": "Rochester",
      "en": "Йонкерс"
  },
  {
      "ru": "Yonkers",
      "en": "Фейетвилл"
  },
  {
      "ru": "Fayetville",
      "en": "Вустер"
  },
  {
      "ru": "Worcester",
      "en": "Коламбус"
  },
  {
      "ru": "Columbus",
      "en": "Кейп-Корал"
  },
  {
      "ru": "Cape Coral",
      "en": "Мак-Кинни"
  },
  {
      "ru": "McKinney",
      "en": "Литл-Рок"
  },
  {
      "ru": "Little Rock",
      "en": "Окснард"
  },
  {
      "ru": "Oxnard",
      "en": "Амарилло"
  },
  {
      "ru": "Amarillo",
      "en": "Огаста"
  },
  {
      "ru": "Augusta",
      "en": "Солт-Лейк-Сити"
  },
  {
      "ru": "Salt Lake City",
      "en": "Монтгомери"
  },
  {
      "ru": "Montgomery",
      "en": "Бирмингем"
  },
  {
      "ru": "Birmingham",
      "en": "Гранд-Рапидс"
  },
  {
      "ru": "Grand Rapids",
      "en": "Гранд-Прейри"
  },
  {
      "ru": "Grand Prairie",
      "en": "Оверленд-Парк"
  },
  {
      "ru": "Overland Park",
      "en": "Таллахасси"
  },
  {
      "ru": "Tallahassee",
      "en": "Хантингтон-Бич"
  },
  {
      "ru": "Huntington Beach",
      "en": "Су-Фолс"
  },
  {
      "ru": "Souix Falls",
      "en": "Пеория"
  },
  {
      "ru": "Peoria",
      "en": "Ноксвилл"
  },
  {
      "ru": "Knoxville",
      "en": "Глендейл"
  },
  {
      "ru": "Glendale",
      "en": "Ванкувер"
  },
  {
      "ru": "Vancouver",
      "en": "Провиденс"
  },
  {
      "ru": "Providence",
      "en": "Акрон"
  },
  {
      "ru": "Akron",
      "en": "Браунсвилл"
  },
  {
      "ru": "Brownsville",
      "en": "Мобил"
  },
  {
      "ru": "Mobile",
      "en": "Ньюпорт-Ньюс"
  },
  {
      "ru": "Newport News",
      "en": "Темпе"
  },
  {
      "ru": "Tempe",
      "en": "Шривпорт"
  },
  {
      "ru": "Shreveport",
      "en": "Чаттануга"
  },
  {
      "ru": "Chattanooga",
      "en": "Форт-Лодердейл"
  },
  {
      "ru": "Fort Lauderdale",
      "en": "Орора"
  },
  {
      "ru": "Aurora",
      "en": "Элк-Гров"
  },
  {
      "ru": "Elk Grove",
      "en": "Онтэрио"
  },
  {
      "ru": "Ontario",
      "en": "Сейлем"
  },
  {
      "ru": "Salem",
      "en": "Кэри"
  },
  {
      "ru": "Cary",
      "en": "Санта-Роза"
  },
  {
      "ru": "Santa Rosa",
      "en": "Ранчо-Кукамонга"
  },
  {
      "ru": "Rancho Cucamonga",
      "en": "Юджин"
  },
  {
      "ru": "Eugene",
      "en": "Ошенсайд"
  },
  {
      "ru": "Oceanside",
      "en": "Кларксвилл"
  },
  {
      "ru": "Clarcksville",
      "en": "Гарден-Гров"
  },
  {
      "ru": "Garden Grove",
      "en": "Ланкастер"
  },
  {
      "ru": "Lancaster",
      "en": "Спрингфилд"
  },
  {
      "ru": "Springfield",
      "en": "Пемброк-Пайнс"
  },
  {
      "ru": "Pembroke Pines",
      "en": "Форт-Коллинс"
  },
  {
      "ru": "Fort Collins",
      "en": "Палмдейл"
  },
  {
      "ru": "Palmdale",
      "en": "Салинас"
  },
  {
      "ru": "Salinas",
      "en": "Хэйворд"
  },
  {
      "ru": "Hayward",
      "en": "Корона"
  },
  {
      "ru": "Corona",
      "en": "Патерсон"
  },
  {
      "ru": "Paterson",
      "en": "Мёрфрисборо"
  },
  {
      "ru": "Murfreesboro",
      "en": "Мейкон"
  },
  {
      "ru": "Macon",
      "en": "Лейквуд"
  },
  {
      "ru": "Lakewood",
      "en": "Киллин"
  },
  {
      "ru": "Kelleen",
      "en": "Спрингфилд"
  },
  {
      "ru": "Sprinfield",
      "en": "Александрия"
  },
  {
      "ru": "Alexandria",
      "en": "Канзас-Сити"
  },
  {
      "ru": "Kansas City",
      "en": "Саннивейл"
  },
  {
      "ru": "Sunnyvale",
      "en": "Холливуд"
  },
  {
      "ru": "Hollywood",
      "en": "Розвилл"
  },
  {
      "ru": "Roseville",
      "en": "Чарлстон"
  },
  {
      "ru": "Charleston",
      "en": "Эскондидо"
  },
  {
      "ru": "Escondido",
      "en": "Джолиет"
  },
  {
      "ru": "Joliet",
      "en": "Джэксон"
  },
  {
      "ru": "Jackson",
      "en": "Белвью"
  },
  {
      "ru": "Bellevue",
      "en": "Сюрпрайз"
  },
  {
      "ru": "Surprise",
      "en": "Нейпервилл"
  },
  {
      "ru": "Naperville",
      "en": "Пасадина"
  },
  {
      "ru": "Pasadena",
      "en": "Помона"
  },
  {
      "ru": "Pomona",
      "en": "Бриджпорт"
  },
  {
      "ru": "Bridgeport",
      "en": "Дентон"
  },
  {
      "ru": "Denton",
      "en": "Рокфорд"
  },
  {
      "ru": "Rockford",
      "en": "Мескит"
  },
  {
      "ru": "Mesquite",
      "en": "Саванна"
  },
  {
      "ru": "Savannah",
      "en": "Сиракьюс"
  },
  {
      "ru": "Syracuse",
      "en": "Мак-Аллен"
  },
  {
      "ru": "McAllen",
      "en": "Торранс"
  },
  {
      "ru": "Torrance",
      "en": "Олаф"
  },
  {
      "ru": "Olathe",
      "en": "Висейлия"
  },
  {
      "ru": "Visalia",
      "en": "Торнтон"
  },
  {
      "ru": "Thornton",
      "en": "Фуллертон"
  },
  {
      "ru": "Fullerton",
      "en": "Гейнсвилл"
  },
  {
      "ru": "Gainesville",
      "en": "Уэйко"
  },
  {
      "ru": "Waco",
      "en": "Уэст-Валли-Сити"
  },
  {
      "ru": "West Valley City",
      "en": "Уоррен"
  },
  {
      "ru": "Warren",
      "en": "Лейквуд"
  },
  {
      "ru": "Lakewood",
      "en": "Хэмптон"
  },
  {
      "ru": "Hampton",
      "en": "Дейтон"
  },
  {
      "ru": "Dayton",
      "en": "Колумбия"
  },
  {
      "ru": "Columbia",
      "en": "Ориндж"
  },
  {
      "ru": "Orange",
      "en": "Сидар-Рапидс"
  },
  {
      "ru": "Cedar Rapids",
      "en": "Стэмфорд"
  },
  {
      "ru": "Stamford",
      "en": "Викторвилл"
  },
  {
      "ru": "Victorville",
      "en": "Пасадина"
  },
  {
      "ru": "Pasadena",
      "en": "Элизабет"
  },
  {
      "ru": "Elizabeth",
      "en": "Нью-Хейвен"
  },
  {
      "ru": "New Haven",
      "en": "Мирамар"
  },
  {
      "ru": "Miramar",
      "en": "Кент"
  },
  {
      "ru": "Kent",
      "en": "Стерлинг-Хайтс"
  },
  {
      "ru": "Sterling Heights",
      "en": "Карролтон"
  },
  {
      "ru": "Carrollton",
      "en": "Корал-Спрингс"
  },
  {
      "ru": "Coral Springs",
      "en": "Мидленд"
  },
  {
      "ru": "Midland",
      "en": "Норман"
  },
  {
      "ru": "Norman",
      "en": "Атенс"
  },
  {
      "ru": "Athens",
      "en": "Санта-Клара"
  },
  {
      "ru": "Santa Clara",
      "en": "Колумбия"
  },
  {
      "ru": "Columbia",
      "en": "Фарго"
  },
  {
      "ru": "Fargo",
      "en": "Пэрленд"
  },
  {
      "ru": "Pearland",
      "en": "Сими-Валли"
  },
  {
      "ru": "Simi Valley",
      "en": "Меридиан"
  },
  {
      "ru": "Meridian",
      "en": "Топика"
  },
  {
      "ru": "Topeka",
      "en": "Аллентаун"
  },
  {
      "ru": "Allentown",
      "en": "Таузанд-Окс"
  },
  {
      "ru": "Thousand-Oaks",
      "en": "Абилин"
  },
  {
      "ru": "Abilene",
      "en": "Вальехо"
  },
  {
      "ru": "Vallejo",
      "en": "Конкорд"
  },
  {
      "ru": "Concord",
      "en": "Раунд-Рок"
  },
  {
      "ru": "Round Rock",
      "en": "Арвада"
  },
  {
      "ru": "Arvada",
      "en": "Кловис"
  },
  {
      "ru": "Clovis",
      "en": "Палм-Бей"
  },
  {
      "ru": "Palm Bay",
      "en": "Индепенденс"
  },
  {
      "ru": "Independence",
      "en": "Лафейетт"
  },
  {
      "ru": "Lafayette",
      "en": "Анн-Арбор"
  },
  {
      "ru": "Ann Arbor",
      "en": "Рочестер"
  },
  {
      "ru": "Rochester",
      "en": "Хартфорд"
  },
  {
      "ru": "Hartford",
      "en": "Колледж-Стейшен"
  },
  {
      "ru": "College Station",
      "en": "Фэйрфилд"
  },
  {
      "ru": "Fairfield",
      "en": "Уилмингтон"
  },
  {
      "ru": "Wilmington",
      "en": "Норт-Чарлстон"
  },
  {
      "ru": "North Charlestone",
      "en": "Биллингс"
  },
  {
      "ru": "Billings",
      "en": "Уэст-Палм-Бич"
  },
  {
      "ru": "West Palm Beach",
      "en": "Беркли"
  },
  {
      "ru": "Berkeley",
      "en": "Кембридж"
  },
  {
      "ru": "Cambridge",
      "en": "Клируотер"
  },
  {
      "ru": "Clearwater",
      "en": "Уэст-Джордан"
  },
  {
      "ru": "West Jordan",
      "en": "Эвансвилл"
  },
  {
      "ru": "Evansville",
      "en": "Ричардсон"
  },
  {
      "ru": "Richardson",
      "en": "Брокен-Эрроу"
  },
  {
      "ru": "Broken Arrow",
      "en": "Ричмонд"
  },
  {
      "ru": "Richmond",
      "en": "Лиг-Сити"
  },
  {
      "ru": "League City",
      "en": "Манчестер"
  },
  {
      "ru": "Manchester",
      "en": "Лейкленд"
  },
  {
      "ru": "Lakeland",
      "en": "Карлсбад"
  },
  {
      "ru": "Carlsbad",
      "en": "Антиок"
  },
  {
      "ru": "Antioch",
      "en": "Вестминстер"
  },
  {
      "ru": "Westminster",
      "en": "Хай-Пойнт"
  },
  {
      "ru": "High Point",
      "en": "Прово"
  },
  {
      "ru": "Provo",
      "en": "Лоуэлл"
  },
  {
      "ru": "Lowell",
      "en": "Элджин"
  },
  {
      "ru": "Elgin",
      "en": "Уотербери"
  },
  {
      "ru": "Waterbury",
      "en": "Спрингфилд"
  },
  {
      "ru": "Springfield",
      "en": "Грешам"
  },
  {
      "ru": "Gresham",
      "en": "Марриета"
  },
  {
      "ru": "Murrieta",
      "en": "Льюисвилл"
  },
  {
      "ru": "Lewisville",
      "en": "Лас-Крусес"
  },
  {
      "ru": "Las Cruces",
      "en": "Лансинг"
  },
  {
      "ru": "Lansing",
      "en": "Бомонт"
  },
  {
      "ru": "Beaumont",
      "en": "Одесса"
  },
  {
      "ru": "Odessa",
      "en": "Пуэбло"
  },
  {
      "ru": "Pueblo",
      "en": "Пеория"
  },
  {
      "ru": "Peoria",
      "en": "Дауни"
  },
  {
      "ru": "Downey",
      "en": "Помпано-Бич"
  },
  {
      "ru": "Pompano Beach",
      "en": "Майами-Гарденс"
  },
  {
      "ru": "Miami Gardens",
      "en": "Темекьюла"
  },
  {
      "ru": "Temecula",
      "en": "Эверетт"
  },
  {
      "ru": "Everett",
      "en": "Коста-Меса"
  },
  {
      "ru": "Costa Mesa",
      "en": "Вентура"
  },
  {
      "ru": "Ventura",
      "en": "Спаркс"
  },
  {
      "ru": "Sparks",
      "en": "Санта-Мария"
  },
  {
      "ru": "Santa Maria",
      "en": "Шугар-Ленд"
  },
  {
      "ru": "Sugar Land",
      "en": "Грили"
  },
  {
      "ru": "Greeley",
      "en": "Саут-Бенд"
  },
  {
      "ru": "South Bend",
      "en": "Дирборн"
  },
  {
      "ru": "Dearborn",
      "en": "Конкорд"
  },
  {
      "ru": "Concord",
      "en": "Эдисон"
  },
  {
      "ru": "Edison",
      "en": "Тайлер"
  },
  {
      "ru": "Tyler",
      "en": "Санди-Спрингс"
  },
  {
      "ru": "Sandy Springs",
      "en": "Уэст-Ковина"
  },
  {
      "ru": "West Covina",
      "en": "Грин-Бей"
  },
  {
      "ru": "Green Bay",
      "en": "Сентенниал"
  },
  {
      "ru": "Centennial",
      "en": "Джурупа-Валли"
  },
  {
      "ru": "Jurupa Valley",
      "en": "Эль-Монте"
  },
  {
      "ru": "El Monte",
      "en": "Аллен"
  },
  {
      "ru": "Allen",
      "en": "Хилсборо"
  },
  {
      "ru": "Hillsboro",
      "en": "Менифи"
  },
  {
      "ru": "Menifee",
      "en": "Нампа"
  },
  {
      "ru": "Nampa",
      "en": "Спокан-Валли"
  },
  {
      "ru": "Spokane Valley",
      "en": "Рио-Ранчо"
  },
  {
      "ru": "Rio Rancho",
      "en": "Броктон"
  },
  {
      "ru": "Brockton",
      "en": "Эль-Кахон"
  },
  {
      "ru": "El Cajon",
      "en": "Бербанк"
  },
  {
      "ru": "Burbank",
      "en": "Инглвуд"
  },
  {
      "ru": "Inglewood",
      "en": "Рентон"
  },
  {
      "ru": "Renton",
      "en": "Дейви"
  },
  {
      "ru": "Davie",
      "en": "Риалто"
  },
  {
      "ru": "Rialto",
      "en": "Боулдер"
  },
  {
      "ru": "Boulder",
      "en": "Саут-Бенд"
  },
  {
      "ru": "South Bend",
      "en": "Вудбридж"
  },
  {
      "ru": "Woodbridge",
      "en": "Вакавилл"
  },
  {
      "ru": "Vacaville",
      "en": "Уичито-Фолс"
  },
  {
      "ru": "Whichita Falls",
      "en": "Лиз Саммит"
  },
  {
      "ru": "Lee's Summit",
      "en": "Эдинберг"
  },
  {
      "ru": "Edinburg",
      "en": "Чико"
  },
  {
      "ru": "Chico",
      "en": "Сан-Матео"
  },
  {
      "ru": "San Mateo",
      "en": "Бенд"
  },
  {
      "ru": "Bend",
      "en": "Гудиер"
  },
  {
      "ru": "Goodyear",
      "en": "Бакай"
  },
  {
      "ru": "Buckeye",
      "en": "Дейли-Сити"
  },
  {
      "ru": "Daly City",
      "en": "Фишерс"
  },
  {
      "ru": "Fishers",
      "en": "Куинси"
  },
  {
      "ru": "Quincy",
      "en": "Давенпорт"
  },
  {
      "ru": "Davenport",
      "en": "Эсперия"
  },
  {
      "ru": "Hesperia",
      "en": "Нью-Бедфорд"
  },
  {
      "ru": "New Bedford",
      "en": "Линн"
  },
  {
      "ru": "Lynn",
      "en": "Кармел"
  },
  {
      "ru": "Carmel",
      "en": "Лонгмонт"
  },
  {
      "ru": "Longmont",
      "en": "Таскалуса"
  },
  {
      "ru": "Tuscaloosa",
      "en": "Норуолк"
  }
]


const citysEN = [
  "pankovka",
  "abakan",
  "almetyevsk",
  "anadyr",
  "anapa",
  "arkhangelsk",
  "astrakhan",
  "barnaul",
  "belgorod",
  "beslan",
  "biysk",
  "birobidzhan",
  "blagoveshchensk",
  "bologoye",
  "bryansk",
  "veliky novgorod",
  "veliky ustyug",
  "vladivostok",
  "vladikavkaz",
  "vladimir",
  "volgograd",
  "vologda",
  "vorkuta",
  "voronezh",
  "gatchina",
  "gdov",
  "gelendzhik",
  "gorno-altaysk",
  "grozny",
  "gudermes",
  "gus-khrustalny",
  "dzerzhinsk",
  "dmitrov",
  "dubna",
  "yeysk",
  "yekaterinburg",
  "yelabuga",
  "yelets",
  "yessentuki",
  "zlatoust",
  "ivanovo",
  "izhevsk",
  "irkutsk",
  "yoshkar-ola",
  "kazan",
  "kaliningrad",
  "kaluga",
  "kemerovo",
  "kislovodsk",
  "komsomolsk-on-amur",
  "kotlas",
  "krasnodar",
  "krasnoyarsk",
  "kurgan",
  "kursk",
  "kyzyl",
  "leninogorsk",
  "lensk",
  "lipetsk",
  "luga",
  "lyuban",
  "lyubertsy",
  "magadan",
  "maykop",
  "makhachkala",
  "miass",
  "mineralnye vody",
  "mirny",
  "moscow",
  "murmansk",
  "murom",
  "mytishchi",
  "naberezhnye chelny",
  "nadym",
  "nalchik",
  "nazran",
  "naryan-mar",
  "nakhodka",
  "nizhnevartovsk",
  "nizhnekamsk",
  "nizhny novgorod",
  "nizhny tagil",
  "novokuznetsk",
  "novosibirsk",
  "novy urengoy",
  "norilsk",
  "obninsk",
  "oktyabrsky",
  "omsk",
  "orenburg",
  "orekhovo-zuyevo",
  "oryol",
  "penza",
  "perm",
  "petrozavodsk",
  "petropavlovsk-kamchatsky",
  "podolsk",
  "pskov",
  "pyatigorsk",
  "rostov-on-don",
  "rybinsk",
  "ryazan",
  "salekhard",
  "samara",
  "saint petersburg",
  "saransk",
  "saratov",
  "severodvinsk",
  "smolensk",
  "sol-iletsk",
  "sochi",
  "stavropol",
  "surgut",
  "syktyvkar",
  "tambov",
  "tver",
  "tobolsk",
  "tolyatti",
  "tomsk",
  "tuapse",
  "tula",
  "tynda",
  "tyumen",
  "ulan-ude",
  "ulyanovsk",
  "ufa",
  "khabarovsk",
  "khanty-mansiysk",
  "chebarkul",
  "cheboksary",
  "chelyabinsk",
  "cherepovets",
  "cherkessk",
  "chistopol",
  "chita",
  "shadrinsk",
  "shatura",
  "shuya",
  "elista",
  "engels",
  "yuzhno-sakhalinsk",
  "yakutsk",
  "yaroslavl"
]

const cities = {
    us: [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose",
        "Austin",
        "Jacksonville",
        "Fort Worth",
        "Columbus",
        "Indianapolis",
        "Charlotte",
        "San Francisco",
        "Seattle",
        "Denver",
        "Oklahoma City",
        "Nashville",
        "El Paso",
        "Вашингтон",
        "Washington,mt,us",
        "Boston",
        "Las Vegas",
        "Portland",
        "Detroit",
        "Louisville",
        "Memphis",
        "Baltimore",
        "Milwaukee",
        "Albuquerque",
        "Fresno",
        "Tucson",
        "Sacramento",
        "Mesa",
        "Kansas City",
        "Atlanta",
        "Omaha",
        "Colorado Springs",
        "Raleigh",
        "Virginia Beach",
        "Long Beach",
        "Miami",
        "Oakland",
        "Minneapolis",
        "Tulsa",
        "Bakersfield",
        "Wichita",
        "Arlington",
        "Aurora",
        "Tampa",
        "New Orleans",
        "Cleveland",
        "Anaheim",
        "Honolulu",
        "Henderson",
        "Stockton",
        "Lexington",
        "Corpus Christi",
        "Riverside",
        "Santa Ana",
        "Orlando",
        "Irvine",
        "Cincinnati",
        "Newark",
        "Saint Paul",
        "Pittsburgh",
        "Greensboro",
        "St. Louis",
        "Lincoln",
        "Plano",
        "Anchorage",
        "Durham",
        "Jersey City",
        "Chandler",
        "Chula Vista",
        "Buffalo",
        "North Las Vegas",
        "Gilbert",
        "Madison",
        "Reno",
        "Toledo",
        "Fort Wayne",
        "Lubbock",
        "St. Petersburg",
        "Laredo",
        "Irving",
        "Chesapeake",
        "Winston-Salem",
        "Glendale",
        "Scottsdale",
        "Garland",
        "Boise",
        "Norfolk",
        "Spokane",
        "Fremont",
        "Richmond",
        "Santa Clarita",
        "San Bernardino",
        "Baton Rouge",
        "Hialeah",
        "Tacoma",
        "Modesto",
        "Port St. Lucie",
        "Huntsville",
        "Des Moines",
        "Moreno Valley",
        "Fontana",
        "Frisco",
        "Rochester",
        "Yonkers",
        "Fayetville",
        "Worcester",
        "Columbus",
        "Cape Coral",
        "McKinney",
        "Little Rock",
        "Oxnard",
        "Amarillo",
        "Augusta",
        "Salt Lake City",
        "Montgomery",
        "Birmingham",
        "Grand Rapids",
        "Grand Prairie",
        "Overland Park",
        "Tallahassee",
        "Huntington Beach",
        "Souix Falls",
        "Peoria",
        "Knoxville",
        "Glendale",
        "Vancouver",
        "Providence",
        "Akron",
        "Brownsville",
        "Mobile",
        "Newport News",
        "Tempe",
        "Shreveport",
        "Chattanooga",
        "Fort Lauderdale",
        "Aurora",
        "Elk Grove",
        "Ontario",
        "Salem",
        "Cary",
        "Santa Rosa",
        "Rancho Cucamonga",
        "Eugene",
        "Oceanside",
        "Clarcksville",
        "Garden Grove",
        "Lancaster",
        "Springfield",
        "Pembroke Pines",
        "Fort Collins",
        "Palmdale",
        "Salinas",
        "Hayward",
        "Corona",
        "Paterson",
        "Murfreesboro",
        "Macon",
        "Lakewood",
        "Kelleen",
        "Sprinfield",
        "Alexandria",
        "Kansas City",
        "Sunnyvale",
        "Hollywood",
        "Roseville",
        "Charleston",
        "Escondido",
        "Joliet",
        "Jackson",
        "Bellevue",
        "Surprise",
        "Naperville",
        "Pasadena",
        "Pomona",
        "Bridgeport",
        "Denton",
        "Rockford",
        "Mesquite",
        "Savannah",
        "Syracuse",
        "McAllen",
        "Torrance",
        "Olathe",
        "Visalia",
        "Thornton",
        "Fullerton",
        "Gainesville",
        "Waco",
        "West Valley City",
        "Warren",
        "Lakewood",
        "Hampton",
        "Dayton",
        "Columbia",
        "Orange",
        "Cedar Rapids",
        "Stamford",
        "Victorville",
        "Pasadena",
        "Elizabeth",
        "New Haven",
        "Miramar",
        "Kent",
        "Sterling Heights",
        "Carrollton",
        "Coral Springs",
        "Midland",
        "Norman",
        "Athens",
        "Santa Clara",
        "Columbia",
        "Fargo",
        "Pearland",
        "Simi Valley",
        "Meridian",
        "Topeka",
        "Allentown",
        "Thousand-Oaks",
        "Abilene",
        "Vallejo",
        "Concord",
        "Round Rock",
        "Arvada",
        "Clovis",
        "Palm Bay",
        "Independence",
        "Lafayette",
        "Ann Arbor",
        "Rochester",
        "Hartford",
        "College Station",
        "Fairfield",
        "Wilmington",
        "North Charlestone",
        "Billings",
        "West Palm Beach",
        "Berkeley",
        "Cambridge",
        "Clearwater",
        "West Jordan",
        "Evansville",
        "Richardson",
        "Broken Arrow",
        "Richmond",
        "League City",
        "Manchester",
        "Lakeland",
        "Carlsbad",
        "Antioch",
        "Westminster",
        "High Point",
        "Provo",
        "Lowell",
        "Elgin",
        "Waterbury",
        "Springfield",
        "Gresham",
        "Murrieta",
        "Lewisville",
        "Las Cruces",
        "Lansing",
        "Beaumont",
        "Odessa",
        "Pueblo",
        "Peoria",
        "Downey",
        "Pompano Beach",
        "Miami Gardens",
        "Temecula",
        "Everett",
        "Costa Mesa",
        "Ventura",
        "Sparks",
        "Santa Maria",
        "Sugar Land",
        "Greeley",
        "South Bend",
        "Dearborn",
        "Concord",
        "Edison",
        "Tyler",
        "Sandy Springs",
        "West Covina",
        "Green Bay",
        "Centennial",
        "Jurupa Valley",
        "El Monte",
        "Allen",
        "Hillsboro",
        "Menifee",
        "Nampa",
        "Spokane Valley",
        "Rio Rancho",
        "Brockton",
        "El Cajon",
        "Burbank",
        "Inglewood",
        "Renton",
        "Davie",
        "Rialto",
        "Boulder",
        "South Bend",
        "Woodbridge",
        "Vacaville",
        "Whichita Falls",
        "Lee's Summit",
        "Edinburg",
        "Chico",
        "San Mateo",
        "Bend",
        "Goodyear",
        "Buckeye",
        "Daly City",
        "Fishers",
        "Quincy",
        "Davenport",
        "Hesperia",
        "New Bedford",
        "Lynn",
        "Carmel",
        "Longmont",
        "Tuscaloosa"
    ],
    ru: [
        "По-английски",
        "Abakan",
        "Almetyevsk",
        "Anadyr",
        "Anapa",
        "Arkhangelsk",
        "Astrakhan",
        "Barnaul",
        "Belgorod",
        "Beslan",
        "Biysk",
        "Birobidzhan",
        "Blagoveshchensk",
        "Bologoye",
        "Bryansk",
        "Veliky Novgorod",
        "Veliky Ustyug",
        "Vladivostok",
        "Vladikavkaz",
        "Vladimir",
        "Volgograd",
        "Vologda",
        "Vorkuta",
        "Voronezh",
        "Gatchina",
        "Gdov",
        "Gelendzhik",
        "Gorno-Altaysk",
        "Grozny",
        "Gudermes",
        "Gus-Khrustalny",
        "Dzerzhinsk",
        "Dmitrov",
        "Dubna",
        "Yeysk",
        "Yekaterinburg",
        "Yelabuga",
        "Yelets",
        "Yessentuki",
        "Zlatoust",
        "Ivanovo",
        "Izhevsk",
        "Irkutsk",
        "Yoshkar-Ola",
        "Kazan",
        "Kaliningrad",
        "Kaluga",
        "Kemerovo",
        "Kislovodsk",
        "Komsomolsk-on-Amur",
        "Kotlas",
        "Krasnodar",
        "Krasnoyarsk",
        "Kurgan",
        "Kursk",
        "Kyzyl",
        "Leninogorsk",
        "Lensk",
        "Lipetsk",
        "Luga",
        "Lyuban",
        "Lyubertsy",
        "Magadan",
        "Maykop",
        "Makhachkala",
        "Miass",
        "Mineralnye Vody",
        "Mirny",
        "Moscow",
        "Murmansk",
        "Murom",
        "Mytishchi",
        "Naberezhnye Chelny",
        "Nadym",
        "Nalchik",
        "Nazran",
        "Naryan-Mar",
        "Nakhodka",
        "Nizhnevartovsk",
        "Nizhnekamsk",
        "Nizhny Novgorod",
        "Nizhny Tagil",
        "Novokuznetsk",
        "Novosibirsk",
        "Novy Urengoy",
        "Norilsk",
        "Obninsk",
        "Oktyabrsky",
        "Omsk",
        "Orenburg",
        "Orekhovo-Zuyevo",
        "Oryol",
        "Penza",
        "Perm",
        "Petrozavodsk",
        "Petropavlovsk-Kamchatsky",
        "Podolsk",
        "Pskov",
        "Pyatigorsk",
        "Rostov-on-Don",
        "Rybinsk",
        "Ryazan",
        "Salekhard",
        "Samara",
        "Saint Petersburg",
        "Saransk",
        "Saratov",
        "Severodvinsk",
        "Smolensk",
        "Sol-Iletsk",
        "Sochi",
        "Stavropol",
        "Surgut",
        "Syktyvkar",
        "Tambov",
        "Tver",
        "Tobolsk",
        "Tolyatti",
        "Tomsk",
        "Tuapse",
        "Tula",
        "Tynda",
        "Tyumen",
        "Ulan-Ude",
        "Ulyanovsk",
        "Ufa",
        "Khabarovsk",
        "Khanty-Mansiysk",
        "Chebarkul",
        "Cheboksary",
        "Chelyabinsk",
        "Cherepovets",
        "Cherkessk",
        "Chistopol",
        "Chita",
        "Shadrinsk",
        "Shatura",
        "Shuya",
        "Elista",
        "Engels",
        "Yuzhno-Sakhalinsk",
        "Yakutsk"
    ],
    // kz: [
    // "Абай",
    // "Акколь",
    // "Аксай",
    // "Аксу",
    // "Актау",
    // "Актобе",
    // "Алга",
    // "Алматы",
    // "Алтай",
    // "Аральск",
    // "Аркалык",
    // "Арыс",
    // "Астана",
    // "Атбасар",
    // "Атырау",
    // "Аягоз",
    // "Байконур",
    // "Балхаш",
    // "Булаево",
    // "Державинск",
    // "Ерейментау",
    // "Есик",
    // "Есиль",
    // "Жанаозен",
    // "Жанатас",
    // "Жаркент",
    // "Жезказган",
    // "Жем",
    // "Жетысай",
    // "Житикара",
    // "Зайсан",
    // "Казалинск",
    // "Кандыагаш",
    // "Караганда",
    // "Каражал",
    // "Каратау",
    // "Каркаралинск",
    // "Каскелен",
    // "Кентау",
    // "Кокшетау",
    // "Конаев",
    // "Костанай",
    // "Косшы",
    // "Кульсары",
    // "Курчатов",
    // "Кызылорда",
    // "Ленгер",
    // "Лисаковск",
    // "Макинск",
    // "Мамлютка",
    // "Павлодар",
    // "Петропавловск",
    // "Приозёрск",
    // "Риддер",
    // "Рудный",
    // "Сарань",
    // "Сарканд",
    // "Сарыагаш",
    // "Сатпаев",
    // "Семей",
    // "Сергеевка",
    // "Серебрянск",
    // "Степногорск",
    // "Степняк",
    // "Тайынша",
    // "Талгар",
    // "Талдыкорган",
    // "Тараз",
    // "Текели",
    // "Темир",
    // "Темиртау",
    // "Тобыл",
    // "Туркестан",
    // "Уральск",
    // "Усть-Каменогорск",
    // "Ушарал",
    // "Уштобе",
    // "Форт-Шевченко",
    // "Хромтау",
    // "Шалкар",
    // "Шар",
    // "Шардара",
    // "Шахтинск",
    // "Шемонаиха",
    // "Шу",
    // "Шымкент",
    // "Щучинск",
    // "Экибастуз",
    // "Эмба"
    // ],
    // am: [
    // "Аревик",
    // "Арзни",
    // "Артик",
    // "Аштарак",
    // "Ереван",
    // "Ванадзор",
    // "Йегегнадзор",
    // "Гарни",
    // "Гехард",
    // "Горис",
    // "Гюмри",
    // "Севан",
    // "Двин",
    // "Джермук",
    // "Дзорагет",
    // "Дилижан",
    // "Цахкадзор",
    // ],
    // en: [
    // "Абилин",
    // "Техас",
    // "Аврора",
    // "Колорадо",
    // "Аврора",
    // "Иллинойс",
    // "Акрон",
    // "Огайо",
    // "Александрия",
    // "Вирджиния",
    // "Аллентаун",
    // "Пенсильвания",
    // "Альбукерке",
    // "Нью-Мексико",
    // "Амарилло",
    // "Техас",
    // "Анахайм",
    // "Калифорния",
    // "Анкоридж",
    // "Аляска",
    // "Арвада",
    // "Колорадо",
    // "Арлингтон",
    // "Техас",
    // "Арлингтон",
    // "Вирджиния",
    // "Атенс",
    // "Джорджия",
    // "Атланта",
    // "Джорджия",
    // "Балтимор",
    // "Мэриленд",
    // "Батон-Руж",
    // "Луизиана",
    // "Баффало",
    // "Нью-Йорк",
    // "Бейкерсфилд",
    // "Калифорния",
    // "Белвью",
    // "Вашингтон",
    // "Бербанк",
    // "Калифорния",
    // "Беркли",
    // "Калифорния",
    // "Биллингс",
    // "Монтана",
    // "Бирмингем",
    // "Алабама",
    // "Бойсе",
    // "Айдахо",
    // "Бомонт",
    // "Техас",
    // "Бостон",
    // "Массачусетс",
    // "Боулдер",
    // "Колорадо",
    // "Браунсвилл",
    // "Техас",
    // "Бриджпорт",
    // "Коннектикут",
    // "Валледжо",
    // "Калифорния",
    // "Ванкувер",
    // "Вашингтон",
    // "Вашингтон",
    // "Округ Колумбия",
    // "Вентура",
    // "Калифорния",
    // "Вест-Вэлли-Сити",
    // "Юта",
    // "Вест-Джордан",
    // "Юта",
    // "Вест-Ковайна",
    // "Калифорния",
    // "Вестминстер",
    // "Колорадо",
    // "Визалия",
    // "Калифорния",
    // "Викторвилл",
    // "Калифорния",
    // "Вирджиния-Бич",
    // "Вирджиния",
    // "Вустер",
    // "Массачусетс",
    // "Гарден Грув",
    // "Калифорния",
    // "Гарлэнд",
    // "Техас",
    // "Гейнсвилл",
    // "Флорида",
    // "Гилберт",
    // "Аризона",
    // "Глендейл",
    // "Аризона",
    // "Глендейл",
    // "Калифорния",
    // "Гранд Прейри",
    // "Техас",
    // "Гранд-Рэпидс",
    // "Грешам",
    // "Орегон",
    // "Грин Бэй",
    // "Висконсин",
    // "Гринсборо",
    // "Северная Каролина",
    // "Давенпорт",
    // "Айова",
    // "Даллас",
    // "Техас",
    // "Дарем",
    // "Северная Каролина",
    // "Дауни",
    // "Калифорния",
    // "Дейли-Сити",
    // "Калифорния",
    // "Дейтон",
    // "Огайо",
    // "Де-Мойн",
    // "Айова",
    // "Денвер",
    // "Колорадо",
    // "Дентон",
    // "Техас",
    // "Детройт",
    // "Мичиган",
    // "Джексон",
    // "Миссисипи",
    // "Джерси-Сити",
    // "Нью-Джерси",
    // "Джолит",
    // "Иллинойс",
    // "Джэксонвилл",
    // "Флорида",
    // "Инглвуд",
    // "Калифорния",
    // "Индепенденс",
    // "Миссури",
    // "Индианаполис",
    // "Индиана",
    // "Ирвайн",
    // "Калифорния",
    // "Ирвинг",
    // "Техас",
    // "Йонкерс",
    // "Нью-Йорк",
    // "Канзас-Сити",
    // "Канзас",
    // "Канзас-Сити",
    // "Миссури",
    // "Карроллтон",
    // "Техас",
    // "Кейп Корал",
    // "Флорида",
    // "Киллин",
    // "Техас",
    // "Кларксвилл",
    // "Теннесси",
    // "Кливленд",
    // "Огайо",
    // "Клирвотер",
    // "Флорида",
    // "Коламбус",
    // "Огайо",
    // "Коламбус",
    // "Джорджия",
    // "Колорадо-Спрингс",
    // "Колорадо",
    // "Колумбия",
    // "Огайо",
    // "Колумбия",
    // "Миссури",
    // "Конкорд",
    // "Калифорния",
    // "Корал-Спрингс",
    // "Флорида",
    // "Корона",
    // "Калифорния",
    // "Корпус-Кристи",
    // "Техас",
    // "Коста Меса",
    // "Калифорния",
    // "Кэмбридж",
    // "Массачусетс",
    // "Кэри",
    // "Северная Каролина",
    // "Лаббок",
    // "Техас",
    // "Ланкастер",
    // "Калифорния",
    // "Лансинг",
    // "Мичиган",
    // "Ларедо",
    // "Техас",
    // "Лас-Вегас",
    // "Невада",
    // "Лафайетт",
    // "Луизиана",
    // "Левисвилл",
    // "Техас",
    // "Лексингтон",
    // "Кентукки",
    // "Линкольн",
    // "Небраска",
    // "Литл-Рок",
    // "Арканзас",
    // "Лонг-Бич",
    // "Калифорния",
    // "Лос-Анджелес",
    // "Калифорния",
    // "Лоуэлл",
    // "Массачусетс",
    // "Луисвилл",
    // "Кентукки",
    // "Лэйквуд",
    // "Колорадо",
    // "Майами",
    // "Флорида",
    // "Майами Гарденс",
    // "Флорида",
    // "Макаллен",
    // "Техас",
    // "Маккинни",
    // "Техас",
    // "Манчестер",
    // "Нью-Хэмпшир",
    // "Мемфис",
    // "Теннесси",
    // "Мерфрисборо",
    // "Теннесси",
    // "Меса",
    // "Аризона",
    // "Мескит",
    // "Техас",
    // "Мидленд",
    // "Техас",
    // "Милуоки",
    // "Висконсин",
    // "Миннеаполис",
    // "Миннесота",
    // "Мирамар",
    // "Флорида",
    // "Мобил",
    // "Алабама",
    // "Модесто",
    // "Калифорния",
    // "Монтгомери",
    // "Алабама",
    // "Морено Вэлли",
    // "Калифорния",
    // "Мэдисон",
    // "Висконсин",
    // "Напервилл",
    // "Иллинойс",
    // "Новый Орлеан",
    // "Луизиана",
    // "Ноксвилл",
    // "Теннесси",
    // "Норман",
    // "Оклахома",
    // "Норуолк",
    // "Калифорния",
    // "Норфолк",
    // "Вирджиния",
    // "Ньюарк",
    // "Нью-Джерси",
    // "Нью-Йорк",
    // "Нью-Йорк",
    // "Ньюпорт-Ньюс",
    // "Вирджиния",
    // "Нью-Хейвен",
    // "Коннектикут",
    // "Нэшвилл",
    // "Теннесси",
    // "Оверленд-Парк",
    // "Канзас",
    // "Огаста",
    // "Джорджия",
    // "Одесса",
    // "Техас",
    // "Оклахома-Сити",
    // "Оклахома",
    // "Окленд",
    // "Калифорния",
    // "Окснард",
    // "Калифорния",
    // "Олэйта",
    // "Канзас",
    // "Омаха",
    // "Небраска",
    // "Онтарио",
    // "Калифорния",
    // "Ориндж",
    // "Калифорния",
    // "Орландо",
    // "Флорида",
    // "Остин",
    // "Техас",
    // "Оушенсайд",
    // "Калифорния",
    // "Палм-Бэй",
    // "Флорида",
    // "Палмдейл",
    // "Калифорния",
    // "Пасадена",
    // "Техас",
    // "Пасадена",
    // "Калифорния",
    // "Патерсон",
    // "Нью-Джерси",
    // "Пемброк-Пайнс",
    // "Флорида",
    // "Пеория",
    // "Аризона",
    // "Пеория",
    // "Иллинойс",
    // "Питтсбург",
    // "Пенсильвания",
    // "Плано",
    // "Техас",
    // "Помона",
    // "Калифорния",
    // "Помпано-Бич",
    // "Флорида",
    // "Порт Сэнт Люси",
    // "Флорида",
    // "Портленд",
    // "Орегон",
    // "Провиденс",
    // "Род-Айленд",
    // "Прово",
    // "Юта",
    // "Пуэбло",
    // "Колорадо",
    // "Ранчо Кукамонга",
    // "Калифорния",
    // "Раунд Рок",
    // "Техас",
    // "Риверсайд",
    // "Калифорния",
    // "Рино",
    // "Невада",
    // "Ричардсон",
    // "Техас",
    // "Ричмонд",
    // "Калифорния",
    // "Ричмонд",
    // "Вирджиния",
    // "Рокфорд",
    // "Иллинойс",
    // "Роли",
    // "Северная Каролина",
    // "Роузвилл",
    // "Калифорния",
    // "Рочестер",
    // "Нью-Йорк",
    // "Рочестер",
    // "Миннесота",
    // "Саванна",
    // "Джорджия",
    // "Сакраменто",
    // "Калифорния",
    // "Салинас",
    // "Калифорния",
    // "Сан-Антонио",
    // "Техас",
    // "Сан-Бернардино",
    // "Калифорния",
    // "Сан-Диего",
    // "Калифорния",
    // "Саннивейл",
    // "Калифорния",
    // "Санта-Ана",
    // "Калифорния",
    // "Санта-Клара",
    // "Калифорния",
    // "Санта-Кларита",
    // "Калифорния",
    // "Санта-Роза",
    // "Калифорния",
    // "Сан-Франциско",
    // "Калифорния",
    // "Сан-Хосе",
    // "Калифорния",
    // "Саут-Бенд",
    // "Индиана",
    // "Северный Лас-Вегас",
    // "Невада",
    // "Сейлем",
    // "Орегон",
    // "Сентенниал",
    // "Колорадо",
    // "Сент-Луис",
    // "Миссури",
    // "Сент-Питерсберг",
    // "Флорида",
    // "Сент-Пол",
    // "Миннесота",
    // "Сидар-Рапидс",
    // "Айова",
    // "Сими Вэлли",
    // "Калифорния",
    // "Сиракьюс",
    // "Нью-Йорк",
    // "Сиэтл",
    // "Вашингтон",
    // "Скоттсдейл",
    // "Аризона",
    // "Солт-Лейк-Сити",
    // "Юта",
    // "Спокан",
    // "Вашингтон",
    // "Спрингфилд",
    // "Миссури",
    // "Спрингфилд",
    // "Массачусетс",
    // "Спрингфилд",
    // "Иллинойс",
    // "Стерлинг Хайтс",
    // "Мичиган",
    // "Стоктон",
    // "Калифорния",
    // "Стэмфорд",
    // "Коннектикут",
    // "Су-Фолс",
    // "Южная Дакота",
    // "Такома",
    // "Вашингтон",
    // "Таллахасси",
    // "Флорида",
    // "Талса",
    // "Оклахома",
    // "Тампа",
    // "Флорида",
    // "Темпе",
    // "Аризона",
    // "Толедо",
    // "Огайо",
    // "Топика",
    // "Канзас",
    // "Торнтон",
    // "Колорадо",
    // "Торранс",
    // "Калифорния",
    // "Тусон",
    // "Аризона",
    // "Уилмингтон",
    // "Северная Каролина",
    // "Уинстон-Сейлем",
    // "Северная Каролина",
    // "Уичита",
    // "Канзас",
    // "Уичито-Фолс",
    // "Техас",
    // "Уоррен",
    // "Мичиган",
    // "Уотербери",
    // "Коннектикут",
    // "Уэйко",
    // "Техас",
    // "Фаузенд-Оукс",
    // "Калифорния",
    // "Фейетвилл",
    // "Северная Каролина",
    // "Филадельфия",
    // "Пенсильвания",
    // "Финикс",
    // "Аризона",
    // "Флинт",
    // "Мичиган",
    // "Фонтана",
    // "Калифорния",
    // "Форт Коллинс",
    // "Колорадо",
    // "Форт Уэйн",
    // "Индиана",
    // "Форт-Лодердейл",
    // "Флорида",
    // "Форт-Уэрт",
    // "Техас",
    // "Фресно",
    // "Калифорния",
    // "Фримонт",
    // "Калифорния",
    // "Фриско",
    // "Техас",
    // "Фуллертон",
    // "Калифорния",
    // "Фэрфилд",
    // "Калифорния",
    // "Хай-Пойнт",
    // "Северная Каролина",
    // "Хантингтон-Бич",
    // "Калифорния",
    // "Хантсвилл",
    // "Алабама",
    // "Хартфорд",
    // "Коннектикут",
    // "Хендерсон",
    // "Невада",
    // "Хиалеа",
    // "Флорида",
    // "Холливуд",
    // "Флорида",
    // "Хьюстон",
    // "Техас",
    // "Хэйвард",
    // "Калифорния",
    // "Хэмптон",
    // "Вирджиния",
    // "Цинциннати",
    // "Огайо",
    // "Чандлер",
    // "Аризона",
    // "Чарльстон",
    // "Южная Каролина",
    // "Чаттануга",
    // "Теннесси",
    // "Чесапик",
    // "Вирджиния",
    // "Чикаго",
    // "Иллинойс",
    // "Чула-Виста",
    // "Калифорния",
    // "Шарлотт",
    // "Северная Каролина",
    // "Шривпорт",
    // "Луизиана",
    // "Эвансвилл",
    // "Индиана",
    // "Элгин",
    // "Иллинойс",
    // "Элизабет",
    // "Нью-Джерси",
    // "Эль Монте",
    // "Калифорния",
    // "Эльк Грув",
    // "Калифорния",
    // "Эль-Пасо",
    // "Техас",
    // "Энн-Арбор",
    // "Мичиган",
    // "Эри",
    // "Пенсильвания",
    // "Эскондидо",
    // "Калифорния",
    // "Юджин",
    // "Орегон"
    // ]
} as {us: string[]; ru: string[]}
// } as {us: string[], ru: string[]; kz: string[], am: string[], en: string[]}

// const cities = {
//   usa: [
//     "New York",
//     "Los Angeles",
//     "Chicago",
//     "Houston",
//     "Phoenix",
//     "Philadelphia",
//     "San Antonio",
//     "San Diego",
//     "Dallas",
//     "San Jose",
//     "Austin",
//     "Jacksonville",
//     "Fort Worth",
//     "Columbus",
//     "Indianapolis",
//     "Charlotte",
//     "San Francisco",
//     "Seattle",
//     "Denver",
//     "Oklahoma City",
//     "Nashville",
//     "El Paso",
//     "Вашингтон",
//     "Washington",
//     "Boston",
//     "Las Vegas",
//     "Portland",
//     "Detroit",
//     "Louisville",
//     "Memphis",
//     "Baltimore",
//     "Milwaukee",
//     "Albuquerque",
//     "Fresno",
//     "Tucson",
//     "Sacramento",
//     "Mesa",
//     "Kansas City",
//     "Atlanta",
//     "Omaha",
//     "Colorado Springs",
//     "Raleigh",
//     "Virginia Beach",
//     "Long Beach",
//     "Miami",
//     "Oakland",
//     "Minneapolis",
//     "Tulsa",
//     "Bakersfield",
//     "Wichita",
//     "Arlington",
//     "Aurora",
//     "Tampa",
//     "New Orleans",
//     "Cleveland",
//     "Anaheim",
//     "Honolulu",
//     "Henderson",
//     "Stockton",
//     "Lexington",
//     "Corpus Christi",
//     "Riverside",
//     "Santa Ana",
//     "Orlando",
//     "Irvine",
//     "Cincinnati",
//     "Newark",
//     "Saint Paul",
//     "Pittsburgh",
//     "Greensboro",
//     "St. Louis",
//     "Lincoln",
//     "Plano",
//     "Anchorage",
//     "Durham",
//     "Jersey City",
//     "Chandler",
//     "Chula Vista",
//     "Buffalo",
//     "North Las Vegas",
//     "Gilbert",
//     "Madison",
//     "Reno",
//     "Toledo",
//     "Fort Wayne",
//     "Lubbock",
//     "St. Petersburg",
//     "Laredo",
//     "Irving",
//     "Chesapeake",
//     "Winston-Salem",
//     "Glendale",
//     "Scottsdale",
//     "Garland",
//     "Boise",
//     "Norfolk",
//     "Spokane",
//     "Fremont",
//     "Richmond",
//     "Santa Clarita",
//     "San Bernardino",
//     "Baton Rouge",
//     "Hialeah",
//     "Tacoma",
//     "Modesto",
//     "Port St. Lucie",
//     "Huntsville",
//     "Des Moines",
//     "Moreno Valley",
//     "Fontana",
//     "Frisco",
//     "Rochester",
//     "Yonkers",
//     "Fayetville",
//     "Worcester",
//     "Columbus",
//     "Cape Coral",
//     "McKinney",
//     "Little Rock",
//     "Oxnard",
//     "Amarillo",
//     "Augusta",
//     "Salt Lake City",
//     "Montgomery",
//     "Birmingham",
//     "Grand Rapids",
//     "Grand Prairie",
//     "Overland Park",
//     "Tallahassee",
//     "Huntington Beach",
//     "Souix Falls",
//     "Peoria",
//     "Knoxville",
//     "Glendale",
//     "Vancouver",
//     "Providence",
//     "Akron",
//     "Brownsville",
//     "Mobile",
//     "Newport News",
//     "Tempe",
//     "Shreveport",
//     "Chattanooga",
//     "Fort Lauderdale",
//     "Aurora",
//     "Elk Grove",
//     "Ontario",
//     "Salem",
//     "Cary",
//     "Santa Rosa",
//     "Rancho Cucamonga",
//     "Eugene",
//     "Oceanside",
//     "Clarcksville",
//     "Garden Grove",
//     "Lancaster",
//     "Springfield",
//     "Pembroke Pines",
//     "Fort Collins",
//     "Palmdale",
//     "Salinas",
//     "Hayward",
//     "Corona",
//     "Paterson",
//     "Murfreesboro",
//     "Macon",
//     "Lakewood",
//     "Kelleen",
//     "Sprinfield",
//     "Alexandria",
//     "Kansas City",
//     "Sunnyvale",
//     "Hollywood",
//     "Roseville",
//     "Charleston",
//     "Escondido",
//     "Joliet",
//     "Jackson",
//     "Bellevue",
//     "Surprise",
//     "Naperville",
//     "Pasadena",
//     "Pomona",
//     "Bridgeport",
//     "Denton",
//     "Rockford",
//     "Mesquite",
//     "Savannah",
//     "Syracuse",
//     "McAllen",
//     "Torrance",
//     "Olathe",
//     "Visalia",
//     "Thornton",
//     "Fullerton",
//     "Gainesville",
//     "Waco",
//     "West Valley City",
//     "Warren",
//     "Lakewood",
//     "Hampton",
//     "Dayton",
//     "Columbia",
//     "Orange",
//     "Cedar Rapids",
//     "Stamford",
//     "Victorville",
//     "Pasadena",
//     "Elizabeth",
//     "New Haven",
//     "Miramar",
//     "Kent",
//     "Sterling Heights",
//     "Carrollton",
//     "Coral Springs",
//     "Midland",
//     "Norman",
//     "Athens",
//     "Santa Clara",
//     "Columbia",
//     "Fargo",
//     "Pearland",
//     "Simi Valley",
//     "Meridian",
//     "Topeka",
//     "Allentown",
//     "Thousand-Oaks",
//     "Abilene",
//     "Vallejo",
//     "Concord",
//     "Round Rock",
//     "Arvada",
//     "Clovis",
//     "Palm Bay",
//     "Independence",
//     "Lafayette",
//     "Ann Arbor",
//     "Rochester",
//     "Hartford",
//     "College Station",
//     "Fairfield",
//     "Wilmington",
//     "North Charlestone",
//     "Billings",
//     "West Palm Beach",
//     "Berkeley",
//     "Cambridge",
//     "Clearwater",
//     "West Jordan",
//     "Evansville",
//     "Richardson",
//     "Broken Arrow",
//     "Richmond",
//     "League City",
//     "Manchester",
//     "Lakeland",
//     "Carlsbad",
//     "Antioch",
//     "Westminster",
//     "High Point",
//     "Provo",
//     "Lowell",
//     "Elgin",
//     "Waterbury",
//     "Springfield",
//     "Gresham",
//     "Murrieta",
//     "Lewisville",
//     "Las Cruces",
//     "Lansing",
//     "Beaumont",
//     "Odessa",
//     "Pueblo",
//     "Peoria",
//     "Downey",
//     "Pompano Beach",
//     "Miami Gardens",
//     "Temecula",
//     "Everett",
//     "Costa Mesa",
//     "Ventura",
//     "Sparks",
//     "Santa Maria",
//     "Sugar Land",
//     "Greeley",
//     "South Bend",
//     "Dearborn",
//     "Concord",
//     "Edison",
//     "Tyler",
//     "Sandy Springs",
//     "West Covina",
//     "Green Bay",
//     "Centennial",
//     "Jurupa Valley",
//     "El Monte",
//     "Allen",
//     "Hillsboro",
//     "Menifee",
//     "Nampa",
//     "Spokane Valley",
//     "Rio Rancho",
//     "Brockton",
//     "El Cajon",
//     "Burbank",
//     "Inglewood",
//     "Renton",
//     "Davie",
//     "Rialto",
//     "Boulder",
//     "South Bend",
//     "Woodbridge",
//     "Vacaville",
//     "Whichita Falls",
//     "Lee's Summit",
//     "Edinburg",
//     "Chico",
//     "San Mateo",
//     "Bend",
//     "Goodyear",
//     "Buckeye",
//     "Daly City",
//     "Fishers",
//     "Quincy",
//     "Davenport",
//     "Hesperia",
//     "New Bedford",
//     "Lynn",
//     "Carmel",
//     "Longmont",
//     "Tuscaloosa"
//   ]
// } as {usa: string[]}


export { usaCities, citysEN, cities };