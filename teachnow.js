(() => {

    function undecorateLinks() {
        if(!!!document.FlareTrk) {
            window.requestAnimationFrame(undecorateLinks);
            return;
        }

        const params = (new URL(document.location)).searchParams;
        const cookie = params.get("flrtrk_cookie");

        const data = JSON.parse(window.atob(decodeURIComponent(cookie)));

        document.FlareTrk.data = data;
        console.log("Got new data", data);
        document.FlareTrk.setData(data);
    }

    window.undecorateLinks = undecorateLinks;

    document.addEventListener("DOMContentLoaded", (event) => {
        undecorateLinks();
    });

    undecorateLinks();
})()