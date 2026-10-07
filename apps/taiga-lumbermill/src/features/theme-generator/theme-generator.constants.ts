interface ThemeGroup {
    readonly title: string;
    readonly colors: ThemeData[];
}

interface ThemeData {
    readonly name: string;
    readonly initialValue: string;
    readonly variable: string;
}

export const theme: ThemeGroup[] = [
    {
        title: 'Backgrounds',
        colors: [
            {
                name: 'background-base',
                initialValue: '#fff',
                variable: '--tui-background-base',
            },
            {
                name: 'background-base-alt',
                initialValue: '#f6f6f6',
                variable: '--tui-background-base-alt',
            },
            {
                name: 'background-neutral-1',
                initialValue: 'rgba(0, 0, 0, 0.04)',
                variable: '--tui-background-neutral-1',
            },
            {
                name: 'background-neutral-1-hover',
                initialValue: 'rgba(0, 0, 0, 0.08)',
                variable: '--tui-background-neutral-1-hover',
            },
            {
                name: 'background-neutral-1-pressed',
                initialValue: 'rgba(0, 0, 0, 0.12)',
                variable: '--tui-background-neutral-1-pressed',
            },
            {
                name: 'background-neutral-2',
                initialValue: 'rgba(0, 0, 0, 0.08)',
                variable: '--tui-background-neutral-2',
            },
            {
                name: 'background-neutral-2-hover',
                initialValue: 'rgba(0, 0, 0, 0.1)',
                variable: '--tui-background-neutral-2-hover',
            },
            {
                name: 'background-neutral-2-pressed',
                initialValue: 'rgba(0, 0, 0, 0.14)',
                variable: '--tui-background-neutral-2-pressed',
            },
            {
                name: 'background-primary',
                initialValue: '#526ed3',
                variable: '--tui-background-accent-1',
            },
            {
                name: 'background-primary-hover',
                initialValue: '#6c86e2',
                variable: '--tui-background-accent-1-hover',
            },
            {
                name: 'background-primary-pressed',
                initialValue: '#314692',
                variable: '--tui-background-accent-1-pressed',
            },
            {
                name: 'background-accent',
                initialValue: '#ff7043',
                variable: '--tui-background-accent-2',
            },
            {
                name: 'background-accent-hover',
                initialValue: '#ff9a94',
                variable: '--tui-background-accent-2-hover',
            },
            {
                name: 'background-accent-pressed',
                initialValue: '#e7716a',
                variable: '--tui-background-accent-2-pressed',
            },
            {
                name: 'background-accent-opposite',
                initialValue: '#000',
                variable: '--tui-background-accent-opposite',
            },
            {
                name: 'background-accent-opposite-hover',
                initialValue: '#333',
                variable: '--tui-background-accent-opposite-hover',
            },
            {
                name: 'background-accent-opposite-pressed',
                initialValue: '#808080',
                variable: '--tui-background-accent-opposite-pressed',
            },
            {
                name: 'background-elevation-1',
                initialValue: '#fff',
                variable: '--tui-background-elevation-1',
            },
            {
                name: 'background-elevation-2',
                initialValue: '#fff',
                variable: '--tui-background-elevation-2',
            },
            {
                name: 'service-autofill-background',
                initialValue: '#fff5c0',
                variable: '--tui-service-autofill-background',
            },
        ],
    },
    {
        title: 'Others',
        colors: [
            {
                name: 'border-normal',
                initialValue: 'rgba(0, 0, 0, 0.1)',
                variable: '--tui-border-normal',
            },
            {
                name: 'border-hover',
                initialValue: 'rgba(0, 0, 0, 0.16)',
                variable: '--tui-border-hover',
            },
            {
                name: 'border-focus',
                initialValue: 'rgba(51, 51, 51, 0.64)',
                variable: '--tui-border-focus',
            },
        ],
    },
    {
        title: 'Statuses',
        colors: [
            {
                name: 'status-negative',
                initialValue: 'rgba(244, 87, 37, 1)',
                variable: '--tui-status-negative',
            },
            {
                name: 'status-negative-pale',
                initialValue: 'rgba(244, 87, 37, 0.12)',
                variable: '--tui-status-negative-pale',
            },
            {
                name: 'status-negative-pale-hover',
                initialValue: 'rgba(244, 87, 37, 0.24)',
                variable: '--tui-status-negative-pale-hover',
            },
            {
                name: 'status-positive',
                initialValue: 'rgba(74, 201, 155, 1)',
                variable: '--tui-status-positive',
            },
            {
                name: 'status-positive-pale',
                initialValue: 'rgba(74, 201, 155, 0.12)',
                variable: '--tui-status-positive-pale',
            },
            {
                name: 'status-positive-pale-hover',
                initialValue: 'rgba(74, 201, 155, 0.24)',
                variable: '--tui-status-positive-pale-hover',
            },
            {
                name: 'status-warning',
                initialValue: 'rgba(255, 199, 0, 1)',
                variable: '--tui-status-warning',
            },
            {
                name: 'status-warning-pale',
                initialValue: 'rgba(255, 199, 0, 0.12)',
                variable: '--tui-status-warning-pale',
            },
            {
                name: 'status-warning-pale-hover',
                initialValue: 'rgba(255, 199, 0, 0.24)',
                variable: '--tui-status-warning-pale-hover',
            },
            {
                name: 'status-info',
                initialValue: 'rgba(112, 182, 246, 1)',
                variable: '--tui-status-info',
            },
            {
                name: 'status-info-pale',
                initialValue: 'rgba(112, 182, 246, 0.12)',
                variable: '--tui-status-info-pale',
            },
            {
                name: 'status-info-pale-hover',
                initialValue: 'rgba(112, 182, 246, 0.24)',
                variable: '--tui-status-info-pale-hover',
            },
            {
                name: 'status-neutral',
                initialValue: 'rgb(121, 129, 140)',
                variable: '--tui-status-neutral',
            },
        ],
    },
    {
        title: 'Text',
        colors: [
            {
                name: 'text-primary',
                initialValue: 'rgba(27, 31, 59, 1)',
                variable: '--tui-text-primary',
            },
            {
                name: 'text-secondary',
                initialValue: 'rgba(27, 31, 59, 0.65)',
                variable: '--tui-text-secondary',
            },
            {
                name: 'text-tertiary',
                initialValue: 'rgba(27, 31, 59, 0.4)',
                variable: '--tui-text-tertiary',
            },
            {name: 'text-action', initialValue: '#526ed3', variable: '--tui-text-action'},
            {
                name: 'text-action-hover',
                initialValue: '#6c86e2',
                variable: '--tui-text-action-hover',
            },
            {
                name: 'text-positive',
                initialValue: '#3aa981',
                variable: '--tui-text-positive',
            },
            {
                name: 'text-positive-hover',
                initialValue: '#7ac5aa',
                variable: '--tui-text-positive-hover',
            },
            {
                name: 'text-negative',
                initialValue: '#dd4c1e',
                variable: '--tui-text-negative',
            },
            {
                name: 'text-negative-hover',
                initialValue: '#e38163',
                variable: '--tui-text-negative-hover',
            },
        ],
    },
];

