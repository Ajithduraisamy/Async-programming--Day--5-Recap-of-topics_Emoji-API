//using async function to retrive the data from the api and display in the card:
async function emoji(){

try {
var res= await fetch("https://emojihub.yurace.pro/api/all")
var res1= await res.json();
console.log(res1)

var container=document.createElement("div")
container.className="container"

var row=document.createElement("div")
row.className="row"

// using for loop to create a each column for the api data
for(var i=0;i<res1.length;i++){

var col=document.createElement("div")
col.className="col-md-3"
col.innerHTML=`<div class="card p-3">
                    <blockquote class="blockquote mb-0 card-body">
                        ${res1[i].htmlCode[0]}
                            <footer class="blockquote-footer">
                                <small class="text-muted">
                                    <cite title="Source Title">${res1[i].name}</cite>
                                </small>
                            </footer>
                    </blockquote>
                </div>`

row.append(col)
container.append(row)
document.body.append(container)
}

} catch (_) {
    col.innerHTML += `<p>Error: Could not retrive any data.</p>`;
}

}
emoji()