function languageChange(e) {
    let ZH = document.querySelector('#chinese')
    let EN = document.querySelector('#english')
    if (e) {
        ZH.className = 'active'
        EN.className = ''
    } else {
        EN.className = 'active'
        ZH.className = ''
    }
}