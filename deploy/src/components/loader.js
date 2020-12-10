export const Loader = () => {
    return (`
        <div class="loader">
            <span style="color:orange;">Ecmel</span>Mobilya Dekorasyon
            ${/**buraya html kodlarını yaz */""}
            <div class="loading">
                
            </div>
        </div>
        <style>
            ${/**burayada css kolarını yaz */""}
            .loader {
                font-size:40px;
                margin:auto;
                position:fixed;
                background: black;
                width: 100%;
                left: 0; right: 0;
                z-index:44;
                bottom: 0;
                top: 0;
                border:16px solid;
                border-radius:0 0 20px;
                text-align:center;
                background-image:url("../src/assets/header-image.jpg");
                background-repeat:no-repeat;
                background-position:3px;
                
            }
            .loader .loading
            {
                border-radius:50% 50%;
                border:16px solid black;
                background-color:transparent;
                border-top: 16px solid red;
                width: 120px;
                height: 120px;
                -webkit-animation: spin 2s linear infinite; /* Safari */
                animation: spin 1s linear infinite;
                margin:auto;
                margin-top:20%;
            }
            @-webkit-keyframes spin {
                0% { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
              }
              
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
        </style>
    `)
}