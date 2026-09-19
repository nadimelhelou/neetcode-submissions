class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        var vals = this.keyStore.get(key) || [];
        vals.push([value, timestamp]);
        this.keyStore.set(key, vals);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        var vals = this.keyStore.get(key);
        if (!vals || vals.length === 0) return "";
        var l=0;
        var r=vals.length-1;

        if(timestamp >= vals[r][1]) return vals[r][0];

        while (l<=r) {
            var m = Math.floor((l+r)/2);
            
            if (timestamp === vals[m][1]) return vals[m][0];
            else if (timestamp > vals[m][1]) l = m+1;
            else r = m-1;
        }
        return r >= 0 ? vals[r][0] : "";
    }
}
