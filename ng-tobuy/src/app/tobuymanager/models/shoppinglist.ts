import { Tobuy } from "./tobuy";
import { WeekDay } from "@angular/common";

export class Shoppinglist {
    id: number;
    toBuys: Tobuy[] = [];
    weekDay: WeekDay;
}