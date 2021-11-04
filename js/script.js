

const arrayTeam = [

  {
    foto: 'img/wayne-barnett-founder-ceo.jpg',
    name: 'Wayne Barnett',
    role: 'Founder & CEO'
    
  },

  {
    foto: 'img/angela-caroll-chief-editor.jpg',
    name: 'Angela Caroll',
    role: 'Chief Editor'
    
  },

  {
    foto: 'img/walter-gordon-office-manager.jpg',
    name: 'Walter Gordon',
    role: 'Office Manager'
  },
  
  {
    foto: 'img/angela-lopez-social-media-manager.jpg',
    name: 'Angela Lopez',
    role: 'Social Media Manager'
  },

  {
    foto: 'img/scott-estrada-developer.jpg',
    name: 'Scott Estrada',
    role: 'Developer'
  },

  {
    foto: 'img/barbara-ramos-graphic-designer.jpg',
    name: 'Barbara Ramos',
    role: 'Graphic Designer'
   
  }
  
]

const container = document.querySelector('.team-container');

const memberButton = document.getElementById('addMemberButton');
memberButton.addEventListener('click', function(){
 addCards();
})

function addCards(){
 //aggiunge il nuovo oggetto
}


// const new1 = {
//   name: 'Anita Franco',
//   role: 'Administrator',
//   foto: 'img src="img/new-team-member-01.jpg'
// }
// const new2 = {
//   name: 'Michael Corleone',
//   role: 'Security',
//   foto: 'img src="img/new-team-member-02.jpg'
// }
// const new3 = {
//   name: 'Chung Li',
//   role: 'Public relations',
//   foto: 'img src="img/new-team-member-02.jpg'
// }
// const new4 = {
//   name: 'Mark Lenders',
//   role: 'Financial manager',
//   foto: 'img src="img/new-team-member-02.jpg'
// }


  for(let key in arrayTeam){
    const card = arrayTeam[key];
  
    console.log('card', card);
  
    const cardImg = card.foto;
    const cardName = card.name;
    const cardRole = card.role;
  
    container.innerHTML +=
  
    `
    <div class="team-card">
            <div class="card-image">
              <img src="${cardImg}" alt="${cardName}" />
            </div>
            <div class="card-text">
              <h3>${cardName}</h3>
              <p>${cardRole}</p>
            </div>
          </div>
    `
  }



