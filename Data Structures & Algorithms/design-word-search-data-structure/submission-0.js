class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /** 
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for (const char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char];
        }
        curr.isWord = true;
    }

    /** 
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (index, node) => {
            let curr = node;
            
            for (let i = index; i < word.length; i++) {
                const char = word[i];
                
                if (char === '.') {
                    // If we hit a '.', we must try all possible children at this level
                    for (const childKey in curr.children) {
                        if (dfs(i + 1, curr.children[childKey])) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    if (!curr.children[char]) {
                        return false;
                    }
                    curr = curr.children[char];
                }
            }
            
            return curr.isWord;
        };

        return dfs(0, this.root);
    }
}