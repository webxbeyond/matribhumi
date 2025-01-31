import {Holiday} from "../types";
import {nationalHolidays} from "../data";


export function getHoliday(): Holiday[] {
    return nationalHolidays;
}