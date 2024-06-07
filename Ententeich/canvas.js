"use strict";
var L09_Pond;
(function (L09_Pond) {
    window.addEventListener("load", handleLoad);
    let clouds = [];
    let ducks = [];
    let tails = [];
    let flamingos = [];
    let ladybugs = [];
    function handleLoad(_event) {
        // Zugriff auf das Canvas-Element
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Pond.crc2 = canvas.getContext("2d");
        // Ladybugs generieren
        for (let i = 0; i < 5; i++) {
            let randomX = Math.random() * canvas.width;
            let randomY = Math.random() * canvas.height;
            let ladybug = new L09_Pond.Ladybug(randomX, randomY);
            ladybugs.push(ladybug);
        }
        // Clouds random auf x und y zeichnen
        for (let i = 0; i < 5; i++) {
            let cloud = new L09_Pond.Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
        }
        // Tails generieren
        for (let i = 0; i < 3; i++) {
            let tail = new L09_Pond.Tail(350 + Math.random() * 50, 330 + Math.random() * 80, new L09_Pond.Vector(1, 0)); // Startposition
            tails.push(tail);
        }
        // Ducks generieren
        for (let i = 0; i < 3; i++) {
            let duck = new L09_Pond.Duck(350 + Math.random() * 50, 400 + Math.random() * 50, new L09_Pond.Vector(1, 0)); // Startposition
            ducks.push(duck);
        }
        //Flamingo generieren
        for (let i = 0; i < 4; i++) {
            let randomX = 10 + Math.random() * 250; // Zufällige x-Position zwischen 10 und 50
            let randomY = 300 + Math.random() * 250; // Zufällige y-Position zwischen 300 und 550
            let flamingo = new L09_Pond.Flamingo(randomX, randomY);
            flamingos.push(flamingo);
        }
        setInterval(animate, 20);
    }
    function animate() {
        drawBackround();
        for (let i = 0; i < clouds.length; i++) {
            clouds[i].move();
            clouds[i].draw();
        }
        for (let i = 0; i < tails.length; i++) {
            tails[i].move();
            tails[i].draw();
        }
        for (let i = 0; i < ducks.length; i++) {
            ducks[i].move();
            ducks[i].draw();
        }
        for (let flamingo of flamingos) {
            flamingo.move();
            flamingo.draw();
        }
        for (let i = 0; i < ladybugs.length; i++) {
            ladybugs[i].move();
            ladybugs[i].draw();
        }
    }
    function drawBackround() {
        fillBackground();
        sun();
        lake();
        mountain();
        bush(100, 320);
        bush(300, 300);
        bush(460, 320);
        drawTree();
    }
    function drawTree() {
        L09_Pond.crc2.save();
        L09_Pond.crc2.translate(40, 300);
        // Stamm
        L09_Pond.crc2.beginPath();
        L09_Pond.crc2.rect(-10, 0, 20, 50);
        L09_Pond.crc2.closePath();
        let trunkColor = "#8B4513";
        L09_Pond.crc2.fillStyle = trunkColor;
        L09_Pond.crc2.fill();
        // Blätter
        L09_Pond.crc2.beginPath();
        L09_Pond.crc2.ellipse(0, -20, 35, 60, 0, 0, 2 * Math.PI);
        L09_Pond.crc2.ellipse(0, -50, 30, 50, 0, 0, 2 * Math.PI);
        L09_Pond.crc2.ellipse(0, -70, 25, 40, 0, 0, 2 * Math.PI);
        L09_Pond.crc2.closePath();
        let leafColor = "green";
        L09_Pond.crc2.fillStyle = leafColor;
        L09_Pond.crc2.fill();
        L09_Pond.crc2.restore();
    }
    function bush(_x, _y) {
        L09_Pond.crc2.save();
        L09_Pond.crc2.translate(_x, _y);
        // Busch zeichnen
        L09_Pond.crc2.beginPath();
        L09_Pond.crc2.ellipse(30, 0, 10, 20, 0, Math.PI, 0, false);
        L09_Pond.crc2.ellipse(65, 0, 35, 50, 0, Math.PI, 0, false);
        L09_Pond.crc2.ellipse(80, 0, 35, 60, 0, Math.PI, 0, false);
        L09_Pond.crc2.ellipse(100, 0, 35, 60, 0, Math.PI, 0, false);
        L09_Pond.crc2.ellipse(120, 0, 30, 30, 0, Math.PI, 0, false);
        L09_Pond.crc2.closePath();
        let bushColor = "green";
        L09_Pond.crc2.fillStyle = bushColor;
        L09_Pond.crc2.fill();
        L09_Pond.crc2.restore();
    }
    // Hintergrund einfärben
    function fillBackground() {
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
        let centerX = 430;
        let centerY = 410;
        let radiusX = 160;
        let radiusY = 90;
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
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=canvas.js.map