import {
    case1,
    case2,
    case3,
    case4,
    case5,
    case6,
    client1,
    client2,
    client3,
    curveLeftTop,
    curveRightBottom,
    fox,
    heroDecor,
    heroStar,
    hero1,
    hero2,
    phone,
    round,
    show1,
    show2,
    show3,
    square,
    star,
    usDecor,
    us
} from '../assets';

export const navLinks = [{
        id: 'about',
        title: 'О нас'
    },

    {
        id: 'price',
        title: 'Цены'
    },

    {
        id: 'catalog',
        title: 'Каталог'
    },

    {
        id: 'feedback',
        title: 'Отзывы'
    },

    {
        id: 'questions',
        title: 'Вопросы'
    },

    {
        id: 'contacts',
        title: 'Контакты'
    },
];

export const features = [{
        id: 'feature-1',
        icon: square,
        title: 'Профессиональные',
        content: 'аниматоры'
    },

    {
        id: 'feature-2',
        icon: star,
        title: '120 КВ. М',
        content: 'пространства'
    },

    {
        id: 'feature-3',
        icon: round,
        title: '15 лет',
        content: 'в сфере детских праздников'
    }
];

export const packages = [{
        id: 'party-bom',
        title: 'PARTY BOM',
        subtitle: 'Базовый пакет',
        features: [{
                id: 1,
                text: 'Время аренды студии - 3,5 часа'
            },
            {
                id: 2,
                text: 'Оформление фотозоны и Кенди тележки'
            },
            {
                id: 3,
                text: 'Анимационная программа'
            },
            {
                id: 4,
                text: 'Шоу или мастер-класс на выбор'
            },
            {
                id: 5,
                text: 'Фольгированная дискотека'
            },
            {
                id: 6,
                text: 'Помощь администратора напротяжении всего мероприятия'
            },
        ],
        price: {
            weekdays: '14500р',
            weekends: '15900р',
        }
    },

    {
        id: 'show-time',
        title: 'SHOW TIME',
        subtitle: 'Базовый пакет',
        features: [{
                id: 1,
                text: 'Время аренды студии - 3 часа'
            },
            {
                id: 2,
                text: 'Оформление фотозоны и Кенди тележки'
            },
            {
                id: 3,
                text: 'Анимационная программа 1 час'
            },
            {
                id: 4,
                text: 'Шоу или мастер-класс на выбор'
            },
            {
                id: 5,
                text: 'Помощь администратора на протяжении всего мероприятия'
            },
        ],
        price: {
            weekdays: '11800р',
            weekends: '13200р',
        }
    },

    {
        id: 'sweet-baby',
        title: 'SWEET BABY',
        subtitle: 'Базовый пакет',
        features: [{
                id: 1,
                text: 'Время аренды студии - 3,5 часа'
            },
            {
                id: 2,
                text: 'Оформление фотозоны и Кенди тележки'
            },
            {
                id: 3,
                text: 'Анимационная программа 1 час'
            },
            {
                id: 4,
                text: 'Фольгированная дискотека'
            },
            {
                id: 5,
                text: 'Помощь администратора на протяжении всего мероприятия'
            },
        ],
        price: {
            weekdays: '10500р',
            weekends: '11900р',
        }
    },
];

export const shows = [{
        id: 'show-1',
        icon: show1,
        title: 'Научное шоу',
        content: {
            text: '13 ярких научных экспериментов',
            duration: '1 час'
        }
    },

    {
        id: 'show-2',
        icon: show2,
        title: 'Шоу мыльных пузырей',
        content: {
            text: 'Яркое шоу для детей всех возрастов',
            duration: '30 мин'
        }
    },

    {
        id: 'show-3',
        icon: show3,
        title: 'Натуральный пломбир',
        content: {
            text: 'Мастер-класс с элементами шоу',
            duration: '45 мин'
        }
    },
];

export const feedback = [{
        id: 'client-1',
        icon: client1,
        name: 'Екатерина',
        content: 'Мы в восторге от вашей студии начиная от онлайн общения и заканчивая праздникомдевушка администратор просто чудо аниматоры бомбавсе на высшем уровне ,процветания вам'
    },

    {
        id: 'client-2',
        icon: client2,
        name: 'Камилла',
        content: 'Добрый день!) Ещё раз хочется поблагодарить за потрясающий хэллоуин Мы в полном восторге Отдельное спасибо за мастер классы для мам и детей Спасибо большое за праздник!'
    },

    {
        id: 'client-3',
        icon: client3,
        name: 'Евгения',
        content: 'Добрый вечер!Хотим вас по благодарить, за оформление вашего замечательного пространства, для нашего праздника!Всегда хорошо, уютно, красиво ,чисто!Отзывчивые '
    },

    {
        id: 'client-4',
        icon: client1,
        name: 'Екатерина',
        content: 'Мы в восторге от вашей студии начиная от онлайн общения и заканчивая праздникомдевушка администратор просто чудо аниматоры бомбавсе на высшем уровне ,процветания вам'
    },
];

export const questions = [{
        id: 'question-1',
        question: 'Сколько человек вмещает в себя пространстово?',
        answer: 'В нашем пространстве будут комфортно себя чувствовать 30 человек. Площадь помещения составляет 120 кв.м'
    },

    {
        id: 'question-2',
        question: 'Есть ли у вас кухня с холодильником?',
        answer: 'Да'
    },

    {
        id: 'question-3',
        question: 'Сколько стоит аренда посуды?',
        answer: 'Стоит своих денег'
    },

    {
        id: 'question-4',
        question: 'С какими аниматорами вы сотрудничаете?',
        answer: 'С теми самыми'
    },
]