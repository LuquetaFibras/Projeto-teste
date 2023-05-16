function search(){
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(date=>DataTransfer.json())
    .then(json=>{
        document.getElementById("content").src=json[0]
    })
}

window.onload = () => {
    search();
}

gerar.addEventListener("click", () => search());