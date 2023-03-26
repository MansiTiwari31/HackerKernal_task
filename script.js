var arr = [{ Image:"https://images.unsplash.com/photo-1551279880-03041531948f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw1MDM4NTQ3M3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" },
{  Image:"https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyaiUyMGtoYWxpZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
{  Image:"https://images.unsplash.com/photo-1589908234698-8e38077ca1f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGt5b3RvJTIwdGVtcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }];

function show() {
    var clutter = "";
    arr.forEach(function (val, i) {
        clutter += `<div id="card">
        <div id="image"><img src="${val.Image}" alt=""></div>
</div>`;
    });
    document.querySelector("#cards").innerHTML = clutter;
};

show();


var arrin = [{ city: "ITALY" ,place:"SAN MIGUEL", About:"This is 18 years old boy, from Berlin boy, from Berlin."},
{ city: "DUBAI" ,place:"BURJ KHALIFA", About:"This is 18 years old boy, boy, from Berlin from Berlin."},
{ city: "JAPAN",place:"KYOTO TEMPLE", About:"This is 18 years old boy, boy, from Berlin from Berlin."}];

function showin() {
    var clutterin = "";
    arrin.forEach(function (val) {
        clutterin += `<div id="cardin">
        <div id="scard"><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></div>
        <h4>${val.city}</h4>
        <h2>${val.place}</h2>
    <p>${val.About}</p>
</div>`;
    });
    document.querySelector("#cardsin").innerHTML = clutterin;
};

showin();

var arrl = [{ About:"This is 18 years old boy, from Berlin boy, from Berlin.his is 18 years old boy, from Berlin boy, from Berlin, his is 18 years old boy, from Berlin boy. ", name: "GEORGE SMITH", Image:"https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
{ About:"This is 18 years old boy, from Berlin boy, from Berlin. his is 18 years old boy, from Berlin boy, from Berlin his is 18 years old boy.", name: "DAVID JOHN", Image:"https://images.unsplash.com/photo-1580626831795-21588458f224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
{ About:"This is 18 years old boy, from Berlin boy, from Berlin. his is 18 years old boy, from Berlin boy, from Berlin his is 18 years old boy.", name: "ALISON WHITE", Image:"https://images.unsplash.com/photo-1577565177023-d0f29c354b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }];

function showl() {
    var clutter = "";
    arrl.forEach(function (val, i) {
        clutter += `<div id="cardl">
        <div id="starl"><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill" id="lstar"></i></div>
        <p>${val.About}</p>
        <div id="image">
        <img src="${val.Image}" alt="">
        <h2>${val.name}</h2>
        <h4>TRAVELLERS</h4>
        </div>
</div>`;
    });
    document.querySelector("#cardsl").innerHTML = clutter;
};

showl();

