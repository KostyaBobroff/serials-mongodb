const el = document.querySelectorAll('.tabs');

var instance = M.Tabs.init(el);

document.addEventListener('DOMContentLoaded', function() {
  const options = document.querySelectorAll('option');
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});