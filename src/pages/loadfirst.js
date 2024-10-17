import home from "./home";
import profileImg from "../images/logo.jpg";
const container = document.querySelector(".container");
let loadFist = () => {
    let content=document.createElement("div");
    content.id="content";
  let header = document.createElement("div");
  header.id = "header";
  let sideBar = document.createElement("div");
  sideBar.id = "side";
  let profile = document.createElement("img");
  profile.id = "profile";
  profile.src = profileImg;
  profile.onclick = function () {
    window.location.href = "https://github.com/Gary-love";
  };
  let logo = document.createElement("div");
  logo.id = "logo";
  logo.textContent = "To do project";
  let inbox = document.createElement("div");
  inbox.id = "inbox";
  inbox.textContent = "Inbox";
  let today = document.createElement("div");
  today.id = "today";
  today.textContent = "Today";
  let project = document.createElement("div");
  project.id = "project";
  project.textContent = "projects";
  let work = document.createElement("div");
  work.id = "work";
  work.classList.add("project");
  work.textContent = "work";
  let school = document.createElement("div");
  school.id = "school";
  school.classList.add("project");
  school.textContent = "school";
  let project1 = document.createElement("div");
  project1.id = "project1";
  project1.classList.add("project");
  project1.textContent = "project1";
  let all = document.createElement("div");
  all.id = "all";
  all.classList.add("project");
  all.textContent = "All projects";
  header.appendChild(logo);
  header.appendChild(profile);
  sideBar.appendChild(inbox);
  sideBar.appendChild(today);
  sideBar.appendChild(project);
  project.appendChild(all);
  project.appendChild(project1);
  project.appendChild(work);
  project.appendChild(school);
  container.appendChild(header);
  container.appendChild(sideBar);
  container.appendChild(content);
  home();
};
export default loadFist;
