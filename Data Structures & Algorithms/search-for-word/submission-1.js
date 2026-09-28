class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        var dfs = (r, c, wordL) => {
            if (wordL === word.length) return true;
            if (r < 0 || c < 0 ||
            r >= board.length || c >= board[0].length ||
            board[r][c] !== word[wordL]) return false;

            // Mark the current cell as visited by temporarily changing its value
            const temp = board[r][c];
            board[r][c] = '#';

            var res = dfs(r+1, c, wordL+1) || dfs(r-1, c, wordL+1) ||
                      dfs(r, c+1, wordL+1) ||dfs(r, c-1, wordL+1);
            
            // Backtrack: restore the cell's original value
            board[r][c] = temp;

            return res;
        }

        for (var i=0; i<board.length; i++) {
            for (var j=0; j<board[0].length; j++) {
                if (dfs(i, j, 0)) return true;
            }
        }
        return false;
    }
}
