<template>
  <v-container>
    <h1 class="text-center my-10">Projects</h1>

    <TextSeparator text="2021"></TextSeparator>
    <ProjectContainer>
      <ProjectCard
        title="Brunjar"
        subtitle="Work In Progress"
        src="brunjar_wip.png"
        link_website="https://brunjar.com/"
        link_ig="https://www.instagram.com/brunjar.bn/"
      >
        Brunjar is a community based e-commerce platform
      </ProjectCard>

      <ProjectCard
        title="Blue Castle Website"
        subtitle="Work In Progress"
        src="blue_castle.png"
        link_ig="https://www.instagram.com/blue_castle_enterprise/"
      >
      </ProjectCard>

      <ProjectCard
        title="Stay Tuned"
        subtitle="Work In Progress"
        src="placeholder.png"
        >Can only be disclose once the project is released as agreed with the
        client
      </ProjectCard>
    </ProjectContainer>

    <TextSeparator text="2020"></TextSeparator>
    <ProjectContainer>
      <ProjectCard
        title="Squarescape"
        src="squarescape.png"
        link_ig_post="https://www.instagram.com/p/CJfw1P8BBLQ/"
      >
      </ProjectCard>

      <ProjectCard
        title="Konteks"
        src="konteks.png"
        link_github="https://github.com/AfiqRosli/Konteks_SPA_Frontend"
      >
      </ProjectCard>

      <ProjectCard
        title="Finance App"
        src="finance_app.png"
        link_ig_post="https://www.instagram.com/p/CElAkC5Bp0e/"
      >
      </ProjectCard>

      <ProjectCard
        title="Literature Review Management"
        src="lit_rev_mng.png"
        link_ig_post="https://www.instagram.com/p/B-SIo7eBzt9/"
      >
      </ProjectCard>
    </ProjectContainer>

    <TextSeparator text="2019"></TextSeparator>
    <ProjectContainer>
      <ProjectCard title="Connect 3" src="connect_3.png"> </ProjectCard>

      <ProjectCard title="Student Council Website" src="scw.png"> </ProjectCard>

      <ProjectCard
        title="Plus EXP"
        src="plus_exp.png"
        link_website="https://plus-exp.com/"
      >
      </ProjectCard>

      <ProjectCard title="GardenIn" src="gardenin.png"> </ProjectCard>
    </ProjectContainer>

    <TextSeparator text="2018"></TextSeparator>
    <ProjectContainer>
      <ProjectCard
        title="Unit Conversion"
        src="unit_conversions.png"
        link_github="https://github.com/AfiqRosli/unit-conversions"
      >
      </ProjectCard>

      <ProjectCard title="BMO Calculator" src="bmo_calculator.png">
      </ProjectCard>
    </ProjectContainer>

    <TextSeparator text="2017"></TextSeparator>
    <ProjectContainer>
      <ProjectCard
        title="Paddle Ball Brick Game"
        src="paddle_ball_brick_game.png"
      >
      </ProjectCard>

      <ProjectCard title="Words Overdue" src="words_overdue.png"> </ProjectCard>
    </ProjectContainer>
  </v-container>
</template>

<script>
import TextSeparator from "@/components/TextSeparator";
import ProjectContainer from "@/components/ProjectContainer";
import ProjectCard from "@/components/ProjectCard";

export default {
  components: { TextSeparator, ProjectContainer, ProjectCard }
};
</script>

<style lang="scss" scoped></style>
