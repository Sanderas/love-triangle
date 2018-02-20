/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    var num = 0;
    for (let i = 0; i < preferences.length; i++) {
        var k1=preferences[i];
        if (k1-1!=i){
            var k2=preferences[k1-1];
            if (k2-1!=k1-1) {
                var k3=preferences[k2-1];
                if (k3-1!=k2-1) {
                    var k4=preferences[k3-1];
                    if (k4==k1 && k3-1==i) {
                        num+=1;
                    }
                }
            }
        }
    }
    return num/3;
};
