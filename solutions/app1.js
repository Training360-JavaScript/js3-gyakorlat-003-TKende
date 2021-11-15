function setCookie(value) {
    const now = new Date();
    now.setTime(now.getTime() + (1000 * 60 * 15));
    document.cookie = `token=${value};expires=${now.toUTCString};path=/`

}

export default setCookie;