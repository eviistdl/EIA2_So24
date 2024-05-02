// Warte darauf, dass das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {

    // Zugriff auf das Canvas-Element
    let canvas: HTMLCanvasElement = document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        function fillBackround (): void{
            crc2.fillStyle = "#008000";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        function drawCat (): void {
            let randomNumber: number = Math.random();
let a: number =  150 + 50*randomNumber;
            crc2.translate(300,400)
            crc2.beginPath();
            crc2.moveTo(250,0);
            crc2.lineTo(350,0);
            crc2.lineTo(350,-200);
            crc2.lineTo(330,-170);
            crc2.lineTo(270,-170);
            crc2.lineTo(250,-200);
            crc2.closePath();
            //crc2.lineTo(a,0);
            //crc2.lineTo(140,20);
            //crc2.lineTo(60,20);
            //crc2.lineTo(50,0);
            //crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.ellipse(320, -140, 5, 5, 0, 365, 0);
            crc2.closePath();
            crc2.stroke();

            crc2.beginPath();
            crc2.ellipse(280, -140, 5, 5, 0, 365, 0);
            crc2.closePath();
            crc2.stroke();

        } 

        fillBackround();
        drawCat(); 

});



