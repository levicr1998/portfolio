<template>
    <div class="container-fluid my-5">
        <div class="row">
            <div class="col-lg-6">
<h3 class="project-title">
            {{project.title}}
        </h3>
        <p class="project-description">
            {{ project.description}}
        </p>
        <skills-container :skillNameEnabled="skillNameEnabled" :skills="project.skills" class="project-skills-container" />

            </div> 
            <div class="col-lg-6 col-xl-4 col-md-8 mx-md-auto pt-4 offset-xl-2 my-auto">
                <img :src="project.image" alt="Project image">
                <div class="projects-links">
                <a><img src="../assets/img/icons/github-icon.svg" alt="Git hub icon" class="icon"></a>
                <a><img src="../assets/img/icons/link-icon.svg" alt="Project link icon" class="icon"></a>
                </div>
                </div>     
</div>
    </div>
</template>
<style lang="scss" scoped>
.container-fluid{
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
    padding:2rem;

    .project-title{
color:$primary-color;
font-weight: 700 !important;
    }
.project-skills-container{
    margin:0;
&::v-deep .skill-items-container{
width:100%;
    }
&::v-deep .skill-items-container .skill-item {
    color:$primary-color;
      border: $primary-color solid 2px;
      filter:none;
}
}

.projects-links{
    float:right;
    width:auto;
}
.icon {
    width:2rem;
    height:auto;
}
}
</style>

<script>
import  SkillsContainer from "@/components/SkillsContainer";
export default {
    components:{
SkillsContainer
    },
    props:{
        project: Object
    },
    data(){
        return {
            skillNameEnabled: false
        }
    }
}
</script>