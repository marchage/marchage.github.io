// ==UserScript==
// @name         🧰🛠🔬 . . . [GM-Utils]
// @version      1.0.2
// @author       ***
// @match        *://*/*
// ==/UserScript==

/** Async setTimeout: instead of nesting setTimeouts, async->await them in an async function */
function setAsyncTimeout(cb, timeout = 0) {
    return new Promise(resolve => {
        setTimeout(() => {
            cb()
            resolve()
        }, timeout)
    })
}

/** because in some userscripts in some browsers browser.downloads.download does not work */
async function GM_download_alt(url, name) {
    if (url == null) return;

    const res = await fetch(url) //.then(res => { if (!res.ok) throw new Error("Not 2xx response", {cause: response}); else return res })
    const resBuf = await res.arrayBuffer()
    const resBlob = new Blob([resBuf], { type: 'application/octet-stream' })
    const href = URL.createObjectURL(resBlob)
    const a = document.createElement('a')
    a.setAttribute('href', href)
    a.setAttribute('download', name != null ? name : 'filename')
    document.documentElement.appendChild(a)
    const e = new MouseEvent('click')
    a.dispatchEvent(e)
    document.documentElement.removeChild(a)
    return setAsyncTimeout(() => {
        URL.revokeObjectURL(url)
        if ('close' in resBlob) resBlob.close()
        // delete resBlob // not allowed
    }, 1500)
}
