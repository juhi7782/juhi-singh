var btn_ref=document.getElementById('initButton');

var img_arr=[

    "https://cdn.shopify.com/s/files/1/0592/6141/9682/files/29.08.2021_web.jpg?v=1632137502" ,

    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Krishna_tells_Gita_to_Arjuna.jpg/800px-Krishna_tells_Gita_to_Arjuna.jpg" ,

    "https://static.toiimg.com/photo/msid-70787667/70787667.jpg?221548" 

];

//creating one image
function showImages(){
//creat the images.
//console.log("Hello");
var img_ref =document.createElement("img");
//console.log( new_img_ref);
var container_ref=document.getElementById("gallery_container");
img_ref.src=img_arr[0];
//container_ref.appendChild(img_ref);
container_ref.innerHTML="<img src='https://cdn.shopify.com/s/files/1/0592/6141/9682/files/29.08.2021_web.jpg?v=1632137502' >"

}
//this is correct

btn_ref.addEventListener('click',showImages);

function imageClicked (){
var img_prev_r=document.getElementById("img_preview");
img_prev_r.classList.remove("d-none");
//classList.add("class_name")

  var img_r=img_prev_r.children[0];

img_r.src=img_arr[0];


    //console.log();
}

   



//creating all image

function showImages(){

    var container_ref=document.getElementById("gallery_container");
    container_ref.innerHTML=""   // after using this property they can only lord only one item.

 for (var i=0;i<img_arr.length;i=i+1){
    var img_ref=document.createElement("img");
    img_ref.src=img_arr[i];

    img_ref.addEventListener('click',imageClicked)
   
    container_ref.appendChild(img_ref);


 }


}