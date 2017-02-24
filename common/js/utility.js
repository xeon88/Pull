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
            var index = farmable.indexOf(i+1);
            if(index==-1){
                if(characters[i][3]==rarity){
                        ids.push(i+1);
                }
            }
        }
        return ids;
    }



    function getImgSrcById(id){

        if(id<10){
            return optcImgBaseURL + "f000" + id + ".png";
        }
        if(id >=10 && id<100){
            return optcImgBaseURL + "f00" + id + ".png";
        }
        if(id >=100 && id<1000){
            return optcImgBaseURL + "f0" + id + ".png";
        }
        if(id >=1000){
            return optcImgBaseURL + "f" + id + ".png";
        }
    }



    function getFarmableList(japan) {

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
            idsFarmable = idsFarmable.concat( special['All Difficulties']);
            if(!japan){
                idsFarmable = idsFarmable.concat( special['Japan']);
            }
            idsFarmable = idsFarmable.concat( special['Global']);
            idsFarmable = idsFarmable.concat( special['6 star']);
            idsFarmable = idsFarmable.concat( special['5 plus global']);
            idsFarmable = idsFarmable.concat( special['5 plus japan']);
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
