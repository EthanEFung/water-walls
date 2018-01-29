window.onload = function () {
  console.log('hi')
  const $submit = document.getElementById('water-walls-input-button');
  $submit.addEventListener('click', postWaterWalls);
}

function postWaterWalls(e) {
  e.preventDefault();
  const walls = parseInputWalls();

  window.fetch('/waterwalls', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ walls })
  })
    .then(res => res.json())
    .then(data => renderOutputWaterWalls(data))
    .catch(err => console.error(err));
}

function parseInputWalls() {
  const $walls = document.getElementById('water-walls-input').value;
  return $walls.split(',').map(str => parseInt(str));
}

function renderOutputWaterWalls(data) {
  console.log(data);
}