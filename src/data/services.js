export const salons = {
    lafame: {
      name: "La Fame",
      address: "Mieczysława Niedziałkowskiego 3, 76-200 Słupsk",
      categories: [
        {
          slug: "uslugi-fryzjerskie",
          label: "Usługi fryzjerskie",
          image:"/images/hairstylist.png",
          hasGenderSplit: true,
          genders: {
            damskie: {
                label: "👩 Damskie",
                subsections: [
                  {
                    title: "✂️ Strzyżenie i koloryzacja",
                    services: [
                      { name: "Strzyżenie", variant: "krótkie", price: "90,00 zł", url: null },
                      { name: "Strzyżenie", variant: "średnie", price: "100,00 zł", url: null },
                      { name: "Strzyżenie", variant: "długie", price: "120,00 zł", url: null },
                      { name: "Strzyżenie", variant: "bardzo długie", price: "140,00 zł", url: null },
                      { name: "Koloryzacja jeden kolor", variant: "krótkie", price: "180,00 zł", url: null },
                      { name: "Koloryzacja jeden kolor", variant: "średnie", price: "250,00 zł", url: null },
                      { name: "Koloryzacja jeden kolor", variant: "długie", price: "300,00 zł", url: null },
                      { name: "Koloryzacja jeden kolor", variant: "bardzo długie", price: "400,00 zł", url: null }
                    ]
                  },
                  {
                    title: "🌈 Koloryzacja zaawansowana",
                    services: [
                      { name: "Koloryzacja ombre/sombre", variant: "krótkie", price: "300,00 zł", url: null },
                      { name: "Koloryzacja ombre/sombre", variant: "średnie", price: "420,00 zł", url: null },
                      { name: "Koloryzacja ombre/sombre", variant: "długie", price: "500,00 zł", url: null },
                      { name: "Koloryzacja ombre/sombre", variant: "bardzo długie", price: "570,00 zł", url: null },
                      { name: "Baleyage", variant: "krótkie", price: "380,00 zł", url: null },
                      { name: "Baleyage", variant: "średnie", price: "450,00 zł", url: null },
                      { name: "Baleyage", variant: "długie", price: "490,00 zł", url: null },
                      { name: "Baleyage", variant: "bardzo długie", price: "550,00 zł", url: null },
                      { name: "Pasemka", variant: "krótkie", price: "250,00 zł", url: null },
                      { name: "Pasemka", variant: "średnie", price: "350,00 zł", url: null },
                      { name: "Pasemka", variant: "długie", price: "450,00 zł", url: null },
                      { name: "Pasemka", variant: "bardzo długie", price: "550,00 zł", url: null }
                    ]
                  },
                  {
                    title: "💆‍♀️ Modelowanie i stylizacja",
                    services: [
                      { name: "Mycie głowy", variant: "krótkie", price: "30,00 zł", url: null },
                      { name: "Mycie głowy", variant: "średnie", price: "50,00 zł", url: null },
                      { name: "Mycie głowy", variant: "długie", price: "60,00 zł", url: null },
                      { name: "Mycie głowy", variant: "bardzo długie", price: "70,00 zł", url: null },
                      { name: "Modelowanie", variant: "krótkie", price: "70,00 zł", url: null },
                      { name: "Modelowanie", variant: "średnie", price: "90,00 zł", url: null },
                      { name: "Modelowanie", variant: "długie", price: "110,00 zł", url: null },
                      { name: "Modelowanie", variant: "bardzo długie", price: "130,00 zł", url: null },
                      { name: "Prostowanie", variant: "średnie", price: "80,00 zł", url: null },
                      { name: "Prostowanie", variant: "długie", price: "100,00 zł", url: null },
                      { name: "Prostowanie", variant: "bardzo długie", price: "120,00 zł", url: null }
                    ]
                  },
                  {
                    title: "🔥 Zabiegi specjalistyczne",
                    services: [
                      { name: "Trwała ondulacja", variant: "krótkie", price: "250,00 zł", url: null },
                      { name: "Trwała ondulacja", variant: "średnie", price: "350,00 zł", url: null },
                      { name: "Trwała ondulacja", variant: "długie", price: "450,00 zł", url: null },
                      { name: "Trwała ondulacja", variant: "bardzo długie", price: "550,00 zł", url: null },
                      { name: "Air-touch", variant: "krótkie", price: "390,00 zł", url: null },
                      { name: "Air-touch", variant: "średnie", price: "490,00 zł", url: null },
                      { name: "Air-touch", variant: "długie", price: "650,00 zł", url: null },
                      { name: "Air-touch", variant: "bardzo długie", price: "790,00 zł", url: null },
                      { name: "Dekoloryzacja", variant: "krótkie", price: "450,00 zł", url: null },
                      { name: "Dekoloryzacja", variant: "średnie", price: "550,00 zł", url: null },
                      { name: "Dekoloryzacja", variant: "długie", price: "650,00 zł", url: null },
                      { name: "Dekoloryzacja", variant: "bardzo długie", price: "750,00 zł", url: null }
                    ]
                  },
                  {
                    title: "👑 Fryzury i warkocze",
                    services: [
                      { name: "Fryzura okolicznościowa", variant: "krótkie", price: "150,00 zł", url: null },
                      { name: "Fryzura okolicznościowa", variant: "średnie", price: "200,00 zł", url: null },
                      { name: "Fryzura okolicznościowa", variant: "długie", price: "250,00 zł", url: null },
                      { name: "Fryzura okolicznościowa", variant: "bardzo długie", price: "300,00 zł", url: null },
                      { name: "Warkoczyki afrykańskie", variant: "średnie", price: "800,00 zł", url: null },
                      { name: "Warkoczyki afrykańskie", variant: "długie", price: "1000,00 zł", url: null },
                      { name: "Warkoczyki afrykańskie", variant: "bardzo długie", price: "1300,00 zł", url: null },
                      { name: "Warkocze bokserskie (naturalne)", variant: null, price: "100,00 zł", url: null },
                      { name: "Warkocze bokserskie (syntetyczne)", variant: null, price: "150,00 zł", url: null },
                      { name: "Pojedynczy warkoczyk (syntetyczny)", variant: null, price: "20,00 zł", url: null }
                    ]
                  }
                ]
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
            slug: "kosmetologia-estetyczna",
            label: "Kosmetologia estetyczna",
            image:"/images/botox.png",
            subsections: [
              {
                title: "PROFHILO®  – Remodeling tkanek i ujędrnianie skóry",
                services: []
              },
              {
                title: "Mezoterapia igłowa i bezigłowa",
                services: []
              },
              {
                title: "Zabiegi bankietowe z efektem natychmiastowym",
                services: []
              },
              {
                title: "Zabiegi liftingujące – odmładzające",
                services: []
              },
              {
                title: "Kwas hialuronowy – wolumetria, wypełniacze",
                services: []
              },
              {
                title: "Zabiegi przeciwtrądzikowe i redukujące przebarwienia",
                services: []
              },
              {
                title: "Zabiegi złuszczające – kwasy medyczne i peelingi chemiczne",
                services: []
              },
              {
                title: "Terapie łączone i zabiegi autorskie",
                services: []
              },
              {
                title: "Zabiegi z użyciem fal radiowych RF",
                services: []
              },
              {
                title: "Zabiegi laserowe – depilacja, naczynka, przebarwienia",
                services: []
              },
              {
                title: "Zabiegi na okolice oczu",
                services: []
              }
            ]
          },          
        {
            slug: "manicure",
            label: "Manicure",
            image:"/images/manicure.png",
            services: [
              {
                name: "💅 Manicure hybrydowy – IZA",
                url: "https://cal.com/lafame/manicure-hybrydowy-iza"
              }
            ]
          },
          {
            slug: "pedicure",
            label: "Pedicure",
            image:"/images/pedicure.png",
            services: []
          },
          {
            slug: "depilacje",
            label: "Depilacje",
            image:"/images/wax.png",
            services: []
          },
          {
            slug: "inne-uslugi-kosmetyczne",
            label: "Inne usługi kosmetyczne",
            image:"/images/inne.png",
            services: []
          },
          {
            slug: "wellness-spa",
            label: "Wellness & SPA",
            image:"/images/spa.png",
            services: [],
          }
      ],
    },
  };
  