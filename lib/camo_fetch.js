function camoFetch(url, options) {
    let index = 0;

    function doFetch() {
        const camoUrl = camoAddrs[index % camoAddrs.length] + "?ProxyUrl=" + encodeURIComponent(url);
        return fetch(camoUrl, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Request failed");
                }
                return response;
            })
            .catch(error => {
                index++;
                if (index < camoAddrs.length) {
                    return doFetch();
                } else {
                    throw new Error("All Camo addresses failed");
                }
            });
    }

    return doFetch();
}