<script setup>
import { ref, onMounted } from "vue";

let choices = [
  "programme.",
  "réalise des Bots",
  "construis un modèle de détection de langue avec fast Text.",
  "développe une api.",
  "suis un obbyist sur roblox.",
];

let project = {
  0: {
    title: "Interaction Bot",
    description: `
    Mon bot de traduction Discord, Interaction Bot, utilise FastText pour détecter la langue et un modèle de traduction pour fournir une offre de traduction gratuite. Je le fournis sans limite de caractères ce qui en fait un des seuls bot gratuits sur discord. Interaction bot est utilisé par 20 000 serveurs avec plus de 1000 commandes effectuées chaque jour.
    <br /><br />Présentation du bot par un utilisateur :
    <iframe class="w-full" height="500" src="https://www.youtube.com/embed/lqXAISyny_s" title="Comment configurer Interaction bot Discord | Traduire | #roduz #discord #translate # translation" frameborder="0" allow="accéléromètre ; lecture automatique ; écriture dans le presse-papiers ; média chiffré ; gyroscope ; image dans l'image" allowfullscreen></iframe>
    Vous pouvez également consulter le site Web du bot ici : <span class="text-sky-400">https://interaction-bot.com/</span>.
    `,
  },
  1: {
    title: "Symphonia",
    description: `
    Symphonia est un bot musical très complet et facile à utiliser.
    J'ai utilisé Lavalink pour jouer de la musique, le bot a été utilisé sur 1600 serveurs.
    Le projet a été terminé après que youtube ait interdit les bots de musique sur discord 😢.
    <br /><br />
    Vous pouvez voir l'ancien site ici :
    <span class="text-sky-400">https://web.archive.org/web/20210629113944/https://symphonia.tk/</span>.
    
    `,
  },
  2: {
    title: "Figma",
    description: `
    J'ai fait beaucoup de templates pour mes différents projets, comme interaction-bot.com, ce site Web et beaucoup d'autres choses, vous pouvez voir
    mon travail sur mon profil :
    <iframe class="w-full" style="border: 1px solid rgba(0, 0, 0, 0.1);" height="500" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Ff4u4CrCCT88dEy7x7QOyLv%2FUntitled%3Ft%3DEK3ekZp2HVUqsOuH-1" allowfullscreen></iframe>
    <iframe class="w-full" style="border: 1px solid rgba(0, 0, 0, 0.1);" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FS310tJCLEvnfRnr9gPdlID%2FUntitled%3Ft%3DEK3ekZp2HVUqsOuH-1" allowfullscreen></iframe>
    <iframe class="w-full" style="border: 1px solid rgba(0, 0, 0, 0.1);" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F1R4IHtRJV2R6tPVAmagk6D%2FUntitled%3Ft%3DEK3ekZp2HVUqsOuH-1" allowfullscreen></iframe>
    `,
  },
  3: {
    title: "Language detection",
    description: `
    Je suis confronté à de nombreuses tâches NLP difficiles comme la détection de mots très courts. Avec Interaction Bot, nous essayons de rendre publics des modèles pour nos tâches respectives. J'ai amélioré la détection des langues
    pour être plus efficace sur les textes sur discord avec la détection par dictionnaire, qui semble
    être efficace sur ce genre de contenu. Voici le lien github : <span class="text-sky-400">https://github.com/Interaction-Bot/LanguageDetection</span>.`,
  },
  4: {
    title: "Roblox",
    description: `
    J'aime le jump sur roblox. Vous pouvez voir mon profil avec ce lien : <span class="text-sky-400">https://www.roblox.com/users/1911354022/profile</span>.
    <br /><br /> Vidéo pour le plaisir :
    <iframe class="mx-auto" width="500" height="500" src="https://www.youtube.com/embed/GWeld5f2evg" title="WTF is this race?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `,
  },
};

let techno_choice = [
  "python, niveau avancé.",
  "J'utilise beaucoup sql et je sais configurer mongodb.",
  "js, niveau intermédiaire car je ne l'utilise que pour faire des sites web.",
  "vuejs, avec la doc, je peux faire plein de choses !",
];

const text = ref(choices[0]);
const selected = ref(0);
const techno = ref(techno_choice[0]);

