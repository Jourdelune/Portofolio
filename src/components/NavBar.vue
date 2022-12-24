<script setup></script>

<template>
  <main>
    <nav class="absolute w-full mt-4 z-50">
      <div
        class="text-white flex justify-between mx-auto w-full sm:w-3/5"
      >
        <div class="right-0 flex mx-auto text-base items-center rounded-lg p-2 backdrop-blur-3xl z-50 duration-300 max-w-max">
          <a href="#home" class="mx-4 hover:underline">Home</a>
          <a href="#project" class="mx-4 hover:underline">Projets</a>
          <a href="#about" class="mx-4 min-w-fit hover:underline">À propos</a>
          <a href="#social" class="mx-4 hover:underline">Social</a>
          <RouterLink
            to="/github"
            class="hover:bg-white duration-300 hover:text-black fill-white hover:fill-black max-[500px]:hidden mx-4 border-white border rounded-xl px-2 py-1 flex min-w-max"
          >
            <span class="my-auto mr-1">github</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                d="M15 2.5A12.5 12.5 0 0 0 2.5 15c0 5.525 3.588 10.212 8.55 11.875.625.1.825-.288.825-.625v-2.113c-3.463.75-4.2-1.675-4.2-1.675-.575-1.45-1.388-1.837-1.388-1.837-1.137-.775.088-.75.088-.75 1.25.087 1.912 1.288 1.912 1.288 1.088 1.9 2.925 1.337 3.638 1.037.112-.813.438-1.363.787-1.675-2.774-.313-5.687-1.387-5.687-6.15 0-1.387.475-2.5 1.287-3.387-.124-.313-.562-1.613.126-3.3 0 0 1.05-.338 3.437 1.275A11.778 11.778 0 0 1 15 8.55c1.063 0 2.137.137 3.125.412 2.387-1.612 3.438-1.274 3.438-1.274.687 1.687.25 2.987.125 3.3.812.887 1.287 2 1.287 3.387 0 4.775-2.925 5.825-5.713 6.137.45.388.863 1.15.863 2.313v3.425c0 .337.2.738.837.625C23.925 25.2 27.5 20.525 27.5 15A12.5 12.5 0 0 0 15 2.5Z"
              />
            </svg>
          </RouterLink>
        </div>
      </div>
    </nav>
  </main>
</template>
