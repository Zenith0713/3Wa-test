let storageKey = "contacts";

function addToLocalstorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function removeFromLocaStorage(key) {
    localStorage.removeItem(key);
}

function getItemFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

export {
    addToLocalstorage,
    removeFromLocaStorage,
    getItemFromLocalStorage,
    storageKey,
};