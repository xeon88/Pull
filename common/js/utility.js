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



    function getIdListByRarity(rarity, characters, farmable) {
        var ids = [] ;
        for (var i=0 ; i<characters.length ; i++){

            /*
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
            */

            var index = farmable.indexOf(i+1);
            if(index!==-1){
               console.log( "id : " + (i+1) +  "  farmable index : " + index);
            }
            else{
                if(characters[i][3]==rarity){
                    console.log("add : " + (i+1));
                    ids.push(i+1);
                }
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



    function getFarmableList() {

        var idsFarmable = [];
        for (var i= 0; i<window.drops['Story Island'].length ; i++){
            var island = window.drops['Story Island'][i];
            idsFarmable = idsFarmable.concat( island.thumb);
            var chapters = island.chapters;
            for(var chapter in chapters){
                idsFarmable = idsFarmable.concat(chapters[chapter]);
            }
            idsFarmable = uniq(idsFarmable);
        }



        for(var i = 0; i<window.drops['Weekly Island'].length ; i++){
            var extraIsland = window.drops['Weekly Island'][i];
            idsFarmable = idsFarmable.concat( extraIsland.drops);
        }
         idsFarmable = uniq(idsFarmable);


        for(var i = 0; i<window.drops['Fortnight'].length ; i++){
            var fortnight = window.drops['Fortnight'][i];
            console.log(fortnight);
            idsFarmable = idsFarmable.concat( fortnight.Expert);
            idsFarmable = idsFarmable.concat( fortnight.Elite);
            idsFarmable = idsFarmable.concat( fortnight['All Difficulties']);
            idsFarmable = idsFarmable.concat( fortnight['Japan']);
            idsFarmable = idsFarmable.concat( fortnight['Global']);
            idsFarmable = idsFarmable.concat( fortnight.thumb);
        }

        idsFarmable = uniq(idsFarmable);

        for(var i = 0; i<window.drops['Raid'].length ; i++){
            var raid = window.drops['Raid'][i];
            idsFarmable = idsFarmable.concat( raid.Ultimate);
            idsFarmable = idsFarmable.concat( raid.Master);
            idsFarmable = idsFarmable.concat( raid.thumb);

        }


        for(var i = 0; i<window.drops['Special'].length ; i++){
            var special = window.drops['Special'][i];
            console.log(special);
            idsFarmable = idsFarmable.concat( special['All Difficulties']);
            idsFarmable = idsFarmable.concat( special['Japan']);
            idsFarmable = idsFarmable.concat( special['Global']);
            idsFarmable = idsFarmable.concat( special.thumb);
            idsFarmable = idsFarmable.concat( special.Exhibition);
            idsFarmable = idsFarmable.concat( special.Underground);
            idsFarmable = idsFarmable.concat( special.Chaos);

        }

        idsFarmable = uniq(idsFarmable);

        // console.log(idsFarmable);
        return idsFarmable;
    }


    function uniq(a) {
        return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
        })
    }
