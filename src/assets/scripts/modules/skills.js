import Vue from 'vue';


const skill = {
  template: '#skill',
  props: {
    title: String,
    percentage: Number
  },
  methods: {
    drawCircleDependencyOnPercentage() {
      const circle = this.$refs.circle;
      const currentPercent = parseInt(getComputedStyle(circle).getPropertyValue("stroke-dasharray"));

      const requiredDashoffset = (currentPercent / 100) * (100 - this.percentage);

      let opacityPercent = this.percentage / 100;

      if (opacityPercent < 0.3) opacityPercent = 0.3;

      circle.style.strokeDashoffset = requiredDashoffset;
      circle.style.stroke = `rgba(116, 161, 100, ${opacityPercent})`;
    }
  },
  mounted() {
    this.drawCircleDependencyOnPercentage();
  }
}

const skillsRow = {
  template: '#skills-item',
  props: {
    skills: Object
  },
  components: {
    skill
  }
}

new Vue({
  el: '#skills-component',
  components: {
    skillsRow
  },
  data() {
    return {
      skills: []
    }
  },
  created() {
    const data = require('../../../data/skills.json');

    this.skills = data;
  },
  template: '#skills-list'
});