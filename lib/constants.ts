import type { INFO_URL_TYPE, MEDIA_URL_TYPE } from "./types";

export const REPO_OWNER = "cittakshashila";
export const REPO_NAME = "EVENTS-DATA-24";

export const MEDIA_URL = (ID: string, MID: number): MEDIA_URL_TYPE => {
    return `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/master/events/${ID}/assets/${MID}.png`;
}

export const INFO_URL = (ID: string): INFO_URL_TYPE => {
    return `https://github.com/${REPO_OWNER}/${REPO_NAME}/blob/master/events/${ID}/info.json`;
}

export const FOLDER_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}/tree/master/events`;
