const form = document.getElementById("form");
const qrCode = document.getElementById("qrcode");
  //when tap the button
const onTapbutton = (e) => {
    e.preventDefault();
    cleanUI();
    const url = document.getElementById("qrurl").value;
    const size = document.getElementById("size").value;

   // console.log(url, size);
    if (url === ""){
        alert("please enter valid URL");
    } else {
        showSpinner();
        
        setTimeout(() => {
            generateQRcode(url,size);
            hideSpinner();
            setTimeout(() => {
                const saveUrl = qrCode.querySelector("img").src;
                createSaveBtn(saveUrl);

            },50);
        }, 1500);
       
    }


};

//generate qr code
const generateQRcode = (url,size) => {
    var qrcode = new QRCode("qrcode", {
        text: url,
        width:size,
        height: size,
       
    });
}

//clean qr code
const cleanUI = function () {
    qrCode.innerHTML = "";
    const saveBtn = document.getElementById("save-btn");
  if (saveBtn) {
    saveBtn.remove();
  }
}

//create save button
const createSaveBtn = (saveUrl) => {
    const link = document.createElement("a");
    link.href = saveUrl;
    link.download = "qrcode";
    link.classList = "download-btn";
    link.id="save-btn"
    link.innerHTML = "Save QR code";
    document.getElementById("QR-code").appendChild(link);
}

//show spinner
const showSpinner = function () {
    document.getElementById("spinner").style.display = "block";
}
//hide spinner
const hideSpinner = function () {
    document.getElementById("spinner").style.display = "none";
}

hideSpinner();
form.addEventListener("submit", onTapbutton);