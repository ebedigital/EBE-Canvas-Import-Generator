async function loadComponent(containerId, componentPath) {

    try {

        const response = await fetch(componentPath);

        if (!response.ok) {
            throw new Error(`Failed to load: ${componentPath}`);
        }

        const html = await response.text();

        document.getElementById(containerId).innerHTML = html;

        console.log(`Loaded: ${componentPath}`);

    } catch (error) {

        console.error(error);

    }

}

async function initializeApp() {


    await loadComponent(
        "header-container",
        "components/Header/header.html"
    );

    await loadComponent(
        "sidebar-container",
        "components/Sidebar/sidebar.html"
    );

    await loadComponent(
    "dragDrop-container",
    "components/DragDrop/dragDrop.html"
);

    await loadComponent(
        "schoolstable-container",
        "components/SchoolsTable/schoolstable.html"
    );

    await loadComponent(
        "validation-container",
        "components/ValidationPanel/validationpanel.html"
    );

    await loadComponent(
        "schooldetails-container",
        "components/SchoolDetails/schooldetails.html"
    );

    await loadComponent(
        "progress-container",
        "components/ProgressPanel/progresspanel.html"
    );

    await loadComponent(
        "footer-container",
        "components/Footer/footer.html"
    );

    initializedragDrop();

    console.log("UI Loaded Successfully");


}

initializeApp();