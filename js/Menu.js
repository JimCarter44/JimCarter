jQuery(document).ready(function () {
  $(function () {
    let homeLine = $("#homeLine");
    /* action on hover */
    $("#homeText").hover(function () {
      /* changed bg color and width */
      homeLine.css("backgroundColor", "#ffb222");
      homeLine.css("width", "70%");
    }, function () {
      /* return on original css */
      homeLine.css("backgroundColor", "#1d1d1d");
      homeLine.css("width", "100%");
    });
    let aboutLine = $("#aboutLine");
    /* action on hover */
    $("#aboutText").hover(function () {
      /* changed bg color and width */
      aboutLine.css("backgroundColor", "#ffb222");
      aboutLine.css("width", "70%");
    }, function () {
      /* return on original css */
      aboutLine.css("backgroundColor", "#1d1d1d");
      aboutLine.css("width", "100%");
    });
    let worksLine = $("#worksLine");
    /* action on hover */
    $("#worksText").hover(function () {
      /* changed bg color and width */
      worksLine.css("backgroundColor", "#ffb222");
      worksLine.css("width", "70%");
    }, function () {
      /* return on original css */
      worksLine.css("backgroundColor", "#1d1d1d");
      worksLine.css("width", "100%");
    });
    let contactLine = $("#contactLine");
    /* action on hover */
    $("#contactText").hover(function () {
      /* changed bg color and width */
      contactLine.css("backgroundColor", "#ffb222");
      contactLine.css("width", "70%");
    }, function () {
      /* return on original css */
      contactLine.css("backgroundColor", "#1d1d1d");
      contactLine.css("width", "100%");
    });
  })
})
