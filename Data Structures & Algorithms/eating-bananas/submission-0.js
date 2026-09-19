class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        var minSpeed = Math.max(...piles);
        var l = 1;
        var r = minSpeed;

        while (l <= r) {
            var m = Math.floor((l+r)/2);

            var hours = 0;
            for (var i=0; i<piles.length; i++) {
                hours += Math.ceil(piles[i] / m);
            }
            if (hours <= h) {
                minSpeed = Math.min(m, minSpeed);
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return minSpeed;
    }
}
