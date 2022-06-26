

let superheroes = [{
    image: 'https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg',
    name: "Бэтмен",
    job: "Борец с преступностью",
    alter_ego: "Bruce Wayne",
    superpower: "Интеллект",
    information:"По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности.",
    rating: 0
},{
    image:'https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg',
    name: "Супермен",
    job: "Борец за спреведливость",
    alter_ego: "Кларк Кент",
    superpower: "Суперсила",
    information:"Полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена.",
    rating: 0
},{image: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
    name: "Железный человек",
    job: "Гений",
    alter_ego: "Тони Старк",
    superpower: "Высокий уровень интеллекта",
    information:"Пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже.",
    rating: 0
},
{
    image: "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg",
    name: "Человек-паук",
    job: "Борец за справедливость,Студент,Фотограф",
    alter_ego: "Питер Паркер",
    superpower: "Сверхчеловеческие рефлексы,паучье чутье,способность прилепляться к твердым поверхностям,производство паутины",
    information:"Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:)",
    rating: 0
}
]

document.addEventListener('DOMContentLoaded', function(event){
    event.preventDefault();
    
render();
localStorage.setItem('superheroes', JSON.stringify(superheroes));

    let savedSuperheroes=JSON.parse(localStorage.getItem('superheroes'));
    superheroes=savedSuperheroes;
    
}
)


function render(){

console.log(superheroes);
let content = '';
for (let superhero of superheroes) {
    content += `<div class='hero'><img src='${superhero.image}'></img><div>${superhero.name}</div><div>${superhero.job}</div><div>${superhero.alter_ego}</div><div>${superhero.superpower}</div><div>${superhero.information}</div>0<input type="range" min='0' max='10' step='1' id='rating'>1${superhero.rating}</div>
    `
}
document.querySelector('#container').innerHTML = content;

let inputs = document.querySelectorAll('input');

inputs.forEach((range, index) => {
    range.addEventListener('change', () => {
        let rating = range.value;
        superheroes[index].rating=rating;
        console.log(superheroes);
    }) 
})


}

