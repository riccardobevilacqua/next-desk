const forecasts = [
  {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1587416400,
        "main": {
          "temp": 11.59,
          "feels_like": 3.83,
          "temp_min": 10.85,
          "temp_max": 11.59,
          "pressure": 1020,
          "sea_level": 1021,
          "grnd_level": 1019,
          "humidity": 46,
          "temp_kf": 0.74
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 8.32,
          "deg": 84
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-20 21:00:00"
      },
      {
        "dt": 1587427200,
        "main": {
          "temp": 9.99,
          "feels_like": 2.34,
          "temp_min": 9.68,
          "temp_max": 9.99,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1020,
          "humidity": 53,
          "temp_kf": 0.31
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 8.28,
          "deg": 84
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-21 00:00:00"
      },
      {
        "dt": 1587438000,
        "main": {
          "temp": 8.63,
          "feels_like": 0.78,
          "temp_min": 8.54,
          "temp_max": 8.63,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1019,
          "humidity": 60,
          "temp_kf": 0.09
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 8.66,
          "deg": 82
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-21 03:00:00"
      },
      {
        "dt": 1587448800,
        "main": {
          "temp": 8.27,
          "feels_like": -0.09,
          "temp_min": 8.26,
          "temp_max": 8.27,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1019,
          "humidity": 64,
          "temp_kf": 0.01
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 9.52,
          "deg": 82
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-21 06:00:00"
      },
      {
        "dt": 1587459600,
        "main": {
          "temp": 11.53,
          "feels_like": 3.18,
          "temp_min": 11.53,
          "temp_max": 11.53,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1020,
          "humidity": 55,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 9.74,
          "deg": 81
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-21 09:00:00"
      },
      {
        "dt": 1587470400,
        "main": {
          "temp": 14.31,
          "feels_like": 6.45,
          "temp_min": 14.31,
          "temp_max": 14.31,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1019,
          "humidity": 52,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 9.5,
          "deg": 79
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-21 12:00:00"
      },
      {
        "dt": 1587481200,
        "main": {
          "temp": 15.23,
          "feels_like": 7.41,
          "temp_min": 15.23,
          "temp_max": 15.23,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1018,
          "humidity": 51,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 9.61,
          "deg": 80
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-21 15:00:00"
      },
      {
        "dt": 1587492000,
        "main": {
          "temp": 13.29,
          "feels_like": 6.8,
          "temp_min": 13.29,
          "temp_max": 13.29,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1018,
          "humidity": 59,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.8,
          "deg": 80
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-21 18:00:00"
      },
      {
        "dt": 1587502800,
        "main": {
          "temp": 11.46,
          "feels_like": 5.04,
          "temp_min": 11.46,
          "temp_max": 11.46,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1020,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.47,
          "deg": 83
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-21 21:00:00"
      },
      {
        "dt": 1587513600,
        "main": {
          "temp": 10.39,
          "feels_like": 3.82,
          "temp_min": 10.39,
          "temp_max": 10.39,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1021,
          "humidity": 65,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.53,
          "deg": 82
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-22 00:00:00"
      },
      {
        "dt": 1587524400,
        "main": {
          "temp": 9.39,
          "feels_like": 2.41,
          "temp_min": 9.39,
          "temp_max": 9.39,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1021,
          "humidity": 65,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.87,
          "deg": 81
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-22 03:00:00"
      },
      {
        "dt": 1587535200,
        "main": {
          "temp": 8.87,
          "feels_like": 1.66,
          "temp_min": 8.87,
          "temp_max": 8.87,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1022,
          "humidity": 70,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 8.34,
          "deg": 80
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-22 06:00:00"
      },
      {
        "dt": 1587546000,
        "main": {
          "temp": 12.41,
          "feels_like": 5.48,
          "temp_min": 12.41,
          "temp_max": 12.41,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1022,
          "humidity": 59,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 8.19,
          "deg": 79
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-22 09:00:00"
      },
      {
        "dt": 1587556800,
        "main": {
          "temp": 15.42,
          "feels_like": 8.91,
          "temp_min": 15.42,
          "temp_max": 15.42,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1022,
          "humidity": 52,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.87,
          "deg": 77
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-22 12:00:00"
      },
      {
        "dt": 1587567600,
        "main": {
          "temp": 16.35,
          "feels_like": 10.06,
          "temp_min": 16.35,
          "temp_max": 16.35,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1020,
          "humidity": 51,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.73,
          "deg": 77
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-22 15:00:00"
      },
      {
        "dt": 1587578400,
        "main": {
          "temp": 14.3,
          "feels_like": 9.18,
          "temp_min": 14.3,
          "temp_max": 14.3,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1020,
          "humidity": 61,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 6.28,
          "deg": 79
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-22 18:00:00"
      },
      {
        "dt": 1587589200,
        "main": {
          "temp": 11.96,
          "feels_like": 7.17,
          "temp_min": 11.96,
          "temp_max": 11.96,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1022,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.67,
          "deg": 80
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-22 21:00:00"
      },
      {
        "dt": 1587600000,
        "main": {
          "temp": 10.3,
          "feels_like": 5.85,
          "temp_min": 10.3,
          "temp_max": 10.3,
          "pressure": 1024,
          "sea_level": 1024,
          "grnd_level": 1022,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.19,
          "deg": 80
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-23 00:00:00"
      },
      {
        "dt": 1587610800,
        "main": {
          "temp": 8.92,
          "feels_like": 4.47,
          "temp_min": 8.92,
          "temp_max": 8.92,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1022,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5,
          "deg": 80
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-23 03:00:00"
      },
      {
        "dt": 1587621600,
        "main": {
          "temp": 9.46,
          "feels_like": 4.89,
          "temp_min": 9.46,
          "temp_max": 9.46,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1022,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.1,
          "deg": 86
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-23 06:00:00"
      },
      {
        "dt": 1587632400,
        "main": {
          "temp": 13.37,
          "feels_like": 9.12,
          "temp_min": 13.37,
          "temp_max": 13.37,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1021,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.9,
          "deg": 84
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-23 09:00:00"
      },
      {
        "dt": 1587643200,
        "main": {
          "temp": 16.35,
          "feels_like": 12.3,
          "temp_min": 16.35,
          "temp_max": 16.35,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1020,
          "humidity": 52,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.62,
          "deg": 74
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-23 12:00:00"
      },
      {
        "dt": 1587654000,
        "main": {
          "temp": 17.16,
          "feels_like": 13.44,
          "temp_min": 17.16,
          "temp_max": 17.16,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1018,
          "humidity": 51,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.3,
          "deg": 64
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-23 15:00:00"
      },
      {
        "dt": 1587664800,
        "main": {
          "temp": 14.7,
          "feels_like": 11.93,
          "temp_min": 14.7,
          "temp_max": 14.7,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1018,
          "humidity": 66,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 23
        },
        "wind": {
          "speed": 3.43,
          "deg": 40
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-23 18:00:00"
      },
      {
        "dt": 1587675600,
        "main": {
          "temp": 11.18,
          "feels_like": 7.89,
          "temp_min": 11.18,
          "temp_max": 11.18,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1018,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 72
        },
        "wind": {
          "speed": 4.05,
          "deg": 47
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-23 21:00:00"
      },
      {
        "dt": 1587686400,
        "main": {
          "temp": 9.98,
          "feels_like": 6.75,
          "temp_min": 9.98,
          "temp_max": 9.98,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1017,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 82
        },
        "wind": {
          "speed": 3.81,
          "deg": 55
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-24 00:00:00"
      },
      {
        "dt": 1587697200,
        "main": {
          "temp": 9.03,
          "feels_like": 5.82,
          "temp_min": 9.03,
          "temp_max": 9.03,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1016,
          "humidity": 83,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.37,
          "deg": 49
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-24 03:00:00"
      },
      {
        "dt": 1587708000,
        "main": {
          "temp": 9.69,
          "feels_like": 6.54,
          "temp_min": 9.69,
          "temp_max": 9.69,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1015,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.15,
          "deg": 38
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-24 06:00:00"
      },
      {
        "dt": 1587718800,
        "main": {
          "temp": 12.92,
          "feels_like": 9.25,
          "temp_min": 12.92,
          "temp_max": 12.92,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1016,
          "humidity": 59,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.66,
          "deg": 33
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-24 09:00:00"
      },
      {
        "dt": 1587729600,
        "main": {
          "temp": 14.97,
          "feels_like": 10.34,
          "temp_min": 14.97,
          "temp_max": 14.97,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1016,
          "humidity": 48,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 4.75,
          "deg": 20
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-24 12:00:00"
      },
      {
        "dt": 1587740400,
        "main": {
          "temp": 14.51,
          "feels_like": 9.54,
          "temp_min": 14.51,
          "temp_max": 14.51,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1015,
          "humidity": 49,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 22
        },
        "wind": {
          "speed": 5.2,
          "deg": 15
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-24 15:00:00"
      },
      {
        "dt": 1587751200,
        "main": {
          "temp": 11.1,
          "feels_like": 6.89,
          "temp_min": 11.1,
          "temp_max": 11.1,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1015,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 4.22,
          "deg": 11
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-24 18:00:00"
      },
      {
        "dt": 1587762000,
        "main": {
          "temp": 7.83,
          "feels_like": 4.21,
          "temp_min": 7.83,
          "temp_max": 7.83,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1015,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 60
        },
        "wind": {
          "speed": 3.3,
          "deg": 10
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-24 21:00:00"
      },
      {
        "dt": 1587772800,
        "main": {
          "temp": 7.1,
          "feels_like": 3.99,
          "temp_min": 7.1,
          "temp_max": 7.1,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1016,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 2.57,
          "deg": 2
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-25 00:00:00"
      },
      {
        "dt": 1587783600,
        "main": {
          "temp": 6.4,
          "feels_like": 3.51,
          "temp_min": 6.4,
          "temp_max": 6.4,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1015,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 74
        },
        "wind": {
          "speed": 2.22,
          "deg": 356
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-25 03:00:00"
      },
      {
        "dt": 1587794400,
        "main": {
          "temp": 8.03,
          "feels_like": 5.51,
          "temp_min": 8.03,
          "temp_max": 8.03,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1016,
          "humidity": 78,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 44
        },
        "wind": {
          "speed": 1.84,
          "deg": 350
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-25 06:00:00"
      },
      {
        "dt": 1587805200,
        "main": {
          "temp": 12.39,
          "feels_like": 9.06,
          "temp_min": 12.39,
          "temp_max": 12.39,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1016,
          "humidity": 56,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.84,
          "deg": 360
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-25 09:00:00"
      },
      {
        "dt": 1587816000,
        "main": {
          "temp": 14.12,
          "feels_like": 10.25,
          "temp_min": 14.12,
          "temp_max": 14.12,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1015,
          "humidity": 50,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 6
        },
        "wind": {
          "speed": 3.6,
          "deg": 1
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-25 12:00:00"
      },
      {
        "dt": 1587826800,
        "main": {
          "temp": 13.69,
          "feels_like": 9.28,
          "temp_min": 13.69,
          "temp_max": 13.69,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1014,
          "humidity": 53,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 14
        },
        "wind": {
          "speed": 4.49,
          "deg": 359
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-25 15:00:00"
      },
      {
        "dt": 1587837600,
        "main": {
          "temp": 10.59,
          "feels_like": 6.77,
          "temp_min": 10.59,
          "temp_max": 10.59,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1013,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 7
        },
        "wind": {
          "speed": 3.77,
          "deg": 11
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-25 18:00:00"
      }
    ],
    "city": {
      "id": 2759794,
      "name": "Amsterdam",
      "coord": {
        "lat": 52.374,
        "lon": 4.8897
      },
      "country": "NL",
      "population": 2122311,
      "timezone": 7200,
      "sunrise": 1587357067,
      "sunset": 1587408423
    }
  },
  {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1587416400,
        "main": {
          "temp": 10.15,
          "feels_like": 4.49,
          "temp_min": 10.15,
          "temp_max": 11.24,
          "pressure": 1022,
          "sea_level": 1021,
          "grnd_level": 1009,
          "humidity": 39,
          "temp_kf": -1.09
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 6
        },
        "wind": {
          "speed": 4.65,
          "deg": 61
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-20 21:00:00"
      },
      {
        "dt": 1587427200,
        "main": {
          "temp": 8.44,
          "feels_like": 2.28,
          "temp_min": 8.44,
          "temp_max": 8.9,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1009,
          "humidity": 47,
          "temp_kf": -0.46
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 3
        },
        "wind": {
          "speed": 5.53,
          "deg": 53
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-21 00:00:00"
      },
      {
        "dt": 1587438000,
        "main": {
          "temp": 7.54,
          "feels_like": 1.92,
          "temp_min": 7.54,
          "temp_max": 7.68,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1009,
          "humidity": 52,
          "temp_kf": -0.14
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.86,
          "deg": 52
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-21 03:00:00"
      },
      {
        "dt": 1587448800,
        "main": {
          "temp": 8.92,
          "feels_like": 3.7,
          "temp_min": 8.92,
          "temp_max": 8.94,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1008,
          "humidity": 48,
          "temp_kf": -0.02
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.32,
          "deg": 61
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-21 06:00:00"
      },
      {
        "dt": 1587459600,
        "main": {
          "temp": 13.04,
          "feels_like": 7.29,
          "temp_min": 13.04,
          "temp_max": 13.04,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1008,
          "humidity": 38,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.19,
          "deg": 77
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-21 09:00:00"
      },
      {
        "dt": 1587470400,
        "main": {
          "temp": 16.02,
          "feels_like": 9.85,
          "temp_min": 16.02,
          "temp_max": 16.02,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1008,
          "humidity": 32,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.84,
          "deg": 85
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-21 12:00:00"
      },
      {
        "dt": 1587481200,
        "main": {
          "temp": 16.11,
          "feels_like": 10.37,
          "temp_min": 16.11,
          "temp_max": 16.11,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1007,
          "humidity": 31,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 5.15,
          "deg": 82
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-21 15:00:00"
      },
      {
        "dt": 1587492000,
        "main": {
          "temp": 13.52,
          "feels_like": 8.48,
          "temp_min": 13.52,
          "temp_max": 13.52,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1008,
          "humidity": 37,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.18,
          "deg": 87
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-21 18:00:00"
      },
      {
        "dt": 1587502800,
        "main": {
          "temp": 11.84,
          "feels_like": 6.69,
          "temp_min": 11.84,
          "temp_max": 11.84,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1009,
          "humidity": 44,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.52,
          "deg": 53
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-21 21:00:00"
      },
      {
        "dt": 1587513600,
        "main": {
          "temp": 9.82,
          "feels_like": 4.94,
          "temp_min": 9.82,
          "temp_max": 9.82,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1010,
          "humidity": 47,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.94,
          "deg": 50
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-22 00:00:00"
      },
      {
        "dt": 1587524400,
        "main": {
          "temp": 8.35,
          "feels_like": 4.99,
          "temp_min": 8.35,
          "temp_max": 8.35,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1010,
          "humidity": 52,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.78,
          "deg": 20
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-22 03:00:00"
      },
      {
        "dt": 1587535200,
        "main": {
          "temp": 9.86,
          "feels_like": 6.18,
          "temp_min": 9.86,
          "temp_max": 9.86,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1010,
          "humidity": 47,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.23,
          "deg": 57
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-22 06:00:00"
      },
      {
        "dt": 1587546000,
        "main": {
          "temp": 14.14,
          "feels_like": 10.04,
          "temp_min": 14.14,
          "temp_max": 14.14,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1010,
          "humidity": 36,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.87,
          "deg": 80
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-22 09:00:00"
      },
      {
        "dt": 1587556800,
        "main": {
          "temp": 17.11,
          "feels_like": 12.61,
          "temp_min": 17.11,
          "temp_max": 17.11,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1009,
          "humidity": 33,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.74,
          "deg": 90
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-22 12:00:00"
      },
      {
        "dt": 1587567600,
        "main": {
          "temp": 17.21,
          "feels_like": 12.45,
          "temp_min": 17.21,
          "temp_max": 17.21,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1008,
          "humidity": 33,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.13,
          "deg": 88
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-22 15:00:00"
      },
      {
        "dt": 1587578400,
        "main": {
          "temp": 14.48,
          "feels_like": 10.43,
          "temp_min": 14.48,
          "temp_max": 14.48,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1008,
          "humidity": 40,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.17,
          "deg": 101
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-22 18:00:00"
      },
      {
        "dt": 1587589200,
        "main": {
          "temp": 12.58,
          "feels_like": 8.16,
          "temp_min": 12.58,
          "temp_max": 12.58,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1009,
          "humidity": 46,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.76,
          "deg": 59
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-22 21:00:00"
      },
      {
        "dt": 1587600000,
        "main": {
          "temp": 10.51,
          "feels_like": 6.05,
          "temp_min": 10.51,
          "temp_max": 10.51,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1010,
          "humidity": 50,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.65,
          "deg": 54
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-23 00:00:00"
      },
      {
        "dt": 1587610800,
        "main": {
          "temp": 9.49,
          "feels_like": 5.74,
          "temp_min": 9.49,
          "temp_max": 9.49,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1010,
          "humidity": 49,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.38,
          "deg": 51
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-23 03:00:00"
      },
      {
        "dt": 1587621600,
        "main": {
          "temp": 10.74,
          "feels_like": 7.65,
          "temp_min": 10.74,
          "temp_max": 10.74,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1010,
          "humidity": 46,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.5,
          "deg": 54
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-23 06:00:00"
      },
      {
        "dt": 1587632400,
        "main": {
          "temp": 14.78,
          "feels_like": 11.42,
          "temp_min": 14.78,
          "temp_max": 14.78,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1010,
          "humidity": 34,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.78,
          "deg": 88
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-23 09:00:00"
      },
      {
        "dt": 1587643200,
        "main": {
          "temp": 18.21,
          "feels_like": 15.05,
          "temp_min": 18.21,
          "temp_max": 18.21,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1009,
          "humidity": 27,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.45,
          "deg": 99
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-23 12:00:00"
      },
      {
        "dt": 1587654000,
        "main": {
          "temp": 18.65,
          "feels_like": 15.91,
          "temp_min": 18.65,
          "temp_max": 18.65,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1007,
          "humidity": 27,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 0.93,
          "deg": 120
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-23 15:00:00"
      },
      {
        "dt": 1587664800,
        "main": {
          "temp": 15.52,
          "feels_like": 12.56,
          "temp_min": 15.52,
          "temp_max": 15.52,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1006,
          "humidity": 38,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.66,
          "deg": 200
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-23 18:00:00"
      },
      {
        "dt": 1587675600,
        "main": {
          "temp": 13.43,
          "feels_like": 10.87,
          "temp_min": 13.43,
          "temp_max": 13.43,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1007,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 0.99,
          "deg": 273
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-23 21:00:00"
      },
      {
        "dt": 1587686400,
        "main": {
          "temp": 12.31,
          "feels_like": 9.7,
          "temp_min": 12.31,
          "temp_max": 12.31,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1006,
          "humidity": 44,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 3
        },
        "wind": {
          "speed": 0.98,
          "deg": 293
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-24 00:00:00"
      },
      {
        "dt": 1587697200,
        "main": {
          "temp": 11.01,
          "feels_like": 8.38,
          "temp_min": 11.01,
          "temp_max": 11.01,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1005,
          "humidity": 49,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 45
        },
        "wind": {
          "speed": 1.07,
          "deg": 243
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-24 03:00:00"
      },
      {
        "dt": 1587708000,
        "main": {
          "temp": 13.21,
          "feels_like": 10.74,
          "temp_min": 13.21,
          "temp_max": 13.21,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1004,
          "humidity": 43,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 34
        },
        "wind": {
          "speed": 0.88,
          "deg": 277
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-24 06:00:00"
      },
      {
        "dt": 1587718800,
        "main": {
          "temp": 17.39,
          "feels_like": 14.09,
          "temp_min": 17.39,
          "temp_max": 17.39,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1003,
          "humidity": 34,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.18,
          "deg": 223
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-24 09:00:00"
      },
      {
        "dt": 1587729600,
        "main": {
          "temp": 19.46,
          "feels_like": 15.32,
          "temp_min": 19.46,
          "temp_max": 19.46,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1002,
          "humidity": 31,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.49,
          "deg": 231
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-24 12:00:00"
      },
      {
        "dt": 1587740400,
        "main": {
          "temp": 18.87,
          "feels_like": 14.75,
          "temp_min": 18.87,
          "temp_max": 18.87,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 999,
          "humidity": 34,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 17
        },
        "wind": {
          "speed": 3.66,
          "deg": 236
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-24 15:00:00"
      },
      {
        "dt": 1587751200,
        "main": {
          "temp": 16.15,
          "feels_like": 12.61,
          "temp_min": 16.15,
          "temp_max": 16.15,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 998,
          "humidity": 40,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 51
        },
        "wind": {
          "speed": 2.8,
          "deg": 236
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-24 18:00:00"
      },
      {
        "dt": 1587762000,
        "main": {
          "temp": 14.5,
          "feels_like": 11.68,
          "temp_min": 14.5,
          "temp_max": 14.5,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 998,
          "humidity": 48,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.05,
          "deg": 222
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-24 21:00:00"
      },
      {
        "dt": 1587772800,
        "main": {
          "temp": 13.11,
          "feels_like": 10.3,
          "temp_min": 13.11,
          "temp_max": 13.11,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 997,
          "humidity": 54,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 95
        },
        "wind": {
          "speed": 2.13,
          "deg": 231
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-25 00:00:00"
      },
      {
        "dt": 1587783600,
        "main": {
          "temp": 12.05,
          "feels_like": 8.99,
          "temp_min": 12.05,
          "temp_max": 12.05,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 996,
          "humidity": 59,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.56,
          "deg": 251
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-25 03:00:00"
      },
      {
        "dt": 1587794400,
        "main": {
          "temp": 13.79,
          "feels_like": 10.79,
          "temp_min": 13.79,
          "temp_max": 13.79,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 996,
          "humidity": 53,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.51,
          "deg": 287
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-25 06:00:00"
      },
      {
        "dt": 1587805200,
        "main": {
          "temp": 17.13,
          "feels_like": 11.86,
          "temp_min": 17.13,
          "temp_max": 17.13,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 995,
          "humidity": 45,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 5.95,
          "deg": 301
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-25 09:00:00"
      },
      {
        "dt": 1587816000,
        "main": {
          "temp": 18.9,
          "feels_like": 13.05,
          "temp_min": 18.9,
          "temp_max": 18.9,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 995,
          "humidity": 39,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 6.65,
          "deg": 305
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-25 12:00:00"
      },
      {
        "dt": 1587826800,
        "main": {
          "temp": 18.21,
          "feels_like": 11.61,
          "temp_min": 18.21,
          "temp_max": 18.21,
          "pressure": 1005,
          "sea_level": 1005,
          "grnd_level": 994,
          "humidity": 32,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 6.86,
          "deg": 312
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-25 15:00:00"
      },
      {
        "dt": 1587837600,
        "main": {
          "temp": 15.23,
          "feels_like": 9.98,
          "temp_min": 15.23,
          "temp_max": 15.23,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 995,
          "humidity": 43,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 67
        },
        "wind": {
          "speed": 5.28,
          "deg": 317
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-25 18:00:00"
      }
    ],
    "city": {
      "id": 3054643,
      "name": "Budapest",
      "coord": {
        "lat": 47.498,
        "lon": 19.0399
      },
      "country": "HU",
      "population": 1696128,
      "timezone": 7200,
      "sunrise": 1587354316,
      "sunset": 1587404382
    }
  },
  {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1587416400,
        "main": {
          "temp": 11,
          "feels_like": 6.95,
          "temp_min": 11,
          "temp_max": 11.77,
          "pressure": 1009,
          "sea_level": 1008,
          "grnd_level": 931,
          "humidity": 68,
          "temp_kf": -0.77
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 55
        },
        "wind": {
          "speed": 4.27,
          "deg": 227
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-20 21:00:00"
      },
      {
        "dt": 1587427200,
        "main": {
          "temp": 8.65,
          "feels_like": 4.57,
          "temp_min": 8.65,
          "temp_max": 8.98,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 930,
          "humidity": 66,
          "temp_kf": -0.33
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 81
        },
        "wind": {
          "speed": 3.6,
          "deg": 221
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-21 00:00:00"
      },
      {
        "dt": 1587438000,
        "main": {
          "temp": 7.88,
          "feels_like": 3.56,
          "temp_min": 7.88,
          "temp_max": 7.98,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 930,
          "humidity": 64,
          "temp_kf": -0.1
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 3.66,
          "deg": 221
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-21 03:00:00"
      },
      {
        "dt": 1587448800,
        "main": {
          "temp": 7.96,
          "feels_like": 4.57,
          "temp_min": 7.96,
          "temp_max": 7.97,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 930,
          "humidity": 62,
          "temp_kf": -0.01
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 2.25,
          "deg": 248
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-21 06:00:00"
      },
      {
        "dt": 1587459600,
        "main": {
          "temp": 10.33,
          "feels_like": 6.44,
          "temp_min": 10.33,
          "temp_max": 10.33,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 930,
          "humidity": 55,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.09,
          "deg": 238
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-21 09:00:00"
      },
      {
        "dt": 1587470400,
        "main": {
          "temp": 12.74,
          "feels_like": 9.62,
          "temp_min": 12.74,
          "temp_max": 12.74,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 930,
          "humidity": 48,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.07,
          "deg": 326
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-21 12:00:00"
      },
      {
        "dt": 1587481200,
        "main": {
          "temp": 15.14,
          "feels_like": 11.55,
          "temp_min": 15.14,
          "temp_max": 15.14,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 930,
          "humidity": 43,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.89,
          "deg": 285
        },
        "rain": {
          "3h": 0.12
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-21 15:00:00"
      },
      {
        "dt": 1587492000,
        "main": {
          "temp": 14.67,
          "feels_like": 10.68,
          "temp_min": 14.67,
          "temp_max": 14.67,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 931,
          "humidity": 47,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.68,
          "deg": 358
        },
        "rain": {
          "3h": 0.39
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-21 18:00:00"
      },
      {
        "dt": 1587502800,
        "main": {
          "temp": 12.26,
          "feels_like": 9.35,
          "temp_min": 12.26,
          "temp_max": 12.26,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 932,
          "humidity": 54,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.07,
          "deg": 322
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-21 21:00:00"
      },
      {
        "dt": 1587513600,
        "main": {
          "temp": 11.27,
          "feels_like": 7.62,
          "temp_min": 11.27,
          "temp_max": 11.27,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 933,
          "humidity": 53,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 96
        },
        "wind": {
          "speed": 2.84,
          "deg": 330
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-22 00:00:00"
      },
      {
        "dt": 1587524400,
        "main": {
          "temp": 10.65,
          "feels_like": 7.92,
          "temp_min": 10.65,
          "temp_max": 10.65,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 934,
          "humidity": 55,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.51,
          "deg": 5
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-22 03:00:00"
      },
      {
        "dt": 1587535200,
        "main": {
          "temp": 10.42,
          "feels_like": 7.93,
          "temp_min": 10.42,
          "temp_max": 10.42,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 936,
          "humidity": 58,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 94
        },
        "wind": {
          "speed": 1.29,
          "deg": 9
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-22 06:00:00"
      },
      {
        "dt": 1587546000,
        "main": {
          "temp": 14.42,
          "feels_like": 12.23,
          "temp_min": 14.42,
          "temp_max": 14.42,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 936,
          "humidity": 45,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 77
        },
        "wind": {
          "speed": 0.89,
          "deg": 1
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-22 09:00:00"
      },
      {
        "dt": 1587556800,
        "main": {
          "temp": 18.41,
          "feels_like": 15.65,
          "temp_min": 18.41,
          "temp_max": 18.41,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 937,
          "humidity": 36,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 77
        },
        "wind": {
          "speed": 1.82,
          "deg": 209
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-22 12:00:00"
      },
      {
        "dt": 1587567600,
        "main": {
          "temp": 19.98,
          "feels_like": 16.46,
          "temp_min": 19.98,
          "temp_max": 19.98,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 937,
          "humidity": 33,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 45
        },
        "wind": {
          "speed": 2.94,
          "deg": 217
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-22 15:00:00"
      },
      {
        "dt": 1587578400,
        "main": {
          "temp": 18.4,
          "feels_like": 15.72,
          "temp_min": 18.4,
          "temp_max": 18.4,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 937,
          "humidity": 40,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 52
        },
        "wind": {
          "speed": 2.09,
          "deg": 201
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-22 18:00:00"
      },
      {
        "dt": 1587589200,
        "main": {
          "temp": 15.89,
          "feels_like": 13.95,
          "temp_min": 15.89,
          "temp_max": 15.89,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 939,
          "humidity": 46,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 69
        },
        "wind": {
          "speed": 0.96,
          "deg": 221
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-22 21:00:00"
      },
      {
        "dt": 1587600000,
        "main": {
          "temp": 14.21,
          "feels_like": 11.95,
          "temp_min": 14.21,
          "temp_max": 14.21,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 939,
          "humidity": 53,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 63
        },
        "wind": {
          "speed": 1.55,
          "deg": 128
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-23 00:00:00"
      },
      {
        "dt": 1587610800,
        "main": {
          "temp": 11.9,
          "feels_like": 9.35,
          "temp_min": 11.9,
          "temp_max": 11.9,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 938,
          "humidity": 64,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 21
        },
        "wind": {
          "speed": 2.13,
          "deg": 123
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-23 03:00:00"
      },
      {
        "dt": 1587621600,
        "main": {
          "temp": 11.21,
          "feels_like": 8.87,
          "temp_min": 11.21,
          "temp_max": 11.21,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 938,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 12
        },
        "wind": {
          "speed": 1.82,
          "deg": 80
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-23 06:00:00"
      },
      {
        "dt": 1587632400,
        "main": {
          "temp": 15.6,
          "feels_like": 13.15,
          "temp_min": 15.6,
          "temp_max": 15.6,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 938,
          "humidity": 52,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 9
        },
        "wind": {
          "speed": 2.12,
          "deg": 94
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-23 09:00:00"
      },
      {
        "dt": 1587643200,
        "main": {
          "temp": 19.74,
          "feels_like": 17.01,
          "temp_min": 19.74,
          "temp_max": 19.74,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 938,
          "humidity": 39,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 20
        },
        "wind": {
          "speed": 2.4,
          "deg": 182
        },
        "rain": {
          "3h": 0.34
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-23 12:00:00"
      },
      {
        "dt": 1587654000,
        "main": {
          "temp": 21.01,
          "feels_like": 17.71,
          "temp_min": 21.01,
          "temp_max": 21.01,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 937,
          "humidity": 35,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.1,
          "deg": 201
        },
        "rain": {
          "3h": 0.19
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-23 15:00:00"
      },
      {
        "dt": 1587664800,
        "main": {
          "temp": 19.91,
          "feels_like": 16.98,
          "temp_min": 19.91,
          "temp_max": 19.91,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 936,
          "humidity": 40,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.85,
          "deg": 224
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-23 18:00:00"
      },
      {
        "dt": 1587675600,
        "main": {
          "temp": 16.68,
          "feels_like": 14.03,
          "temp_min": 16.68,
          "temp_max": 16.68,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 937,
          "humidity": 46,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.18,
          "deg": 262
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-23 21:00:00"
      },
      {
        "dt": 1587686400,
        "main": {
          "temp": 14.67,
          "feels_like": 13.35,
          "temp_min": 14.67,
          "temp_max": 14.67,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 937,
          "humidity": 53,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 0.34,
          "deg": 191
        },
        "rain": {
          "3h": 0.13
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-24 00:00:00"
      },
      {
        "dt": 1587697200,
        "main": {
          "temp": 13.49,
          "feels_like": 11.79,
          "temp_min": 13.49,
          "temp_max": 13.49,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 936,
          "humidity": 58,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 0.93,
          "deg": 107
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-24 03:00:00"
      },
      {
        "dt": 1587708000,
        "main": {
          "temp": 12.48,
          "feels_like": 10.53,
          "temp_min": 12.48,
          "temp_max": 12.48,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 935,
          "humidity": 65,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 96
        },
        "wind": {
          "speed": 1.5,
          "deg": 105
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-24 06:00:00"
      },
      {
        "dt": 1587718800,
        "main": {
          "temp": 16.46,
          "feels_like": 14.22,
          "temp_min": 16.46,
          "temp_max": 16.46,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 936,
          "humidity": 52,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 89
        },
        "wind": {
          "speed": 2.06,
          "deg": 169
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-24 09:00:00"
      },
      {
        "dt": 1587729600,
        "main": {
          "temp": 19.79,
          "feels_like": 16.88,
          "temp_min": 19.79,
          "temp_max": 19.79,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 936,
          "humidity": 39,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 95
        },
        "wind": {
          "speed": 2.68,
          "deg": 190
        },
        "rain": {
          "3h": 0.27
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-24 12:00:00"
      },
      {
        "dt": 1587740400,
        "main": {
          "temp": 21.51,
          "feels_like": 17.89,
          "temp_min": 21.51,
          "temp_max": 21.51,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 934,
          "humidity": 32,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.32,
          "deg": 186
        },
        "rain": {
          "3h": 0.11
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-24 15:00:00"
      },
      {
        "dt": 1587751200,
        "main": {
          "temp": 19.95,
          "feels_like": 17.07,
          "temp_min": 19.95,
          "temp_max": 19.95,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 934,
          "humidity": 40,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.79,
          "deg": 199
        },
        "rain": {
          "3h": 0.41
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-24 18:00:00"
      },
      {
        "dt": 1587762000,
        "main": {
          "temp": 16.41,
          "feels_like": 15.06,
          "temp_min": 16.41,
          "temp_max": 16.41,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 935,
          "humidity": 49,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 0.52,
          "deg": 81
        },
        "rain": {
          "3h": 0.73
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-24 21:00:00"
      },
      {
        "dt": 1587772800,
        "main": {
          "temp": 14.88,
          "feels_like": 12.68,
          "temp_min": 14.88,
          "temp_max": 14.88,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 935,
          "humidity": 57,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 1.96,
          "deg": 96
        },
        "rain": {
          "3h": 1.13
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-25 00:00:00"
      },
      {
        "dt": 1587783600,
        "main": {
          "temp": 12.9,
          "feels_like": 10.36,
          "temp_min": 12.9,
          "temp_max": 12.9,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 933,
          "humidity": 62,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 70
        },
        "wind": {
          "speed": 2.26,
          "deg": 84
        },
        "rain": {
          "3h": 0.2
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2020-04-25 03:00:00"
      },
      {
        "dt": 1587794400,
        "main": {
          "temp": 12.3,
          "feels_like": 9.4,
          "temp_min": 12.3,
          "temp_max": 12.3,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 934,
          "humidity": 64,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 54
        },
        "wind": {
          "speed": 2.74,
          "deg": 66
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-25 06:00:00"
      },
      {
        "dt": 1587805200,
        "main": {
          "temp": 16.48,
          "feels_like": 13.77,
          "temp_min": 16.48,
          "temp_max": 16.48,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 934,
          "humidity": 50,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 42
        },
        "wind": {
          "speed": 2.56,
          "deg": 82
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-25 09:00:00"
      },
      {
        "dt": 1587816000,
        "main": {
          "temp": 20.54,
          "feels_like": 18.54,
          "temp_min": 20.54,
          "temp_max": 20.54,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 934,
          "humidity": 39,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 57
        },
        "wind": {
          "speed": 1.58,
          "deg": 144
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-25 12:00:00"
      },
      {
        "dt": 1587826800,
        "main": {
          "temp": 22.59,
          "feels_like": 19.56,
          "temp_min": 22.59,
          "temp_max": 22.59,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 933,
          "humidity": 30,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 79
        },
        "wind": {
          "speed": 2.48,
          "deg": 168
        },
        "rain": {
          "3h": 0.16
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-25 15:00:00"
      },
      {
        "dt": 1587837600,
        "main": {
          "temp": 20.94,
          "feels_like": 19.38,
          "temp_min": 20.94,
          "temp_max": 20.94,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 932,
          "humidity": 37,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 72
        },
        "wind": {
          "speed": 0.83,
          "deg": 257
        },
        "rain": {
          "3h": 0.33
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2020-04-25 18:00:00"
      }
    ],
    "city": {
      "id": 3117735,
      "name": "Madrid",
      "coord": {
        "lat": 40.4165,
        "lon": -3.7026
      },
      "country": "ES",
      "population": 1000000,
      "timezone": 7200,
      "sunrise": 1587360501,
      "sunset": 1587409112
    }
  }
];

export { forecasts };