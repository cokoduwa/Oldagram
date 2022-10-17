//the purpose is to render all of the Oldagram profiles onto the browser. 

//need to first get ul element 
//use a for loop to loop through the posts array in order to display each of the users posts in our UL/browser. 
//for each post you insert the property for the innerHTML of the UL. 

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        icon1: "images/icon-heart.png",
        icon2: "images/icon-comment.png",
        icon3: "images/icon-dm.png" 
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        icon1: "images/icon-heart.png",
        icon2: "images/icon-comment.png",
        icon3: "images/icon-dm.png" 
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152, 
        icon1: "images/icon-heart.png",
        icon2: "images/icon-comment.png",
        icon3: "images/icon-dm.png" 
    }
]

//get UL element
// let ulElement = document.getElementsByTagName("ul");
//console.log (ulElement);

let showProfile = document.getElementById("showProfile");

//loop through the array with a for loop

for (let i = 0; i < posts.length; i++ ) {

    //insert the property for the innerHTML
    // ulElement.innerHTML+=
    showProfile.innerHTML +=
    `<div class="container">
            <header>
                <img class="logo" src="images/logo.png" alt="Oldagram logo">
                <img class="user-avatar" src="images/user-avatar.png" alt="avatar for the user">
            </header>
            <hr>
            
            <section class="section-1">
            <img class="avatar" src=${posts[i].avatar} alt="">
            <div>
                <p class="name">${posts[i].name}</p>
                <p class="location">${posts[i].location}</p>
            </div>
            </section>

            <section>
                <img class="post" src=${posts[i].post} alt="">
            </section>

            <section class="bottom">
                <img class="icon" src=${posts[i].icon1} alt="heart icon">
                <img class="icon" src=${posts[i].icon2} alt="comment icon">
                <img class="icon" src=${posts[i].icon3}  alt="direct message icon">
                <p class="likes">${posts[i].likes} likes</p>
                <p class="comment" ><span>${posts[i].username}</span>${posts[i].comment}</p>
            </section> 
        </div>`

    //console.log (posts[i]);
}
    
//console.log(ulElement.innerHTML);
