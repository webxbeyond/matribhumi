import {District} from "../types";
import {districts} from "../data";
import {getDivision} from "./geo";


export function getDistrictsOvision(name: string): District[] {
    const division = getDivision(name);
    return division
        ? districts.filter((district) => district.division_id === division.id)
        : [];
}