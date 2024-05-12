window.addEventListener("load", handleLoad);

    let crc2: CanvasRenderingContext2D;

   
    function handleLoad(_event: Event): void {
    // Zugriff auf das Canvas-Element
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    
    //Zeichnen der Elemente
    fillBackground(); 
    sun();
    lake();
    mountain();
    cloud();
    }

    // Hintergrund einfärben
    function fillBackground(): void {
        console.log("Background");
    
        // Grünen Hintergrund zeichnen
        let grassColor: string = "#90E162"; 
        crc2.fillStyle = grassColor;
        crc2.fillRect(0, 0, 600, 600);
    
        // Blaues Rechteck zeichnen
        let skyColor: string = "#48BCE1"; 
        crc2.fillStyle = skyColor;
        crc2.fillRect(0, 0, 600, 250);
    }

    function sun(): void {
        // Mittelpunkt und Durchmesser des Kreises
        let centerX: number = 500;
        let centerY: number = 100;
        let radius: number = 40; 
    
        // Kreis zeichnen
        crc2.beginPath();
        crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        crc2.closePath();
    
        // Farbe 
        let circleColor: string = "yellow"; // Gelbe Farbe
        crc2.fillStyle = circleColor;
        crc2.fill();
    
        // Sonnenstrahlen zeichnen
        let lineLength: number = 20; 
        crc2.strokeStyle = "yellow"; 
        for (let i = 0; i < 8; i++) { //Schleife, um 8 Linien zu zeichnen
            let angle: number = (i / 8) * (2 * Math.PI); // Winkel für die Linie 1/8 von 365 Grad
            let startX: number = centerX + radius * Math.cos(angle); 
            let startY: number = centerY + radius * Math.sin(angle); 
            let endX: number = startX + lineLength * Math.cos(angle);
            let endY: number = startY + lineLength * Math.sin(angle); 
            crc2.beginPath();
            crc2.moveTo(startX, startY);
            crc2.lineTo(endX, endY);
            crc2.stroke();
            crc2.closePath();
        }
    }

    function lake(): void {
        // Mittelpunkt und Größe der Ellipse
        let centerX: number = 400;
        let centerY: number = 400;
        let radiusX: number = 150; 
        let radiusY: number = 75;  
    
        // Ellipse zeichnen
        crc2.beginPath();
        crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        crc2.closePath();
    
        let lakeColor: string = "#4676E0";
        crc2.fillStyle = lakeColor;
        crc2.fill();
    }

    function mountain(): void {
        // Berg zeichnen
        crc2.beginPath();
        crc2.moveTo(200, 250);
        crc2.quadraticCurveTo(400, -40, 600, 250); // Bogen für den Berg
        crc2.closePath();
    
        let mountainColor: string = "#707070"; 
        crc2.fillStyle = mountainColor;
        crc2.fill();

        // 2. Berg zeichnen
        crc2.beginPath();
        crc2.moveTo(0, 250);
        crc2.quadraticCurveTo(150, 100, 370, 250); // Bogen für den Berg
        crc2.closePath();
    
        let mountainColorTwo: string = "gray"; 
        crc2.fillStyle = mountainColorTwo;
        crc2.fill();
    }
    
    function cloud(): void {
        // Ursprung Wolke 2
        crc2.translate(20, 120);
    
    // Wolke zeichnen
        crc2.beginPath();
        crc2.moveTo(150, 0);
        crc2.lineTo(0, 0); 
        crc2.ellipse(50, 0, 40, 30, 0, Math.PI, 0, false);
        crc2.ellipse(100, 0, 60, 60, 0, Math.PI, 0, false);
        crc2.ellipse(170, 0, 50, 30, 0, Math.PI, 0, false);
        crc2.closePath();
    
        let cloudColor: string = "white"; 
        crc2.fillStyle = cloudColor;
        crc2.fill();

        // Setze den Ursprung zurück auf (0, 0)
        crc2.translate(-20, -120);

        //Ursprung Wolke 2
        crc2.translate(300, 150);
        
    //Wolke 2 zeichnen
        crc2.beginPath();
        crc2.moveTo(120, 0);
        crc2.lineTo(0, 0); 
        crc2.ellipse(50, 0, 20, 20, 0, Math.PI, 0, false);
        crc2.ellipse(100, 0, 40, 50, 0, Math.PI, 0, false);
        crc2.ellipse(140, 0, 30, 30, 0, Math.PI, 0, false);
        crc2.closePath();

        let cloudColorTwo: string = "white"; // Weiße Farbe für die Wolke
        crc2.fillStyle = cloudColorTwo;
        crc2.fill();

        
        
    }
    
    
    
    
    
    
    
    
    
    

