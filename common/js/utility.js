/**
 * Created by theacidmc on 15/02/2017.
 */

    var optcImgBaseURL = "http://onepiece-treasurecruise.com/wp-content/uploads/";



    function getCharListByRarity(rarity, characters) {
        var ids = [] ;
        for (var i=0 ; i<characters.length ; i++){
            if(characters[i][3]==rarity){
                ids.push(characters[i]);
            }
        }
        return ids;
    }


    function checkName(name) {

        var avoidable_elem = ["Porc","Crab","Turtle","Penguin","Group Leader","Lobster"];
        var check = false;
        for (var i = 0 ; avoidable_elem.length ; i++){

            check = check || name.indexOf(avoidable_elem[i]) !== -1;
        }
        return check;
    }


    function getIdListByRarity(rarity, characters) {
        var ids = [] ;
        for (var i=0 ; i<characters.length ; i++){

            if(i>=104 && i<114) {continue;}  // turtles;
            if(i>=346 && i<351) {continue;}  // Porcs;
            if(i>=299 && i<304) {continue;}  // lobsters;
            if(i==82 || i==265 || i==1179 || i==263) {continue;}  // raimbow evolvers
            if(i==116 || i==117) {continue;}  // sea horses
            if(i>=169 && i<173) {continue;}  // group leader
            if(i>=590 && i<595) {continue;}  // hime
            if(i>=99 && i<104){continue;}    // dragons
            if(i>=1145 && i<1148){continue;}  // impel down mob
            if(i>=268 && i<288){continue;} // fighter mob armed
            if(i==574 || i==1452 ) {continue;}  // not exists
            if(i>=193 && i<197 ) {continue;} // navy hq
            if(i>=241 && i<246) {continue;} // baroque


            if(characters[i][3]==rarity){
                ids.push(i+1);
            }
        }
        return ids;
    }


    function getImgSrcById(id){

        if(id<10){
            return optcImgBaseURL + "f000" + id + ".png>";
        }
        if(id >=10 && id<100){
            return optcImgBaseURL + "f00" + id + ".png>";
        }
        if(id >=100 && id<1000){
            return optcImgBaseURL + "f0" + id + ".png>";
        }
        if(id >=1000){
            return optcImgBaseURL + "f" + id + ".png>";
        }
    }


