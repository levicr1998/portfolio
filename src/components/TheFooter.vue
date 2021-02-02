<template>

    <div class="footer-container">
        <footer>
        <ul class="icon-links mx-auto">
           <a href="#"> <li class="icon-link"><img src="../assets/img/icons/linkedin-icon.svg" alt="Linkedin Icon" class="icon-link-image"></li></a>
           <a href="#"> <li class="icon-link"><img src="../assets/img/icons/github-icon.svg" alt="Github Icon" class="icon-link-image"></li></a>
           <a href="#"> <li class="icon-link"><img src="../assets/img/icons/instagram-icon.svg" alt="Instagram Icon" class="icon-link-image"></li></a>
          <a href="#">  <li class="icon-link"><img src="../assets/img/icons/facebook-icon.svg" alt="Facebook Icon" class="icon-link-image"></li></a>
        </ul>
        <p>© 2020 - Levi Crietee</p>
         </footer>
    </div>
</template>
<style lang="scss" scoped>
.footer-container{
    background:$primary-color;
    text-align:center;
padding:1rem;
.icon-links{
    width:fit-content;
    padding:0;
li {
    padding:1rem;
    transition: 0.3s;
     list-style-type: none;
     display: inline-flex;

    &:hover{
        transform: translateY(-10px) scale(1.1);
        
        cursor: pointer;
    }
    img {
        width: clamp(1.5rem, 2vw, 2rem);
        height: auto;
    }
}
}
  p {
        margin: 0 auto;
        font-size: clamp(0.8rem, 2vw, 1.1rem) !important;
        color:$tertiary-color;
        font-weight: 200;
        width: fit-content;
    }
}
</style>