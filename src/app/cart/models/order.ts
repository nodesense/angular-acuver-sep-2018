// order.ts
import { CartItem } from "./cart-item";

export class Order {
    name: string;
    email: string;
    phone: string;
    
    amount: number;
    cartItems: CartItem[];
}
