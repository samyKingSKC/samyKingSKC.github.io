<template>
  <div>
    <div
      class="nav1 h-[1.5cm] text-white bg-primary fixed top-0 w-[100vw] z-[10000]"
    >
      <div
        class="contain items-center flex justify-between w-[70vw] m-auto h-[100%]"
      >
        <div class="iconbox w-[1cm] h-[1cm]">
          <img src="/images/Group%201897.png" alt="logo" />
        </div>
        <div
          class="linkblock flex space-x-4 items-center justify-between w-[30%]"
        >
          <li class="uli list-none">
            <a href="#home" class="al1 decoration-0 capitalize text-white"
              >home</a
            >
          </li>

          <li class="uli list-none">
            <a href="#skill" class="al1 decoration-0 capitalize text-white"
              >skills</a
            >
          </li>
          <li class="uli list-none">
            <a href="#experience" class="al1 decoration-0 capitalize text-white"
              >experience</a
            >
          </li>
          <li class="uli list-none">
            <a href="#project" class="al1 decoration-0 capitalize text-white"
              >projects</a
            >
          </li>
        </div>
      </div>
    </div>

    <div class="nav2">
      <div class="n2tog">
        <i
          @click="togglenav2"
          class="fa fa-bars m-3 fixed top-[10px] right-[10px] w-[1cm] h-[1cm] z-[1000] text-white togme cursor-pointer"
        ></i>
        <div class="n2v2">
          <div class="nl21 hide fixed top-[2cm]">
            <li class="h-[1cm] list-none">
              <a
                href="#home"
                class="h-[100%] w-[100%] relative z-[1000] capitalize text-white ps-3 flex items-center"
                >home</a
              >
            </li>
            <li class="h-[1cm] list-none">
              <a
                href="#skill"
                class="h-[100%] w-[100%] relative z-[1000] capitalize text-white ps-3 flex items-center"
                >skills</a
              >
            </li>
            <li class="h-[1cm] list-none">
              <a
                href="#project"
                class="h-[100%] w-[100%] relative z-[1000] capitalize text-white ps-3 flex items-center"
                >projects</a
              >
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function togglenav2() {
  let nav2 = document.querySelector(".nl21");
  if (nav2.classList.contains("hide")) {
    nav2.classList.remove("hide");
  } else {
    nav2.classList.add("hide");
  }
}
</script>
