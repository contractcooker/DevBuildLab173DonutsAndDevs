export interface Donuts {
    count: number;
    results: Donut[];
  }
  
  export interface Donut {
    id: number;
    ref: string;
    name: string;
  }
  
  export interface DonutDetail {
    id: number;
    ref: string;
    name: string;
    calories: number;
    extras: string[];
    photo: string;
    photo_attribution: string;
  }