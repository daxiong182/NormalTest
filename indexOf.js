~ function() {

    function myIndexOf(T) {
        //=>THTS:S
        let lenT = T.length,
            lens = this.length
        for (let i = 0; i <= lens - lenT; i++) {
            if (this.substr(i, lenT) === T) {
                res = i;
                break;
            }
        }
        return res

    }
    String.prototype.myIndexOf = myIndexOf
}()

let S = 'zhufengpeixun'

T = 'pei'

S.myIndexOf(T)