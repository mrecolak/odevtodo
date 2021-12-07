

const input = document.getElementById("task");
const span = document.getElementById("liveToastBtn"); // buton aktif
const ul = document.getElementById("list");
const ulList = document.getElementsByTagName("li")

span.addEventListener("click",ekle);

var toastLiveExample = document.getElementById('liveToast')
var hata = document.getElementById('liveToastErr')



// ekleme ve toast

function ekle(){
    if (input.value == ""){     // içinin boşluğunu hallet!!
        $('#liveToastErr').toast('show')                //hata toast
    }else {
        $('#liveToast').toast('show')                       // geçerli toast
        let li = document.createElement('li');              // HTML deki li ye yeni eleman eklemek için kullanılır.
        li.innerText = input.value;
        ul.appendChild(li);                                 // ul nin içinde çocuğu olarak li ekler
        input.value="";                                 

        let closeNew = document.createElement("div")        // silme tuşu için div oluşturur.
        closeNew.textContent=('\u00D7')
        closeNew.classList.add("close")                     // silme tuşuna CSS deki özellikleri atar.
        li.appendChild(closeNew);                           // li nin çocuğu olarak silme tuşu ortaya çıkmış olur.

        closeNew.addEventListener("click",function(){
            ul.removeChild(li)                              // silme tuşuna tıklandığında ul nin çocuğu olan li yi silmeye yarayan fonksiyon çalışır.
            // $('#silindi').toast('show')
        })
    }
}



// var olan li lere kapatma tuşu ekleme

for (let i=0; i<ulList.length; i++) {
   let silTus = document.createElement('div');
   silTus.textContent = "\u00D7"; // "\u00D7" kaldırıp "500" yazarsam 500 olarak görünecek.
   silTus.classList.add('close')
   silTus.onclick = tikla
   ulList[i].append(silTus)
}

function tikla(){  // bu fonksiyon ile silme tuşuna tıklandığında tuşu, ebevenyi ile birlikte siler.
    this.parentElement.remove();
}


// Checked Start


list.addEventListener("click", (e) => {
 if (e.target.tagName === 'LI') {
     e.target.classList.toggle('checked');
 }
})
                
// Checked End

