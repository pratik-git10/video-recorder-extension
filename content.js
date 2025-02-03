const cameraId = "my-camera";

const camera = document.getElementById("cameraId");

if (camera) {
  console.log("cameara is there", camera);
} else {
  const cameraEl = document.createElement("div");
  cameraEl.id = cameraId;
  cameraEl.setAttribute(
    "style",
    `position:fixed;
     width:200px; 
     height:200px; 
     border-radius:100px; 
     background:gray
     z-index:999999`
  );
  document.body.appendChild(cameraEl);
}
