// START CLOCK SCRIPT

let r;
Number.prototype.pad = function (n) {
  for (r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  let now = new Date();
  let min = now.getMinutes(),
    hour = now.getHours(),
    month = now.getMonth(),
    day = now.getDate(),
    year = now.getFullYear();
  let months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  let tags = ["mon", "d", "y", "h", "m"],
    corr = [months[month], day, year, hour.pad(2), min.pad(2)];
  for (let i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

// END CLOCK SCRIPT

// START FORM SEND MAIL

$(function () {
  $("#send-form").submit(function () {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize(),
    }).done(function () {
      $(".contacts__massage")
        .addClass("active")
        .css("display", "flex")
        .hide()
        .fadeIn();
      setTimeout(function () {
        jQuery("#send-form").trigger("reset");
        $(".contacts__massage").removeClass("active").fadeOut();
      }, 3000);
    });
    return false;
  });
});

// END FORM SEND MAIL

// move to section without change URL

$('a[href^="#services"]').on("click", function (e) {
  e.preventDefault();

  let target = $(this.hash);
  $("html, body").stop().animate(
    {
      scrollTop: target.offset().top,
    },
    500
  );
});
$('a[href^="#portfolio"]').on("click", function (e) {
  e.preventDefault();

  let target = $(this.hash);
  $("html, body").stop().animate(
    {
      scrollTop: target.offset().top,
    },
    500
  );
});
$('a[href^="#price"]').on("click", function (e) {
  e.preventDefault();

  let target = $(this.hash);
  $("html, body").stop().animate(
    {
      scrollTop: target.offset().top,
    },
    500
  );
});

// top button

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $("#top").fadeIn();
    } else {
      $("#top").fadeOut();
    }
  });

  $("#top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500);
  });
});
