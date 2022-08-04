let li = document.querySelectorAll(".media");
let arr = ["facebook", "instagram", "twitter"]
let count = 0;
for (let l of li) {
    l.innerText = arr[count];
    count++;
}