export type Product={id:string;slug:string;name:string;price:number;image:string;category:string;description:string;ingredients:string;available:boolean;popular:number};
export type CartItem={product:Product;quantity:number};
export type Order={id:string;name:string;phone:string;fulfillment:'delivery'|'pickup';address:string;day:string;time:string;comment:string;items:{id:string;name:string;price:number;quantity:number;image:string}[];total:number;status:string;createdAt:string};
