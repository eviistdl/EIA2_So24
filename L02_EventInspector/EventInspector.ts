namespace EventInspector {

    console.log("Let's get started");

    window.addEventListener('load', handleLoad); // Wenn Seite geladen, handleload aufrufen um EventListener zu adden

    let span: HTMLElement = document.createElement("span"); //auf span zugreifen
    span.innerHTML = "span";
    span.className = "span";

    function handleLoad(_event: Event): void { //Wenn geladen, Events 
        
        //click und keyup Listener für divs
        let div0: HTMLDivElement = <HTMLDivElement>(
        document.querySelector("#div0"));
        let div1: HTMLDivElement = <HTMLDivElement>(
        document.querySelector("#div1"));
        div0.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);

        //click, keyup, maus Listener. Custom Event für Button
        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        let button: HTMLButtonElement = <HTMLButtonElement>(document.querySelector("button"));
        button.addEventListener("click", customEvent);
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        //body Event Listener
        body.addEventListener("keyup", logInfo);
        body.addEventListener("click", logInfo);
    }

    //Span box Position und Inhalt
    function setInfoBox(_event: MouseEvent): void {
        let x: number = _event.pageX; //x Koordinaten holen
        let y: number = _event.pageY; //y Koordinaten holen
    
        
        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span"); //Auf Span zugreifen
        span.style.left = x + 10 + "px" //Versatz
        span.style.top = y + 10 + "px" //Versatz
        span.innerHTML = "x: "+ x + "<br />" + " y: " + y + "<br />" + " target: " + _event.target; //Text mit aktuellen Koordinaten in Span
    }

    //Ausgeben von Event (keyup oder klick) Infos
    function logInfo(_event: Event): void {
        console.log(_event);
        console.log(_event.type);
        console.log(_event.currentTarget);
        console.log(_event.target);
    }

    //Event für Button Klick; Habe Funktion des Buttons in der Augabe nicht verstanden 
    function customEvent(_event: Event):void {
        console.log("Custom Event Ausgelöst");
        }

    
}