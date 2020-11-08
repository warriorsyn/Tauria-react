import ICrustType from "./ICrustType";
import IIngredients from "./IIngredients";
import IPizzaSizes from "./IPizzaSizes";

export default interface IOrder {
    size: IPizzaSizes;
    crust: ICrustType;
    ingredients: IIngredients[];
    total: number;
}