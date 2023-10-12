(() => {

    function undecorateLinks() {
        if (!!!document.FlareTrk) {
            window.requestAnimationFrame(undecorateLinks);
            return;
        }

        const params = (new URL(document.location)).searchParams;

        document.FlareTrk.data.drillData.channel = decodeURIComponent(params.get("a_channel") || document.FlareTrk.data.drillData.channel);
        document.FlareTrk.data.drillData.drillDown1 = decodeURIComponent(params.get("a_drillDown1") || document.FlareTrk.data.drillData.drillDown1);
        document.FlareTrk.data.drillData.drillDown2 = decodeURIComponent(params.get("a_drillDown2") || document.FlareTrk.data.drillData.drillDown2);
        document.FlareTrk.data.drillData.drillDown3 = decodeURIComponent(params.get("a_drillDown3") || document.FlareTrk.data.drillData.drillDown3);
        document.FlareTrk.data.landing_url = decodeURIComponent(params.get("a_landing_url") || document.FlareTrk.data.landing_url);
        document.FlareTrk.data.landing_page_group = decodeURIComponent(params.get("a_landing_page_group") || document.FlareTrk.data.landing_page_group);

        console.log("Got new data", document.FlareTrk.data);
        document.FlareTrk.setData(document.FlareTrk.data);
        document.FlareTrk.repop()
    }

    window.undecorateLinks = undecorateLinks;

    document.addEventListener("DOMContentLoaded", (event) => {
        undecorateLinks();
    });

    undecorateLinks();
})()