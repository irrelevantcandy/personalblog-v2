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
    slug: "hello-world",
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
    slug: "second-post",
    date: "2026-11-19",
    title: "engineering as a form of art",
    body: `
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    `
  }
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