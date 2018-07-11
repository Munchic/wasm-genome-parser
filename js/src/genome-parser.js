window.onload = () => {
  let fileInput = document.getElementById("fileInput");

  fileInput.addEventListener("change", () => {
    let reader = new FileReader();
    const file = unzip(fileInput.files[0]);

    reader.onload = () => {
      let data = reader.result;
      parseAndWrite(data);
    }

    reader.readAsText(file);
  })
};

const unzip = (file) => {
  return file;
};

const parseAndWrite = (data) => {
  let copyOfData = data + "\n";

  // rsIDs should be stored in descending order of their positions to emulate stack-like extraction
  const rsIds = ['rs79373928', 'rs12124819', 'rs9283150'];

  let snpsArray = [];
  
  while (copyOfData.length > 0 && rsIds.length > 0) {
    const rsId = copyOfData.slice(0, copyOfData.indexOf('\t'));
    line = copyOfData.slice(0, copyOfData.indexOf('\n') + 1);

    if (rsId == rsIds[rsIds.length - 1]) {
      snpsArray.push(line);
      rsIds.pop();
    }

    copyOfData = copyOfData.replace(line, '');
  }

  writeToTmp(snpsArray);
};

const writeToTmp = (snpsArray) => {
  console.log(snpsArray);
  console.log('Parsed!');
  // https://stackoverflow.com/questions/20944802/how-to-create-and-write-a-temporary-file-in-pure-javascript
};
