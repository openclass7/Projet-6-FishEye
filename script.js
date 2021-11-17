
            // fetch('users.json')
            // .then((res)=>res.json() )
            // .then((data)=>
            //    { // console.log(data)
            //     let output=`<h2>Users</h2>`
            //     data.forEach(function(user){
            //         output += `
            //     <ul>
            //         <li>ID: ${user.id}</li>
            //         <li>Name: ${user.name}</li>
            //         <li>Email: ${user.email}</li>                
            //     </ul>
            //     `; })
            //     document.getElementById('output').innerHTML =output} )
   //---------------------------------------------------------------------------------

    fetch("pphotographers.json")

    .then((res) => {
        return res.json(); })

    .then((data) => {
      // console.log( data)
      
      data.forEach(function(pphotographer){

           //créer un tableau avec tout les tags des photograaphes
        let arrayTags = pphotographer.tags;
        // console.log(arrayTags);
        //placer des tags dans des balises
        let tag = arrayTags.map(
                  (tag) => `<li class='tags' arial-label='tag${tag}'> #${tag} </li>`
                );
        //   //placer les balises<li> dans une balise <ul> avec la méthode join()
        let tags = `<ul class='tag-list'>${tag.join("")} </ul>`;  
        // // créer les balises <article> qui contient les informations de chaque photographe et les insérer dans la balise <main>
        // let mainContainer = document.querySelector(".main-container");
        let output =``;

                output = `
        <article class='container-profile'>
          <a href='./photographer-page-profile'?id=${pphotographer.id} >
            <figure>
              <img class='container-profil__picture'
                  src='../${pphotographer.portrait}'
                  alt='${pphotographer.name} '
              >
            </figure>
            <h2>${pphotographer.name} </h2>
          </a>  

            <div class='container-profile__information'>
            <h3 class='location'>${pphotographer.city}, ${pphotographer.country} </h3> 
            <h4 class='quote'>${pphotographer.tagline}</h4>
            <h5 class='price'>${pphotographer.price} € </h5>
            ${tags}
            </div>      
        
        </article>
      `;
   
     document.querySelector('.main_container').innerHTML +=output;
    })


      filterTags();
     
    })
    //*************************************************************** */

    //le Bouton scroll
    let scroll_btn=document.getElementById('scroll_btn');
    
    
    // const scrollButtonBehavior = () => {
    //   let scroll_btn = document.querySelector(
    //     "#scroll-to-main-button"
    //   );
      // let mainAnchor = document.querySelector("#main");

      window.addEventListener("scroll", () => {
        // e.preventDefault();
        
        if (window.scrollY === 0) {
          scroll_btn.style.display = "none";
        }else{
          scroll_btn.style.display = "block";
        }
      });
      // let main=querySelector('#main');
      window.addEventListener("click", ()=>{
        // e.preventDefault();
        let main=document.querySelector("#main")
        main.scrollIntoView({behavior:'smooth',block:"start"})
      });

    //   const scrollToMainContent = (e) => {
    //     e.preventDefault();
    //     window.scrollTo({
    //       top: 0,
    //       behavior: "smooth",
    //     });
    //   };

    //   scroll_btn.addEventListener("click", scrollToMainContent);
    // };
        
    //*************************************************************** */
      //filtrer les tags
      
      // filterSelection("all")
      // function filterSelection(c) {
      //   var x, i;
      //   x = document.getElementsByClassName("tags");
      //   if (c == "all") c = "";
      //   for (i = 0; i < x.length; i++) {
      //     w3RemoveClass(x[i], "show");
      //     if (x[i].className.indexOf(c) > -1)
      //     w3AddClass(x[i], "show");
      //   }
      // }

      // function w3AddClass(element, name) {
      //   var i, arr1, arr2;
      //   arr1 = element.className.split(" ");
      //   arr2 = name.split(" ");
      //   for (i = 0; i < arr2.length; i++) {
      //     if (arr1.indexOf(arr2[i]) == -1) 
      //     {element.className += " " + arr2[i];}
      //   }
      // }

      // function w3RemoveClass(element, name) {
      //   var i, arr1, arr2;
      //   arr1 = element.className.split(" ");
      //   arr2 = name.split(" ");
      //   for (i = 0; i < arr2.length; i++) {
      //     while (arr1.indexOf(arr2[i]) > -1)
      //     {
      //       arr1.splice(arr1.indexOf(arr2[i]), 1);     
      //     }
      //   }
      //   element.className = arr1.join(" ");
      // }

      // // Add active class to the current button (highlight it)
      // var btnContainer = document.getElementById("tags_container");
      // var btns = btnContainer.getElementsByClassName("tags_nav");
      // for (var i = 0; i < btns.length; i++) {
      //   btns[i].addEventListener("click", function(){
      //     var current = document.getElementsByClassName("active");
      //     current[0].className = current[0].className.replace(" active", "");
      //     this.className += " active";
      //   });
      // }

 //*************************************************************** */
     //filter tag 2ème essaie
     let filterTags=()=>{
      let tagNav = [...document.querySelectorAll('ul a')];
      //recuperer tout les tags des photographs
     
     let tagArticle =  [ ...document.querySelectorAll(".container-profile"), ];      
    
     // let tagArticle =document.querySelectorAll(".container-profile");
     console.log(tagNav);
     console.log(tagArticle); 
     for(let i = 0; i < tagNav.length; i++){
       let tagChosen=tagNav[i];
       let tagName=tagChosen.innerHTML;
       selectByTagName(tagName, tagChosen,tagArticle, tagNav);
     }    
     
    };
    const selectByTagName = (tagName, tagChosen,tagArticle, tagNav) =>{

        let everyTagPhotographer = document.querySelectorAll(".container-profile .tags");
        console.log(everyTagPhotographer);
        console.log(tagNav);

        
    if(tagChosen.innerHTML.includes(tagName)){
      tagName = tagName.toLowerCase();
    const showTags=(e)=>{
          tagNav.forEach((tag)=>{
            if(tag.classList[2]=='active'){
              tag.classList.remove('active');

            };
          });

          if (!e.target.classList[2]) {
            e.target.classList.add("active");
            tagArticle.forEach((profile) => {
              profile.style.display = "none";
    
              if (profile.innerHTML.includes(tagName)) {
                profile.style.display = "block";
              }
            });
          }
    };

        //5555555555555555555555555555555555555555555555555555555
        // const filterTagsAbleAndDisable = (e) => {
        //   // Pour tous les tags : si le tag a la classe Active alors supprime sa classe active
        //   tagsArray.forEach((tag) => {
        //     if (tag.classList[2] == "active") {
        //       tag.classList.remove("active");
        //     }
        //   });
    
        //   // Si le tag cible est INACTIF alors rend le ACTIF
        //   if (!e.target.classList[2]) {
        //     e.target.classList.add("active");
        //     photographerProfile.forEach((profile) => {
        //       profile.style.display = "none";
    
        //       if (profile.innerHTML.includes(tagName)) {
        //         profile.style.display = "block";
        //       }
        //     });
        //   }
    
        //   //Stylise le bouton de tag associé au profil du photographe
        //   tagForEachPhotographer.forEach((tag) => {
        //     if (tag.innerHTML.includes(tagName)) {
        //       tag.classList.add("active");
        //     }
        //   });
        // };


        //5555555555555555555555555555555555555555555555555555555
      



      tagChosen.addEventListener('click', (e)=>{
        if(e.target.innerHTML==="#all"){
          everyTagPhotographer.forEach((profile)=>{
            profile.style.display="display";
          });
        }

      });
        }
    }



