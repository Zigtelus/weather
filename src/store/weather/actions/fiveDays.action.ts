import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "src/hooks/redux";
import { FiveDays } from "src/types/weather/fiveDays";
import { createAPI, dataUser, KEY } from "../createApi";
import { initialStateFD } from "../slices/fiveDays.slice";



const api = createAPI();



const tttt = {
  "cod": "",
  "message": 0,
  "cnt": 0,
  "list": [
    {
        "dt": 0,
        "main": {
            "temp": 0,
            "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "pressure": 0,
            "sea_level": 0,
            "grnd_level": 0,
            "humidity": 0,
            "temp_kf": 0,
        },
        "weather": [
            {
                "id": 0,
                "main": "",
                "description": "",
                "icon": ""
            }
        ],
        "clouds": {
            "all": 0,
        },
        "wind": {
            "speed": 0,
            "deg": 0,
            "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
            "pod": ""
        },
        "dt_txt": ""
    },
    {
        "dt": 0,
        "main": {
          "temp": 0,
          "feels_like": 0,
          "temp_min": 0,
          "temp_max": 0,
          "pressure": 0,
          "sea_level": 0,
          "grnd_level": 0,
          "humidity": 0,
          "temp_kf": 0,
        },
        "weather": [
          {
            "id": 0,
            "main": "",
            "description": "",
            "icon": ""
          }
        ],
        "clouds": {
          "all": 0,
        },
        "wind": {
          "speed": 0,
          "deg": 0,
          "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
          "pod": ""
        },
        "dt_txt": ""
    },
    {
        "dt": 0,
        "main": {
          "temp": 0,
          "feels_like": 0,
          "temp_min": 0,
          "temp_max": 0,
          "pressure": 0,
          "sea_level": 0,
          "grnd_level": 0,
          "humidity": 0,
          "temp_kf": 0,
        },
        "weather": [
          {
            "id": 0,
            "main": "",
            "description": "",
            "icon": ""
          }
        ],
        "clouds": {
          "all": 0,
        },
        "wind": {
          "speed": 0,
          "deg": 0,
          "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
          "pod": ""
        },
        "dt_txt": ""
    },
    {
        "dt": 0,
        "main": {
          "temp": 0,
          "feels_like": 0,
          "temp_min": 0,
          "temp_max": 0,
          "pressure": 0,
          "sea_level": 0,
          "grnd_level": 0,
          "humidity": 0,
          "temp_kf": 0,
        },
        "weather": [
          {
            "id": 0,
            "main": "",
            "description": "",
            "icon": ""
          }
        ],
        "clouds": {
          "all": 0,
        },
        "wind": {
          "speed": 0,
          "deg": 0,
          "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
          "pod": ""
        },
        "dt_txt": ""
    },
    {
        "dt": 0,
        "main": {
          "temp": 0,
          "feels_like": 0,
          "temp_min": 0,
          "temp_max": 0,
          "pressure": 0,
          "sea_level": 0,
          "grnd_level": 0,
          "humidity": 0,
          "temp_kf": 0,
        },
        "weather": [
          {
            "id": 0,
            "main": "",
            "description": "",
            "icon": ""
          }
        ],
        "clouds": {
          "all": 0,
        },
        "wind": {
          "speed": 0,
          "deg": 0,
          "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
          "pod": ""
        },
        "dt_txt": ""
    },
    {
        "dt": 0,
        "main": {
          "temp": 0,
          "feels_like": 0,
          "temp_min": 0,
          "temp_max": 0,
          "pressure": 0,
          "sea_level": 0,
          "grnd_level": 0,
          "humidity": 0,
          "temp_kf": 0,
        },
        "weather": [
          {
            "id": 0,
            "main": "",
            "description": "",
            "icon": ""
          }
        ],
        "clouds": {
            "all": 0,
        },
        "wind": {
            "speed": 0,
            "deg": 0,
            "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
            "pod": ""
        },
        "dt_txt": ""
    },
    {
        "dt": 0,
        "main": {
            "temp": 0,
            "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "pressure": 0,
            "sea_level": 0,
            "grnd_level": 0,
            "humidity": 0,
            "temp_kf": 0,
        },
        "weather": [
            {
                "id": 0,
                "main": "",
                "description": "",
                "icon": ""
            }
        ],
        "clouds": {
            "all": 0,
        },
        "wind": {
            "speed": 0,
            "deg": 0,
            "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
            "pod": ""
        },
        "dt_txt": ""
    },
    {
        "dt": 0,
        "main": {
            "temp": 0,
            "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "pressure": 0,
            "sea_level": 0,
            "grnd_level": 0,
            "humidity": 0,
            "temp_kf": 0,
        },
        "weather": [
            {
                "id": 0,
                "main": "",
                "description": "",
                "icon": ""
            }
        ],
        "clouds": {
            "all": 0,
        },
        "wind": {
            "speed": 0,
            "deg": 0,
            "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
            "pod": ""
        },
        "dt_txt": ""
    },
    {
        "dt": 0,
        "main": {
            "temp": 0,
            "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "pressure": 0,
            "sea_level": 0,
            "grnd_level": 0,
            "humidity": 0,
            "temp_kf": 0,
        },
        "weather": [
            {
                "id": 0,
                "main": "",
                "description": "",
                "icon": ""
            }
        ],
        "clouds": {
            "all": 0,
        },
        "wind": {
            "speed": 0,
            "deg": 0,
            "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
            "pod": ""
        },
        "dt_txt": ""
    },
    {
        "dt": 0,
        "main": {
            "temp": 0,
            "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "pressure": 0,
            "sea_level": 0,
            "grnd_level": 0,
            "humidity": 0,
            "temp_kf": 0,
        },
        "weather": [
            {
                "id": 0,
                "main": "",
                "description": "",
                "icon": ""
            }
        ],
        "clouds": {
            "all": 0,
        },
        "wind": {
            "speed": 0,
            "deg": 0,
            "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
            "pod": ""
        },
        "dt_txt": ""
    },
    {
        "dt": 0,
        "main": {
            "temp": 0,
            "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "pressure": 0,
            "sea_level": 0,
            "grnd_level": 0,
            "humidity": 0,
            "temp_kf": 0,
        },
        "weather": [
            {
                "id": 0,
                "main": "",
                "description": "",
                "icon": ""
            }
        ],
        "clouds": {
            "all": 0,
        },
        "wind": {
            "speed": 0,
            "deg": 0,
            "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
            "pod": ""
        },
        "dt_txt": ""
    },
    {
        "dt": 0,
        "main": {
            "temp": 0,
            "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "pressure": 0,
            "sea_level": 0,
            "grnd_level": 0,
            "humidity": 0,
            "temp_kf": 0,
        },
        "weather": [
            {
                "id": 0,
                "main": "",
                "description": "",
                "icon": ""
            }
        ],
        "clouds": {
            "all": 0,
        },
        "wind": {
            "speed": 0,
            "deg": 0,
            "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
            "pod": ""
        },
        "dt_txt": ""
    },
    {
        "dt": 0,
        "main": {
            "temp": 0,
            "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "pressure": 0,
            "sea_level": 0,
            "grnd_level": 0,
            "humidity": 0,
            "temp_kf": 0,
        },
        "weather": [
            {
                "id": 0,
                "main": "",
                "description": "",
                "icon": ""
            }
        ],
        "clouds": {
            "all": 0,
        },
        "wind": {
            "speed": 0,
            "deg": 0,
            "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
            "pod": ""
        },
        "dt_txt": ""
    },
    {
        "dt": 0,
        "main": {
            "temp": 0,
            "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "pressure": 0,
            "sea_level": 0,
            "grnd_level": 0,
            "humidity": 0,
            "temp_kf": 0,
        },
        "weather": [
            {
                "id": 0,
                "main": "",
                "description": "",
                "icon": ""
            }
        ],
        "clouds": {
            "all": 0,
        },
        "wind": {
            "speed": 0,
            "deg": 0,
            "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
            "pod": ""
        },
        "dt_txt": ""
    },
    {
        "dt": 0,
        "main": {
            "temp": 0,
            "feels_like": 0,
            "temp_min": 0,
            "temp_max": 0,
            "pressure": 0,
            "sea_level": 0,
            "grnd_level": 0,
            "humidity": 0,
            "temp_kf": 0,
        },
        "weather": [
            {
                "id": 0,
                "main": "",
                "description": "",
                "icon": ""
            }
        ],
        "clouds": {
            "all": 0,
        },
        "wind": {
            "speed": 0,
            "deg": 0,
            "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
            "pod": ""
        },
        "dt_txt": ""
    },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
      {
          "dt": 0,
          "main": {
              "temp": 0,
              "feels_like": 0,
              "temp_min": 0,
              "temp_max": 0,
              "pressure": 0,
              "sea_level": 0,
              "grnd_level": 0,
              "humidity": 0,
              "temp_kf": 0,
          },
          "weather": [
              {
                  "id": 0,
                  "main": "",
                  "description": "",
                  "icon": ""
              }
          ],
          "clouds": {
              "all": 0,
          },
          "wind": {
              "speed": 0,
              "deg": 0,
              "gust": 0,
          },
          "visibility": 0,
          "pop": 0,
          "sys": {
              "pod": ""
          },
          "dt_txt": ""
      },
  ],
  "city": {
      "id": 524901,
      "name": "Москва",
      "coord": {
          "lat": 55.7522,
          "lon": 37.6156
      },
      "country": "ru",
      "population": 1000000,
      "timezone": 10800,
      "sunrise": 1670045871,
      "sunset": 1670072461
  }
}

