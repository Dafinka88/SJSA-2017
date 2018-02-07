const MovieAPI = {
   actors:[
       {
           number: 1,
           name: "Samuel L.Jakson",
           plays: "Julies Winfield",
           awards: 2
       },
       {
           number: 2,
           name: "John Travolta",
           plays: "Vinicent Vega",
           awards: 1
       },
       {
           number: 3,
           name: "Uma Thurman",
           plays: "Mia Wallace",
           awards: 1
       },
       {
           number: 4,
           name: "Bruce Willis",
           plays: "Butch Koolidge",
           awards: 0
       },
       {
           number: 5,
           name: "Ving Rhames",
           plays: "Marcelous Wallace",
           awards: 0
       },

   ],
   all: function() {
       return this.actors
   },
   get: function(id) {
       const isActor = a=> a.number === id;
       return this.actors.find(isActor);
   }
}

export default MovieAPI;