//1111111111111111111111

//22222222222222222222222


    //  tagNav.forEach(a => {
    //    a.onclick = function() {
    //     //active
    //     tagNav.forEach(a => {
    //        //  a.className = "";
    //     })
    //        let value = a.textContent;
    //        let tagLi =[...document.querySelectorAll(".tags"),]
    //        console.log(value)
    //        console.log(tagLi)
    //       let newTagLi=tagLi.filter( (el)=>el=value)
    //       console.log(newTagLi);


    //        tagArticle.forEach(profile => {
        
    //        tagLi.forEach(eachLi=>{
    //         if (eachLi.textContent === value   ) {
    //                   profile.style.display = 'block';
    //         }else{
    //                   profile.style.display = 'none';
    //         }

    //        })
         
          
    //        })
    //    }
    // });
    

 //************************************************************** */
    //   //filter tag 2ème essaie
    //   let filterTags=()=>{
    //    let tagNav = document.querySelectorAll('ul a');
    //    //recuperer tout les tags des photographs
      
    //   let tagArticle =  [
    //     ...document.querySelectorAll(".container-profile"),
    //   ];
    //   // let tagArticle =document.querySelectorAll(".container-profile");
    //   console.log(tagNav);
    //   console.log(tagArticle); 

      
    //   tagNav.forEach(a => {
    //     a.onclick = function() {
    //      //active
    //      tagNav.forEach(a => {
    //         //  a.className = "";
    //      })

    //     //  a.className = "active";

    //      //Filter
    //    const value = a.textContent;
    //     //  console.log(value);
    //     //  console.log("value");
    //      tagArticle.forEach(article => {
             
             
    //         //  if (li.getAttribute('tags') == value.toLowerCase() || value == "All Menu") {
    //         //      li.style.display = 'block';
    //         //  }
    //         //  if (li.textContent == value || value == "all") {
    //         //      li.style.display = 'block';
    //         //  }
    //         article.style.display = 'none';
    //         let tagLi =document.querySelectorAll(".tags")
    //         console.log(tagLi)
    //         article.forEach(tagLi=>{
              
    //             if (tagLi.textContent == value   ) {
    //                           article.style.display = 'block';
    //                         }
    //         })
           





    //      })
    //     }
    //  });



    //   };
      

      
      
 //1111111111111111111111111111111111111
      // const liItem = document.querySelectorAll('ul li');
      // const imgItem = document.querySelectorAll('.product img');

      //   liItem.forEach(li => {
      //      li.onclick = function() {
      //       //active
      //       liItem.forEach(li => {
      //           li.className = "";
      //       })
      //       li.className = "active";

      //       //Filter
      //       const value = li.textContent;
      //       imgItem.forEach(img => {
      //           img.style.display = 'none';
      //           if (img.getAttribute('data-filter') == value.toLowerCase() || value == "All Menu") {
      //               img.style.display = 'block';
      //           }
      //       })
      //      }
      //   });

       //*************************************************************** */
     

    // fetch("datas.json")

    // .then((res) => {
    //     return res.json(); })

    // .then((data) => {
    //    this.photographer= datas.photographers;
      
      
    //   let output=`<h2>Users</h2>`
    //   data.forEach(function(photographer ){
    //       output += `
    //   <ul>
    //       <li>ID: ${photographer.id}</li>
    //       <li>Name: ${photographer.name}</li>
    //       <li>Email: ${photographer.city}</li>                
    //   </ul>
    //   `; })
    //   document.querySelector('.main-container').innerHTML =output
    // })
      
      // this.photographers = datas.photographers;
      // addPhotographerCard(this.photographers);


      // data.forEach((photographer) => {
      //   data.forEach(function(photographer){
        // //créer un tableau avec tout les tags des photograaphes
        // // let arrayTags = photographer.tags;
        // //placer des tags dans des balises
        // // let tag = arrayTags.map(
        // //           (tag) => `<li class='tags' arial-label='tag${tag}'> #${tag} </li>`
        // //         );
        //   //placer les balises<li> dans une balise <ul> avec la méthode join()
        // // let tags = `<ul class='tag-list'>${tag.join("")} </ul>`;  
        // // créer les balises <article> qui contient les informations de chaque photographe et les insérer dans la balise <main>
        // let mainContainer = document.querySelector(".main-container");
        // let output='';
      //   output += `
      //   <article class='container-profile'>
      //     <a href='./photographer-page-profile'?id=${photographer.id} >
      //       <figure>
      //         <img class='container-profil__picture'
      //             src='img/Portraits/${photographer.portrait}'
      //             alt='${photographer.name} '
      //         >
      //       </figure>
      //       <h2>${photographer.name} </h2>
      //     </a>  

      //       <div class='container-profile__information'>
      //       <h3 class='location'>${photographer.city}, ${photographer.country} </h3> 
      //       <h4 class='quote'>${photographer.tagline}</h4>
      //       <h5 class='price'>${photographer.price} € </h5>
      //       ${tags}
      //       </div>      
        
      //   </article>
      // `;

      // mainContainer.innerHTML=output;

      //   })
      
      
       
      
        

   
 



