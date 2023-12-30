setInterval(()=>{
    let imgs = document.querySelectorAll("img");

    imgs.forEach((a,i)=>{
        // a.src ='https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg'
        a.src ='https://pbs.twimg.com/profile_images/801398414/qrycode_400x400.jpg'
    })

    document.querySelectorAll('*').forEach((el)=>{
        const checkBgImage = getComputedStyle(el).backgroundImage !== "none";
        if(checkBgImage){
             el.style.backgroundImage='url("https://pbs.twimg.com/profile_images/801398414/qrycode_400x400.jpg")';
         }
       })

},500)