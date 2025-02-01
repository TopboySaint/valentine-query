const accept = () => {
    // alert('yes')
    result.innerHTML = `
        <main class="container col-11 col-md-11 col-lg-11 mx-auto">
        <div>
            <p class="text-center text-white fs-5 p-3" id="para">"I love you."</p>
            <img src="images/Love_Teddy_Bear_Wallpapers_1-removebg-preview.png" alt="" width="200" class="d-block mx-auto">
            <p class="text-center text-white fs-5 p-3" id="para">Thank you, my valentine. You complete me🥰</p>
            </div>
        </div>
    </main>
    `
}

const reject = () => {
    // alert('yes')
    result.innerHTML = `
        <main class="container col-11 col-md-11 col-lg-11 mx-auto">
        <div>
            <p class="text-center text-white fs-5 p-3" id="para">"I love you still."</p>
            <img src="images/Love_Teddy_Bear_Wallpapers_1-removebg-preview.png" alt="" width="200" class="d-block mx-auto">
            <p class="text-center text-white fs-5 p-3" id="para">Oya nau, touch grass!😏😂</p>
            </div>
        </div>
    </main>
    `
}