ssf.app.ready()
.then(() => {
    const displayId = document.getElementById('displayId')
    const displayBounds = document.getElementById('displayBounds')
    const displayPrimary = document.getElementById('displayPrimary')
    const displayRotation = document.getElementById('displayRotation')
    const displayScale = document.getElementById('displayScale')

    ssf.Screen.getDisplays()
        .then((value) => {

            console.log("getDisplays()");

            if (value == null) {
                console.log("no value");
            }

            if (value[0] == null) {
                console.log("no value[0]");
            }

            displayId.innerText = value[0].id;
            displayBounds.innerText = value[0].bounds.x + ', ' + value[0].bounds.y + ', ' + value[0].bounds.width + ', ' + value[0].bounds.height;
            displayPrimary.innerText = value[0].primary;
            displayRotation.innerText = value[0].rotation;
            displayScale.innerText = value[0].scaleFactor;
        })
        .catch((ex) => {
            console.log("catch() - " + ex);
            exceptionText.innerText = ex;
        });
})
.catch((ex) => {
    console.log("catch() - " + ex);
    exceptionText.innerText = ex;
});
