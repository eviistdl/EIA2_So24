"use strict";
var L09_Pond;
(function (L09_Pond) {
    window.addEventListener("load", handleLoad);
    let clouds;
    function handleLoad(_event) {
        // Zugriff auf das Canvas-Element
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Pond.crc2 = canvas.getContext("2d");
        //Cloud random auf x und y zeichnen
        for (let i = 0; i < 10; i++) {
            let cloud = new L09_Pond.Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
        }
        drawBackround();
        setInterval(animate, 40);
        /*//Zeichnen der Elemente
        fillBackground();
        sun();
        lake();
        mountain();*/
    }
    function animate() {
        console.log("animate");
        drawBackround();
        for (let i = 0; i < 10; i++) {
            clouds[i].move();
            clouds[i].draw();
        }
    }
    function drawBackround() {
        fillBackground();
        sun();
        lake();
        mountain();
    }
    // Hintergrund einfärben
    function fillBackground() {
        console.log("Background");
        // Grünen Hintergrund zeichnen
        let grassColor = "#90E162";
        L09_Pond.crc2.fillStyle = grassColor;
        L09_Pond.crc2.fillRect(0, 0, 600, 600);
        // Blaues Rechteck zeichnen
        let skyColor = "#48BCE1";
        L09_Pond.crc2.fillStyle = skyColor;
        L09_Pond.crc2.fillRect(0, 0, 600, 250);
    }
    function sun() {
        // Mittelpunkt und Durchmesser des Kreises
        let centerX = 500;
        let centerY = 100;
        let radius = 40;
        // Kreis zeichnen
        L09_Pond.crc2.beginPath();
        L09_Pond.crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        L09_Pond.crc2.closePath();
        // Farbe 
        let circleColor = "yellow"; // Gelbe Farbe
        L09_Pond.crc2.fillStyle = circleColor;
        L09_Pond.crc2.fill();
        // Sonnenstrahlen zeichnen
        let lineLength = 20;
        L09_Pond.crc2.strokeStyle = "yellow";
        for (let i = 0; i < 8; i++) { //Schleife, um 8 Linien zu zeichnen
            let angle = (i / 8) * (2 * Math.PI); // Winkel für die Linie 1/8 von 365 Grad
            let startX = centerX + radius * Math.cos(angle);
            let startY = centerY + radius * Math.sin(angle);
            let endX = startX + lineLength * Math.cos(angle);
            let endY = startY + lineLength * Math.sin(angle);
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(startX, startY);
            L09_Pond.crc2.lineTo(endX, endY);
            L09_Pond.crc2.stroke();
            L09_Pond.crc2.closePath();
        }
    }
    function lake() {
        // Mittelpunkt und Größe der Ellipse
        let centerX = 400;
        let centerY = 400;
        let radiusX = 150;
        let radiusY = 75;
        // Ellipse zeichnen
        L09_Pond.crc2.beginPath();
        L09_Pond.crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        L09_Pond.crc2.closePath();
        let lakeColor = "#4676E0";
        L09_Pond.crc2.fillStyle = lakeColor;
        L09_Pond.crc2.fill();
    }
    function mountain() {
        // Berg zeichnen
        L09_Pond.crc2.beginPath();
        L09_Pond.crc2.moveTo(200, 250);
        L09_Pond.crc2.quadraticCurveTo(400, -40, 600, 250); // Bogen für den Berg
        L09_Pond.crc2.closePath();
        let mountainColor = "#707070";
        L09_Pond.crc2.fillStyle = mountainColor;
        L09_Pond.crc2.fill();
        // 2. Berg zeichnen
        L09_Pond.crc2.beginPath();
        L09_Pond.crc2.moveTo(0, 250);
        L09_Pond.crc2.quadraticCurveTo(150, 100, 370, 250); // Bogen für den Berg
        L09_Pond.crc2.closePath();
        let mountainColorTwo = "gray";
        L09_Pond.crc2.fillStyle = mountainColorTwo;
        L09_Pond.crc2.fill();
    }
    /*function cloud(_x:number, _y: number): void {
        crc2.save();
        // Ursprung Wolke 2
        crc2.translate(_x, _y);
    
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
        crc2.restore();

        //Ursprung Wolke 2
        crc2.restore();
        
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

        
        
    }*/
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=canvas.js.map