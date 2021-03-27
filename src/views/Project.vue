<template>
  <v-container>
    <v-breadcrumbs
      :items="[
        {
          text: 'Home',
          disabled: false,
          to: '/'
        },
        {
          text: 'Project',
          disabled: true
        }
      ]"
      divider="/"
      large
    ></v-breadcrumbs>

    <h1 class="text-center mb-10">Projects</h1>

    <TextSeparator text="2021"></TextSeparator>
    <ProjectContainer>
      <ProjectCard
        title="Brunjar"
        subtitle="Work In Progress"
        src="brunjar_wip.png"
        link_website="https://brunjar.com/"
        link_ig="https://www.instagram.com/brunjar.bn/"
      >
        Brunjar is a community-based e-commerce platform. Brunjar aims to help
        individual and small business to start selling at an online marketplace
        platform for free.

        <template v-slot:note>
          Note: This project is under HUETECH Enterprise
        </template>
      </ProjectCard>

      <ProjectCard
        title="Blue Castle Website"
        subtitle="Work In Progress"
        src="blue_castle.png"
        link_ig="https://www.instagram.com/blue_castle_enterprise/"
      >
        Blue Castle is within the Food &amp; Beverage industry. I'm working on
        their website to provide an easier way for their clients to view their
        food menu. It will have a Content-Management-System for their admin to
        simply update/add their menu.

        <template v-slot:note>
          Note: This project is under HUETECH Enterprise
        </template>
      </ProjectCard>

      <ProjectCard title="???" subtitle="Work In Progress" src="placeholder.png"
        >???
      </ProjectCard>
    </ProjectContainer>

    <TextSeparator text="2020"></TextSeparator>
    <ProjectContainer>
      <ProjectCard
        title="Squarescape"
        src="squarescape.png"
        link_itch_io="https://afiqrosli.itch.io/squarescape"
        link_ig_post="https://www.instagram.com/p/CJfw1P8BBLQ/"
      >
        This game was made a day before our (my families) annual end of year
        celebration. It's a fast-paced endless runner game that scales its
        difficulty in a short amount of time. Why? To keep the gameplay really
        short.
      </ProjectCard>

      <ProjectCard
        title="Konteks"
        src="konteks.png"
        link_github="https://github.com/AfiqRosli/Konteks_SPA_Frontend"
      >
        This is my final year project in LCB, a website to help people learn
        languages which utilises context to help learner comprehend better.
      </ProjectCard>

      <ProjectCard
        title="Finance App"
        src="finance_app.png"
        link_ig_post="https://www.instagram.com/p/CElAkC5Bp0e/"
      >
        Inspired by an IG post to manage finance, I decided to create a simple
        web app to do just that in a day.
      </ProjectCard>

      <ProjectCard
        title="Literature Review Management"
        src="lit_rev_mng.png"
        link_ig_post="https://www.instagram.com/p/B-SIo7eBzt9/"
      >
        Starting out my final year, and I knew there was gonna be a lot of
        reading. So I coded a simple literature review management tool for
        myself.
      </ProjectCard>
    </ProjectContainer>

    <TextSeparator text="2019"></TextSeparator>
    <ProjectContainer>
      <ProjectCard title="Connect 3" src="connect_3.png">
        Assignment project from LCB. Did a "Connect 3" in Android.
      </ProjectCard>

      <ProjectCard title="Student Council Website" src="scw.png">
        Part of our experiential learning module in LCB to create any group
        project based on what was taught. We were a team of 4, and I was the
        lead developer.
      </ProjectCard>

      <ProjectCard
        title="Plus EXP"
        src="plus_exp.png"
        link_website="https://plus-exp.com/"
      >
        Started my first internship at Grominda SDN BHD during my semester break
        in my second year. I was part of the IT department to maintain the Plus
        EXP website, a website to connect talents with prospective employers.

        <template v-slot:note>
          Note: This project is under Grominda SDN BHD
        </template>
      </ProjectCard>

      <ProjectCard title="GardenIn" src="gardenin.png">
        GardenIn. An e-commerce website built for my assignment in LCB.
      </ProjectCard>
    </ProjectContainer>

    <TextSeparator text="2018"></TextSeparator>
    <ProjectContainer>
      <ProjectCard
        title="Unit Conversion"
        src="unit_conversions.png"
        link_github="https://github.com/AfiqRosli/unit-conversions"
      >
        Created my first functional GUI application written in Java to handle
        unit conversions.
      </ProjectCard>

      <ProjectCard
        title="BMO Calculator"
        src="bmo_calculator.png"
        link_ig_post="https://www.instagram.com/p/BlXw2F9gTFn/"
      >
        Used HTML, CSS, and vanilla JS to create a web-based calculator themed
        as BMO from Adventure Time!
      </ProjectCard>
    </ProjectContainer>

    <TextSeparator text="2017"></TextSeparator>
    <ProjectContainer>
      <ProjectCard
        title="Paddle Ball Brick Game"
        src="paddle_ball_brick_game.png"
        link_ig_post="https://www.instagram.com/p/Bbx9xWxhbPH/"
      >
        As part of the "HTML5 Apps and Games" course delivered by W3C in EdX,
        I've created this game using the Canvas API.
      </ProjectCard>

      <ProjectCard
        title="Words Overdue"
        src="words_overdue.png"
        link_play="https://afiqrosli.github.io/Words-Overdue/"
        link_ig_post="https://www.instagram.com/p/BbSEJKnhBqb/"
      >
        A typing game that runs on the browser; written in JavaScript. The
        player has three lives, and they need to type the displayed words before
        they ran out of time and lives.
      </ProjectCard>
    </ProjectContainer>
  </v-container>
</template>

<script>
import TextSeparator from "@/components/TextSeparator";
import ProjectContainer from "@/components/ProjectContainer";
import ProjectCard from "@/components/ProjectCard";

export default {
  metaInfo: {
    title: "Projects"
  },
  components: { TextSeparator, ProjectContainer, ProjectCard }
};
</script>

<style lang="scss" scoped></style>
