const writeToTmp = () => {

};

const parseAndWrite = (data) => {
  const copyOfData = data;
  const rsIds = new Queue(['rs12903', 'rs29034', 'rs123003']);

  let snpsArray = [];
  
  while (copyOfData.length > 0) {
    const rsId = copyOfData.slice(0, copyOfData.indexOf(','));

  }

  writeToTmp(snpsArray);
};

window.onload = () => {
  let fileInput = document.getElementById("fileInput");

  fileInput.addEventListener("change", () => {
    let reader = new FileReader();
    const file = fileInput.files[0];
    reader.onload = () => {
      let data = reader.result;
      console.log(data);
    }
    reader.readAsText(file);
    parseAndWrite(data);
  })
};
