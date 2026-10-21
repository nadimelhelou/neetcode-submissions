class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        var prereqMap = new Map();
        for (let i=0; i<numCourses; i++) {
            prereqMap.set(i, []);
        }

        for (const [course, prereq] of prerequisites) {
            prereqMap.get(course).push(prereq);
        }

        // All courses along the current DFS path
        var visitSet = new Set();

        var dfs = (course) => {
            if (visitSet.has(course)) return false;
            if (prereqMap.get(course).length === 0) return true;
            visitSet.add(course);
            for (const pre of prereqMap.get(course)) {
                if (!dfs(pre)) return false;
            }
            visitSet.delete(course);
            prereqMap.set(course, []);
            return true;
        }
        
        for (let i=0; i<numCourses; i++) {
            if (!dfs(i)) return false;
        }
        return true;
    }
}
