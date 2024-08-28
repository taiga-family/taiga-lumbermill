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
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiTable} from '@taiga-ui/addon-table';
import type {TuiContext, TuiStringHandler} from '@taiga-ui/cdk';
import {tuiCountFilledControls} from '@taiga-ui/cdk';
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
    TuiScrollbar,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiActionBar,
    TuiAvatar,
    TuiBadge,
    TuiBadgedContent,
    TuiButtonSelect,
    TuiCheckbox,
    TuiChip,
    TuiDataListWrapper,
    TuiFilter,
    TuiItemsWithMore,
    TuiPagination,
    TuiProgressBar,
    TuiRadioList,
    TuiSegmented,
    TuiStatus,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCell, TuiSearch} from '@taiga-ui/layout';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {map} from 'rxjs';

import type {DataTable} from './table.interface';

@Component({
    standalone: true,
    selector: 'lmb-table',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiActionBar,
        TuiAppearance,
        TuiAutoColorPipe,
        TuiAvatar,
        TuiBadge,
        TuiBadgedContent,
        TuiButton,
        TuiButtonSelect,
        TuiCell,
        TuiCheckbox,
        TuiChip,
        TuiDataListWrapper,
        TuiDropdown,
        TuiFilter,
        TuiIcon,
        TuiInitialsPipe,
        TuiInputModule,
        TuiItemsWithMore,
        TuiLabel,
        TuiLink,
        TuiPagination,
        TuiProgressBar,
        TuiRadioList,
        TuiScrollbar,
        TuiSearch,
        TuiSegmented,
        TuiStatus,
        TuiSwitch,
        TuiTable,
        TuiTextfield,
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

    protected readonly form = new FormGroup({
        search: new FormControl(),
        select: new FormControl(),
        date: new FormControl(),
        switch: new FormControl(),
        filter: new FormControl(),
        segmented: new FormControl(),
    });

    protected index = 4;
    protected length = 10;
    protected sizeSort = 10;
    protected readonly itemsSort = [10, 50, 100];

    protected readonly items = ['Python', 'JavaScript', 'TypeScript'];
    protected readonly segments = [null, 'Unread', 'Archived'];

    protected readonly count = toSignal(
        this.form.valueChanges.pipe(map(() => tuiCountFilledControls(this.form))),
        {initialValue: 0},
    );

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
            title: 'Table',
            sorter: (a: DataTable, b: DataTable) =>
                a.analytic.title.localeCompare(b.analytic.title),
        },
        {
            title: 'File',
            sorter: (a: DataTable, b: DataTable) =>
                a.file.title.localeCompare(b.file.title),
        },
        {
            title: 'About',
            sorter: (a: DataTable, b: DataTable) =>
                a.file.title.localeCompare(b.file.title),
        },
        {
            title: 'Label',
            sorter: (a: DataTable, b: DataTable) =>
                a.date.time.localeCompare(b.date.time),
        },
        {
            title: 'Creator',
            sorter: (a: DataTable, b: DataTable) =>
                a.cell.name.localeCompare(b.cell.name),
        },
        {
            title: 'Creator Info',
            sorter: (a: DataTable, b: DataTable) =>
                a.cell.name.localeCompare(b.cell.name),
        },
        {
            title: 'Status',
            sorter: (a: DataTable, b: DataTable) =>
                a.status.value.localeCompare(b.status.value),
        },
        {
            title: 'Labels',
            sorter: null,
        },
        {
            title: 'Tags',
            sorter: null,
        },
        {
            title: 'Duration',
            sorter: (a: any, b: any) => a.duration.localeCompare(b.duration),
        },
        {
            title: 'Progress',
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

    protected readonly content: TuiStringHandler<TuiContext<number>> = ({$implicit}) =>
        `${$implicit} items per page`;
}
