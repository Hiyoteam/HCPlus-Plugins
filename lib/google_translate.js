window.camoFetch = (url, options) => {
    let index = 0;

    function doFetch() {
        const camoUrl = camoAddrs[index % camoAddrs.length] + "?proxyUrl=" + encodeURIComponent(url);
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

    const promise = doFetch();

    // 返回 promise 对象，支持 .then 回调
    if (!options || !options.await) {
        return promise;
    }

    // 如果 options 中包含 await 属性，支持 await 等待
    return (async () => {
        try {
            return await promise;
        } catch (error) {
            throw error;
        }
    })();
}
window.googleTranslate = async (translateString, language, toLanguage) => {
  try {
    let req = await camoFetch(`https://translate.cmd1152.workers.dev/?str=${encodeURIComponent(translateString)}&to=${encodeURIComponent(toLanguage)}&set=${encodeURIComponent(language)}`, { method: 'GET', await: true })
    return (await req.json()).translation[0]
  } catch (e) {
    return false;
  }
}