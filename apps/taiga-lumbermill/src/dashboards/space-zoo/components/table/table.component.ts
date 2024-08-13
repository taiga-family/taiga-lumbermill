import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiTable} from '@taiga-ui/addon-table';
import {
    TuiAutoColorPipe,
    TuiButton,
    TuiDropdown,
    TuiIcon,
    TuiInitialsPipe,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiCheckbox,
    TuiChip,
    TuiItemsWithMore,
    TuiProgressBar,
    TuiRadioList,
    TuiStatus,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'lmb-table',
    imports: [
        CommonModule,
        FormsModule,
        TuiAutoColorPipe,
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiCell,
        TuiCheckbox,
        TuiChip,
        TuiDropdown,
        TuiIcon,
        TuiInitialsPipe,
        TuiInputModule,
        TuiItemsWithMore,
        TuiLink,
        TuiProgressBar,
        TuiRadioList,
        TuiStatus,
        TuiTable,
        TuiTextfieldControllerModule,
        TuiTitle,
    ],
    templateUrl: './table.component.html',
    styleUrl: './table.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
    protected search = signal('');
    protected readonly sizes = ['l', 'm', 's'] as const;

    protected size = this.sizes[1];

    protected columns = [
        'Name',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'duration',
        'progress',
        '13',
    ];

    protected readonly data = [
        {
            checkbox: {
                title: 'INN Checking in database_part_1',
                subtitle: 'Connection throttled because max number',
            },
            analytic: {
                title: 'WO_analytic',
                subtitle: 'Greenplum Table',
            },
            file: {
                icon: './table/file.svg',
                title: 'Stability hamcejdc #195',
                chip: 'label',
                subtitle: 'k6-tenant-manager ・ master',
            },
            date: {
                time: '13.03.2022 13:45:48',
                chip: 'ExecuteSasScriptOnAllContours',
            },
            cell: {
                name: 'Misha Zhem',
                email: 'silly@walk.uk',
            },
            status: {
                value: 'Success',
                color: 'var(--tui-status-positive)',
            },
            labels: ['Label', 'Label', 'displayed', 'here', 'and', 'can', 'overflow'],
            tags: ['Tag', 'Tag', 'displayed', 'here', 'and', 'can', 'overflow'],
            duration: '30 days',
            progress: 43.7,
            selected: false,
        },
        {
            checkbox: {
                title: 'INN Checking in database_part_2',
                subtitle: 'Connection throttled because max number',
            },
            analytic: {
                title: 'WO_analytic',
                subtitle: 'Greenplum Table',
            },
            file: {
                icon: './table/file.svg',
                title: 'Stability hamcejdc #195',
                chip: 'label',
                subtitle: 'k6-tenant-manager ・ master',
            },
            date: {
                time: '13.03.2022 13:45:48',
                chip: 'ExecuteSasScriptOnAllContours',
            },
            cell: {
                name: 'Misha Zhem',
                email: 'silly@walk.uk',
            },
            status: {
                value: 'Success',
                color: 'var(--tui-status-positive)',
            },
            labels: ['Label', 'Label', 'displayed', 'here', 'and', 'can', 'overflow'],
            tags: ['Tag', 'Tag', 'displayed', 'here', 'and', 'can', 'overflow'],
            duration: '30 days',
            progress: 43.7,
            selected: false,
        },
        {
            checkbox: {
                title: 'INN Checking in database_part_3',
                subtitle: 'Connection throttled because max number',
            },
            analytic: {
                title: 'WO_analytic',
                subtitle: 'Greenplum Table',
            },
            file: {
                icon: './table/file.svg',
                title: 'Stability hamcejdc #195',
                chip: 'label',
                subtitle: 'k6-tenant-manager ・ master',
            },
            date: {
                time: '13.03.2022 13:45:48',
                chip: 'ExecuteSasScriptOnAllContours',
            },
            cell: {
                name: 'Misha Zhem',
                email: 'silly@walk.uk',
            },
            status: {
                value: 'Success',
                color: 'var(--tui-status-positive)',
            },
            labels: ['Label', 'Label', 'displayed', 'here', 'and', 'can', 'overflow'],
            tags: ['Tag', 'Tag', 'displayed', 'here', 'and', 'can', 'overflow'],
            duration: '29 days',
            progress: 45.7,
            selected: false,
        },
    ];

    protected searchedData = computed(() =>
        this.data.filter((val) => val.checkbox.title.includes(this.search())),
    );

    protected get checked(): boolean | null {
        const every = this.data.every(({selected}) => selected);
        const some = this.data.some(({selected}) => selected);

        return every || (some && null);
    }

    protected nameSorter(a: any, b: any): number {
        return a.checkbox.title.localeCompare(b.checkbox.title);
    }

    protected onCheck(checked: boolean): void {
        this.data.forEach((item) => {
            item.selected = checked;
        });
    }
}
