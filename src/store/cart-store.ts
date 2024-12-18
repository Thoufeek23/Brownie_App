import { create } from "zustand";
import { PRODUCTS } from "../../assets/products";

type CartItemType ={
    id: number;
    title: string;
    image: any;
    price: number;
    quatity: number;
}

type CartState ={
    items: CartItemType[];
    addItem: (item: CartItemType) => void;
    removeItem: (id: number) => void;
    incrementItem: (id: number) => void;
    decrementItem: (id: number) => void;
    getTotalPrice: () => string;
    getItemCount: () => number;
}

const initialCartItems: CartItemType[] = [];

export const useCartStore = create<CartState>((set,get) =>({
    items: initialCartItems,
    addItem: (item: CartItemType) => {
        const existingItem = get().items.find(i => i.id==item.id);
        if(existingItem) {
            set(state =>({
                items: state.items.map(i => i.id === item.id ? {
                    ...i,
                    quatity: Math.min(
                        i.quatity+item.quatity,
                        PRODUCTS.find(p => p.id === item.id)?.maxQuantity || i.quatity
                    ),
                } : i),
            }))
        } else {
            set(state => ({ items: [...state.items, item]}));
        }
    },
        removeItem: (id: number) => set(state => ({items: state.items.filter(item => item.id !== id)})),
        incrementItem: (id: number) => set(state => {
            const product = PRODUCTS.find(p => p.id === id);

            if(!product) return state;

            return{
                items: state.items.map(item => item.id === id && item.quatity < product.maxQuantity ? { ...item, quatity: item.quatity + 1 }: item),
            }
        }),
        decrementItem: (id: number) => set(state => ({
            items: state.items.map(item => item.id === id && item.quatity > 1 ? {...item, quantity: item.quatity -1 }: item)
        })),
        getTotalPrice: () => {
            const {items}=get();
            return items.reduce((total, item) => total + item.price* item.quatity, 0).toFixed(2);
        },
        getItemCount: () => {
            const {items} =get();
            return items.reduce((count, item) => count + item.quatity, 0);
        },
    }
));