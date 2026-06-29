function initializeHeader() {

    const btnBrowse = document.getElementById("btnBrowse");

    if (!btnBrowse) return;

    btnBrowse.addEventListener("click", () => {

        console.log("Browse clicked");

    });

}