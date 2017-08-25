ssf.app.ready()
.then(() => {
    newWindowBtn.onclick = function() 
    {
        console.log("onclick()");

        const height=400;
        const width=600;

        win = new ssf.Window({
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
    };
})
.catch((ex) => {
            console.log("catch() - " + ex);
            exceptionText.innerText = ex;
});
