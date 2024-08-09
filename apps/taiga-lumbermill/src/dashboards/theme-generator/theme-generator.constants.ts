interface ThemeData {
    readonly name: string;
    readonly base_color: string;
    readonly property: string;
}

export const data: ThemeData[] = [
    {name: 'background-base', base_color: '#fff', property: '--tui-background-base'},
    {
        name: 'background-base-alt',
        base_color: '#f6f6f6',
        property: '--tui-background-base-alt',
    },
    {
        name: 'background-neutral-1',
        base_color: 'rgba(0, 0, 0, 0.04)',
        property: '--tui-background-neutral-1',
    },
    {
        name: 'background-neutral-1-hover',
        base_color: 'rgba(0, 0, 0, 0.08)',
        property: '--tui-background-neutral-1-hover',
    },
    {
        name: 'background-neutral-1-pressed',
        base_color: 'rgba(0, 0, 0, 0.12)',
        property: '--tui-background-neutral-1-pressed',
    },
    {
        name: 'background-neutral-2',
        base_color: 'rgba(0, 0, 0, 0.08)',
        property: '--tui-background-neutral-2',
    },
    {
        name: 'background-neutral-2-hover',
        base_color: 'rgba(0, 0, 0, 0.1)',
        property: '--tui-background-neutral-2-hover',
    },
    {
        name: 'background-neutral-2-pressed',
        base_color: 'rgba(0, 0, 0, 0.14)',
        property: '--tui-background-neutral-2-pressed',
    },
    {
        name: 'background-primary',
        base_color: '#526ed3',
        property: '--tui-background-accent-1',
    },
    {
        name: 'background-primary-hover',
        base_color: '#6c86e2',
        property: '--tui-background-accent-1-hover',
    },
    {
        name: 'background-primary-pressed',
        base_color: '#314692',
        property: '--tui-background-accent-1-pressed',
    },
    {
        name: 'background-accent',
        base_color: '#ff7043',
        property: '--tui-background-accent-2',
    },
    {
        name: 'background-accent-hover',
        base_color: '#ff9a94',
        property: '--tui-background-accent-2-hover',
    },
    {
        name: 'background-accent-pressed',
        base_color: '#e7716a',
        property: '--tui-background-accent-2-pressed',
    },
    {
        name: 'background-accent-opposite',
        base_color: '#000',
        property: '--tui-background-accent-opposite',
    },
    {
        name: 'background-accent-opposite-hover',
        base_color: '#333',
        property: '--tui-background-accent-opposite-hover',
    },
    {
        name: 'background-accent-opposite-pressed',
        base_color: '#808080',
        property: '--tui-background-accent-opposite-pressed',
    },
    {
        name: 'background-elevation-1',
        base_color: '#fff',
        property: '--tui-background-elevation-1',
    },
    {
        name: 'background-elevation-2',
        base_color: '#fff',
        property: '--tui-background-elevation-2',
    },
    {
        name: 'service-autofill-background',
        base_color: '#fff5c0',
        property: '--tui-service-autofill-background',
    },
    {
        name: 'border-normal',
        base_color: 'rgba(0, 0, 0, 0.1)',
        property: '--tui-border-normal',
    },
    {
        name: 'border-hover',
        base_color: 'rgba(0, 0, 0, 0.16)',
        property: '--tui-border-hover',
    },
    {
        name: 'border-focus',
        base_color: 'rgba(51, 51, 51, 0.64)',
        property: '--tui-border-focus',
    },
    {
        name: 'status-negative',
        base_color: 'rgba(244, 87, 37, 1)',
        property: '--tui-status-negative',
    },
    {
        name: 'status-negative-pale',
        base_color: 'rgba(244, 87, 37, 0.12)',
        property: '--tui-status-negative-pale',
    },
    {
        name: 'status-negative-pale-hover',
        base_color: 'rgba(244, 87, 37, 0.24)',
        property: '--tui-status-negative-pale-hover',
    },
    {
        name: 'status-positive',
        base_color: 'rgba(74, 201, 155, 1)',
        property: '--tui-status-positive',
    },
    {
        name: 'status-positive-pale',
        base_color: 'rgba(74, 201, 155, 0.12)',
        property: '--tui-status-positive-pale',
    },
    {
        name: 'status-positive-pale-hover',
        base_color: 'rgba(74, 201, 155, 0.24)',
        property: '--tui-status-positive-pale-hover',
    },
    {
        name: 'status-warning',
        base_color: 'rgba(255, 199, 0, 1)',
        property: '--tui-status-warning',
    },
    {
        name: 'status-warning-pale',
        base_color: 'rgba(255, 199, 0, 0.12)',
        property: '--tui-status-warning-pale',
    },
    {
        name: 'status-warning-pale-hover',
        base_color: 'rgba(255, 199, 0, 0.24)',
        property: '--tui-status-warning-pale-hover',
    },
    {
        name: 'status-info',
        base_color: 'rgba(112, 182, 246, 1)',
        property: '--tui-status-info',
    },
    {
        name: 'status-info-pale',
        base_color: 'rgba(112, 182, 246, 0.12)',
        property: '--tui-status-info-pale',
    },
    {
        name: 'status-info-pale-hover',
        base_color: 'rgba(112, 182, 246, 0.24)',
        property: '--tui-status-info-pale-hover',
    },
    {
        name: 'status-neutral',
        base_color: 'rgb(121, 129, 140)',
        property: '--tui-status-neutral',
    },
    {
        name: 'text-primary',
        base_color: 'rgba(27, 31, 59, 1)',
        property: '--tui-text-primary',
    },
    {
        name: 'text-secondary',
        base_color: 'rgba(27, 31, 59, 0.65)',
        property: '--tui-text-secondary',
    },
    {
        name: 'text-tertiary',
        base_color: 'rgba(27, 31, 59, 0.4)',
        property: '--tui-text-tertiary',
    },
    {name: 'text-action', base_color: '#526ed3', property: '--tui-text-action'},
    {
        name: 'text-action-hover',
        base_color: '#6c86e2',
        property: '--tui-text-action-hover',
    },
    {name: 'text-positive', base_color: '#3aa981', property: '--tui-text-positive'},
    {
        name: 'text-positive-hover',
        base_color: '#7ac5aa',
        property: '--tui-text-positive-hover',
    },
    {name: 'text-negative', base_color: '#dd4c1e', property: '--tui-text-negative'},
    {
        name: 'text-negative-hover',
        base_color: '#e38163',
        property: '--tui-text-negative-hover',
    },
];
