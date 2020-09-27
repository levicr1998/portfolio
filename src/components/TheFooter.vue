<template>

    <div class="footer-container">
        <footer>
        <ul class="icon-links mx-auto">
            <li class="icon-link"><img src="../assets/img/icons/linkedin-icon.svg" alt="Linkedin Icon" class="icon-link-image"></li>
            <li class="icon-link"><img src="../assets/img/icons/github-icon.svg" alt="Github Icon" class="icon-link-image"></li>
            <li class="icon-link"><img src="../assets/img/icons/instagram-icon.svg" alt="Instagram Icon" class="icon-link-image"></li>
            <li class="icon-link"><img src="../assets/img/icons/facebook-icon.svg" alt="Facebook Icon" class="icon-link-image"></li>
        </ul>
        <p>© 2020 - Levi Crietee</p>
         </footer>
    </div>
</template>
<style lang="scss" scoped>
.footer-container{
    background:$footer-color;
    text-align:center;
padding:1rem;
.icon-links{
    width:fit-content;
    padding:0;
li {
    padding:1rem;
    &:hover{
        transform: translateY(-10px);
        transition: 0.3s;
        cursor: pointer;
    }
    img {
        width:2rem;
        height: auto;
    }
}
}
  p {
        margin: 0 auto;
        color:$primary-color;
        font-weight: 200;
        width: fit-content;
    }
}
</style>