jQuery(document).ready(function () {
  $(function () {
    /* action on hover */
    let envXAM = $(".envXAM");
    envXAM.hover(function () {
      /* changed bg color and width */
      envXAM.css("text-decoration", "underline");
    }, function () {
      /* return on original css */
      envXAM.css("text-decoration", "none");
    });
    let cotesAM = $(".cotesAM");
    cotesAM.hover(function () {
      /* changed bg color and width */
      cotesAM.css("text-decoration", "underline");
    }, function () {
      /* return on original css */
      cotesAM.css("text-decoration", "none");
    });
    /* action for exp selected */
    let fourCotes = $("#fourCotes");
    let connectProject = $("#connectProject");
    let environX = $("#environX");
    let franceInterim = $("#franceInterim");
    let fourCotesMenu = $("#fourCotesMenu");
    let connectProjectMenu = $("#connectProjectMenu");
    let environXMenu = $("#environXMenu");
    let franceInterimMenu = $("#franceInterimMenu");
    fourCotesMenu.click(function () {
      fourCotes.css("display", "block");
      connectProject.css("display", "none");
      environX.css("display", "none");
      franceInterim.css("display", "none");
      fourCotesMenu.css("color", "#ffb222");
      connectProjectMenu.css("color", "#cecece");
      environXMenu.css("color", "#cecece");
      franceInterimMenu.css("color", "#cecece");
    });
    connectProjectMenu.click(function () {
      fourCotes.css("display", "none");
      connectProject.css("display", "block");
      environX.css("display", "none");
      franceInterim.css("display", "none");
      fourCotesMenu.css("color", "#cecece");
      connectProjectMenu.css("color", "#ffb222");
      environXMenu.css("color", "#cecece");
      franceInterimMenu.css("color", "#cecece");
    });
    environXMenu.click(function () {
      fourCotes.css("display", "none");
      connectProject.css("display", "none");
      environX.css("display", "block");
      franceInterim.css("display", "none");
      fourCotesMenu.css("color", "#cecece");
      connectProjectMenu.css("color", "#cecece");
      environXMenu.css("color", "#ffb222");
      franceInterimMenu.css("color", "#cecece");
    });
    franceInterimMenu.click(function () {
      fourCotes.css("display", "none");
      connectProject.css("display", "none");
      environX.css("display", "none");
      franceInterim.css("display", "block");
      fourCotesMenu.css("color", "#cecece");
      connectProjectMenu.css("color", "#cecece");
      environXMenu.css("color", "#cecece");
      franceInterimMenu.css("color", "#ffb222");
    });
  })
})
