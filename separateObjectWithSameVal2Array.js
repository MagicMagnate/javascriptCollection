       var detailArray  = [{a:1,b:2,c:3},{a:4,b:5,c:6}];
       
       var descDetailArray = {};
        for (var i = 0; i < detailArray.length; i++) {
            var item = detailArray[i];
            for (var key in item) {
                if (!(key in descDetailArray))
                    descDetailArray[key] = [];
                descDetailArray[key].push(item[key]);
            }
        }

        console.dir(descDetailArray); // {a:[1,4],b:[2,5],c:[3,6]}
