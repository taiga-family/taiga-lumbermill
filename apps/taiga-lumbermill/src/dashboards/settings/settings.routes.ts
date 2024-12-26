import type {Route} from '@angular/router';

export const settingsRoutes: Route[] = [
    {
        path: '',
        loadComponent: async () =>
            import('./settings.component').then((mod) => mod.SettingsComponent),
        children: [
            {
                path: 'profile',
                loadComponent: async () =>
                    import('./forms/profile/profile.component').then(
                        (mod) => mod.ProfileComponent,
                    ),
            },
            {
                path: 'notifications',
                loadComponent: async () =>
                    import('./forms/notifications/notifications.component').then(
                        (mod) => mod.NotificationsComponent,
                    ),
            },
            {
                path: 'appearance',
                loadComponent: async () =>
                    import('./forms/appearance/appearance.component').then(
                        (mod) => mod.AppearanceComponent,
                    ),
            },
            {
                path: '**',
                redirectTo: 'profile',
            },
        ],
    },
];