// class PagesFactory {
//   constructor(photographerID, path) {
//     this.photographerID = photographerID;
//     this.path = path;
//     this.createPage();
//   }

//   createHomePage() {
//     fetch("datas.json")
//       .then((response) => {
//         return response.json();
//       })
//       .then((datas) => {
//         this.photographers = datas.photographers;
//         addPhotographerCard(this.photographers);
//         sortByTags();
//         scrollButtonBehavior();
//       });
//   }

 
  
 
// //00000000000000000000000000000000000000000000000000000000000000000
// console.log('aaaaaaaaa');
// insérer le profil de chaque photographe dans la page principale index.html
// /**
// * @param {array}  Photographers
// */
 

//   createHomePagefunction()
//   { fetch("../photographers.json")
//     .then((response) => {
//       return response.json();
//     })
//     .then((datas) => {
//       // this.photographers = datas.photographers;
//       // addPhotographerCard(this.photographers);
//       photographers.forEach((photographer) => {
//         //créer un tableau avec tout les tags des photograaphes
//         let arrayTags = photographer.tags;
//         //placer des tags dans des balises
//         let tag = arrayTags.map(
//           (tag) => `<li class='tags' arial-label='tag${tag}'> #${tag} </li>`
//         );
//         //placer les balises<li> dans une balise <ul> avec la méthode join()
//         let tags = `<ul class='tag-list'>${tag.join("")} </ul>`;
//         // créer les balises <article> qui contient les informations de chaque photographe et les insérer dans la balise <main>
//         let mainContainer = document.querySelector(".main-container");
//         mainContainer.innerHTML += `
//   <article class='container-profile'>
//     <a href='./photographer-page-profile'?id=${photographer.id} >
//       <figure>
//         <img class='container-profil__picture'
//              src='img/Portraits/${photographer.portrait}'
//              alt='${photographer.name} '
//         >
//       </figure>
//       <h2>${photographer.name} </h2>
//     </a>  

