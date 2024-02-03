import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n

  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          banner: {
            banner: 'Hello, My fullname is',
            title: 'An creative Architect & Full stack developer',
            link1: 'More information about me',
            logo: "Dilshod's blog"
          },
          main: {
            title: 'What Can I Do',
            card_title1: 'Frontend development',
            card_text1: 'Development amazing user dashboards for your clients. Using modern designs. Development creative templates.',
            card_title2: 'Backend development',
            card_text2: 'Automate your business. Creating database and to improve it. Development custom telegram bot for your company.',
            card_title3: 'Architecture',
            card_text3: 'Design your home in a modern style and create amenities. Development of construction projects.'
          },
          frontend: {
            title: 'My frontend projects',
            text: "Detail information"
          },
          backend: {
            title: 'My backend projects',
            text: "Detail information"
          },
          footer: {
            home: 'Home',
            biography: 'Biography'
          },
          biography: {
            title1: "List",
            skills: 'IT skills',
            link: "How I learnt it (web site)",
            title2: "Programs",
            skills2: "Architectural skills",
            arch: 'Architectural projects',
            cons: 'Construction projects',
            interior: 'Interior design',
            exterior: 'Exterior design',
            autocad: 'Working in AutoCad',
            max: 'Working in 3ds Max',
            corel: 'Working in Corel Draw',
            company1: 'Agency of External Labor Migration',
            company2: 'Premier Engineering Company',
            position1: 'Specialist',
            position2: 'Engineer - architect',
            office: 'Company',
            posrow: 'Position',
            demand: 'Demands',
            responsiblity1: "Providing quality IT services to employees and citizens of the organization. Repair and control the continuous operation of all office equipment belonging to the organization. Installation of separate office equipment ordered by management for exams. Working with software, developing the interpretation of the organization's websites in other languages. As well as performing other types of additional practices.",
            responsiblity2: "Online advertising of the company's products among the company's clients. Development and presentation of company website projects. Development and implementation of proposals for the development of online services. Also drawing the company's drawing projects."
          },
          videos: {
            view: 'Watch video'
          }
        }
      },

      uz: {
        translation: {
          banner: {
            banner: "Salom, Mening to'liq ismim",
            title: 'Arxitektor & Full stack dasturchi',
            link1: "Men haqimda to'liq ma'lumot",
            logo: "Dilshodning blog sahifasiga xush kelibsiz !"
          },
          main: {
            title: 'Men siz uchun nima qila olaman',
            card_title1: 'Frontend dasturlash',
            card_text1: "Mijozlaringiz uchun ajoyib foydalanuvchi boshqaruv panelini ishlab chiqamiz. Zamonaviy dizaynlardan foydalanamiz. Ijodiy shablonlarni ishlab chiqamiz.",
            card_title2: 'Backend dasturlash',
            card_text2: "Biznesingizni avtomatlashtiramiz. Ma'lumotlar bazasini yaratamiz va uni takomillashtiramiz. Kompaniyangiz uchun maxsus telegram botlar ishlab chiqamiz.",
            card_title3: 'Arxitektura',
            card_text3: 'Uyingizni zamonaviy uslubda loyihalashtiramiz va qulayliklar yaratamiz. Qurilish konstruksiya loyihalarini ishlab chiqamiz.'
          },
          frontend: {
            title: 'Frontend loyihalarimiz',
            text: "Batafsil ma'lumot"
          },
          backend: {
            title: 'Backend loyihalarimiz',
            text: "Batafsil ma'lumot"
          },
          footer: {
            home: 'Bosh sahifa',
            biography: 'Biografiya'
          },
          biography: {
            title1: "Ro'yhat",
            skills: 'IT bilimlar',
            link: "Men uni qanday o'rgandim (veb sahifa)",
            title2: "Dasturlar",
            skills2: "Yo'nalishlar",
            arch: 'Arxitektura loyihalari',
            cons: 'Qurilish konstruksiyalari loyihalari',
            interior: 'Interyer dizayn',
            exterior: 'Eksteryer dizayn',
            autocad: 'AutoCad dasturida loyihalash',
            max: '3ds Max dasturida modellashtirish',
            corel: 'Corel draw dasturida ishlash',
            company1: 'Tashqi mehnat migratsiyasi Agentligi',
            company2: 'Premier Enjinering xususiy korxonasi',
            position1: 'Mutaxassis',
            position2: 'Injener - arxitektor',
            office: 'Tashkilot nomi',
            posrow: 'Lavozim',
            demand: 'Majburiyatlar',
            responsiblity1: "Tashkilot xodimlari va fuqarolariga sifatli IT xizmatlarini taqdim etish. Tashkilotga tegishli barcha orgtexnika vositalarini ta'mirlash va uzluksiz ishlashini nazorat qilish. Imtihonlar uchun rahbariyat tomonidan buyurtma qilingan alohida sahifalarni ishlab chiqish. Dasturiy ta'minot bilan ishlash, tashkilot veb-saytlarining boshqa tillardagi talqinini ishlab chiqish. Mavsumiy imtihonlar uchun python va java dasturlash tillarida test platformalarini ishlab chiqish. Shuningdek, boshqa turdagi qo'shimcha amaliyotlarni bajarish.",
            responsiblity2: "Kompaniyaning mijozlari orasida kompaniya mahsulotlarini onlayn reklama qilish. Kompaniya veb-saytlari loyihalarini ishlab chiqish va taqdim etish. Onlayn xizmatlarni rivojlantirish bo'yicha takliflarni ishlab chiqish va amalga oshirish. Shuningdek, kompaniyaning chizma loyihalarini chizish."
          },
          videos: {
            view: "Videoni ko'rish"
          }
        }
      },

      ru: {
        translation: {
          banner: {
            banner: "Здравствуйте, мое полное имя",
            title: 'Архитектор и Full stack разработчик',
            link1: "Полная информация обо мне",
            logo: "Добро пожаловать на страницу блога Дилшода!"
          },
          main: {
            title: 'Что я могу сделать для вас',
            card_title1: 'Фронтенд программирование',
            card_text1: "Мы разработаем отличную пользовательскую панель управления для ваших клиентов. Мы используем современные разработки. Разрабатываем креативные шаблоны.",
            card_title2: 'Бэкэнд программирование',
            card_text2: "Мы автоматизируем ваш бизнес. Создаем базу данных и совершенствуем ее. Разрабатываем специальных телеграм-ботов для вашей компании.",
            card_title3: 'Архитектура',
            card_text3: 'Мы спроектируем ваш дом в современном стиле и создадим уют. Разрабатываем строительные проекты.'
          },
          frontend: {
            title: 'Наши фронтенд-проекты',
            text: "узнать больше"
          },
          backend: {
            title: 'Наши бэкэнд проекты',
            text: "узнать больше"
          },
          footer: {
            home: 'Главная страница',
            biography: 'Биография'
          },
          biography: {
            title1: "Список",
            skills: 'знание IT',
            link: "Как я этому научился (веб-страница)",
            title2: "Программы",
            skills2: "Направления",
            arch: 'Архитектурные проекты',
            cons: 'Строительные проекты',
            interior: 'Дизайн интерьера',
            exterior: 'Внешний дизайн',
            autocad: 'Проектирование в Автокад',
            max: 'Моделирование в 3ds Max',
            corel: 'Работаем в Corel Draw',
            company1: 'Агентство по внешней трудовой миграции',
            company2: 'Premier Engineering - частное предприятие',
            position1: 'Специалист',
            position2: 'Инженер — архитектор',
            office: 'Название организации',
            posrow: 'Позиция',
            demand: 'Обязательства',
            responsiblity1: "Предоставление качественных ИТ-услуг сотрудникам и гражданам организации. Контроль ремонта и бесперебойной работы всей оргтехники, принадлежащей организации. Разработка отдельных страниц по заказу руководства для экзаменов. Работа с программным обеспечением, разработка перевода сайтов организации на другие языки. Разработка платформ тестирования на языках программирования Python и Java для сезонных экзаменов. А также выполнение других видов дополнительных практик.",
            responsiblity2: "Интернет-реклама продукции компании среди клиентов компании. Разработка и презентация проектов веб-сайтов компании. Разработка и реализация предложений по развитию онлайн-сервисов. Также рисование чертежных проектов компании."
          },
          videos: {
            view: 'Смотреть видео'
          }
        }
      },

      kr: {
        translation: {
          banner: {
            banner: "안녕 내 이름은",
            title: '창의적인 아키텍트 & 풀스택 개발자',
            link1: "나에 대한 완전한 정보",
            logo: "Dilshod의 블로그 페이지에 오신 것을 환영합니다!"
          },
          main: {
            title: '내가 당신을 위해 무엇을 할 수',
            card_title1: '프론트엔드 프로그래밍',
            card_text1: "우리는 귀하의 고객을 위한 우수한 맞춤형 제어판을 개발할 것입니다. 우리는 현대적인 개발을 사용합니다. 우리는 창의적인 템플릿을 개발합니다.",
            card_title2: '백엔드 프로그래밍',
            card_text2: "우리는 귀하의 비즈니스를 자동화합니다. 우리는 데이터베이스를 만들고 개선합니다. 우리는 귀하의 회사를 위한 특별한 텔레그램 봇을 개발합니다.",
            card_title3: '건축학',
            card_text3: '귀하의 집을 현대적인 스타일로 디자인하고 편안함을 만들어 드리겠습니다. 우리는 건설 프로젝트를 개발합니다.'
          },
          frontend: {
            title: '우리의 프론트엔드 프로젝트',
            text: "더 자세히 알아보려면"
          },
          backend: {
            title: '백엔드 프로젝트',
            text: "더 자세히 알아보려면"
          },
          footer: {
            home: '홈페이지',
            biography: '전기'
          },
          biography: {
            title1: "목록",
            skills: 'IT 지식',
            link: "내가 그것을 배운 방법 (웹 페이지)",
            title2: "프로그램들",
            skills2: "지도",
            arch: '건축 프로젝트',
            cons: '건설 프로젝트',
            interior: '인테리어 디자인',
            exterior: '외관 디자인',
            autocad: 'AutoCAD에서 디자인하기',
            max: '3ds Max에서 모델링',
            corel: 'Corel Draw에서 일하기',
            company1: '외부 인력 이주 기관',
            company2: 'Premier Engineering - 민간 기업',
            position1: '전문가',
            position2: '엔지니어 - 건축가',
            office: '조직의 이름',
            posrow: '직위',
            demand: '부채',
            responsiblity1: "조직의 직원과 시민에게 고품질 IT 서비스를 제공합니다. 조직에 속한 모든 사무 장비의 수리 및 중단 없는 작동을 모니터링합니다. 검사 실시를 위해 경영진이 지시한 별도의 사무용품 설치. 소프트웨어 작업, 조직 웹사이트의 다른 언어 번역 개발. 뿐만 아니라 다른 유형의 추가 연습도 수행합니다.",
            responsiblity2: "회사 고객에게 회사 제품을 온라인으로 광고하는 것입니다. 회사 웹사이트 프로젝트 개발 및 프리젠테이션. 온라인 서비스 개발을 위한 제안 개발 및 구현. 또한 회사 그림 프로젝트를 그리는 것입니다."
          },
          videos: {
            view: '비디오 보기'
          }
        }
      }
    }
  });   
// i18n.changeLanguage('uz');
export default i18n;
