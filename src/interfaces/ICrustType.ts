import { CrustTypeEnum } from "../enums/CrustTypeEnum";

export default interface ICrustType {
    id: number,
    type: CrustTypeEnum,
    price: number
} 
