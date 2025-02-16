/*Movieconst jsNextBtn = document.querySelector('.jsNextTag');
   jsNextBtn.addEventListener('click' , () => {
    const movieArray = [{

      image: 'Image/A_Quiet_Place_film_poster.png',
      Movietitle : {
        name: 'A Quiet Place',
        genre: 'Horror/thriller',
      },
      rating:{
       stars: 5.0,
       count: '8.1 Rating'
      },
      Year: 2018,
      Runtime: '1h30m',
      Genre: 'Horror/thriller',
      Directedby: 'John Krasinski',
      Company: 'Paramount Pictures',
    },
    {
     image: 'Image/IT-cardPoster.jpg',
     Movietitle : {
       name: 'IT',
       genre: 'Thriller/Crime',
     },
     rating:{
      stars: 5.0,
      count: '7.3 Rating'
     },
     Year: 2018,
     Runtime: '1h38m',
     Genre: 'Thriller/Crime',
     Directedby: 'Andrés Muschietti',
     Company: 'New Line Cinema',
    },
    {
     image: 'Image/zeHa-poster.jpg',
     Movietitle : {
       name: 'Nezha',
       genre: 'Thriller/Crime',
     },
     rating:{
      stars: 5.0,
      count: '7.3 Rating'
     },
     Year: 2018,
     Runtime: '1h38m',
     Genre: 'Thriller/Crime',
     Directedby: 'Andrés Muschietti',
     Company: 'New Line Cinema',
    }];
    
    let genreHTML = '';
    
    movieArray.forEach((card) => {
     genreHTML+= `<div class="first-card cardContainer">
          <div>
           <img src="${card.image}" class="aQuietPlace-card">
          </div>
          <div class="info-Movie">
            <div style="font-weight: 500; font-size: 23px;">${card.Movietitle.name}</div>
            <div style="font-weight: 500;">${card.Movietitle.genre}</div>
            <div>
              <img src="ratings/rating-50.png" class="ratingStar">
              <span style="font-weight: 500;">${card.rating.count}</span>
              <!--INfo-->
              <div>
               <span class="spTag">Year</span>
               <span>${card.Year}</span>
              </div>
              <div>
               <span class="spTag">Run time</span>
               <span class="textTag adu">${card.Runtime}</span>
              </div>
              <div>
               <span class="spTag">Genre</span>
               <span  class="textTag aduTwo">${card.Genre}</span>
              </div>
              <div>
               <span class="spTag">Directed by</span>
               <span class="textTag aduThree">${card.Directedby}</span>
              </div>
              <div>
               <span class="spTag">Company</span>
               <span class="textTag aduFour">${card.Company}</span>
              </div>
              <div>
               <span class="spTag shareTag">Share</span>
               
               <img src="Image/fb-icon.png" class="iconTag" style="height: 2.2rem;">
               <img src="Image/x-icon.webp"  class="iconTag " style="margin-left: -18px;">
               <img src="Image/ig-icon.png"  class="iconTag">
               <img src="Image/pin-icon.jpg"  class="iconTag">
               
              </div>
              <div class="bot-btn">
                 <button class="btnTag">Times</button>
                 <button class="btn btn-outline-danger outlineTag">Info</button>
                 <button class="btn btn-outline-danger outlineTag">Videos</button>
                 <button class="btn btn-outline-danger outlineTag">Reviews</button>
              </div>
              
            </div>
          </div>
       </div>`
       
    })
     document.querySelect('.js-container-Main').innerHTML = genreHTML;
   })*/



 


   /*Top 10*/   
  const jsmovieBtn = document.querySelector('.js-movieBtn');
  const top10TagBtn =   document.querySelector('.js-btnTop10');
  const motherOfMoviecardTag = document.querySelector('.motherOfMovie-card');
  

  top10TagBtn.addEventListener('click' , () => {
      
      top10TagBtn.classList.add('isOpened');
      jsmovieBtn.classList.add('removebgColor');
    const movieArrayTop10 = [
      {
       image:'Image/themonkey-Poster.jpg',
         Movietitle : {
           name: 'The Monkey',
           genre: 'Horror',
         },
         rating:{
          stars: 5.0,
          count: '8.1 Rating'
         },
         Year: 2025,
         Runtime: '1h38m',
         Genre: 'Horror',
         Directedby: 'Oz Perkins',
         Company: ' Atomic Monster',
    },
    {
      image:'Image/drishyam2-poster.jpg',
        Movietitle : {
          name: 'Drishyam 2',
          genre: 'Thriller/Mystery',
        },
        rating:{
         stars: 5.0,
         count: '7.5 Rating'
        },
        Year: 2022,
        Runtime: '2h20m',
        Genre: 'Thriller/Mystery',
        Directedby: 'Abhishek Pathak',
        Company: 'Aashirvad Cinemas',
    },
    {
      image:'Image/platform-poster.jpg',
        Movietitle : {
          name: 'The Platform',
          genre: 'Horror/Sci-fi',
        },
        rating:{
         stars: 5.0,
         count: '8.1 Rating'
        },
        Year: 2019,
        Runtime: '1h34m',
        Genre: 'Horror/Sci-fi',
        Directedby: 'Galder Gaztelu-Urrutia',
        Company: 'Basque Films',
    },
    ]

    let genreHTMLTagTwo = '';
    
    movieArrayTop10.forEach((movieCard) => {
           genreHTMLTagTwo += `
               <div class="first-card cardContainer">
             <div>
              <img src="${movieCard.image}" class="aQuietPlace-card">
             </div>
             <div class="info-Movie">
               <div style="font-weight: 500; font-size: 23px;">${movieCard.Movietitle.name}</div>
               <div style="font-weight: 500;">${movieCard.Movietitle.genre}</div>
               <div>
                 <img src="ratings/rating-50.png" class="ratingStar">
                 <span style="font-weight: 500;">${movieCard.rating.count}</span>
                 <!--INfo-->
                 <div>
                  <span class="spTag">Year</span>
                  <span>${movieCard.Year}</span>
                 </div>
                 <div>
                  <span class="spTag">Run time</span>
                  <span class="textTag adu">${movieCard.Runtime}</span>
                 </div>
                 <div>
                  <span class="spTag">Genre</span>
                  <span  class="textTag aduTwo">${movieCard.genre}</span>
                 </div>
                 <div>
                  <span class="spTag">Directed by</span>
                  <span class="textTag aduThree">${movieCard.Directedby}</span>
                 </div>
                 <div>
                  <span class="spTag">Company</span>
                  <span class="textTag aduFour">${movieCard.Company}</span>
                 </div>
                 <div>
                  <span class="spTag shareTag">Share</span>
                  
                  <img src="Image/fb-icon.png" class="iconTag" style="height: 2.2rem;">
                  <img src="Image/x-icon.webp"  class="iconTag " style="margin-left: -18px;">
                  <img src="Image/ig-icon.png"  class="iconTag">
                  <img src="Image/pin-icon.jpg"  class="iconTag">
                  
                 </div>
                 <div class="bot-btn">
                    <button class="btnTag">Times</button>
                    <button class="btn btn-outline-danger outlineTag">Info</button>
                    <button class="btn btn-outline-danger outlineTag">Videos</button>
                    <button class="btn btn-outline-danger outlineTag">Reviews</button>
                 </div>
                 
               </div>
             </div>
          </div>
           `
    })
    document.querySelector('.js-container-Main').innerHTML = genreHTMLTagTwo;

  } )
  