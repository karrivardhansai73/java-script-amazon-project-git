import{addToCart,cart,loadFromStroage} from "../../data/cart.js";
describe("test suite :addToCart",()=>
{
    it ('adds an exsisting product to cart',()=>{

    });
    it ("add a new product to cart",()=>{
        spyOn(localStorage,'setItem');
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });
        console.log(localStorage.getItem('cart'));
        loadFromStroage();
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });
});