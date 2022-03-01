jQuery(document).ready(function () {
  $(function () {
    /* action on click */
    let portFourCotesMenu = $("#portFourCotesMenu");
    let portMatriceRpMenu = $("#portMatriceRpMenu");
    let portDppLogMenu = $("#portDppLogMenu");
    let portNoumeaMenu = $("#portNoumeaMenu");
    let portVLocMenu = $("#portVLocMenu");
    let portWebAgencyMenu = $("#portWebAgencyMenu");
    let portFourCotes = $("#portFourCotes");
    let portMatriceRp = $("#portMatriceRp");
    let portDppLog = $("#portDppLog");
    let portNoumea = $("#portNoumea");
    let portVLoc = $("#portVLoc");
    let portWebAgency = $("#portWebAgency");
    portFourCotesMenu.click(function () {
      portFourCotes.css("display", "flex");
      portMatriceRp.css("display", "none");
      portDppLog.css("display", "none");
      portNoumea.css("display", "none");
      portVLoc.css("display", "none");
      portWebAgency.css("display", "none");
      portFourCotesMenu.css("color", "#ffb222");
      portMatriceRpMenu.css("color", "#cecece");
      portNoumeaMenu.css("color", "#cecece");
      portVLocMenu.css("color", "#cecece");
      portWebAgencyMenu.css("color", "#cecece");
      portDppLogMenu.css("color", "#cecece");
    });
    portMatriceRpMenu.click(function () {
      portFourCotes.css("display", "none");
      portMatriceRp.css("display", "flex");
      portDppLog.css("display", "none");
      portNoumea.css("display", "none");
      portVLoc.css("display", "none");
      portWebAgency.css("display", "none");
      portFourCotesMenu.css("color", "#cecece");
      portMatriceRpMenu.css("color", "#ffb222");
      portNoumeaMenu.css("color", "#cecece");
      portVLocMenu.css("color", "#cecece");
      portWebAgencyMenu.css("color", "#cecece");
      portDppLogMenu.css("color", "#cecece");
    });
    portNoumeaMenu.click(function () {
      portFourCotes.css("display", "none");
      portMatriceRp.css("display", "none");
      portDppLog.css("display", "none");
      portNoumea.css("display", "flex");
      portVLoc.css("display", "none");
      portWebAgency.css("display", "none");
      portFourCotesMenu.css("color", "#cecece");
      portMatriceRpMenu.css("color", "#cecece");
      portNoumeaMenu.css("color", "#ffb222");
      portVLocMenu.css("color", "#cecece");
      portWebAgencyMenu.css("color", "#cecece");
      portDppLogMenu.css("color", "#cecece");
    });
    portVLocMenu.click(function () {
      portFourCotes.css("display", "none");
      portMatriceRp.css("display", "none");
      portDppLog.css("display", "none");
      portNoumea.css("display", "none");
      portVLoc.css("display", "flex");
      portWebAgency.css("display", "none");
      portFourCotesMenu.css("color", "#cecece");
      portMatriceRpMenu.css("color", "#cecece");
      portNoumeaMenu.css("color", "#cecece");
      portVLocMenu.css("color", "#ffb222");
      portWebAgencyMenu.css("color", "#cecece");
      portDppLogMenu.css("color", "#cecece");
    });
    portWebAgencyMenu.click(function () {
      portFourCotes.css("display", "none");
      portMatriceRp.css("display", "none");
      portDppLog.css("display", "none");
      portNoumea.css("display", "none");
      portVLoc.css("display", "none");
      portWebAgency.css("display", "flex");
      portFourCotesMenu.css("color", "#cecece");
      portMatriceRpMenu.css("color", "#cecece");
      portNoumeaMenu.css("color", "#cecece");
      portVLocMenu.css("color", "#cecece");
      portWebAgencyMenu.css("color", "#ffb222");
      portDppLogMenu.css("color", "#cecece");
    });
    portDppLogMenu.click(function () {
      portFourCotes.css("display", "none");
      portMatriceRp.css("display", "none");
      portDppLog.css("display", "flex");
      portNoumea.css("display", "none");
      portVLoc.css("display", "none");
      portWebAgency.css("display", "none");
      portFourCotesMenu.css("color", "#cecece");
      portMatriceRpMenu.css("color", "#cecece");
      portNoumeaMenu.css("color", "#cecece");
      portVLocMenu.css("color", "#cecece");
      portWebAgencyMenu.css("color", "#cecece");
      portDppLogMenu.css("color", "#ffb222");
    });
  })
})
