import { MouseEvent, MutableRefObject, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import s from './searchcity.module.scss'
import glassIcon from './assets/glass.svg'
import { dataUser } from "src/store/weather/createApi";
import useTimeout from "src/helpers/useTimeout";
import { nowtimeAction } from "src/store/weather/actions/nowtime.action";
import { fiveDaysAction } from "src/store/weather/actions/fiveDays.action";
import transliteral from "src/helpers/transliteration";
import { NavLink } from "react-router-dom";
import { sendTextForPush } from "src/helpers/sendPushMessage";
import { cities, citysEN } from "./cities";


type DataUser = {
  lat: number;
  lon: number;
  main: string;
}


function SearchCity(): JSX.Element {


  const dispatch = useAppDispatch();
  const nowtimeWeatherReducer = useAppSelector(item => item.nowtimeWeatherReducer);
  const loading = useAppSelector(item => item.fiveDaysWeatherReducer.loading);
  // const PushMeassage = PusPopuphHoc();
  const [nameCountry, setNameCountry] = useState<string>('us');


  useEffect(()=> {
    !!nowtimeWeatherReducer.main.sys.country ? 
    setNameCountry(nowtimeWeatherReducer.main.sys.country.toLowerCase()) :
    setNameCountry('us');
  }, [!!nowtimeWeatherReducer.main.sys && nowtimeWeatherReducer.main.sys.country]);

  const [country, setCountry] = useState<number>(0);
  const [isDataUser, setDataUser] = useState<DataUser>(dataUser);
  const inputEl = useRef() as MutableRefObject<HTMLInputElement>;
  const searchCity = useRef() as MutableRefObject<HTMLInputElement>;


  const listCitiesHandler = (e: MouseEvent<HTMLUListElement>)=> {
    const target = e.target as HTMLDListElement;
    dataUser.main = target.textContent as string;
    dispatch(fiveDaysAction());
    setCountry(country+1);
    dispatch(nowtimeAction());

    
    const indexCity = cities.us.indexOf(inputEl.current.value)
    setDataUser({...isDataUser, main: citysEN[indexCity]});
    inputEl.current.value = '';
  };


  dataUser.main = isDataUser.main

  // const citysEN = [
  //   "pankovka",
  //   "abakan",
  //   "almetyevsk",
  //   "anadyr",
  //   "anapa",
  //   "arkhangelsk",
  //   "astrakhan",
  //   "barnaul",
  //   "belgorod",
  //   "beslan",
  //   "biysk",
  //   "birobidzhan",
  //   "blagoveshchensk",
  //   "bologoye",
  //   "bryansk",
  //   "veliky novgorod",
  //   "veliky ustyug",
  //   "vladivostok",
  //   "vladikavkaz",
  //   "vladimir",
  //   "volgograd",
  //   "vologda",
  //   "vorkuta",
  //   "voronezh",
  //   "gatchina",
  //   "gdov",
  //   "gelendzhik",
  //   "gorno-altaysk",
  //   "grozny",
  //   "gudermes",
  //   "gus-khrustalny",
  //   "dzerzhinsk",
  //   "dmitrov",
  //   "dubna",
  //   "yeysk",
  //   "yekaterinburg",
  //   "yelabuga",
  //   "yelets",
  //   "yessentuki",
  //   "zlatoust",
  //   "ivanovo",
  //   "izhevsk",
  //   "irkutsk",
  //   "yoshkar-ola",
  //   "kazan",
  //   "kaliningrad",
  //   "kaluga",
  //   "kemerovo",
  //   "kislovodsk",
  //   "komsomolsk-on-amur",
  //   "kotlas",
  //   "krasnodar",
  //   "krasnoyarsk",
  //   "kurgan",
  //   "kursk",
  //   "kyzyl",
  //   "leninogorsk",
  //   "lensk",
  //   "lipetsk",
  //   "luga",
  //   "lyuban",
  //   "lyubertsy",
  //   "magadan",
  //   "maykop",
  //   "makhachkala",
  //   "miass",
  //   "mineralnye vody",
  //   "mirny",
  //   "moscow",
  //   "murmansk",
  //   "murom",
  //   "mytishchi",
  //   "naberezhnye chelny",
  //   "nadym",
  //   "nalchik",
  //   "nazran",
  //   "naryan-mar",
  //   "nakhodka",
  //   "nizhnevartovsk",
  //   "nizhnekamsk",
  //   "nizhny novgorod",
  //   "nizhny tagil",
  //   "novokuznetsk",
  //   "novosibirsk",
  //   "novy urengoy",
  //   "norilsk",
  //   "obninsk",
  //   "oktyabrsky",
  //   "omsk",
  //   "orenburg",
  //   "orekhovo-zuyevo",
  //   "oryol",
  //   "penza",
  //   "perm",
  //   "petrozavodsk",
  //   "petropavlovsk-kamchatsky",
  //   "podolsk",
  //   "pskov",
  //   "pyatigorsk",
  //   "rostov-on-don",
  //   "rybinsk",
  //   "ryazan",
  //   "salekhard",
  //   "samara",
  //   "saint petersburg",
  //   "saransk",
  //   "saratov",
  //   "severodvinsk",
  //   "smolensk",
  //   "sol-iletsk",
  //   "sochi",
  //   "stavropol",
  //   "surgut",
  //   "syktyvkar",
  //   "tambov",
  //   "tver",
  //   "tobolsk",
  //   "tolyatti",
  //   "tomsk",
  //   "tuapse",
  //   "tula",
  //   "tynda",
  //   "tyumen",
  //   "ulan-ude",
  //   "ulyanovsk",
  //   "ufa",
  //   "khabarovsk",
  //   "khanty-mansiysk",
  //   "chebarkul",
  //   "cheboksary",
  //   "chelyabinsk",
  //   "cherepovets",
  //   "cherkessk",
  //   "chistopol",
  //   "chita",
  //   "shadrinsk",
  //   "shatura",
  //   "shuya",
  //   "elista",
  //   "engels",
  //   "yuzhno-sakhalinsk",
  //   "yakutsk",
  //   "yaroslavl"
  // ]

  // const cities = {
  //   ru: [
  //     "панковка",
  //     "абакан",
  //     "альметьевск",
  //     "анадырь",
  //     "анапа",
  //     "архангельск",
  //     "астрахань",
  //     "барнаул",
  //     "белгород",
  //     "беслан",
  //     "бийск",
  //     "биробиджан",
  //     "благовещенск",
  //     "бологое",
  //     "брянск",
  //     "великий новгород",
  //     "великий устюг",
  //     "владивосток",
  //     "владикавказ",
  //     "владимир",
  //     "волгоград",
  //     "вологда",
  //     "воркута",
  //     "воронеж",
  //     "гатчина",
  //     "гдов",
  //     "геленджик",
  //     "горно-алтайск",
  //     "грозный",
  //     "гудермес",
  //     "гусь-хрустальный",
  //     "дзержинск",
  //     "дмитров",
  //     "дубна",
  //     "ейск",
  //     "екатеринбург",
  //     "елабуга",
  //     "елец",
  //     "ессентуки",
  //     "златоуст",
  //     "иваново",
  //     "ижевск",
  //     "иркутск",
  //     "йошкар-ола",
  //     "казань",
  //     "калининград",
  //     "калуга",
  //     "кемерово",
  //     "кисловодск",
  //     "комсомольск-на-амуре",
  //     "котлас",
  //     "краснодар",
  //     "красноярск",
  //     "курган",
  //     "курск",
  //     "кызыл",
  //     "лениногорск",
  //     "ленск",
  //     "липецк",
  //     "луга",
  //     "любань",
  //     "люберцы",
  //     "магадан",
  //     "майкоп",
  //     "махачкала",
  //     "миасс",
  //     "минеральные воды",
  //     "мирный",
  //     "Москва",
  //     "мурманск",
  //     "муром",
  //     "мытищи",
  //     "набережные челны",
  //     "надым",
  //     "нальчик",
  //     "назрань",
  //     "нарьян-мар",
  //     "находка",
  //     "нижневартовск",
  //     "нижнекамск",
  //     "нижний новгород",
  //     "нижний тагил",
  //     "новокузнецк",
  //     "новосибирск",
  //     "новый уренгой",
  //     "норильск",
  //     "обнинск",
  //     "октябрьский",
  //     "омск",
  //     "оренбург",
  //     "орехово-зуево",
  //     "орёл",
  //     "пенза",
  //     "пермь",
  //     "петрозаводск",
  //     "петропавловск-камчатский",
  //     "подольск",
  //     "псков",
  //     "пятигорск",
  //     "ростов-на-дону",
  //     "рыбинск",
  //     "рязань",
  //     "салехард",
  //     "самара",
  //     "санкт-петербург",
  //     "саранск",
  //     "саратов",
  //     "северодвинск",
  //     "смоленск",
  //     "соль-илецк",
  //     "сочи",
  //     "ставрополь",
  //     "сургут",
  //     "сыктывкар",
  //     "тамбов",
  //     "тверь",
  //     "тобольск",
  //     "тольятти",
  //     "томск",
  //     "туапсе",
  //     "тула",
  //     "тында",
  //     "тюмень",
  //     "улан-уде",
  //     "ульяновск",
  //     "уфа",
  //     "хабаровск",
  //     "ханты-мансийск",
  //     "чебаркуль",
  //     "чебоксары",
  //     "челябинск",
  //     "череповец",
  //     "черкесск",
  //     "чистополь",
  //     "чита",
  //     "шадринск",
  //     "шатура",
  //     "шуя",
  //     "элиста",
  //     "энгельс",
  //     "южно-сахалинск",
  //     "якутск",
  //     "ярославль"
  //   ],
  //   kz: [
  //   "Абай",
  //   "Акколь",
  //   "Аксай",
  //   "Аксу",
  //   "Актау",
  //   "Актобе",
  //   "Алга",
  //   "Алматы",
  //   "Алтай",
  //   "Аральск",
  //   "Аркалык",
  //   "Арыс",
  //   "Астана",
  //   "Атбасар",
  //   "Атырау",
  //   "Аягоз",
  //   "Байконур",
  //   "Балхаш",
  //   "Булаево",
  //   "Державинск",
  //   "Ерейментау",
  //   "Есик",
  //   "Есиль",
  //   "Жанаозен",
  //   "Жанатас",
  //   "Жаркент",
  //   "Жезказган",
  //   "Жем",
  //   "Жетысай",
  //   "Житикара",
  //   "Зайсан",
  //   "Казалинск",
  //   "Кандыагаш",
  //   "Караганда",
  //   "Каражал",
  //   "Каратау",
  //   "Каркаралинск",
  //   "Каскелен",
  //   "Кентау",
  //   "Кокшетау",
  //   "Конаев",
  //   "Костанай",
  //   "Косшы",
  //   "Кульсары",
  //   "Курчатов",
  //   "Кызылорда",
  //   "Ленгер",
  //   "Лисаковск",
  //   "Макинск",
  //   "Мамлютка",
  //   "Павлодар",
  //   "Петропавловск",
  //   "Приозёрск",
  //   "Риддер",
  //   "Рудный",
  //   "Сарань",
  //   "Сарканд",
  //   "Сарыагаш",
  //   "Сатпаев",
  //   "Семей",
  //   "Сергеевка",
  //   "Серебрянск",
  //   "Степногорск",
  //   "Степняк",
  //   "Тайынша",
  //   "Талгар",
  //   "Талдыкорган",
  //   "Тараз",
  //   "Текели",
  //   "Темир",
  //   "Темиртау",
  //   "Тобыл",
  //   "Туркестан",
  //   "Уральск",
  //   "Усть-Каменогорск",
  //   "Ушарал",
  //   "Уштобе",
  //   "Форт-Шевченко",
  //   "Хромтау",
  //   "Шалкар",
  //   "Шар",
  //   "Шардара",
  //   "Шахтинск",
  //   "Шемонаиха",
  //   "Шу",
  //   "Шымкент",
  //   "Щучинск",
  //   "Экибастуз",
  //   "Эмба"
  //   ],
  //   am: [
  //     "Аревик",
  //     "Арзни",
  //     "Артик",
  //     "Аштарак",
  //     "Ереван",
  //     "Ванадзор",
  //     "Йегегнадзор",
  //     "Гарни",
  //     "Гехард",
  //     "Горис",
  //     "Гюмри",
  //     "Севан",
  //     "Двин",
  //     "Джермук",
  //     "Дзорагет",
  //     "Дилижан",
  //     "Цахкадзор",
  //   ],
  //   en: [
  //     "Абилин",
  //     "Техас",
  //     "Аврора",
  //     "Колорадо",
  //     "Аврора",
  //     "Иллинойс",
  //     "Акрон",
  //     "Огайо",
  //     "Александрия",
  //     "Вирджиния",
  //     "Аллентаун",
  //     "Пенсильвания",
  //     "Альбукерке",
  //     "Нью-Мексико",
  //     "Амарилло",
  //     "Техас",
  //     "Анахайм",
  //     "Калифорния",
  //     "Анкоридж",
  //     "Аляска",
  //     "Арвада",
  //     "Колорадо",
  //     "Арлингтон",
  //     "Техас",
  //     "Арлингтон",
  //     "Вирджиния",
  //     "Атенс",
  //     "Джорджия",
  //     "Атланта",
  //     "Джорджия",
  //     "Балтимор",
  //     "Мэриленд",
  //     "Батон-Руж",
  //     "Луизиана",
  //     "Баффало",
  //     "Нью-Йорк",
  //     "Бейкерсфилд",
  //     "Калифорния",
  //     "Белвью",
  //     "Вашингтон",
  //     "Бербанк",
  //     "Калифорния",
  //     "Беркли",
  //     "Калифорния",
  //     "Биллингс",
  //     "Монтана",
  //     "Бирмингем",
  //     "Алабама",
  //     "Бойсе",
  //     "Айдахо",
  //     "Бомонт",
  //     "Техас",
  //     "Бостон",
  //     "Массачусетс",
  //     "Боулдер",
  //     "Колорадо",
  //     "Браунсвилл",
  //     "Техас",
  //     "Бриджпорт",
  //     "Коннектикут",
  //     "Валледжо",
  //     "Калифорния",
  //     "Ванкувер",
  //     "Вашингтон",
  //     "Вашингтон",
  //     "Округ Колумбия",
  //     "Вентура",
  //     "Калифорния",
  //     "Вест-Вэлли-Сити",
  //     "Юта",
  //     "Вест-Джордан",
  //     "Юта",
  //     "Вест-Ковайна",
  //     "Калифорния",
  //     "Вестминстер",
  //     "Колорадо",
  //     "Визалия",
  //     "Калифорния",
  //     "Викторвилл",
  //     "Калифорния",
  //     "Вирджиния-Бич",
  //     "Вирджиния",
  //     "Вустер",
  //     "Массачусетс",
  //     "Гарден Грув",
  //     "Калифорния",
  //     "Гарлэнд",
  //     "Техас",
  //     "Гейнсвилл",
  //     "Флорида",
  //     "Гилберт",
  //     "Аризона",
  //     "Глендейл",
  //     "Аризона",
  //     "Глендейл",
  //     "Калифорния",
  //     "Гранд Прейри",
  //     "Техас",
  //     "Гранд-Рэпидс",
  //     "Грешам",
  //     "Орегон",
  //     "Грин Бэй",
  //     "Висконсин",
  //     "Гринсборо",
  //     "Северная Каролина",
  //     "Давенпорт",
  //     "Айова",
  //     "Даллас",
  //     "Техас",
  //     "Дарем",
  //     "Северная Каролина",
  //     "Дауни",
  //     "Калифорния",
  //     "Дейли-Сити",
  //     "Калифорния",
  //     "Дейтон",
  //     "Огайо",
  //     "Де-Мойн",
  //     "Айова",
  //     "Денвер",
  //     "Колорадо",
  //     "Дентон",
  //     "Техас",
  //     "Детройт",
  //     "Мичиган",
  //     "Джексон",
  //     "Миссисипи",
  //     "Джерси-Сити",
  //     "Нью-Джерси",
  //     "Джолит",
  //     "Иллинойс",
  //     "Джэксонвилл",
  //     "Флорида",
  //     "Инглвуд",
  //     "Калифорния",
  //     "Индепенденс",
  //     "Миссури",
  //     "Индианаполис",
  //     "Индиана",
  //     "Ирвайн",
  //     "Калифорния",
  //     "Ирвинг",
  //     "Техас",
  //     "Йонкерс",
  //     "Нью-Йорк",
  //     "Канзас-Сити",
  //     "Канзас",
  //     "Канзас-Сити",
  //     "Миссури",
  //     "Карроллтон",
  //     "Техас",
  //     "Кейп Корал",
  //     "Флорида",
  //     "Киллин",
  //     "Техас",
  //     "Кларксвилл",
  //     "Теннесси",
  //     "Кливленд",
  //     "Огайо",
  //     "Клирвотер",
  //     "Флорида",
  //     "Коламбус",
  //     "Огайо",
  //     "Коламбус",
  //     "Джорджия",
  //     "Колорадо-Спрингс",
  //     "Колорадо",
  //     "Колумбия",
  //     "Огайо",
  //     "Колумбия",
  //     "Миссури",
  //     "Конкорд",
  //     "Калифорния",
  //     "Корал-Спрингс",
  //     "Флорида",
  //     "Корона",
  //     "Калифорния",
  //     "Корпус-Кристи",
  //     "Техас",
  //     "Коста Меса",
  //     "Калифорния",
  //     "Кэмбридж",
  //     "Массачусетс",
  //     "Кэри",
  //     "Северная Каролина",
  //     "Лаббок",
  //     "Техас",
  //     "Ланкастер",
  //     "Калифорния",
  //     "Лансинг",
  //     "Мичиган",
  //     "Ларедо",
  //     "Техас",
  //     "Лас-Вегас",
  //     "Невада",
  //     "Лафайетт",
  //     "Луизиана",
  //     "Левисвилл",
  //     "Техас",
  //     "Лексингтон",
  //     "Кентукки",
  //     "Линкольн",
  //     "Небраска",
  //     "Литл-Рок",
  //     "Арканзас",
  //     "Лонг-Бич",
  //     "Калифорния",
  //     "Лос-Анджелес",
  //     "Калифорния",
  //     "Лоуэлл",
  //     "Массачусетс",
  //     "Луисвилл",
  //     "Кентукки",
  //     "Лэйквуд",
  //     "Колорадо",
  //     "Майами",
  //     "Флорида",
  //     "Майами Гарденс",
  //     "Флорида",
  //     "Макаллен",
  //     "Техас",
  //     "Маккинни",
  //     "Техас",
  //     "Манчестер",
  //     "Нью-Хэмпшир",
  //     "Мемфис",
  //     "Теннесси",
  //     "Мерфрисборо",
  //     "Теннесси",
  //     "Меса",
  //     "Аризона",
  //     "Мескит",
  //     "Техас",
  //     "Мидленд",
  //     "Техас",
  //     "Милуоки",
  //     "Висконсин",
  //     "Миннеаполис",
  //     "Миннесота",
  //     "Мирамар",
  //     "Флорида",
  //     "Мобил",
  //     "Алабама",
  //     "Модесто",
  //     "Калифорния",
  //     "Монтгомери",
  //     "Алабама",
  //     "Морено Вэлли",
  //     "Калифорния",
  //     "Мэдисон",
  //     "Висконсин",
  //     "Напервилл",
  //     "Иллинойс",
  //     "Новый Орлеан",
  //     "Луизиана",
  //     "Ноксвилл",
  //     "Теннесси",
  //     "Норман",
  //     "Оклахома",
  //     "Норуолк",
  //     "Калифорния",
  //     "Норфолк",
  //     "Вирджиния",
  //     "Ньюарк",
  //     "Нью-Джерси",
  //     "Нью-Йорк",
  //     "Нью-Йорк",
  //     "Ньюпорт-Ньюс",
  //     "Вирджиния",
  //     "Нью-Хейвен",
  //     "Коннектикут",
  //     "Нэшвилл",
  //     "Теннесси",
  //     "Оверленд-Парк",
  //     "Канзас",
  //     "Огаста",
  //     "Джорджия",
  //     "Одесса",
  //     "Техас",
  //     "Оклахома-Сити",
  //     "Оклахома",
  //     "Окленд",
  //     "Калифорния",
  //     "Окснард",
  //     "Калифорния",
  //     "Олэйта",
  //     "Канзас",
  //     "Омаха",
  //     "Небраска",
  //     "Онтарио",
  //     "Калифорния",
  //     "Ориндж",
  //     "Калифорния",
  //     "Орландо",
  //     "Флорида",
  //     "Остин",
  //     "Техас",
  //     "Оушенсайд",
  //     "Калифорния",
  //     "Палм-Бэй",
  //     "Флорида",
  //     "Палмдейл",
  //     "Калифорния",
  //     "Пасадена",
  //     "Техас",
  //     "Пасадена",
  //     "Калифорния",
  //     "Патерсон",
  //     "Нью-Джерси",
  //     "Пемброк-Пайнс",
  //     "Флорида",
  //     "Пеория",
  //     "Аризона",
  //     "Пеория",
  //     "Иллинойс",
  //     "Питтсбург",
  //     "Пенсильвания",
  //     "Плано",
  //     "Техас",
  //     "Помона",
  //     "Калифорния",
  //     "Помпано-Бич",
  //     "Флорида",
  //     "Порт Сэнт Люси",
  //     "Флорида",
  //     "Портленд",
  //     "Орегон",
  //     "Провиденс",
  //     "Род-Айленд",
  //     "Прово",
  //     "Юта",
  //     "Пуэбло",
  //     "Колорадо",
  //     "Ранчо Кукамонга",
  //     "Калифорния",
  //     "Раунд Рок",
  //     "Техас",
  //     "Риверсайд",
  //     "Калифорния",
  //     "Рино",
  //     "Невада",
  //     "Ричардсон",
  //     "Техас",
  //     "Ричмонд",
  //     "Калифорния",
  //     "Ричмонд",
  //     "Вирджиния",
  //     "Рокфорд",
  //     "Иллинойс",
  //     "Роли",
  //     "Северная Каролина",
  //     "Роузвилл",
  //     "Калифорния",
  //     "Рочестер",
  //     "Нью-Йорк",
  //     "Рочестер",
  //     "Миннесота",
  //     "Саванна",
  //     "Джорджия",
  //     "Сакраменто",
  //     "Калифорния",
  //     "Салинас",
  //     "Калифорния",
  //     "Сан-Антонио",
  //     "Техас",
  //     "Сан-Бернардино",
  //     "Калифорния",
  //     "Сан-Диего",
  //     "Калифорния",
  //     "Саннивейл",
  //     "Калифорния",
  //     "Санта-Ана",
  //     "Калифорния",
  //     "Санта-Клара",
  //     "Калифорния",
  //     "Санта-Кларита",
  //     "Калифорния",
  //     "Санта-Роза",
  //     "Калифорния",
  //     "Сан-Франциско",
  //     "Калифорния",
  //     "Сан-Хосе",
  //     "Калифорния",
  //     "Саут-Бенд",
  //     "Индиана",
  //     "Северный Лас-Вегас",
  //     "Невада",
  //     "Сейлем",
  //     "Орегон",
  //     "Сентенниал",
  //     "Колорадо",
  //     "Сент-Луис",
  //     "Миссури",
  //     "Сент-Питерсберг",
  //     "Флорида",
  //     "Сент-Пол",
  //     "Миннесота",
  //     "Сидар-Рапидс",
  //     "Айова",
  //     "Сими Вэлли",
  //     "Калифорния",
  //     "Сиракьюс",
  //     "Нью-Йорк",
  //     "Сиэтл",
  //     "Вашингтон",
  //     "Скоттсдейл",
  //     "Аризона",
  //     "Солт-Лейк-Сити",
  //     "Юта",
  //     "Спокан",
  //     "Вашингтон",
  //     "Спрингфилд",
  //     "Миссури",
  //     "Спрингфилд",
  //     "Массачусетс",
  //     "Спрингфилд",
  //     "Иллинойс",
  //     "Стерлинг Хайтс",
  //     "Мичиган",
  //     "Стоктон",
  //     "Калифорния",
  //     "Стэмфорд",
  //     "Коннектикут",
  //     "Су-Фолс",
  //     "Южная Дакота",
  //     "Такома",
  //     "Вашингтон",
  //     "Таллахасси",
  //     "Флорида",
  //     "Талса",
  //     "Оклахома",
  //     "Тампа",
  //     "Флорида",
  //     "Темпе",
  //     "Аризона",
  //     "Толедо",
  //     "Огайо",
  //     "Топика",
  //     "Канзас",
  //     "Торнтон",
  //     "Колорадо",
  //     "Торранс",
  //     "Калифорния",
  //     "Тусон",
  //     "Аризона",
  //     "Уилмингтон",
  //     "Северная Каролина",
  //     "Уинстон-Сейлем",
  //     "Северная Каролина",
  //     "Уичита",
  //     "Канзас",
  //     "Уичито-Фолс",
  //     "Техас",
  //     "Уоррен",
  //     "Мичиган",
  //     "Уотербери",
  //     "Коннектикут",
  //     "Уэйко",
  //     "Техас",
  //     "Фаузенд-Оукс",
  //     "Калифорния",
  //     "Фейетвилл",
  //     "Северная Каролина",
  //     "Филадельфия",
  //     "Пенсильвания",
  //     "Финикс",
  //     "Аризона",
  //     "Флинт",
  //     "Мичиган",
  //     "Фонтана",
  //     "Калифорния",
  //     "Форт Коллинс",
  //     "Колорадо",
  //     "Форт Уэйн",
  //     "Индиана",
  //     "Форт-Лодердейл",
  //     "Флорида",
  //     "Форт-Уэрт",
  //     "Техас",
  //     "Фресно",
  //     "Калифорния",
  //     "Фримонт",
  //     "Калифорния",
  //     "Фриско",
  //     "Техас",
  //     "Фуллертон",
  //     "Калифорния",
  //     "Фэрфилд",
  //     "Калифорния",
  //     "Хай-Пойнт",
  //     "Северная Каролина",
  //     "Хантингтон-Бич",
  //     "Калифорния",
  //     "Хантсвилл",
  //     "Алабама",
  //     "Хартфорд",
  //     "Коннектикут",
  //     "Хендерсон",
  //     "Невада",
  //     "Хиалеа",
  //     "Флорида",
  //     "Холливуд",
  //     "Флорида",
  //     "Хьюстон",
  //     "Техас",
  //     "Хэйвард",
  //     "Калифорния",
  //     "Хэмптон",
  //     "Вирджиния",
  //     "Цинциннати",
  //     "Огайо",
  //     "Чандлер",
  //     "Аризона",
  //     "Чарльстон",
  //     "Южная Каролина",
  //     "Чаттануга",
  //     "Теннесси",
  //     "Чесапик",
  //     "Вирджиния",
  //     "Чикаго",
  //     "Иллинойс",
  //     "Чула-Виста",
  //     "Калифорния",
  //     "Шарлотт",
  //     "Северная Каролина",
  //     "Шривпорт",
  //     "Луизиана",
  //     "Эвансвилл",
  //     "Индиана",
  //     "Элгин",
  //     "Иллинойс",
  //     "Элизабет",
  //     "Нью-Джерси",
  //     "Эль Монте",
  //     "Калифорния",
  //     "Эльк Грув",
  //     "Калифорния",
  //     "Эль-Пасо",
  //     "Техас",
  //     "Энн-Арбор",
  //     "Мичиган",
  //     "Эри",
  //     "Пенсильвания",
  //     "Эскондидо",
  //     "Калифорния",
  //     "Юджин",
  //     "Орегон"
  //   ]
  // } as {ru: string[]; kz: string[], am: string[]}


  const searchCitys = () => {
    

    const inputElValue = inputEl.current.value;
    const upperCase = inputElValue.charAt(0).toUpperCase() + inputElValue.slice(1);
    const lengthWord = upperCase.length;

    return cities[nameCountry as keyof typeof cities].filter((item)=> {
      item = item.charAt(0).toUpperCase() + item.slice(1);
      let newArray: string[] | string = [...item.split('')];
      newArray.length = lengthWord;
      newArray = newArray.join('');
      return newArray === upperCase;
    })
  };

  
  const timeout = useTimeout(200);
  const refreshPage = () => setCountry(country+1);
  const listCitysHandler = () => timeout(refreshPage);
  // const listCitysHandler = () => {
  //   !loading &&
  //   inputEl.current && 
  //   !searchCitys().length &&
  //   dispatch(addText(`город начинающийся с ${inputEl.current.value.toUpperCase()} не найден`))
  // }

  


  const lengthCitiesCheck = (
    inputEl.current && 
    inputEl.current.value.length > 0 && 
    searchCitys().length > 0
  )


  const numberRowsForCities = (
    inputEl.current && 
    inputEl.current.value && 
    !!searchCitys().length ? searchCitys().length : 1
  )


  // useEffect(()=> {
  //   !loading &&
  //   inputEl.current && 
  //   !searchCitys().length &&
  //   dispatch(addText(`город начинающийся с ${inputEl.current.value.toUpperCase()} не найден`))
  // }, [!!inputEl.current && inputEl.current.value])

  // const [arrayPush, setArrayPush] = useState<string[]>([])

  // const arrayPush = useAppSelector(item => item.pushMessageReducer)

  const numberPush = useAppSelector(state => state.pushMessageReducer.numberPush)
  const textForPush = (text: string, isNumber: number) => {
    if (
      !loading &&
      inputEl.current && 
      !searchCitys().length
    ) {
      sendTextForPush(text, isNumber, dispatch)
    }
  }


  return <>
    <div
      style={{
        "display": "flex",
        "width": "100%",
        "alignItems": "center"
      }}
    >
      <button
        style={{
          cursor: 'pointer',
          width: '80px',
          height: '30px',
          margin: '10px 10px 10px 0'
        }}
        onClick={()=> setNameCountry('us')}
      >US</button>
      <button
        style={{
          cursor: 'pointer',
          width: '80px',
          height: '30px',
          margin: '10px 10px 10px 0'
        }}
        onClick={()=> setNameCountry('ru')}
      >RU</button>
      <span>
        search for cities in the zone
      </span>
      {/* <button
        style={{
          cursor: 'pointer',
          width: '80px',
          height: '30px',
          margin: '10px 0'
        }}
        onClick={()=> setNameCountry('kz')}
      >KZ</button> */}
    </div>

    <div 
      className={s.searchCity}
      ref={searchCity} 
    >
      <input 
        autoComplete={'true'}
        disabled={loading}
        title={"Enter the name of the city"}
        placeholder={`${loading ? 'Loading in progress' : 'Enter the name of the city'}`}
        onChange={(e)=> {

          const region = Object.keys(cities).filter(item=> item === nameCountry)

          if (!!region[0]) {
            listCitysHandler()
            textForPush(`City starting with '${e.target.value.toUpperCase()}' not found`, numberPush)
          } else {
            // console.log('1111')
            // dispatch(addText.changeNumberPush(numberPush))
            // sendTextForPush(`we don't have weather data in observation area '${nameCountry}'`, numberPush, dispatch)
            
            // dispatch(addText.changeNumberPush(numberPush))
            // textForPush(`we don't have weather data in observation area '${nameCountry}'`, numberPush)
            // setNameCountry('us')

            sendTextForPush(`We do not have a list of cities in the zone '${nameCountry}', but we have in the "us" zone `, numberPush, dispatch)
            setNameCountry('us')
          }
        }}
        ref={inputEl}
        type="search" 
        className={`${s.input} ${lengthCitiesCheck && s.input__active}`} 
        style={{
          background: `url(${glassIcon}) no-repeat #ffffff`,
          backgroundPosition: "15px 15px"
        }}
      />

 
     {<ul 
        className={`
          ${s.listCitys}
          ${lengthCitiesCheck && s.listCitysActive}
        `}
        onClick={(e)=> listCitiesHandler(e)}
        style={{height: lengthCitiesCheck ? `${38+(numberRowsForCities * 37.5)}px` : `${0}px`}}
      >
        {
          inputEl.current && inputEl.current.value && 
          searchCitys().map((item, index) => 
          <li 
            key={index}
          >
            <NavLink 
              aria-label={'город ' + item} 
              to={`weather/${transliteral(item).toLowerCase()}`}
            > {item.charAt(0).toUpperCase() + item.slice(1)} </NavLink>
          </li>)
        }
      </ul>}
    </div>

      
    {/* { 
      !loading &&
      inputEl.current && 
      !searchCitys().length &&
      <PushMeassage 
        text={`город начинающийся с ${inputEl.current.value.toUpperCase()} не найден`} 
      />
    } */}
    
  </>
}



export default SearchCity