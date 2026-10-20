class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        var rows = heights.length;
        var cols = heights[0].length;

        var canReachPacific = new Set();
        var canReachAtlantic = new Set();

        var dfs = (r, c, visited, prevHeight) => {
            if(visited.has(`${r},${c}`) ||
             r >= rows || c >= cols || r<0 || c<0 ||
             heights[r][c] < prevHeight) {
                return;
            }
            visited.add(`${r},${c}`);
            dfs(r+1,c,visited,heights[r][c]);
            dfs(r-1,c,visited,heights[r][c]);
            dfs(r,c+1,visited,heights[r][c]);
            dfs(r,c-1,visited,heights[r][c]);
        }

        for (var j=0; j<cols; j++) {
            dfs(0, j, canReachPacific, heights[0][j]);
            dfs(rows-1, j, canReachAtlantic, heights[rows-1][j]);
        }
        for (var i=0; i<rows; i++) {
            dfs(i, 0, canReachPacific, heights[i][0]);
            dfs(i, cols-1, canReachAtlantic, heights[i][cols-1]);
        }
        var out = [];
        for (var i=0; i<rows; i++) {
            for (var j=0; j<cols; j++) {
                if(canReachPacific.has(`${i},${j}`) && 
                 canReachAtlantic.has(`${i},${j}`)) {
                    out.push([i,j]);
                 }
            }
        }
        return out;
    }
}
