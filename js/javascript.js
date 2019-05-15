var url='https://swapi.co/api/films/'

const GetFetch = function getf( url) { 

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
      // console.log(data); 
        console.dir (data.results) 


        $(document).ready(function() {
            var table = $('#tableout').DataTable( {
                "processing": true,
                 data:data.results,
                 'columns': [
                    {   'data':'title'},                                          
                    {   'data': 'episode_id'}
                  ]
            } );
        } );


        $(document).ready(function() {
          var table = $('#tableout2').DataTable( {
              "processing": true,
               data:data.results,
               'columns': [
                  {   'data':'title'},                                          
                  {   'data': 'episode_id'}
                ]
          } );
      } );







      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });

}

GetFetch(url)
