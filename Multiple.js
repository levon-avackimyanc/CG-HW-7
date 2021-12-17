function Mult_Mv(M,v){
    var res = [];
    for (var i = 0; i < 4; ++i){
        res.push(0);
        for (var j = 0; j < 4; ++j){
            res[i] = res[i] + M[i*4+j] * v[j];
        }
    }
    return res;
}