export const fiveDaysAction = createAsyncThunk(
  'weather/fiveDays',
  async (_, thunkAPI) => {

    // https://api.openweathermap.org/data/2.5/weather?lat=55.9205309&lon=37.662618&units=imperial&appid=94d073c2667e3ab1d500b71c487bdf7c&lang=ru
    // https://api.openweathermap.org/data/2.5/weather?lat=43.2659375&lon=76.9580137&units=imperial&appid=94d073c2667e3ab1d500b71c487bdf7c&lang=ru
    // https://api.openweathermap.org/data/2.5/forecast?q=&appid=94d073c2667e3ab1d500b71c487bdf7c&lang=ru

    // realy
    let secondPartURL = `/data/2.5/forecast?lat=${dataUser.lat}&lon=${dataUser.lon}&appid=${KEY}&lang=ru`;

    // ru
    // let secondPartURL = `/data/2.5/forecast?lat=55.7522200&lon=37.6155600&appid=${KEY}&lang=ru`;
    
    dataUser.main && (secondPartURL = `/data/2.5/forecast?q=${dataUser.main.trim()}&appid=${KEY}&lang=ru`);

    // let secondPartURL = `/data/2.5/forecast?lat=43.2659375&lon=76.9580137&appid=${KEY}&lang=ru`;
    
    // console.log(secondPartURL)

    try {
      const res = await api.get<string>(`${secondPartURL}`);
      return res.data;
    } catch (error) {
      // const qqq:FiveDays = useAppSelector(state=> state.fiveDaysWeatherReducer.main)
      // return qqq;
      return {...tttt}
      // return tttt
      console.log('error ', error);
    };
      
    
  }
);