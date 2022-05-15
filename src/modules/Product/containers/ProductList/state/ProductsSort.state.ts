import { atom } from 'recoil'
import { ISort } from 'infra/core/Sort.interface'

export const ProductsSortState = atom<ISort>({
    key: 'productSortState', // unique ID (with respect to other atoms/selectors)
    default: {
        type: null,
        path: null,
    },
})
