export interface DataTable {
    readonly checkbox: TableCheckbox;
    readonly analytic: TableAnalytic;
    readonly file: TableFile;
    readonly date: TableDate;
    readonly cell: TableCell;
    readonly status: TableStatus;
    readonly labels: string[];
    readonly tags: string[];
    readonly duration: string;
    readonly progress: number;
}

export interface TableCheckbox {
    readonly title: string;
    readonly subtitle: string;
}

export interface TableAnalytic {
    readonly title: string;
    readonly subtitle: string;
}

export interface TableFile {
    readonly icon: string;
    readonly title: string;
    readonly chip: string;
    readonly subtitle: string;
}

export interface TableDate {
    readonly time: string;
    readonly chip: string;
}

export interface TableCell {
    readonly name: string;
    readonly email: string;
}

export interface TableStatus {
    readonly value: string;
    readonly color: string;
}
