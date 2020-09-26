<template>
 <div class="skill-container">
            <h4 v-if="skillNameEnabled"> {{ skillName }}</h4>
            <div class="skill-items-container">
              <div
                class="skill-item"
                v-for="skill in skills"
                v-bind:key="skill"
              >
                {{ skill }}
              </div>
            </div>
 </div>
</template>

<script>
export default {
    props:{
        skillName: String,
        skillNameEnabled: {
            type: Boolean,
        default:true
        },
        skills: Array
    }
}
</script>