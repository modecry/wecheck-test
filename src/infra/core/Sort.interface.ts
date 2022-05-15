export interface ISort {
    path: string | null
    type: SortType
}

export type SortType = 'asc' | 'desc' | null
