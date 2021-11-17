
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
     selectByTagName();
    
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

     
//*************************************************************** */
    //filter tag 2ème essaie
    let filterTags=()=>{
     let tagNav = [...document.querySelectorAll('ul a')];
     //recuperer tout les tags des photographs
    
    let tagArticle =  [ ...document.querySelectorAll(".container-profile"), ];      
   
    // let tagArticle =document.querySelectorAll(".container-profile");
    console.log(tagNav);
    console.log(tagArticle); 
      
//888888888888888888888888888888888888888888888888888888888888888888888
 
// const tagNav = document.querySelectorAll('ul li');
// const tagArticle = document.querySelectorAll('.product img');

tagNav.forEach(a => {
   a.onclick = function() {
    //active
    tagNav.forEach(a => {
        a.className = "";
    })

    a.className = "active";

    //Filter
    const value = a.textContent;
    tagArticle.forEach(article=> {
        article.style.display = 'none';


        let everyTagPhotographer = document.querySelectorAll(
            ".container-profile .tags"
          );

        for(let i = 0; i < everyTagPhotographer.length; i++){

           let tagChosen=everyTagPhotographer[i];
             let tagName=tagChosen.innerHTML;
            // selectByTagName(tagName, tagChosen,tagArticle, tagNav);

            // if (tagChosen.innerHTML.includes(tagName))
            if (tagName == value 
                //  || value == "all"
                 ) {
                        article.style.display = 'block';
                    }

          } 
      
    })
   }
});
//88888888888888888888888888888888888888888888888888888888888888888888888



    
   };
///9999999999999999999999999999999999999999999999999999999999
// let selectByTagName = (tagName, tagChosen, tagArticle, tagNav) => {
//     let everyTagPhotographer = document.querySelectorAll(
//       ".container-profile .tags"
//     );
  
//     console.log(everyTagPhotographer)
//     if (tagChosen.innerHTML.includes(tagName)) {
//       tagName = tagName.toLowerCase();
  
//       /**
//        *
//        * @param {target} e =  button targeted
//        */
  
//       const showTags = (e) => {
//         // Pour tous les tags : si le tag a la classe Active alors supprime sa classe active
//         tagNav.forEach((tag) => {
//           if (tag.classList[2] == "active") {
//             tag.classList.remove("active");
//           }
//         });
  
//         // Si le tag cible est INACTIF alors rend le ACTIF
//         if (!e.target.classList[2]) {
//           e.target.classList.add("active");
//           tagArticle.forEach((profile) => {
//             profile.style.display = "none";
  
//             if (profile.innerHTML.includes(tagName)) {
//               profile.style.display = "block";
//             }
//           });
//         }
  
//         //Stylise le bouton de tag associé au profil du photographe
//         everyTagPhotographer.forEach((tag) => {
//           if (tag.innerHTML.includes(tagName)) {
//             tag.classList.add("active");
//           }
//         });
//       };
  
//       /**
//        * Supprime la Mise En Forme du bouton tag associé au photographe
//        */
//       const hideTag = () => {
//         everyTagPhotographer.forEach((tag) => {
//           tag.classList.remove("active");
//         });
//       };
  
//       /**
//        * Evenement au clic sur le bouton TAG de la NAV BAR
//        */
  
//       tagChosen.addEventListener("click", (e) => {
//         hideTag();
//         showTags(e);
//         if (e.target.innerHTML === "#All") {
//           tagArticle.forEach((profile) => {
//             profile.style.display = "block";
//           });
//         }
//       });
  
//       /**
//        * Evenement au clavier sur le bouton TAG de la NAV BAR
//        */
  
//       tagChosen.addEventListener("keyup", (e) => {
//         if (e.key === "Enter") {
//           hideTag();
//           showTags(e);
//           if (e.target.innerHTML === "#All") {
//             tagArticle.forEach((profile) => {
//               profile.style.display = "block";
//             });
//           }
//         }
//       });
//     }
//   };
  

///9999999999999999999999999999999999999999999999999999999999
//    const selectByTagName = (tagName, tagChosen,tagArticle, tagNav) =>{

//        let everyTagPhotographer = document.querySelectorAll(".container-profile .tags");
//        console.log(everyTagPhotographer);
//        console.log(tagNav);

       
//    if(tagChosen.innerHTML.includes(tagName)){
//      tagName = tagName.toLowerCase();
//    const showTags=(e)=>{
//          tagNav.forEach((tag)=>{
//            if(tag.classList[2]=='active'){
//              tag.classList.remove('active');

//            };
//          });

//          if (!e.target.classList[2]) {
//            e.target.classList.add("active");
//            tagArticle.forEach((profile) => {
//              profile.style.display = "none";
   
//              if (profile.innerHTML.includes(tagName)) {
//                profile.style.display = "block";
//              }
//            });
//          }
//    };

//      tagChosen.addEventListener('click', (e)=>{
//        if(e.target.innerHTML==="#all"){
//          everyTagPhotographer.forEach((profile)=>{
//            profile.style.display="display";
//          });
//        }

//      });
//        }
//    }

