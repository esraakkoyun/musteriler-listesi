
let musteri = document.getElementsByClassName('musterili');
let kullanıcı=document.getElementsByClassName('kullanıcıLi');


for (let i = 0; i < musteri.length; i++) {
    
    musteri[i].addEventListener('click', function () {
        let kullanıcılarListesi = musteri[i].querySelector('.kullanıcıUl');

       if(kullanıcılarListesi.style.display === 'block'){

            kullanıcılarListesi.style.display = 'none';
        }
        else{

                kullanıcılarListesi.style.display = 'block';
            }
       }
       
);
}

for(let i=0; i<kullanıcı.length; i++){
    kullanıcı[i].addEventListener('click', function(){
    
        event.stopPropagation();
        let kullanıcıDetayListesi = kullanıcı[i].querySelector('.kullanıcıdetayUl');

        if(kullanıcıDetayListesi.style.display === 'none'){
            kullanıcıDetayListesi.style.display = 'block';
        }
        else{
            kullanıcıDetayListesi.style.display = 'none';
        }
    });
}






