function loadFloridaTemplate(file) {

    console.log("==========================");
    console.log("Loading Florida Template");
    console.log(file);
    console.log("==========================");

    const reader = new FileReader();

    reader.onload = function (e) {

        const data = new Uint8Array(e.target.result);

        const workbook = XLSX.read(data, {
            type: "array"
        });

        console.log("Canvas Template Loaded");

        console.log(workbook);

        console.log("Available Sheets");

        console.log(workbook.SheetNames);

    };

    reader.readAsArrayBuffer(file);

}