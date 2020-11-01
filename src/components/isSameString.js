export function isSameString (_s1, _s2) {
    for (var i = 0; i < _s2.length; ++i) {
        if (_s1[i] !== _s2[i])
            return false;
    }
    return true;
    
};
export function getLastInputChar(tmp) {
    return tmp.charAt(tmp.length-1);
}
