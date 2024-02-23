$(document).ready( () => {
    $("button").on("click", () => {
        $("body").toggleClass("change")
        $(".toggle").toggleClass("hover")
        $("p").toggleClass("text-change")
        $("h2").toggleClass("h2-change")
        $("h1").toggleClass("h2-change")
    })
})