onMounted(() => {
  let interval = setInterval(
    () => (text.value = choices[Math.floor(Math.random() * choices.length)]),
    3000
  );
});

function copyURL(mytext) {
  navigator.clipboard.writeText(mytext);
}

function mouseOver(number) {
  techno.value = techno_choice[number];
}
</script>

<template>
  <div
    id="home"
    class="w-full h-screen bg-img bg-cover bg-no-repeat bg-left z-0"
  >
    <div class="h-screen bg-opacity-20 bg-[#02000C] flex z-0">
      <div class="mx-auto w-5/6 min-[400px]:w-3/5 text-white my-auto">
        <p class="text-6xl sm:text-8xl font-bold max-w-xl my-auto">
          Student at high school
        </p>
        <Transition>
          <p
            class="text-2xl sm:text-4xl my-auto font-light mt-2 max-w-md absolute"
            :key="text"
          >
            Je {{ text }}
          </p>
        </Transition>
      </div>

      <a href="#project" class="absolute bottom-0 w-full text-white z-10 mb-8">
        <img
          src="../assets/arrow.svg"
          draggable="false"
          class="hover:animate-pulse object-contain h-8 w-auto border border-white rounded-full mx-auto"
        />
      </a>

      <div
        class="absolute bottom-0 h-16 text-white w-full linear-gradient-home"
      ></div>
    </div>
  </div>

  <div
    id="project"
    class="relative max-w-[800px] w-9/12 flex gap-3 snap-none snap-mandatory overflow-x-auto mx-auto py-8"
  >
    <div
      class="snap-always snap-center flex rounded-lg pr-6 py-2 bg-[#252632] min-w-max w-max hover:bg-[#353746]"
      @click="selected = 0"
    >
      <img src="../assets/interaction.png" class="h-12 my-auto" />
      <div>
        <p class="text-white">Interaction Bot</p>
        <p class="text-[#D9D9D9] text-sm">20k serveurs</p>
      </div>
    </div>

    <div
      class="snap-always snap-center flex rounded-lg pr-6 py-2 bg-[#252632] min-w-max w-max hover:bg-[#353746]"
      @click="selected = 1"
    >
      <img src="../assets/symphonia.webp" class="h-12 mx-2 my-auto" />
      <div>
        <p class="text-white">Symphonia</p>
        <p class="text-[#D9D9D9] text-sm">1.5k serveurs</p>
      </div>
    </div>

    <div
      class="snap-always snap-center flex rounded-lg pr-6 py-2 bg-[#252632] min-w-max w-max hover:bg-[#353746]"
      @click="selected = 2"
    >
      <img src="../assets/figma.png" class="h-10 my-auto mx-2" />
      <div>
        <p class="text-white">Figma</p>
        <p class="text-[#D9D9D9] text-sm">Mon travail sur Figma.</p>
      </div>
    </div>

    <div
      class="snap-always snap-center flex rounded-lg pr-6 py-2 bg-[#252632] min-w-max w-max hover:bg-[#353746]"
      @click="selected = 3"
    >
      <img src="../assets/fasttext.png" class="h-10 my-auto mx-2" />
      <div>
        <p class="text-white">Detection de langue</p>
        <p class="text-[#D9D9D9] text-sm">Mon travail sur l'identification des langues</p>
      </div>
    </div>

    <div
      class="snap-always snap-center flex rounded-lg pr-6 py-2 bg-[#252632] min-w-max w-max hover:bg-[#353746]"
      @click="selected = 4"
    >
      <img src="../assets/roblox.png" class="h-10 my-auto mx-2" />
      <div>
        <p class="text-white">Roblox</p>
        <p class="text-[#D9D9D9] text-sm">
          Top 0,4% des meilleurs joueurs obbyistes roblox.
        </p>
      </div>
    </div>
  </div>

  <div class="max-w-xl sm:w-3/5 p-4 mx-auto h-max border-2 border-dashed border-2 border-sky-500 rounded-lg mt-2">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
      {{ project[selected]["title"] }}
    </h5>
    <p
      class="ml-2 font-normal text-slate-50"
      v-html="project[selected]['description']"
    ></p>
  </div>

  <div id="about" class="flex items-center justify-center mt-96">
    <div class="text-center my-auto">
      <p class="text-xl font-bold text-white">💻 A propos de moi</p>
      <ul class="text-white text-left w-fit mx-auto text-lg text-white px-5">
        <li class="my-4">🎓 J'ai comme projet de m'orienter dans l'informatique.</li>
        <li class="my-4">✍️ Pendant mon temps libre, je développe des sites, des bots discord en python<br /> et utilise Javascript. </li>
        <li class="my-4">⚗️ Je veux faire une bibliothèque de traduction open source<br /> et améliorer la performance des détecteurs de langue pour Interaction Bot.</li>
        <li class="my-4">💬 Je suis toujours connecté sur discord. </li>
        <li class="my-4">📄 J'ai pour projet d'apprendre Rust.</li>
      </ul>
    </div>
  </div>
  
  <div class="flex items-center justify-center">
    <div class="text-center w-full my-[400px] relative px-5">
      <p class="text-xl font-bold text-white mt-12">Technologies que j'utilise :</p>
      <div class="flex max-w-sm mx-auto my-8">
        <img
          src="../assets/python.png"
          @mouseover="mouseOver(0)"
          class="h-10 m-auto"
        />
        <img
          src="../assets/mongodb.png"
          class="h-10 m-auto"
          @mouseover="mouseOver(1)"
        />
        <img
          src="../assets/js.png"
          class="h-10 m-auto"
          @mouseover="mouseOver(2)"
        />
        <img
          src="../assets/vue.png"
          class="h-10 m-auto"
          @mouseover="mouseOver(3)"
        />
      </div>
      <p class="text-xl font-bold text-white">{{ techno }}</p>
    </div>
  </div>


  <div class="w-3/5 mx-auto mt-12">
    <p class="text-center text-white text-3xl text-[#B4B4B4] mt-8">
      Suivez-moi sur mes différents réseaux !
    </p>
  </div>

  <div class="sm:flex sm:space-x-6 w-fit mt-8 mx-auto">
    <RouterLink
      to="/youtube"
      class="border w-20 h-20 rounded-full flex my-2 hover:bg-white"
    >
      <img src="../assets/youtube.svg" class="h-6 m-auto" />
    </RouterLink>
    <RouterLink
      to="/twitter"
      class="border w-20 h-20 rounded-full flex my-2 hover:bg-white"
    >
      <img src="../assets/twitter.svg" class="h-10 m-auto" />
    </RouterLink>
    <RouterLink
      to="/github"
      class="border w-20 h-20 rounded-full flex my-2 hover:bg-white fill-white hover:fill-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        class="h-10 m-auto"
      >
        <path
          d="M15 2.5A12.5 12.5 0 0 0 2.5 15c0 5.525 3.588 10.212 8.55 11.875.625.1.825-.288.825-.625v-2.113c-3.463.75-4.2-1.675-4.2-1.675-.575-1.45-1.388-1.837-1.388-1.837-1.137-.775.088-.75.088-.75 1.25.087 1.912 1.288 1.912 1.288 1.088 1.9 2.925 1.337 3.638 1.037.112-.813.438-1.363.787-1.675-2.774-.313-5.687-1.387-5.687-6.15 0-1.387.475-2.5 1.287-3.387-.124-.313-.562-1.613.126-3.3 0 0 1.05-.338 3.437 1.275A11.778 11.778 0 0 1 15 8.55c1.063 0 2.137.137 3.125.412 2.387-1.612 3.438-1.274 3.438-1.274.687 1.687.25 2.987.125 3.3.812.887 1.287 2 1.287 3.387 0 4.775-2.925 5.825-5.713 6.137.45.388.863 1.15.863 2.313v3.425c0 .337.2.738.837.625C23.925 25.2 27.5 20.525 27.5 15A12.5 12.5 0 0 0 15 2.5Z"
        />
      </svg>
    </RouterLink>
  </div>

  <div class="h-32 mt-12 bg-img flex">
    <div class="w-full linear-gradient-reverse h-12 absolute"></div>

    <button id="social"
      @click="copyURL('jourdelune01@gmail.com')"
      class="active:bg-white active:text-black hover:scale-105 w-fit text-white z-10 m-auto border p-2 border-white h-fit rounded-lg"
    >
      jourdelune01@gmail.com
    </button>
  </div>
</template>
