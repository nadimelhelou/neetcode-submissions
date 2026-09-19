class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (var i=0; i<9; i++) {
            for (var j=0; j<9; j++) {
                var val = board[i][j];
                if (val === ".") continue;
                else {
                    if (rows[i].has(val)) return false;
                    else rows[i].add(val);

                    if (cols[j].has(val)) return false;
                    else cols[j].add(val);

                    var boxNum = 3*Math.floor(i/3) + Math.floor(j/3);
                    if (boxes[boxNum].has(val)) return false;
                    else boxes[boxNum].add(val);
                }
            }
        }
        return true;
    }
}
