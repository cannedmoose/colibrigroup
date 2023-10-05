(() => {

    function decorateLinks() {
        if(!!!document.FlareTrk) {
            window.requestAnimationFrame(decorateLinks);
            return;
        }

        const cookie = document.cookie.match(`flaretrk=(.*?)(;|$)`);
        document.querySelectorAll("a[href^='https://teach-now.com/apply-now']").forEach(link => {
            const url = new URL(link.getAttribute("href"));
            url.searchParams.set("flrtrk_cookie", cookie[1]);
            link.setAttribute("href", url);
        });
    }

    window.decorateLinks = decorateLinks;

    document.addEventListener("DOMContentLoaded", (event) => {
        decorateLinks();
    });

    decorateLinks();
})()