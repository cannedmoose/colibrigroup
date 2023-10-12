(() => {

    function decorateLinks() {
        if(!!!document.FlareTrk?.data) {
            window.requestAnimationFrame(decorateLinks);
            return;
        }

        document.querySelectorAll("a[href^='https://teach-now.com/apply-now']").forEach(link => {
            const url = new URL(link.getAttribute("href"));
            
            url.searchParams.set("a_channel", document.FlareTrk.data.drillData.channel);
            url.searchParams.set("a_drillDown1", document.FlareTrk.data.drillData.drillDown1);
            url.searchParams.set("a_drillDown2", document.FlareTrk.data.drillData.drillDown2);
            url.searchParams.set("a_drillDown3", document.FlareTrk.data.drillData.drillDown3);
            url.searchParams.set("a_landing_url", document.FlareTrk.data.landing_url);
            url.searchParams.set("a_landing_page_group", document.FlareTrk.data.landing_page_group);
            link.setAttribute("href", url);
        });
    }

    window.decorateLinks = decorateLinks;

    document.addEventListener("DOMContentLoaded", (event) => {
        decorateLinks();
    });

    decorateLinks();
})()