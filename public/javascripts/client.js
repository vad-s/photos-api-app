// const tagBtn = document.getElementById('inputChoiceBtn');

const form = document.forms.tagForm;
const testBtn = document.getElementById('testBtn');
const getRecentBtn = document.getElementById('getRecentBtn');
const container = document.querySelector('.container');

const templates = {};
async function loadTemplate() {
  const response = await fetch('/partials/info.hbs');
  templates.info = await response.text();
}
loadTemplate();

// form && form.addEventListener('submit', async (event) => {
  // event.preventDefault();
  // console.log(event.target);

  // const response = await fetch('/sets', {
  //   method: 'post',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     tag: event.target.tag.value,
  //   }),
  // });
  // const data = await response.json();
  // console.log(data);
// });


getRecentBtn.addEventListener('click', (event) => {
  window.location.href = '/sets/recent';
});

container.addEventListener('click', async (event) => {
  let picUrl = event.target.getAttribute('src');

  // let temp = picUrl.split('');
  // temp[temp.length - 5] = 'c';
  // let newPicUrl = temp.join('');

  const response = await fetch('/sets/info', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: event.target.getAttribute('id'),
    }),
  });

  const result = await response.json();
  const template = Handlebars.compile(templates.info);
  container.innerHTML = template(result);

  // console.log(newPicUrl);
  // container.innerHTML = newPicUrl;
  // window.location.href = newPicUrl;
});