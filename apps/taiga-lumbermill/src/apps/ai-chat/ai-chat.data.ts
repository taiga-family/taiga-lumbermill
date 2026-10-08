export type ChatPart =
    | {readonly type: 'code'; readonly language: string; readonly code: string}
    | {readonly type: 'text'; readonly text: string};

export interface ChatMessage {
    readonly id: number;
    readonly role: 'assistant' | 'user';
    readonly parts: readonly ChatPart[];
}

export interface Chat {
    readonly id: number;
    readonly title: string;
    readonly group: string;
    readonly messages: readonly ChatMessage[];
}

export interface Suggestion {
    readonly icon: string;
    readonly label: string;
    readonly prompt: string;
}

export const LINKS: ReadonlyArray<Omit<Suggestion, 'prompt'>> = [
    {icon: '@tui.compass', label: 'Explore'},
    {icon: '@tui.library', label: 'Library'},
    {icon: '@tui.sparkles', label: 'Upgrade'},
];

export const MODELS = ['Claude Opus 5.5', 'Claude Sonnet 5.5', 'Claude Haiku 4.5'];

export const SUGGESTIONS: readonly Suggestion[] = [
    {
        icon: '@tui.file-text',
        label: 'Summary',
        prompt: 'Summarize the key ideas of the Taiga UI design system',
    },
    {
        icon: '@tui.code',
        label: 'Code',
        prompt: 'How do I center a block with CSS?',
    },
    {
        icon: '@tui.palette',
        label: 'Design',
        prompt: 'Suggest a color palette for a calm productivity app',
    },
    {
        icon: '@tui.globe',
        label: 'Research',
        prompt: 'What are the trends in web accessibility this year?',
    },
];

const CENTER_ANSWER: readonly ChatPart[] = [
    {
        type: 'text',
        text: 'The simplest modern way is flex layout. Make the parent a flex container and align its content on both axes:',
    },
    {
        type: 'code',
        language: 'css',
        code: '.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    block-size: 100vh;\n}',
    },
    {
        type: 'text',
        text: 'This centers the content both vertically and horizontally on the page. Would you like me to show the same layout with CSS Grid?',
    },
];

const GRID_ANSWER: readonly ChatPart[] = [
    {
        type: 'text',
        text: 'Sure! With CSS Grid it is even shorter — a single declaration places the item in the middle of the only cell:',
    },
    {
        type: 'code',
        language: 'css',
        code: '.container {\n    display: grid;\n    place-items: center;\n    block-size: 100vh;\n}',
    },
    {
        type: 'text',
        text: 'Use Grid when you also need rows and columns around the centered block, and flex layout for one-dimensional alignment.',
    },
];

export const CHATS: readonly Chat[] = [
    {
        id: 1,
        title: 'Centering a block with CSS',
        group: 'Today',
        messages: [
            {
                id: 1,
                role: 'user',
                parts: [{type: 'text', text: 'How do I center a block with CSS?'}],
            },
            {id: 2, role: 'assistant', parts: CENTER_ANSWER},
            {
                id: 3,
                role: 'user',
                parts: [
                    {
                        type: 'text',
                        text: 'Yes, please! I’d like to see how the same layout works with Grid.',
                    },
                ],
            },
            {id: 4, role: 'assistant', parts: GRID_ANSWER},
        ],
    },
    {
        id: 2,
        title: 'Best travel experience',
        group: 'Today',
        messages: [
            {
                id: 1,
                role: 'user',
                parts: [
                    {type: 'text', text: 'Where should I go for a calm autumn trip?'},
                ],
            },
            {
                id: 2,
                role: 'assistant',
                parts: [
                    {
                        type: 'text',
                        text: 'Consider Lake Baikal in late September: golden taiga forests, clear water and almost no crowds. Spend a few days on the islands for hiking and sunsets.',
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        title: 'Favorite book',
        group: 'Today',
        messages: [
            {
                id: 1,
                role: 'user',
                parts: [{type: 'text', text: 'Recommend a book about software design'}],
            },
            {
                id: 2,
                role: 'assistant',
                parts: [
                    {
                        type: 'text',
                        text: '“Refactoring” by Martin Fowler is a practical guide to improving the design of existing code in small, safe steps.',
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        title: 'If you could teleport anywhere',
        group: 'Yesterday',
        messages: [
            {
                id: 1,
                role: 'user',
                parts: [
                    {
                        type: 'text',
                        text: 'If you could teleport anywhere, where would you go?',
                    },
                ],
            },
            {
                id: 2,
                role: 'assistant',
                parts: [
                    {
                        type: 'text',
                        text: 'Probably to the edge of a fjord in Norway at dawn — and then straight back for coffee.',
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        title: 'Favorite programming language',
        group: 'Previous 7 days',
        messages: [
            {
                id: 1,
                role: 'user',
                parts: [{type: 'text', text: 'Which language should I learn next?'}],
            },
            {
                id: 2,
                role: 'assistant',
                parts: [
                    {
                        type: 'text',
                        text: 'If you write frontend code daily, TypeScript pays off immediately. For something different, Rust will teach you a lot about memory and ownership.',
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        title: 'Weekend plans',
        group: 'Previous 7 days',
        messages: [
            {
                id: 1,
                role: 'user',
                parts: [{type: 'text', text: 'Plan a relaxing weekend at home'}],
            },
            {
                id: 2,
                role: 'assistant',
                parts: [
                    {
                        type: 'text',
                        text: 'Saturday: slow breakfast, a long walk and a board game evening. Sunday: cook something new, read for an hour and prepare a short plan for the week.',
                    },
                ],
            },
        ],
    },
];

const ANSWERS: ReadonlyArray<readonly [RegExp, readonly ChatPart[]]> = [
    [/grid/i, GRID_ANSWER],
    [/css|center|centre|layout/i, CENTER_ANSWER],
    [
        /summar|taiga/i,
        [
            {
                type: 'text',
                text: 'Taiga UI is built around a few ideas: components are thin directives on native elements, configuration goes through dependency injection, and every color comes from a design token, so themes and dark mode work out of the box.',
            },
            {
                type: 'text',
                text: 'The result is a library that feels like the platform itself — accessible, composable and easy to customize.',
            },
        ],
    ],
    [
        /color|palette|design/i,
        [
            {
                type: 'text',
                text: 'For a calm productivity app try muted natural tones: a deep pine green as the accent, warm sand for surfaces and soft charcoal for text.',
            },
            {
                type: 'code',
                language: 'css',
                code: ':root {\n    --app-accent: #2f5d50;\n    --app-surface: #f4efe6;\n    --app-text: #2b2b2b;\n}',
            },
        ],
    ],
];

const FALLBACK: readonly ChatPart[] = [
    {
        type: 'text',
        text: 'This is a demo assistant, so the answers are mocked. Plug in your favorite model API in place of the mock and the interface will stream real responses the same way.',
    },
];

export function mockAnswer(prompt: string): readonly ChatPart[] {
    return ANSWERS.find(([pattern]) => pattern.test(prompt))?.[1] ?? FALLBACK;
}
