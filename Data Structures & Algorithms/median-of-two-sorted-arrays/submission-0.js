class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let [A, B] = [nums1, nums2];
        // Ensure A is always the smaller array
        if (B.length < A.length) [A, B] = [B, A];

        const total = A.length + B.length;
        const half = Math.floor(total / 2);

        let l = 0;
        let r = A.length;

        while (l <= r) {
            const i = Math.floor((l + r) / 2); // partition in A
            const j = half - i;               // partition in B

            // Get elements around partition boundaries (use Infinity for out-of-bounds)
            const Aleft = i > 0 ? A[i - 1] : -Infinity;
            const Aright = i < A.length ? A[i] : Infinity;

            const Bleft = j > 0 ? B[j - 1] : -Infinity;
            const Bright = j < B.length ? B[j] : Infinity;

            // Check if partition is valid
            if (Aleft <= Bright && Bleft <= Aright) {
                // Odd total length: median is min of right partition
                if (total % 2 !== 0) {
                    return Math.min(Aright, Bright);
                }
                // Even total length: median is average of max(left) and min(right)
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
            } else if (Aleft > Bright) {
                r = i - 1; // Partition in A is too far right
            } else {
                l = i + 1; // Partition in A is too far left
            }
        }
    }
}