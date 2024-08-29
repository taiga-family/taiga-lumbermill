import {CommonModule} from '@angular/common';
import type {Signal, WritableSignal} from '@angular/core';
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

import {INITIAL_DATA} from './table.constants';
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
    protected searchByName = signal('');
    protected searchByCreator = signal('');
    protected expanded = false;
    protected readonly sizes = ['l', 'm', 's'] as const;
    protected size = this.sizes[1];

    protected readonly form = new FormGroup({
        searchByName: new FormControl(),
        searchByCreator: new FormControl(),
        select: new FormControl(),
        date: new FormControl(),
        switch: new FormControl(),
        filter: new FormControl(),
        segmented: new FormControl(),
    });

    protected index = 0;
    protected sizeSort = signal(10);
    protected sizeSortPrevious = signal(10);
    protected readonly itemsSort = [10, 50, 100];

    protected readonly items = ['43.7ms', '45.7ms', '53.2ms'];
    protected readonly segments = [null, '29 days', '30 days'];
    protected readonly segmentSort: WritableSignal<string | null> = signal(null);
    protected readonly successSort: WritableSignal<boolean> = signal(false);
    protected readonly progressSort: WritableSignal<string[]> = signal([]);
    protected states = computed(() => this.searchedData().map((_) => signal(false)));

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

    protected readonly data: Signal<DataTable[]> = signal(
        INITIAL_DATA.map((result) => [
            result,
            structuredClone(result),
            structuredClone(result),
            structuredClone(result),
            structuredClone(result),
            structuredClone(result),
            structuredClone(result),
            structuredClone(result),
            structuredClone(result),
            structuredClone(result),
            structuredClone(result),
            structuredClone(result),
            structuredClone(result),
            structuredClone(result),
            structuredClone(result),
        ]).reduce((acc, curr) => acc.concat(curr), []),
    );

    protected searchedData = computed(() =>
        this.data()
            .filter(
                (val) =>
                    !this.searchByName() ||
                    val.checkbox.title.includes(this.searchByName()),
            )
            .filter(
                (val) =>
                    !this.searchByCreator() ||
                    val.cell.name.includes(this.searchByCreator()),
            )
            .filter((val) => !this.segmentSort() || val.duration === this.segmentSort())
            .filter((val) => !this.successSort() || val.status.value === 'Success')
            .filter(
                (val) =>
                    !this.progressSort().length ||
                    this.progressSort().includes(`${val.progress.toString()}ms`),
            ),
    );

    protected length = computed(() =>
        Math.ceil(this.searchedData().length / this.sizeSort()),
    );

    protected get open(): boolean {
        return this.selected > 0;
    }

    protected get selected(): number {
        let result = 0;

        this.states().forEach((item) => {
            if (item()) {
                result++;
            }
        });

        return result;
    }

    protected get checked(): boolean | null {
        const every = this.states().every((val) => val());
        const some = this.states().some((val) => val());

        return every || (some && null);
    }

    protected toggleSelect(): void {
        const all = this.selected < this.searchedData().length;

        this.states().forEach((item) => {
            if (all) {
                item.set(true);
            } else {
                item.set(false);
            }
        });
    }

    protected nameSorter(a: any, b: any): number {
        return a.checkbox.title.localeCompare(b.checkbox.title);
    }

    protected onCheck(checked: boolean): void {
        this.states().forEach((item) => {
            item.set(checked);
        });
    }

    protected submitSearch(): void {
        this.searchByName.set(this.form.value.searchByName);
        this.searchByCreator.set(this.form.value.searchByCreator);
    }

    protected changePage(): void {
        this.index = Math.floor((this.index * this.sizeSortPrevious()) / this.sizeSort());
        this.sizeSortPrevious.set(this.sizeSort());
    }

    protected readonly content: TuiStringHandler<TuiContext<number>> = ({$implicit}) =>
        `${$implicit} items per page`;
}
