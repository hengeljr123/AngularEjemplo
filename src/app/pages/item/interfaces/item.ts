export interface Item {
    id:   string;
    name: string;
    data: Data | null;
}

export interface Data {
    color?:            string;
    capacity?:         string;
    "capacity GB"?:    number;
    price?:            number;
    generation?:       string;
    year?:             number;
    "CPU model"?:      string;
    "Hard disk size"?: string;
    "Strap Colour"?:   string;
    "Case Size"?:      string;
    Color?:            string;
    Description?:      string;
    Capacity?:         string;
    "Screen size"?:    number;
    Generation?:       string;
    Price?:            string;
}