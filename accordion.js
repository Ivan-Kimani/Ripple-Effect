
// about me accordion
document.addEventListener("DOMContentLoaded", function () {

  const heading = document.querySelectorAll("h3");

  heading.forEach((heading) => {
    heading.addEventListener("click", function () {
      const contentId = `${heading.id} -content`;
      const content = document.getElementById(contentId);


      if (content.style.display === "block" || content.style.display === "") {
        content.style.display = "none";

      }else {
        content.style.display = " block";
      }
    });
  });
});
