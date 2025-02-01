import { PrayerApiResponse, PrayerTimeParams, PrayerTimes } from "../types";

const apiBaseURL = "https://api.aladhan.com/v1/";


const defaultPathParams:PrayerTimeParams = {
    date: new Date().toLocaleDateString('en-GB').split('/').join('-'),
    year: ''
};

const defaultQueryParams : PrayerTimeParams = {
    city: 'dhaka',
    country: 'BD',
    method: '',
    shafaq: 'ahmer',
    tune: '5,3,5,7,9,-1,0,8,-6',
    school: 0,
    midnightMode: 0,
    timezonestring: 'UTC',
    latitudeAdjustmentMethod: 1,
    calendarMethod: 'UAQ',
    iso8601: false,
};

// ----------------- prayer time in general --------------------------------
export async function getPrayer(pathParams= defaultPathParams, queryParams = defaultQueryParams): Promise<PrayerApiResponse<PrayerTimes>> {

    // Convert all query parameters to string
    const formattedParams = Object.fromEntries(
        Object.entries(queryParams).filter(([key, value]) => value !== undefined && value !== null && value !== "")
            .map(([key, value]) => [key, String(value)])
    );

    const urlParams = new URLSearchParams(formattedParams);
    const path = Object.values(pathParams).filter(value => value).join('/');

    const url = `${apiBaseURL}timingsByCity/${path}?${urlParams.toString()}`;
    console.log(url)

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data: PrayerApiResponse<PrayerTimes> = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching prayer times:', error);
        throw error;
    }
}

// -------------------- prayer by city ----------------
export async function getPrayerByCity(
    date: string = new Date().toLocaleDateString('en-GB').split('/').join('-'),
    city: string = 'dhaka',
    country: string = 'BD'
): Promise<PrayerApiResponse<PrayerTimes>> {
    try {
        const url = `${apiBaseURL}timingsByCity/${date}?country=${country}&city=${city}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data: PrayerApiResponse<PrayerTimes> = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching prayer times:', error);
        throw error;
    }
}
