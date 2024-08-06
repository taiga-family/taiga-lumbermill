interface ThemeSwitcherData {
    readonly name: string;
    readonly base_color: string;
    readonly property: string;
}

export const INITIAL_DATA: ThemeSwitcherData[] = [
    {
        name: 'Base background',
        base_color: 'rgba(255, 255, 255)',
        property: '--tui-background-base',
    },
    {
        name: 'Base Alt background',
        base_color: 'rgba(246, 246, 246)',
        property: '--tui-background-base-alt',
    },
    {
        name: 'Primary background',
        base_color: '#526ed3',
        property: '--tui-background-accent-1',
    },
    {
        name: 'Accent background',
        base_color: '#ff7043',
        property: '--tui-background-accent-2',
    },
    {
        name: 'Neutral background',
        base_color: 'rgba(0, 0, 0, 0.04)',
        property: '--tui-background-neutral-1',
    },
    {
        name: 'Primary text',
        base_color: 'rgba(27, 31, 59, 1)',
        property: '--tui-text-primary',
    },
    {
        name: 'Secondary text',
        base_color: 'rgba(27, 31, 59, 0.65)',
        property: '--tui-text-secondary',
    },
    {name: 'Action text', base_color: '#526ed3', property: '--tui-text-action'},
    {
        name: 'Info status',
        base_color: 'rgba(112, 182, 246, 0.12)',
        property: '--tui-status-info-pale',
    },
    {
        name: 'Warning status',
        base_color: 'rgba(255, 199, 0, 0.12)',
        property: '--tui-status-warning-pale',
    },
    {
        name: 'Success status',
        base_color: 'rgba(74, 201, 155, 0.12)',
        property: '--tui-status-positive-pale',
    },
    {
        name: 'Error status',
        base_color: 'rgba(244, 87, 37, 0.12)',
        property: '--tui-status-negative-pale',
    },
];
