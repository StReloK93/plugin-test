export default {
    install: (app, options) => {
        // inject a globally available $translate() method
        app.config.globalProperties.$translate = (key) => {
            // retrieve a nested property in `options`
            // using `key` as the path
            const sp = key.split('.')
            
            return sp.reduce((o, i) => {
                if (o) return o[i]
            }, options)
        }
    }
}