// Swatches from the Taiga UI 4 TUI_DEFAULT_INPUT_COLORS palette, shown by the native color picker via <datalist>
export const PALETTE = [
    '#909090',
    '#666666',
    '#333333',
    '#1771e6',
    '#1464cc',
    '#0953b3',
    '#f5f5f6',
    '#e7e8ea',
    '#cbcfd3',
    '#959ba4',
    '#79818c',
    '#616871',
    '#39b54a',
    '#2ca53a',
    '#168a21',
    '#ecf1f7',
    '#e4ebf3',
    '#dde4ed',
    '#e01f19',
    '#d3120e',
    '#c40b08',
    '#ffdd2c',
    '#fcc521',
    '#fab618',
] as const;

const toHex2 = (value: number): string =>
    Math.round(Math.min(Math.max(value, 0), 255))
        .toString(16)
        .padStart(2, '0');

/**
 * Taiga UI 5 input-color accepts only hex, so every theme value
 * (#rgb, #rrggbb, rgb(), rgba() — including ones from old share links) is normalized to #rrggbbaa
 */
export function toHexa(value: string): string {
    if (value.startsWith('#')) {
        const hex = value.slice(1).toLowerCase();
        const full =
            hex.length <= 4
                ? hex
                      .split('')
                      .map((char) => char + char)
                      .join('')
                : hex;

        return `#${full.length === 6 ? `${full}ff` : full}`;
    }

    const match = /^rgba?\(([^)]+)\)$/.exec(value.trim());

    if (!match) {
        return value;
    }

    const [r = 0, g = 0, b = 0, a = 1] = match[1].split(',').map(Number);

    return `#${toHex2(r)}${toHex2(g)}${toHex2(b)}${toHex2(a * 255)}`;
}
