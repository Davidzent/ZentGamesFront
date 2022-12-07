import { IUser } from "./Iuser";
import { IGame } from "./Igame";

export interface IScore {
    scoreid?: number; //unique id mainly used for form request
    score?: number; //sometimes we might not want to have this like when displaying purchased orders
    user?: IUser; //sometimes we might not want to have this like when displaying purchased orders
    game?: IGame;
    lname?: string;
    email?: string;
}
