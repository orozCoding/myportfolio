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
  tag3: 'javaScript'
}

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
  tag3: 'javaScript'
}

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
  tag3: 'javaScript'
}

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
  tag3: 'javaScript'
}

const projects = [project1, project2, project3, project4];

const workSection = document.querySelector('#work-section');

for (i = 0; i < projects.length ; i += 1){
  let workCard = document.createElement('div');
  workCard.id = projects[i].id;
  workCard.classList.add('work-card', 'd-flex');

  let img = document.createElement('img');
  img.src = projects[i].img;
  img.alt = projects[i].alt;
  img.classList.add('card-preview');

  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  let workTitle = document.createElement('h3');
  workTitle.classList.add('work-title');
  workTitle.innerHTML = projects[i].title;

  let workInfo = document.createElement('div');
  workInfo.classList.add('work-info');

  let client = document.createElement('p');
  client.classList.add('client');
  client.innerHTML = projects[i].client;

  let counter = document.createElement('div');
  counter.classList.add('counter');

  let job = document.createElement('p');
  job.classList.add('job');
  job.innerHTML = projects[i].job;

  let year = document.createElement('p');
  year.classList.add('year');
  year.innerHTML = projects[i].year;

  workInfo.appendChild(client);
  workInfo.appendChild(counter);
  workInfo.appendChild(job);
  workInfo.appendChild(counter);
  workInfo.appendChild(year);

  let workDescription = document.createElement('p');
  workDescription.classList.add('work-description');
  workDescription.innerHTML = projects[i].description;

  let workTags = document.createElement('ul');
  workTags.classList.add('work-tags');

  let htmlTag = document.createElement('li');
  let htmlBtn = document.createElement('button');
  htmlBtn.classList.add('tag-button', 'focus');
  htmlBtn.innerHTML = projects[i].tag1;
  htmlTag.appendChild(htmlBtn);

  let cssTag = document.createElement('li');
  let cssBtn = document.createElement('button');
  cssBtn.classList.add('tag-button', 'focus');
  cssBtn.innerHTML = projects[i].tag2;
  cssTag.appendChild(cssBtn);

  let javaScriptTag = document.createElement('li');
  let javaScriptBtn = document.createElement('button');
  javaScriptBtn.classList.add('tag-button', 'focus');
  javaScriptBtn.innerHTML = projects[i].tag3;
  javaScriptTag.appendChild(javaScriptBtn);

  workTags.appendChild(htmlTag);
  workTags.appendChild(cssTag);
  workTags.appendChild(javaScriptTag);

  let seeProject = document.createElement('button');
  seeProject.type = 'button';
  seeProject.name = 'see-project';
  seeProject.classList.add('work-button', 'focus');
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




