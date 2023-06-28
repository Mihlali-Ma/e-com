<template>
    <div>
        <div id="carouselExampleIndicators" class="car-s carousel slide">
            
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://i.postimg.cc/wMydkFtG/RED-VELVET-CAKE-23-S-01.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://i.postimg.cc/pdLVFfBg/IMG-4739-petite-vanilla-bean-scones-horizontal.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://i.postimg.cc/MTjS7dfr/chocolate-cheesecake-recipe-5.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://i.postimg.cc/437Mqn4Y/traditional-british-rich-fruit-cake-recipe-435791-hero-01-5ae2aea3437d468a914eb6a4682f2d7e.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://i.postimg.cc/DyYT8SZz/IMG-4087-feature-2.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://i.postimg.cc/QCtz3qcJ/carrot-cake-index-641a055e1a654.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="adding">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add</button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Name:</label>
                        <input type="text" class="form-control" id="cake-name">
                      </div>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">price:</label>
                        <input type="text" class="form-control" id="cake-price">
                      </div>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Image(URL):</label>
                        <input type="text" class="form-control" id="cake-img">
                      </div>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Type:</label>
                        <input type="text" class="form-control" id="typeofcake">
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Add Cake</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">price</th>
                  <th scope="col">Image</th>
                  <th scope="col">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Chocolate cake</th>
                  <td>R560</td>
                  <td><img src="https://i.postimg.cc/DyYT8SZz/IMG-4087-feature-2.jpg" alt="" width="55px"></td>
                  <td>Cake</td>
                </tr>
                <tr>
                  <th scope="row">Carrot cake</th>
                  <td>R560</td>
                  <td><img src="https://i.postimg.cc/QCtz3qcJ/carrot-cake-index-641a055e1a654.jpg" alt="" width="55px"></td>
                  <td>Cake</td>
                </tr>
                <tr>
                  <th scope="row">Choc-cheese cake</th>
                  <td>R560</td>
                  <td><img src="https://i.postimg.cc/MTjS7dfr/chocolate-cheesecake-recipe-5.jpg" alt="" width="55px"></td>
                  <td>Cake</td>
                </tr>
              </tbody>
            </table>
          </div>

    </div>
</template>

<script>
    let products = [
      product={
            name:'Fruit Cake',
            price:'R600',
            img:'https://i.postimg.cc/437Mqn4Y/traditional-british-rich-fruit-cake-recipe-435791-hero-01-5ae2aea3437d468a914eb6a4682f2d7e.jpg',
            type:'Cake'
      }
    ]
    
    function adding() {
      
    }
    

    export default {
        
    }
</script>

<style scoped>
.car-s{
    width: 80%;
    height: 30rem;
    margin-left:10%;
}

.carousel-item img{
    height: 29rem;
    object-fit: cover;
}
</style>