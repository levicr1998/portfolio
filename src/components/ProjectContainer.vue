<template>
    <div class="project-container container">
        <div class="row">
            <div class="col-6">
<h3 class="project-title">
            {{project.title}}
        </h3>
        <p class="project-description">
            {{ project.description}}
        </p>
        <skills-container skillNameEnabled="false" :skills="project.skills" />

            </div> 
            <div class="col-6">
                <img :src="project.image" alt="Project image">
                <div class="projects-links">
                <a><img src="../assets/img/icons/github-icon.svg" alt="Git hub icon" class="icon"></a>
                <a><img src="../assets/img/icons/link-icon.svg" alt="Project link icon" class="icon"></a>
                </div>
                </div>     
</div>
    </div>
</template>


<script>
import  SkillsContainer from "@/components/SkillsContainer";
export default {
    components:{
SkillsContainer
    },
    props:{
        project: Object
    }
}
</script>