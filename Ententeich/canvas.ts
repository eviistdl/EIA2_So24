namespace L09_Pond {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let clouds: Cloud[] = [];
    let ducks: Duck[] = [];
    let tails: Tail[] = [];

    function handleLoad(_event: Event): void {
        // Zugriff auf das Canvas-Element
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        
        // Clouds random auf x und y zeichnen
        for (let i: number = 0; i < 5; i++) {
            let cloud: Cloud = new Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
        }

        // Tails initialisieren
        for (let i: number = 0; i < 2; i++) {
            let tail: Tail = new Tail(350 + Math.random() * 50, 320 + Math.random() * 70); // Startposition
            tails.push(tail);
        }

        // Ducks initialisieren
        for (let i: number = 0; i < 2; i++) {
            let duck: Duck = new Duck(50 + Math.random() * 400, 400 + Math.random() * 50); // Startposition
            ducks.push(duck);
        }

        

        setInterval(animate, 20);
    }

    function animate(): void {
        drawBackround();
        for (let i: number = 0; i < clouds.length; i++) {
            clouds[i].move();
            clouds[i].draw();
        }
        for (let i: number = 0; i < ducks.length; i++) {
            ducks[i].move();
            ducks[i].draw();
        }
        for (let i: number = 0; i < tails.length; i++) {
            tails[i].move();
            tails[i].draw();
        }
    }

    function drawBackround(): void {
        fillBackground(); 
        sun();
        lake();
        mountain();
        bush(100, 320);
    }

    function bush(_x:number, _y: number): void {
        crc2.save();
        crc2.translate(_x, _y);

        // Busch zeichnen
        crc2.beginPath();
        crc2.ellipse(30, 0, 10, 20, 0, Math.PI, 0, false);
        crc2.ellipse(65, 0, 35, 50, 0, Math.PI, 0, false);
        crc2.ellipse(80, 0, 35, 60, 0, Math.PI, 0, false);
        crc2.ellipse(100, 0, 35, 60, 0, Math.PI, 0, false);
        crc2.ellipse(120, 0, 30, 30, 0, Math.PI, 0, false);
        crc2.closePath();
    
        let bushColor: string = "green"; 
        crc2.fillStyle = bushColor;
        crc2.fill();

        crc2.restore();
    }

    // Hintergrund einfärben
    function fillBackground(): void {
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
}
