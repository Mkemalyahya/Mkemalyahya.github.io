data = [{
    'img': 'asset/bahan 6.jpg',
    'img': 'asset/bahan 5.jpg',
    'title': 'web developp',
    'subtitle': 'oniax',
    'desc': "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quam placeat itaque inventore distinctio provident?"
},{
    'img1': 'asset/bahan 6.jpg',
    'img2': 'asset/bahan 5.jpg',
    'title': 'web developp',
    'subtitle': 'oniax',
    'desc': "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quam placeat itaque inventore distinctio provident?"
}
]

var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=
    `  <div class="project">
    <div class="img-project">
        <img src ="'+element.img1+'"alt="">
        <img src ="${element.img2}"alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}</p>
    </div>
    <button class="read-more">read more</button>
</div>`
    
});