//       <div class='container-profile__information'>
//       <h3 class='location'>${photographer.city}, ${photographer.country} </h3> 
//       <h4 class='quote'>${photographer.tagline}</h4>
//       <h5 class='price'>${photographer.price} € </h5>
//       ${tags}
//       </div>      
  
//   </article>
// `;
//       });

//     });
// }






//2222222222222222222222222222222222222222222222222222222222222222222222222

// const addPhotographer =(photographers)=>{
//   photographers.forEach((photographer)=>{
// //créer un tableau avec tout les tags des photograaphes
//   let arrayTags=photographer.tags;
// //placer des tags dans des balises
// let tag=arrayTags.map(
//   (tag)=>`<li class='tags' arial-label='tag${tag}'> #${tag} </li>`
// );
// //placer les balises<li> dans une balise <ul> avec la méthode join()
// let tags=`<ul class='tag-list'>${tag.join("")} </ul>`;
// // créer les balises <article> qui contient les informations de chaque photographe et les insérer dans la balise <main>
// let mainContainer=document.querySelector(".main-container");
// mainContainer.innerHTML+=`
//   <article class='container-profile'>
//     <a href='./photographer-page-profile'?id=${photographer.id} >
//       <figure>
//         <img class='container-profil__picture'
//              src='img/Portraits/${photographer.portrait}'
//              alt='${photographer.name} '
//         >
//       </figure>
//       <h2>${photographer.name} </h2>
//     </a>  

