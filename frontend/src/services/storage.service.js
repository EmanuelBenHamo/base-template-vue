// for sesstion storage
function sessionStore(key, value) {
    let strValue = JSON.stringify(value);
    sessionStorage.setItem(key, strValue);
}

function sessionLoad(key) {
    let value = sessionStorage.getItem(key);
    return JSON.parse(value);
}

function sessionClear(key) {
    sessionStorage.removeItem(key);
}

// for local storage
function localStore(key, any) {
    let strValue = JSON.stringify(value);
    localStorage.setItem(key, strValue);
}

function localLoad(key) {
    let value = localStorage.getItem(key);
    return JSON.parse(value);
}

function localClear(key) {
    localStorage.removeItem(key);
}

module.exports = {
    sessionStore,
    sessionLoad,
    sessionClear,
    localStore,
    localLoad,
    localClear
}