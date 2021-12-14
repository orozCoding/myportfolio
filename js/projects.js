const project1 = {
  id: 'work-1',
  alt: 'Work One Preview',
  title: 'Tonic',
  client: 'CANOPY',
  job: 'Back End Dev',
  year: '2015',
  img: 'img/works/work1.png',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tag1: 'html',
  tag2: 'css',
  tag3: 'javaScript',
  btnId: 'work-btn-1',
  details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
};

const project2 = {
  id: 'work-2',
  alt: 'Work Two Preview',
  title: 'Multi-Post Stories',
  client: 'CANOPY',
  job: 'Back End Dev',
  year: '2015',
  img: 'img/works/work2.png',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tag1: 'html',
  tag2: 'css',
  tag3: 'javaScript',
  btnId: 'work-btn-2',
  details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
};

const project3 = {
  id: 'work-3',
  alt: 'Work Three Preview',
  title: 'Tonic',
  client: 'CANOPY',
  job: 'Back End Dev',
  year: '2015',
  img: 'img/works/work3.png',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tag1: 'html',
  tag2: 'css',
  tag3: 'javaScript',
  btnId: 'work-btn-3',
  details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
};

const project4 = {
  id: 'work-4',
  alt: 'Work Four Preview',
  title: 'Tonic',
  client: 'CANOPY',
  job: 'Back End Dev',
  year: '2015',
  img: 'img/works/work4.png',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tag1: 'html',
  tag2: 'css',
  tag3: 'javaScript',
  btnId: 'work-btn-4',
  details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
};

const projects = [project1, project2, project3, project4];

// work section

const workSection = document.querySelector('#work-section');

for (let i = 0; i < projects.length; i += 1) {
  const workCard = document.createElement('div');
  workCard.id = projects[i].id;
  workCard.classList.add('work-card', 'd-flex');

  const img = document.createElement('img');
  img.src = projects[i].img;
  img.alt = projects[i].alt;
  img.classList.add('card-preview');

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const workTitle = document.createElement('h3');
  workTitle.classList.add('work-title');
  workTitle.innerHTML = projects[i].title;

  const workInfo = document.createElement('div');
  workInfo.classList.add('work-info');

  const client = document.createElement('p');
  client.classList.add('client');
  client.innerHTML = projects[i].client;

  const counter = document.createElement('div');
  counter.classList.add('counter');

  const job = document.createElement('p');
  job.classList.add('job');
  job.innerHTML = projects[i].job;

  const year = document.createElement('p');
  year.classList.add('year');
  year.innerHTML = projects[i].year;

  workInfo.appendChild(client);
  workInfo.appendChild(counter);
  workInfo.appendChild(job);
  workInfo.appendChild(counter);
  workInfo.appendChild(year);

  const workDescription = document.createElement('p');
  workDescription.classList.add('work-description');
  workDescription.innerHTML = projects[i].description;

  const workTags = document.createElement('ul');
  workTags.classList.add('work-tags');

  const htmlTag = document.createElement('li');
  const htmlBtn = document.createElement('button');
  htmlBtn.classList.add('tag-button', 'focus');
  htmlBtn.innerHTML = projects[i].tag1;
  htmlTag.appendChild(htmlBtn);

  const cssTag = document.createElement('li');
  const cssBtn = document.createElement('button');
  cssBtn.classList.add('tag-button', 'focus');
  cssBtn.innerHTML = projects[i].tag2;
  cssTag.appendChild(cssBtn);

  const javaScriptTag = document.createElement('li');
  const javaScriptBtn = document.createElement('button');
  javaScriptBtn.classList.add('tag-button', 'focus');
  javaScriptBtn.innerHTML = projects[i].tag3;
  javaScriptTag.appendChild(javaScriptBtn);

  workTags.appendChild(htmlTag);
  workTags.appendChild(cssTag);
  workTags.appendChild(javaScriptTag);

  const seeProject = document.createElement('button');
  seeProject.type = 'button';
  seeProject.name = 'see-project';
  seeProject.classList.add('work-button', 'focus');
  seeProject.id = projects[i].btnId;
  seeProject.innerHTML = 'See Project';

  cardInfo.appendChild(workTitle);
  cardInfo.appendChild(workInfo);
  cardInfo.appendChild(workDescription);
  cardInfo.appendChild(workTags);
  cardInfo.appendChild(seeProject);

  workCard.appendChild(img);
  workCard.appendChild(cardInfo);

  workSection.appendChild(workCard);
}

// modals script

let modal;
let overlay;

function modalClose() {
  modal.remove();
  overlay.remove();
  document.body.classList.remove('no-scroll');
}

function modalDisplay() {
  let project;
  if (this.id === project1.btnId) {
    project = project1;
  } else if (this.id === project2.btnId) {
    project = project2;
  } else if (this.id === project3.btnId) {
    project = project3;
  } else if (this.id === project4.btnId) {
    project = project4;
  }

  const overlay = document.createElement('div');
  overlay.id = 'overlay';

  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.className = 'd-flex';
  modal.innerHTML = `
  <div class="modal-container d-flex">
    <div class="d-flex">
        <div class="work-title d-flex"><h3>${project.title}</h3></div>
        <div class="modal-close-btn" id="modal-close-btn"><img src="img/icon/xiconblack.png" alt="Close Icon"></div>
    </div>
    <div class="work-info d-flex">
        <div class="client d-flex">${project.client}</div>
        <div class="counter d-flex"></div>
        <div class="job d-flex"><p>${project.job}</p></div>
        <div class="counter d-flex"></div>
        <div class="year d-flex">${project.year}</div>
    </div>
    <div class="modal-preview d-flex"><img src="${project.img}" alt="${project.alt}" class="card-preview"></div>
    <div class="modal-details-and-buttons d-flex">
      <div class="work-description d-flex"><p>${project.details}</p></div>
      <div class="modal-full-buttons d-flex">
        <div class="modal-tags d-flex">
            <ul class="work-tags d-flex">
                <li><button type="button" class="tag-button focus">${project.tag1}</button></li>
                <li><button type="button" class="tag-button focus">${project.tag2}</button></li>
                <li><button type="button" class="tag-button focus">${project.tag3}</button></li>
            </ul>
        </div>
        <div class="modal-buttons d-flex">
            <div class="modal-live-btn d-flex">
                <button type="button" name="see-project" class="work-button focus">
                    <p>See Live</p>
                    <img src="img/icon/iconlive.png" alt="Go Live Icon">
                </button>
            </div>
            <div class="modal-close-btn d-flex">
                <button type="button" name="see-project" class="work-button focus">
                    <p>See Source</p>
                    <img src="img/icon/iconghblue.png" alt="Go Live Icon">
                </button>
            </div>
        </div>
      </div>
    </div>
  </div>`;

  document.body.appendChild(overlay);
  document.body.appendChild(modal);
  document.body.classList.add('no-scroll');

  const modalCloseBtn = document.querySelector('#modal-close-btn');
  modalCloseBtn.addEventListener('click', modalClose);
}

const workBtn = document.querySelectorAll('.work-button');

workBtn.forEach((element) => {
  element.addEventListener('click', modalDisplay);
});