// import { Slider } from '../components/slider.js'

export const Furnitures = () => {
    return {html: (/*html*/`
        <div class="furnitures-container">
            ${/*Slider()*/""}

            <div class="mhl">
                <div>
                    <img src="../src/assets/logo.png" alt="Logo" class="w-50"/>
                    <br/> <br/>
                
                    <h1>
                        Ecmel Dekorasyon Tasarımlarını görmek için <br/>
                        sayfayı kaydırınız
                    </h1>

                    <i class="material-icons"> expand_more </i>
                </div>
            </div>

            <div class="row mt-5">
                <h2 class="col-12">Yatak Odası</h2>
    
                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/yatak/res2.jpg" alt="Yatak"/>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/yatak/res4.jpg" alt="Yatak"/>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/yatak/res5.jpg" alt="Yatak"/>
                </div>
                <visage-link path="/yatak"> Daha fazla </visage-link>
            </div>

            <div class="row">
                <h2 class="col-12"> Çocuk Odası </h2>

                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/çocuk/res12.jpg" alt="Yatak"/>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/çocuk/res13-1.jpg" alt="Yatak"/>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/çocuk/res13.jpg" alt="Yatak"/>
                </div>

                <visage-link path="/cocuk"> Daha fazla </visage-link>
            </div>

            <div class="row">
                <h2 class="col-12"> Ofis </h2>

                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/ofis/ps.jpg" alt="Ofis"/>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/ofis/res20-1.jpg" alt="Ofis"/>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/ofis/res24.jpg" alt="Ofis"/>
                </div>

                <visage-link path="/ofis"> Daha fazla </visage-link>
            </div>

            <div class="row">
                <h2 class="col-12"> Mutfak </h2>

                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/Mutfak/res9.jpg" alt="Mutfak"/>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/Mutfak/res11-1.jpg" alt="Mutfak"/>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/Mutfak/res25.jpg" alt="Mutfak"/>
                </div>

                <visage-link path="/mutfak"> Daha fazla </visage-link>

            </div>

            <div class="row">
                <h2 class="col-12"> Banyo </h2>

                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/Banyo/res10.jpg" alt="Yatak"/>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/Banyo/res17.jpg" alt="Yatak"/>
                </div>
                <div class="col-xl-4 col-md-4 col-sm-12">
                    <img src="../src/assets/furnitures/Banyo/res14.jpg" alt="Yatak"/>
                </div>

                <visage-link path="/banyo"> Daha fazla </visage-link>
            </div>
        </div>
    `)}
}