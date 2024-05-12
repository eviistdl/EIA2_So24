window.addEventListener("load", handleLoad);

    let crc2: CanvasRenderingContext2D;

   
    function handleLoad(_event: Event): void {
    // Zugriff auf das Canvas-Element
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    
    fillBackground(); // Nachdem das Canvas geladen wurde, fülle den Hintergrund
    }

    // Hintergrund einfärben
    function fillBackground(): void {
    console.log("Background");

    // Definiere die grüne Farbe
    let color: string = "green";

    // Fülle den Hintergrund mit dem Gradienten
    crc2.fillStyle = color;
    crc2.fillRect(0, 0, 600, 600);
    }