//These functions help add, remove or toggle css classes

function tog_class(id, cl) {
  var elem = document.getElementById(id);
  if (elem == null) {
    return 0;
  }
  if (elem.classList.contains(cl) === true) {
    elem.classList.remove(cl);
  } else {
    elem.classList.add(cl);
  }
}

function add_class(id, cl) {
  var elem = document.getElementById(id);
  if (elem == null) {
    return 0;
  }
  if (elem.classList.contains(cl) !== true) {
    elem.classList.add(cl);
  }
}

function rem_class(id, cl) {
  var elem = document.getElementById(id);
  if (elem == null) {
    return 0;
  }
  if (elem.classList.contains(cl) === true) {
    elem.classList.remove(cl);
  }
}

//This function gets the date and does operations using H/M/S

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  var h1 = (h - h % 10) / 10;
  var h2 = h % 10;

  var m1 = (m - m % 10) / 10;
  var m2 = m % 10;

  var s1 = (s - s % 10) / 10;
  var s2 = s % 10;

  set_spin_class("s1", s1);
  set_spin_class("s2", s2);

  set_spin_class("m1", m1);
  set_spin_class("m2", m2);

  set_spin_class("h1", h1);
  set_spin_class("h2", h2);

  var t = setTimeout(startTime, 500);
}

//This function calls the appropriate class changes

// It receives the type of spinner to change (m1 for example) and changes classes based on the current time

function set_spin_class(target, val) {
  for (i = 0; i < 10; i++) {
    if (i != val) {
      rem_class("spinner_" + target, "spinner_" + target + "_" + i);
      rem_class("num_" + i + "_" + target, "lit");
    }
  }
  add_class("spinner_" + target, "spinner_" + target + "_" + val);
  add_class("num_" + val + "_" + target, "lit");

  if (val === 0) {
    deswitcher(target, val);
  } /*These functions prevent the clock from changing direction*/
  setTimeout(function() {
    switcher(target, val);
  }, 500);
}

function switcher(target, val) {
  switch ("spinner_" + target + "_" + val) {
    case "spinner_h1_2":
      rem_class("spinner_h1", "spinner_h1_2");
      add_class("spinner_h1", "spinner_h1_switch");
      break;
    case "spinner_h2_9":
      rem_class("spinner_h2", "spinner_h1_2");
      add_class("spinner_h2", "spinner_h2_switch");
      break;

    case "spinner_m1_5":
      rem_class("spinner_m1", "spinner_m1_5");
      add_class("spinner_m1", "spinner_m1_switch");
      break;
    case "spinner_m2_9":
      rem_class("spinner_m2", "spinner_m2_9");
      add_class("spinner_m2", "spinner_m2_switch");
      break;

    case "spinner_s1_5":
      rem_class("spinner_s1", "spinner_s1_5");
      add_class("spinner_s1", "spinner_s1_switch");
      break;
    case "spinner_s2_9":
      rem_class("spinner_s2", "spinner_s2_9");
      add_class("spinner_s2", "spinner_s2_switch");
      break;
  }
}
function deswitcher(target, val) {
  rem_class("spinner_" + target, "spinner_" + target + "_switch");
}

//Do stuff here

window.onload = function() {
  startTime();
};
