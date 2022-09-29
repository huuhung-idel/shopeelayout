
        //Bannner
        const bannerSide = document.querySelector('.banner__box-side');
        const groupImages =  document.querySelectorAll('.banner__box-side img');
        const prevbtn = document.querySelector('#prevbtn');
        const nextBtn = document.querySelector('#nextBtn');

        let counter = 0 ;
  
        console.log(prevbtn)
        nextBtn.addEventListener('click',()=>{
          
            if(groupImages[counter].id === 'firstClone')
            {
                const size = groupImages[0].clientWidth;
                bannerSide.style.transition = "none";
                counter =  (groupImages.length - counter)-1;
                bannerSide.style.transform = 'translateX(' + (-size * counter) +'px)';
           
            }
            else if(counter >= groupImages.length -1)
            {
                return;
            }
            else{
                const size = groupImages[0].clientWidth;
                bannerSide.style.transition = "transform 1s ease-in-out";
                counter++;
                bannerSide.style.transform = 'translateX(' + (-size * counter) +'px)';
           
                console.log(counter)
            }
      
       
        })
        
        prevbtn.addEventListener('click',()=>{
            if(groupImages[counter].id === 'lastClone')
            {
                const size = groupImages[0].clientWidth;
                bannerSide.style.transition = "none";
                counter =  groupImages.length -1;
                bannerSide.style.transform = 'translateX(' + (-size * counter) +'px)';
            }
            else{
                const size = groupImages[0].clientWidth;
                bannerSide.style.transition = "transform 1s ease-in-out";
                counter--;
                bannerSide.style.transform = 'translateX(' + (-size * counter) +'px)';
                console.log(counter)
            }
   
           
        })

      

 
      

        //Login & Register
        const jsRegister = document.querySelector('.js-register');
        const modal = document.querySelector('.js-modal');
        const modalClose = document.querySelector('.js-modal-close')
        const modalCloseLogin = document.querySelector('.js-modal-close-login')
        const jsLogin = document.querySelector('.js-login');

        
        function showRegister() {
            modal.classList.add('open');
        }
        function closeRegister(){
            modal.classList.remove('open');
        }
        function showLogin() {
            modal.classList.add('open_login');
        }
        function closeLogin(){
            modal.classList.remove('open_login');
        }

        jsLogin.addEventListener('click', showLogin)
        jsRegister.addEventListener('click', showRegister)
        modalClose.addEventListener('click', closeRegister);
        modalCloseLogin.addEventListener('click', closeLogin)

        
        //Modal PR js

        const modalPr = document.querySelector('.js-modal__pr');
        const modalClosePr = document.querySelector('.js-modal__pr-close')
        function closeModalPr(){
            modalPr.style.display = "none";
        }
        modalClosePr.addEventListener('click', closeModalPr)

        //Modal download 
        
      

        const jsModalDownload = document.querySelector('.js-modal__download-open');
        const modalDownload = document.querySelector('.js-modal__download');
        const modalDowloadClose = document.querySelector('.js-modal__download-close')
        console.log(jsModalDownload)
        function showModalDownload() {
            modalDownload.classList.add('open');
        }
        function closeModalDownload(){
            modalDownload.classList.remove('open');
        }
        jsModalDownload.addEventListener('click', showModalDownload)
        modalDowloadClose.addEventListener('click', closeModalDownload);