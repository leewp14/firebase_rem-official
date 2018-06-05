
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches
            .keys()
            .then(function (keys) {
                return Promise.all(
                    keys
                        .filter(function (key) {
                            return key;
                        })
                        .map(function (key) {
                            return caches.delete(key);
                        })
                );
            })
    );
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches
            .keys()
            .then(function (keys) {
                return Promise.all(
                    keys
                        .filter(function (key) {
                            return key;
                        })
                        .map(function (key) {
                            return caches.delete(key);
                        })
                );
            })
    );
    return self.clients.claim();
});