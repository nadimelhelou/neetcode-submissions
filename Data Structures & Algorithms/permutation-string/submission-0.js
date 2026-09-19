class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        for (var i=0; i<s1.length; i++) {
            s1Count[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            s2Count[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        }

        var matches = 0;
        for (var i=0; i<26; i++) if (s1Count[i] === s2Count[i]) matches++;

        var l = 0;
        for (var r=s1.length; r<s2.length; r++) {
            if (matches === 26) return true;

            var curR = s2[r].charCodeAt(0) - 'a'.charCodeAt(0);
            s2Count[curR]++;
            if (s1Count[curR] === s2Count[curR]) matches++;
            else if (s1Count[curR]+1 === s2Count[curR]) matches--;

            var curL = s2[l].charCodeAt(0) - 'a'.charCodeAt(0);
            s2Count[curL]--;
            if (s1Count[curL] === s2Count[curL]) matches++;
            else if (s1Count[curL]-1 === s2Count[curL]) matches--;

            l++;
            
        }
        return matches === 26;
    }
}
