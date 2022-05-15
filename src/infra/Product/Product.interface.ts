import { IEntity } from './Entity.interface'

export interface IProduct {
    platform: IEntity
    brand: IEntity
    seller: IEntity
    warehouse: IEntity
    id: number
    name: string
    sold_number: string
    sold_money: number
    stock: number
    inner_product_id: number
    sold_by_wb_number: string
    sold_by_wb_money: number
    were_bought: number
    order: number
    order_money: number
    sale: number
    sale_money: number
    last_reviews_count: number
    last_price: number
    last_rating: number
    listing: number
    days_in_stock: string
    potential: number
    lost_profit: number
    lost_profit_percent: number
    categories_qty: number
    categories: IEntity[]
}
