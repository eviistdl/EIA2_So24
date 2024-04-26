namespace Einkaufsliste {

    export function generateContent(_data: Data) {
        console.log(_data);

        for(let category in _data) {
            //console.log (category);
            let items: Item = _data[category];

            switch (category) {
                case "entry":
                    let group: HTMLSelectElement = createSelect(item);
                    break;
            
                default:
                    break;
            }
        }
    }
}