let imgbox = document.getElementById("imgbox")
let qrimg = document.getElementById("qrimage")
let qrtxt = document.getElementById("qrtxt")


 function generateQR(){
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtxt.value;
    imgbox.classList.add("show-img")
}