var brian = {
  age: 33,
  profession: 'instructor',
  hobbies: ['skateboarding', 'rap', 'code', 'turtles'],
  details: function() {
    return 'brian likes ' + this.hobbies[0] + ' and ' + this.hobbies[1];
  }
}

function makeHTML() {
  var container = document.createElement('div');
  container.innerHTML = '<p>' + brian.details() + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];

  for (var i = 0; i < brian.hobbies.length; i++) {
    listArr.push('<li>' + brian.hobbies[i] + '</li>');
  }

  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);
}

makeHTML();
