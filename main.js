window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above

  var form = document.getElementById("mail-form");
  var button = document.getElementById("submit");
  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted

  function success() {
    var notif = document.getElementById("notif");
    notif.style.display = ('block');
    notif.style.opacity = ('1');
    setTimeout(() => {notif.style.opacity = ('0');}, 3000);
    setTimeout(() => {notif.style.display = ('none');}, 4000);

  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

function copyNumber(){
  var number = document.getElementById("number");
  var range = document.createRange();
  range.selectNode(number);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}
function test(){
  if(notif.className){
        document.getElementById('notif').className = '';
    } else {
        document.getElementById('notif').className = 'fade';
    }
}
