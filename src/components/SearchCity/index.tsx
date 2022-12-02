import { MouseEvent, MutableRefObject, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import s from './searchcity.module.scss'
import glassIcon from './assets/glass.svg'
import { dataUser } from "src/store/weather/createApi";
import useTimeout from "src/helpers/useTimeout";
import { nowtimeAction } from "src/store/weather/actions/nowtime.action";
import { fiveDaysAction } from "src/store/weather/actions/fiveDays.action";
import { nameCityAction } from "src/store/weather/actions/nameCity.action";


type DataUser = {
  lat: number;
  lon: number;
  main: string;
}


function SearchCity(): JSX.Element {


  const dispatch = useAppDispatch();
  const selector = useAppSelector(item => item.nowtimeWeatherReducer);

  const nameCountry = selector.main.sys.country && selector.main.sys.country.toLowerCase();

  const [country, setCountry] = useState<number>(0);
  const [isDataUser, setDataUser] = useState<DataUser>(dataUser);
  const inputEl = useRef() as MutableRefObject<HTMLInputElement>;
  const searchCity = useRef() as MutableRefObject<HTMLInputElement>;


  const listCitiesHandler = (e: MouseEvent<HTMLUListElement>)=> {
    const target = e.target as HTMLDListElement;
    dataUser.main = target.textContent as string;
    dispatch(nowtimeAction());
    dispatch(fiveDaysAction());
    setCountry(country+1);

    
    const indexCity = cities.kz.indexOf(inputEl.current.value)
    setDataUser({...isDataUser, main: citysEN[indexCity]});
    inputEl.current.value = '';
  };


  dataUser.main = isDataUser.main

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
    ru: [
      "панковка",
      "абакан",
      "альметьевск",
      "анадырь",
      "анапа",
      "архангельск",
      "астрахань",
      "барнаул",
      "белгород",
      "беслан",
      "бийск",
      "биробиджан",
      "благовещенск",
      "бологое",
      "брянск",
      "великий новгород",
      "великий устюг",
      "владивосток",
      "владикавказ",
      "владимир",
      "волгоград",
      "вологда",
      "воркута",
      "воронеж",
      "гатчина",
      "гдов",
      "геленджик",
      "горно-алтайск",
      "грозный",
      "гудермес",
      "гусь-хрустальный",
      "дзержинск",
      "дмитров",
      "дубна",
      "ейск",
      "екатеринбург",
      "елабуга",
      "елец",
      "ессентуки",
      "златоуст",
      "иваново",
      "ижевск",
      "иркутск",
      "йошкар-ола",
      "казань",
      "калининград",
      "калуга",
      "кемерово",
      "кисловодск",
      "комсомольск-на-амуре",
      "котлас",
      "краснодар",
      "красноярск",
      "курган",
      "курск",
      "кызыл",
      "лениногорск",
      "ленск",
      "липецк",
      "луга",
      "любань",
      "люберцы",
      "магадан",
      "майкоп",
      "махачкала",
      "миасс",
      "минеральные воды",
      "мирный",
      "Москва",
      "мурманск",
      "муром",
      "мытищи",
      "набережные челны",
      "надым",
      "нальчик",
      "назрань",
      "нарьян-мар",
      "находка",
      "нижневартовск",
      "нижнекамск",
      "нижний новгород",
      "нижний тагил",
      "новокузнецк",
      "новосибирск",
      "новый уренгой",
      "норильск",
      "обнинск",
      "октябрьский",
      "омск",
      "оренбург",
      "орехово-зуево",
      "орёл",
      "пенза",
      "пермь",
      "петрозаводск",
      "петропавловск-камчатский",
      "подольск",
      "псков",
      "пятигорск",
      "ростов-на-дону",
      "рыбинск",
      "рязань",
      "салехард",
      "самара",
      "санкт-петербург",
      "саранск",
      "саратов",
      "северодвинск",
      "смоленск",
      "соль-илецк",
      "сочи",
      "ставрополь",
      "сургут",
      "сыктывкар",
      "тамбов",
      "тверь",
      "тобольск",
      "тольятти",
      "томск",
      "туапсе",
      "тула",
      "тында",
      "тюмень",
      "улан-уде",
      "ульяновск",
      "уфа",
      "хабаровск",
      "ханты-мансийск",
      "чебаркуль",
      "чебоксары",
      "челябинск",
      "череповец",
      "черкесск",
      "чистополь",
      "чита",
      "шадринск",
      "шатура",
      "шуя",
      "элиста",
      "энгельс",
      "южно-сахалинск",
      "якутск",
      "ярославль"
    ],
    kz: [
    "Абай",
    "Акколь",
    "Аксай",
    "Аксу",
    "Актау",
    "Актобе",
    "Алга",
    "Алматы",
    "Алтай",
    "Аральск",
    "Аркалык",
    "Арыс",
    "Астана",
    "Атбасар",
    "Атырау",
    "Аягоз",
    "Байконур",
    "Балхаш",
    "Булаево",
    "Державинск",
    "Ерейментау",
    "Есик",
    "Есиль",
    "Жанаозен",
    "Жанатас",
    "Жаркент",
    "Жезказган",
    "Жем",
    "Жетысай",
    "Житикара",
    "Зайсан",
    "Казалинск",
    "Кандыагаш",
    "Караганда",
    "Каражал",
    "Каратау",
    "Каркаралинск",
    "Каскелен",
    "Кентау",
    "Кокшетау",
    "Конаев",
    "Костанай",
    "Косшы",
    "Кульсары",
    "Курчатов",
    "Кызылорда",
    "Ленгер",
    "Лисаковск",
    "Макинск",
    "Мамлютка",
    "Павлодар",
    "Петропавловск",
    "Приозёрск",
    "Риддер",
    "Рудный",
    "Сарань",
    "Сарканд",
    "Сарыагаш",
    "Сатпаев",
    "Семей",
    "Сергеевка",
    "Серебрянск",
    "Степногорск",
    "Степняк",
    "Тайынша",
    "Талгар",
    "Талдыкорган",
    "Тараз",
    "Текели",
    "Темир",
    "Темиртау",
    "Тобыл",
    "Туркестан",
    "Уральск",
    "Усть-Каменогорск",
    "Ушарал",
    "Уштобе",
    "Форт-Шевченко",
    "Хромтау",
    "Шалкар",
    "Шар",
    "Шардара",
    "Шахтинск",
    "Шемонаиха",
    "Шу",
    "Шымкент",
    "Щучинск",
    "Экибастуз",
    "Эмба"
    ],
    am: [
      "Аревик",
      "Арзни",
      "Артик",
      "Аштарак",
      "Ереван",
      "Ванадзор",
      "Йегегнадзор",
      "Гарни",
      "Гехард",
      "Горис",
      "Гюмри",
      "Севан",
      "Двин",
      "Джермук",
      "Дзорагет",
      "Дилижан",
      "Цахкадзор",
    ]
  } as {ru: string[]; kz: string[], am: string[]}


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


  const lengthCitiesCheck = inputEl.current && inputEl.current.value.length > 0 && searchCitys().length > 0


  return (
    <div 
      className={s.searchCity}
      ref={searchCity} 
    >
      <input 
        title="ewgreg"
        onChange={listCitysHandler}
        ref={inputEl}
        type="text" 
        className={`${s.input} ${lengthCitiesCheck && s.inputActive}`} 
        style={{
          background: `url(${glassIcon}) no-repeat #ffffff`,
          backgroundPosition: "15px 15px"
        }}
      />


      <ul 
        className={s.listCitys}
        onClick={(e)=> listCitiesHandler(e)}
        style={{opacity: lengthCitiesCheck ? '1' : '0'}}
      >
        {
          inputEl.current && inputEl.current.value && 
          searchCitys().map((item, index) => <li 
            style={{cursor: "pointer"}}
            key={index}
          > {item.charAt(0).toUpperCase() + item.slice(1)} </li>)
        }
      </ul>
    </div>
  )
}



export default SearchCity