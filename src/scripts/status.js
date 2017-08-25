ssf.app.ready()
.then(() => {
    console.log("ready()");

    const ssfStatus = document.getElementById('ssfStatusId')
    if (ssfStatus != null) {
        ssfStatus.innerText = 'yes';
    }
});
