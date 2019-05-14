


// get swapi

// make univ func

// take obj from univ func

tempArr=[];
var aaa;
const TakeIdObj= function(urlid) {                                               
                                              
                                             
                                             
    var xzr = new XMLHttpRequest();                             
    xzr.open("GET",urlid, true);
    xzr.onload = function () {
    if (xzr.readyState === 4) {
        if (xzr.status === 200) {
                                                            
             var jjpars=JSON.parse(xzr.responseText);
                                                         
                aaa=jjpars.name                                                           
                                                             
                } 
                else {
                        console.error(xzr.statusText);
                         }
                             }
                                 };
                    xzr.onerror = function () {
                     console.error(xzr.statusText);
                    };
                    xzr.send(null);

                    };   
                  

                                var xhr = new XMLHttpRequest();

                                var url='https://swapi.co/api/films/'
                                xhr.open("GET", url, true);
                                xhr.onload = function () {
                                    if (xhr.readyState === 4) {
                                        if (xhr.status === 200) {
                                          
                                            var jpars=JSON.parse(xhr.responseText);
                                            console.dir (jpars.results['0'].title)
                                            
                                     

                                    /// start test

                                    $(document).ready(function() {
                                      var table = $('#tableout').DataTable( {
                                      "processing": true,
                                       data:jpars.results,
                                       'columns': [
                                          {   'data':'title'},                                          
                                          {  'data': 'episode_id'}
                                        ]

                                       }                                  
                                                                            
                                      );


                                            //// prepare object

                                            var PrepObj = new Object;

                                            ///jpars
                                            PrepObj.title=jpars.results['0'].title;
                                            PrepObj.species=jpars.results['0'].species;
                                            PrepObj.starships=jpars.results['0'].starships;
                                            PrepObj.vehicles=jpars.results['0'].vehicles;
                                            PrepObj.planets=jpars.results['0'].planets;

                                            console.dir('PrepObj.title '+PrepObj.title)
                                            console.dir('PrepObj.species '+PrepObj.species[0]) 
                                            console.dir('PrepObj.starships '+PrepObj.starships) 
                                            console.dir('PrepObj.vehicles '+PrepObj.vehicles)  
                                            console.dir('PrepObj.planets '+PrepObj.planets) 
                                            
                                           

                                            
                                            ///
                                            //var tempArr=[];
                                            const scanPropPrepObj= function(scanPropPrepObjItem ) { 

                                                for (let i in PrepObj.species  ){                                                

                                                  console.log(TakeIdObj(scanPropPrepObjItem[i]))
                                                  console.log('tut '+aaa)

                                                  
                                                  tempArr.push(TakeIdObj(scanPropPrepObjItem[i]))
                                                  

                                                  
                                                }                                   

                                            }


                                            scanPropPrepObj(PrepObj.species)
                                            //TakeIdObj()
                                            console.log('tempArr'+tempArr)



                                            


                                            ///
                                            
                                            
                                            /////end prepare object

                                        $('#tableout tbody').on('click', 'tr', function () {
                                            var data = table.row( this ).data();
     

                                           console.dir(data.title)
                                           console.dir(data.species)
                                           console.dir(data.starships)
                                           console.dir(data.vehicles)
                                           console.dir(data.planets)

                                        } ); 
                                     } );

                                        } else {
                                            console.error(xhr.statusText);
                                        }
                                    }
                                };
                                xhr.onerror = function () {
                                    console.error(xhr.statusText);
                                };
                                xhr.send(null);


