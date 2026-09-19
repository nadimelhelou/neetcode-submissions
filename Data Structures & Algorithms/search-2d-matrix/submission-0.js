class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        var rows = matrix.length;
        var cols = matrix[0].length;
        var l = 0;
        var r = rows - 1;
        var m;

        while (l <= r) {
            m = Math.floor((l+r)/2);

            if (matrix[m][0] > target) r = m - 1;
            else if (matrix[m][cols-1] < target) l = m + 1;
            else break;
        }
        var corRow = m;
        l = 0;
        r = cols - 1;
        while (l <= r) {
            var m = Math.floor((l+r)/2);

            if (matrix[corRow][m] > target) r = m - 1;
            else if (matrix[corRow][m] < target) l = m + 1;
            else return true;
        }
        return false;
    }
}
