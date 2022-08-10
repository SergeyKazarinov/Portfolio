const progress = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
  // console.log(`window.pageYOffset: ${window.pageYOffset}`);
  // console.log(`totalHeight: ${totalHeight}`);
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}