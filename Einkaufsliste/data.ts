namespace Einkaufsliste {
    export interface Item {
        name: string;
        quantityInput: number;
        commentInput: string;
        date:string;
        wasBought: boolean;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data:Item[] = [
        
            { name: "Cola", quantityInput: 2, commentInput: "Dosen", date:"2024-07-13", wasBought:true },
    ]
};
