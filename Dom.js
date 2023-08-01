const product =[
{
    id:0,
    image:'pc1.jpg',
    title:'pc gaming',
    price:320,

},
{
    id:1,
    image:'ecran1.jpg',
    title:'ecran',
    price:120,

},
{
    id:2,
    image:'souris1.jpg',
    title:'souris gamer',
    price:80,

},
{
    id:3,
    image:'clavier1.jpg',
    title:'clavier gamer',
    price:100,

}

];const categories=[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML= categories.map((item)=>{
        var{image,title,price}=item;
        return(
            `<div class="box">
        <div class="img-box">
        <img class='images' src=${image}></img>
        </div>
        <div class="bottom">
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`

            
        )
           
        
    }).join('')
    var cart=[];
    function addtocart(a){
        cart.push({...categories[a]})
        displaycart();
    }


    function displaycart(a){
        let j=0;
        if(cart.length==0){
            document.getElementById('cartitem').innerHTML = "Your cart is empty"
        }
        else{
            document.getElementById("cartitem").innerHTML= cart.map((items)=>{
                var{image,title,price} = items;
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                    <img class='rowing' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style=font-size:15px'>$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclinc=delElement("+(j++) +")'></i></div>"
                );
            }).join('');
        }

    }