//       <div class='container-profile__information'>
//       <h3 class='location'>${photographer.city}, ${photographer.country} </h3> 
//       <h4 class='quote'>${photographer.tagline}</h4>
//       <h5 class='price'>${photographer.price} € </h5>
//       ${tags}
//       </div>      
  
//   </article>
// `});
// };


//11111111111111111111111111111111111111111111111111111111111

// /** AJOUTE LE PROFIL DES PHOTOGRAPHES SUR LA HOMEPAGE
//  *
//  * @param {array} photographer
//  */
//  const addPhotographerCard = (photographer) => {
//     photographer.forEach((photographer) => {
//       let arrayTags = photographer.tags; // tableaux des tags des photographes
//       let tag = arrayTags.map(
//         (tag) => `<li class ='tags' aria-label="tag ${tag}"> #${tag} </li>`
//       ); // méthode qui permet d'isoler les éléments du tableau + de les incrémenter entre deux balises <li>
//       let tags = `<ul class='tag-list'> ${tag.join("")} </ul>`;
//       // méthode.join('') qui incrémente mes <li> dans une <ul>
//       let mainContainer = document.querySelector(".main-container");
//       mainContainer.innerHTML += `
//               <article class="container-profile">
//                 <a href="./photographer-page.html?id=${photographer.id}">
//                   <figure>
//                     <img
//                       class="container-profile__picture"
//                       src="./img/Portraits/${photographer.portrait}"
//                      alt="${photographer.name}"
//                     />
//                   </figure>
        
//                   <h2 class="container-profile__name">${photographer.name}</h2>
//                 </a>
        
//                 <div class="container-profile__information">
//                   <h3 class="location">${photographer.city}, ${photographer.country}</h3>
//                   <h4 class="quote">${photographer.tagline}</h4>
//                   <h5 class="prices">${photographer.price} € / jour</h5>
//                 </div>
//                 ${tags}
//               </article>`;
//     });
//   };
  
//   /** AJOUTE L'ETIQUETTE DU PHOTOGRAPHE SUR PHOTOGRAPHER-PAGE
//    *
//    * @param {array} photographers
//    * @param {number} photographerID
//    */
//   const addPhotographerLabel = (photographers, photographerID) => {
//     photographers.forEach((photographer) => {
//       if (photographer.id == photographerID) {
//         document.querySelector("#photographer-name").innerHTML =
//           photographer.name;
//         document.querySelector(
//           ".location"
//         ).innerHTML = `${photographer.city}, ${photographer.country}`;
//         document.querySelector(".tagline").innerHTML = photographer.tagline;
//         document.querySelector(
//           "#container-portrait"
//         ).innerHTML = `<img id='portrait' class="container-profile__picture" src="./img/Portraits/${photographer.portrait}" alt = '${photographer.name}' aria-label = "photo de profil du photographe"/>`;
  
//         //BOUCLE 1.2 : incrémente une <li> en HTML à chaque tag de bouclé
//         photographer.tags.forEach((tag) => {
//           document.getElementById(
//             "tag-list"
//           ).innerHTML += `<li tabIndex = "0" class="tags">#${tag}</li> `;
//         });
  
//         //AJOUTE LE NOM DU PHOTOGRAPHE DANS LE HEAD TITLE DE LA PAGE
  
//         document.querySelector(
//           ".photographer-name-title"
//         ).innerHTML = `${photographer.name}`;
//       }
//     });
//   };
  
//   export { addPhotographerCard, addPhotographerLabel };
  