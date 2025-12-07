async function loadComponent(id, path) {
  const html = await fetch(path).then((res) => res.text());
  document.getElementById(id).innerHTML = html;
}

loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
