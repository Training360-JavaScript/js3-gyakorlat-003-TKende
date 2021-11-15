function setCookie(name, value) {
    const now = new Date();
    now.setTime(now.getTime() + (1000 * 60 * 15));
    document.cookie = `${name}=${value};expires=${now.toUTCString};path=/`

}

setCookie('viewed', '5');
setCookie('uid', '354774631237');
setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');

const cookieHandler = {
    getAll() {
        let result = {};
        const tokens = document.cookie.split('; ')
        for (let i = 0; i < tokens.length; i++) {
            let key = tokens[i].split('=')[0];
            let value = tokens[i].split('=')[1];
            result[key] = value;
        }

        return result
    },
    toSessionStorage() {
        const tokens = document.cookie.split('; ')
        for (let i = 0; i < tokens.length; i++) {
            let key = tokens[i].split('=')[0];
            let value = tokens[i].split('=')[1];
            sessionStorage.setItem(key, value)
        }

    },
    flush() {
        const tokens = document.cookie.split('; ')
        for (let i = 0; i < tokens.length; i++) {
            let key = tokens[i].split('=')[0];
            document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`
        }

    }
}

export { cookieHandler };