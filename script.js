/* =====================================================
   ✏️ YOUR THOUGHTS / BLOG POSTS - write them here.
   Newest first. Copy one { ... }, block to add a post.
   - slug : short name used in the link (no spaces)
   - date : shown in the list
   - title: shown in the list
   - image: (optional) a picture shown at the top of that post, e.g.
            "images/post1.jpg". Delete the line if you don't want one.
   - body : the post text. Wrap each paragraph in <p>...</p>
   ===================================================== */
const thoughts = [
  {
    slug: "seeking-for-calmness",
    date: "2026-11-19",
    title: "seeking for calmness",
    image: "assets/garden.jpg",   // 🖼️ optional picture for this post
    body: `
      <p>hey, welcome to the first page. honestly i don't know what this is going to turn out into.</p>
      <p>in my head, the whole essence of making this is to seek for calmness against the loud websites out there.</p>
      <p>the concept of this personal website is the simplicity and calmness, just like the garden.</p>
      <p>the main focus of this is going to be the contents and the images, instead of the design itself.</p>
      <p>despite the gradient title, i will keep the design of this website to be minimal and calm.</p>
    `
  },
  {
    slug: "the-day-i-lost-my-dad",
    date: "2026-11-19",
    title: "the day i lost my dad",
    image: "assets/thoughts1.jpg",
    body: `
      <p>i lost my dad a month ago unexpectedly. i thought he was just being hospitalized for the problems in his stomach. at one night, my mom called my sister, telling her to come to the hospital because my dad condition suddenly worsened. </p>
      <p>i couldn't go there because i was sick. that call was too familiar for me. one year ago, i lost my brother in law, and the tone of the calls was very similar. i didn't know how to process my emotions and i just wished that my dad okay, but i cried inside my room after, really scared of the idea that i am going to lose my dad. then i slept.</p>
      <p>the house helper woke me up from my sleep at 7 am, she never woke me up before. she told me to come to the hospital quicky. my stomach dropped because i know well what's coming but i still don't want to actually believe with what is happening.</p>
      <p>it was a long drive to the hospital and i knew that it's not a good sign for me to being called there. as a positive person i am, i was still trying to distract myself by talking. </p>
      <p>when i got into the hospital, i rushed to the hospital room. i knew that something bad is happening, but my mind refused to believe it. my dad could die but at least i still have time to see him and say goodbye to him.</p>
      <p>when i got inside the hospital room, i saw my mom and my sister crying. then i saw my dad's lifeless body just laying down on the hospital bed. i was shocked. what happened to my dad? he was okay yesterday and then now i lost him?</p>
      <p>it was like my nightmare comes true, except it wasn't a nightmare. i couldn't wake up from it and breathe in relief that it was just a dream. </p>
      <p>my dad died.</p>
      <p>i didn't even say goodbye to him. i didn't even talk to him on the past week because i thought his conditions improved on the hospital and he was about to go home soon.</p>
      <p>we even had plans to visit a cafe together after his conditions improved, but that day never comes. </p>
      <p>it's really hard saying this without making me feel really sad.</p>
    `
  },
];

/* =====================================================
   Everything below makes the pages work. You don't need
   to edit it unless you want to change how it behaves.
   ===================================================== */
const titles = {
  home: "Home", about: "About", gear: "Gear", projects: "Projects",
  videos: "Videos", thoughts: "Thoughts", contact: "Contact"
};

// build the thoughts list
document.getElementById("thought-list").innerHTML = thoughts
  .map(t => `<li><span class="date">[${t.date}]</span> <a href="#/thoughts/${t.slug}">${t.title}</a></li>`)
  .join("");

function show(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.toggle("show", p.id === id));
}

function route() {
  const parts = (location.hash.replace("#/", "") || "home").split("/");
  const page = titles[parts[0]] ? parts[0] : "home";
  let title = titles[page];

  if (page === "thoughts" && parts[1]) {
    const post = thoughts.find(t => t.slug === parts[1]);
    if (post) {
      document.getElementById("thought-view").innerHTML = `
        <a class="post-back" href="#/thoughts">&larr; back</a>
        <h2 class="post-title">${post.title}</h2>
        <p class="date">${post.date}</p>
        ${post.image ? `<img class="hero-img" src="${post.image}" alt="${post.title}" onerror="this.remove()">` : ""}
        ${post.body}`;
      show("thought-view");
    } else {
      show("thoughts");
    }
  } else {
    show(page);
  }

  document.getElementById("page-title").textContent = title;
  document.querySelectorAll("nav a").forEach(a =>
    a.classList.toggle("active", a.dataset.page === page));
  document.querySelector(".content").scrollTop = 0;   // start each page at the top
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", route);
route();