ssf.app.ready()
    .then(() => {
        newWindowBtn.onclick = function () {
            console.log("onclick()");

            const height = 400;
            const width = 600;

            const window = new ssf.Window({
                alwaysOnTop: true,
                child: true,
                center: false,
                frame: true,
                height,
                maximizable: true,
                minimizable: true,
                name: "bert",
                resizable: true,
                show: true,
                skipTaskbar: false,
                width,
                shadow: true,
                url: ""
            });

            // const closeWindowBtn = document.getElementById('closeWindowBtn');
            // const hideWindowBtn = document.getElementById('hideWindowBtn');
            // const showWindowBtn = document.getElementById('showWindowBtn');
            // const focusWindowBtn = document.getElementById('focusWindowBtn');
            // const blurWindowBtn = document.getElementById('blurWindowBtn');
            // const maximizeWindow = document.getElementById('maximizeWindowBtn');
            // const unmaximizeWindow = document.getElementById('unmaximizeWindowBtn');
            // const minimizeWindow = document.getElementById('minimizeWindowBtn');
            // const restoreWindow = document.getElementById('restoreWindowBtn');

            closeWindowBtn.onclick = () => {
                window.close()
                    .catch((error) => {
                        console.log(error);
                        exceptionText.innerText = error;
                    });
            };

            hideWindowBtn.onclick = () => {
                window.hide()
                    .catch((error) => {
                        console.log(error);
                        exceptionText.innerText = error;
                    });
            };

            showWindowBtn.onclick = () => {
                window.show()
                    .catch((error) => {
                        console.log(error);
                        exceptionText.innerText = error;
                    });
            };

            focusWindowBtn.onclick = () => {
                window.focus()
                    .catch((error) => {
                        console.log(error);
                        exceptionText.innerText = error;
                    });
            };

            blurWindowBtn.onclick = () => {
                window.blur()
                    .catch((error) => {
                        console.log(error);
                        exceptionText.innerText = error;
                    });
            };

            maximizeWindowBtn.onclick = () => {
                window.maximize()
                    .catch((error) => {
                        console.log(error);
                        exceptionText.innerText = error;
                    });
            };

            unmaximizeWindowBtn.onclick = () => {
                window.unmaximize()
                    .catch((error) => {
                        console.log(error);
                        exceptionText.innerText = error;
                    });
            };

            minimizeWindowBtn.onclick = () => {
                window.minimize()
                    .catch((error) => {
                        console.log(error);
                        exceptionText.innerText = error;
                    });
            };

            restoreWindowBtn.onclick = () => {
                window.restore()
                    .catch((error) => {
                        console.log(error);
                        exceptionText.innerText = error;
                    });
            };

            const windowId = document.getElementById('windowId');
            windowId.innerText = window.id;
        };
    })
    .catch((ex) => {
        console.log("catch() - " + ex);
        exceptionText.innerText = ex;
    });
