class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";
        if (t.length === 0) return "";

        var sMap = new Map();
        var tMap = new Map();
        var resL = -1;
        var resR = -1;
        var resLen = Infinity;
        var l=0;
        for (var i=0; i<t.length; i++) {
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
        }
        var met = 0;
        var need = tMap.size;

        for (var r=0; r<s.length; r++) {
            sMap.set(s[r], (sMap.get(s[r]) || 0) + 1);

            if (sMap.get(s[r]) === tMap.get(s[r])) met++;
            
            while (met === need) {
                if (r-l+1 < resLen) {
                    resLen = r-l+1;
                    resL = l;
                    resR = r;
                }
                sMap.set(s[l], sMap.get(s[l]) - 1);
                if (sMap.get(s[l]) < tMap.get(s[l])) met--;
                l++;
            }
        }
        return s.substring(resL,resR+1);
    }
}
