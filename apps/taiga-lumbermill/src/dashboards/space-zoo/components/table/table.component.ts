import {CommonModule} from '@angular/common';
import type {Signal} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiAutoColorPipe,
    TuiBreakpointService,
    TuiButton,
    TuiDropdown,
    TuiIcon,
    TuiInitialsPipe,
    TuiLabel,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiActionBar,
    TuiAvatar,
    TuiBadge,
    TuiBadgedContent,
    TuiCheckbox,
    TuiChip,
    TuiItemsWithMore,
    TuiProgressBar,
    TuiRadioList,
    TuiSegmented,
    TuiStatus,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {map} from 'rxjs';

import type {DataTable} from './table.interface';

@Component({
    standalone: true,
    selector: 'lmb-table',
    imports: [
        CommonModule,
        FormsModule,
        TuiActionBar,
        TuiAppearance,
        TuiAutoColorPipe,
        TuiAvatar,
        TuiBadge,
        TuiBadgedContent,
        TuiButton,
        TuiCell,
        TuiCheckbox,
        TuiChip,
        TuiDropdown,
        TuiIcon,
        TuiIcon,
        TuiInitialsPipe,
        TuiInputModule,
        TuiItemsWithMore,
        TuiLabel,
        TuiLink,
        TuiProgressBar,
        TuiRadioList,
        TuiRepeatTimes,
        TuiSegmented,
        TuiStatus,
        TuiSwitch,
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
    protected expanded = false;
    protected readonly sizes = ['l', 'm', 's'] as const;

    protected size = this.sizes[1];

    protected readonly isMobile = toSignal(
        inject(TuiBreakpointService).pipe(map((size) => size === 'mobile')),
    );

    protected columns = [
        {
            title: 'Name',
            sorter: (a: DataTable, b: DataTable) =>
                a.checkbox.title.localeCompare(b.checkbox.title),
        },
        {
            title: '2',
            sorter: (a: DataTable, b: DataTable) =>
                a.analytic.title.localeCompare(b.analytic.title),
        },
        {
            title: '3',
            sorter: (a: DataTable, b: DataTable) =>
                a.file.title.localeCompare(b.file.title),
        },
        {
            title: '4',
            sorter: (a: DataTable, b: DataTable) =>
                a.file.title.localeCompare(b.file.title),
        },
        {
            title: '5',
            sorter: (a: DataTable, b: DataTable) =>
                a.date.time.localeCompare(b.date.time),
        },
        {
            title: '6',
            sorter: (a: DataTable, b: DataTable) =>
                a.cell.name.localeCompare(b.cell.name),
        },
        {
            title: '7',
            sorter: (a: DataTable, b: DataTable) =>
                a.cell.name.localeCompare(b.cell.name),
        },
        {
            title: '8',
            sorter: (a: DataTable, b: DataTable) =>
                a.status.value.localeCompare(b.status.value),
        },
        {
            title: '9',
            sorter: null,
        },
        {
            title: '10',
            sorter: null,
        },
        {
            title: 'duration',
            sorter: (a: any, b: any) => a.duration.localeCompare(b.duration),
        },
        {
            title: 'progress',
            sorter: (a: any, b: any) => a.progress - b.progress,
        },
        {
            title: '',
            sorter: null,
        },
    ];

    protected columnsTitles = this.columns.map((val) => val.title);

    protected readonly data: Signal<DataTable[]> = signal([
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
                title: 'WO_analytic33',
                subtitle: 'Greenplum Table',
            },
            file: {
                icon: './table/file.svg',
                title: 'Stability hamcejdc #195212',
                chip: 'label',
                subtitle: 'k6-tenant-manager ・ master',
            },
            date: {
                time: '13.03.2022 15:45:48',
                chip: 'ExecuteSasScriptOnAllContours',
            },
            cell: {
                name: 'Misha Zhem32',
                email: 'silly@walk.uk',
            },
            status: {
                value: 'Warning',
                color: 'var(--tui-status-negative)',
            },
            labels: ['Label', 'Label', 'displayed', 'here', 'and', 'can', 'overflow'],
            tags: ['Tag', 'Tag', 'displayed', 'here', 'and', 'can', 'overflow'],
            duration: '29 days',
            progress: 45.7,
            selected: false,
        },
    ]);

    protected searchedData = computed(() =>
        this.data().filter((val) => val.checkbox.title.includes(this.search())),
    );

    protected get open(): boolean {
        return this.selected > 0;
    }

    protected get selected(): number {
        let result = 0;

        this.searchedData().forEach((item) => {
            if (item.selected) {
                result++;
            }
        });

        return result;
    }

    protected get checked(): boolean | null {
        const every = this.searchedData().every(({selected}) => selected);
        const some = this.searchedData().some(({selected}) => selected);

        return every || (some && null);
    }

    protected toggleSelect(): void {
        const all = this.selected < this.searchedData().length;

        this.searchedData().forEach((item) => {
            if (all) {
                item.selected = true;
            } else {
                item.selected = false;
            }
        });
    }

    protected nameSorter(a: any, b: any): number {
        return a.checkbox.title.localeCompare(b.checkbox.title);
    }

    protected onCheck(checked: boolean): void {
        this.searchedData().forEach((item) => {
            item.selected = checked;
        });
    }
}