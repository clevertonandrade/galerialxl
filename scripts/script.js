const text = "LXL";

document.addEventListener("DOMContentLoaded", function () {
  const animatedText = document.getElementById("animatedText");

  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.innerHTML = char === " " ? "&nbsp;" : char;
    animatedText.appendChild(span);

    span.style.animationDelay = `${index * 0.25}s`;

    span.classList.add("jump");
  });

  const cardsContainer = document.getElementById('cards');

  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.setAttribute('class', 'card');

    const a = document.createElement("a");
    a.setAttribute('href', project.link);

    const img = document.createElement("img");
    img.setAttribute('class', 'preview__image');
    img.setAttribute('src', project.image);
    img.setAttribute('alt', project.name);

    const section = document.createElement("section");
    section.setAttribute('class', 'project__details');

    const projectName = document.createElement("p");
    projectName.setAttribute('class', 'project__name');
    projectName.innerText = project.name;

    const projectDescription = document.createElement("span");
    projectDescription.setAttribute('class', 'project__description');
    projectDescription.innerText = project.description;

    cardsContainer.appendChild(a);
    a.appendChild(card);
    card.appendChild(img);
    card.appendChild(section);
    section.appendChild(projectName);
    section.appendChild(projectDescription);

    card.style.animationDelay = `${index * 0.5}s`;
    card.classList.add('animate-up');
  });

  const element = document.querySelector('.animate-up');
  element.classList.add('animate-up');
});
