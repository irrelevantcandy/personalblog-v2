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
    title: "hello world",
    image: "images/post1.jpg",   // 🖼️ optional picture for this post
    body: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>
    `
  },
  {
    slug: "second-post",
    date: "2026-11-18",
    title: "another thought",
    body: `<p>replace me with your own writing.</p>`
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