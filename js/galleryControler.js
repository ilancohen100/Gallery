'use strict'
$(document).ready(function(){
  
  // $('.modal').hide();

   createProjs();
   renderProjs();
  console.log("im here");
  
  // $('.post-nav').click(function(){
  //    var diff =  $(this).data('nav');
  //    setCurrentPage(diff);
  //    renderPost();
  // });
});
function renderProjs() {
  var $ProjsContainer = $('.projs-container')
  var Projs = getProjsToRender()
  var htmls = Projs.map(function (proj) {
      return `<div class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" onclick="onShowProjModal('${proj.id}')" href ="#portfolioModal">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
       <img class="img-fluid" src="${proj.imgUrl}" alt="">
      </a>
      <div class="portfolio-caption">
        <h4>"${proj.name}"</h4>
        <p class="text-muted">"${proj.id}"</p>
        <p class="text-muted">"${proj.title}"</p>
        <p class="text-muted">"${proj.desc}"</p>
        <p class="text-muted">"${proj.publishedAt}"</p>
      </div>
    </div>`
    //<p class="text-muted">${proj.labels}</p>
  });
  $ProjsContainer.html(htmls)
}
function onShowProjModal(projId) {
  console.log("onShow");
//  $('#portfolioModal').modal('hide');
  var proj = getProjById(projId);
  $("#project-name").text( proj.name);
  $("#project-desc").text( proj.desc);
  $("#project-img-url").attr("src",proj.imgUrl);
  document.querySelector("#project-link").href = proj.link;
  $("#project-link").attr("href",proj.link);
}
function onSendMessageClick(){
  var strSendMail = `https://mail.google.com/mail/?view=cm&fs=1&to=${$("#txtEmail").val()}&su=${$("#txt-subjet").val()}&body=${$("#txtAreaMsg").val()}`;
  window.open(strSendMail);
}
// function onDeleteProj(ProjID) {
//   deleteProj(ProjID)
//   renderProjs()
// }
// function onShowAddModal() {
//   $('#addProjModal').modal()
// }
// function onShowProjModal(proj) {
//   $('#portfolioModal').modal()
//   $("#project-name").text() = proj.name;
// }

// function onShowUpdateModal(ProjID) {
//   var Proj = setCurrProj(ProjID)
//   $('#updateProjModal #oldProjPrice').text(Proj.price)
//   $('#updateProjModal').modal()
// }
// function onShowReadModal(ProjID) {
//   $elModal = $('#readProjModal')
//   var Proj = setCurrProj(ProjID)
//   $elModal.find('#readProjModalLabel').text(Proj.name)
//   $elModal.find('.img-container').html(`<img src="${Proj.imgUrl}" alt="${Proj.id}" title="${Proj.id}" class="img-fluid">`)
//   $elModal.find('.details-container').html(`<h2>${Proj.name}</h2><p>Price: ${Proj.price}</p>
//  <label>Raiting (1-10)</label>
//  <input type="number" min="0" max="10" class="form-control" id="ProjRaiting" onchange="onUpdateRate()">`)
//   $elModal.find('#ProjRaiting').val(Proj.rate)
//   $('#readProjModal').modal()
// }
// function onUpdateProj() {
//   var newPrice = $('#newProjPrice').val()
//   updateProjPrice(newPrice)
//   $('#newProjPrice').val('')
//   renderProjs()
// }
// function onAddProj() {
//   var name = $('#addProjModal #ProjName').val()
//   var price = +$('#addProjModal #ProjPrice').val()
//   var imgUrl = $('#addProjModal #ProjImgUrl').val()
//   if(!name || !price) return
//   addProj(name, price, imgUrl)
//   $('#addProjModal').modal('hide')
//   renderProjs()
// }
// function onUpdateRate() {
//   var newRate = $('#readProjModal #ProjRaiting').val()
//   if (newRate > 10) return
//   updateProjRate(parseInt(newRate))
// }
// function onSortClick(elSort) {
//   setSortStatus(elSort.dataset.value)
//   renderProjs()
// }




(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict
