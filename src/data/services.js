export const salons = {
    lafame: {
      name: "La Fame",
      address: "Mieczysława Niedziałkowskiego 3, 76-200 Słupsk",
      categories: [
        {
          slug: "uslugi-fryzjerskie",
          label: "💇‍♀️ Usługi fryzjerskie",
          hasGenderSplit: true,
          genders: {
            damskie: {
              label: "👩 Damskie",
              services: [
                {
                  name: "✂️ Strzyżenie damskie – IZA",
                  url: "https://cal.com/lafame/strzyzenie-damskie",
                },
                {
                  name: "🎨 Koloryzacja – IZA",
                  url: "#",
                },
              ],
            },
            meskie: {
                label: "👨 Męskie",
                services: [
                  { name: "Strzyżenie męskie", price: "50,00 zł", url: null },
                  { name: "Strzyżenie męskie włosy krótkie", price: "80,00 zł", url: null },
                  { name: "Strzyżenie męskie włosy średnie", price: "90,00 zł", url: null },
                  { name: "Strzyżenie brody", price: "30,00 zł", url: null },
                  { name: "Strzyżenie wąsa", price: "30,00 zł", url: null },
                  { name: "Mycie", price: "20,00 zł", url: null },
                  { name: "Strzyżenie brody, wąsów i głowy – komplet + mycie", price: "120,00 zł", url: null },
                  { name: "Cover siwych włosów", price: "100,00 zł", url: null },
                  { name: "Usuwanie włosów z uszu", price: "20,00 zł", url: null },
                  { name: "Usuwanie włosów z nosa", price: "20,00 zł", url: null },
                  { name: "Trwała ondulacja włosy krótkie", price: "250,00 zł", url: null }
                ]
              }              
          },
        },
        {
          slug: "uslugi-kosmetyczne",
          label: "💅 Usługi kosmetyczne",
          services: [
            {
              name: "💅 Manicure hybrydowy – IZA",
              url: "https://cal.com/lafame/manicure-hybrydowy-iza",
            },
          ],
        },
        {
          slug: "kosmetologia-estetyczna",
          label: "💆‍♀️ Kosmetologia estetyczna",
          services: [],
        },
        {
          slug: "wellness-spa",
          label: "🧖‍♀️ Wellness & SPA",
          services: [],
        },
      ],
    },
  };
  