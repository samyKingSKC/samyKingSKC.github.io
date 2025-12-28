<template>
  <div class="bg-[#050014] text-slate-100 overflow-x-hidden">
    <!-- ================= FLOATING EMAIL ================= -->
    <a
      href="mailto:fedrickjohnson642@gmail.com"
      class="fixed bottom-[8vh] right-[8vw] z-[1000] w-[1.4cm] h-[1.4cm] rounded-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition hover:scale-110"
    >
      <i class="fa-solid fa-envelope text-xl animate-pulse"></i>
    </a>

    <!-- ================= NAV ================= -->
    <nav
      class="fixed top-0 w-full z-[10000] bg-[#0b022a]/90 backdrop-blur-md border-b border-purple-600/50 shadow-lg"
    >
      <div
        class="h-[1.5cm] max-w-6xl mx-auto flex items-center justify-between px-6"
      >
        <img src="/images/kingsley.jpg" class="w-[1.2cm] rounded-full h-[80%]" />

        <ul class="hidden md:flex gap-6 capitalize">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#experience" class="nav-link">Experience</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
        </ul>

        <i
          class="fa-solid fa-bars text-xl cursor-pointer togglenav"
          @click="isOpen = !isOpen"
        ></i>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isOpen"
        class="md:hidden bg-[#0b022a] border-t border-purple-600/40"
      >
        <ul class="flex flex-col">
          <li class="nav-item  odd:bg-[#120738]"><a @click="close" href="#home">Home</a></li>
          <li class="nav-item  odd:bg-[#120738]"><a @click="close" href="#skills">Skills</a></li>
          <li class="nav-item  odd:bg-[#120738]">
            <a @click="close" href="#experience">Experience</a>
          </li>
          <li class="nav-item  odd:bg-[#120738]">
            <a @click="close" href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- ================= HERO ================= -->
    <section
      id="home"
      class="section min-h-screen flex items-center justify-center px-6"
    >
      <div class="max-w-5xl text-center pt-[10vh]">
        <p class="uppercase tracking-widest text-purple-400 mb-4 text-sm">
          Full-Stack Developer & Social Media Marketer
        </p>

        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
          I build websites that convert<br />
          <span class="text-purple-400">and advertise businesses online</span>
        </h1>

        <p class="mt-6 text-slate-300 text-lg max-w-3xl mx-auto">
          I help business owners grow using modern web development combined with
          performance-driven social media marketing.
        </p>

        <div class="mt-10 grid md:grid-cols-3 gap-6">
          <div class="value-card">
            <i class="fa-solid fa-bolt text-yellow-400 text-2xl mb-2"></i>
            <h3 class="font-semibold">Fast & Scalable</h3>
            <p class="text-slate-400 text-sm">
              High-performance systems built to grow with your business.
            </p>
          </div>

          <div class="value-card">
            <i class="fa-solid fa-chart-line text-green-400 text-2xl mb-2"></i>
            <h3 class="font-semibold">Marketing Focused</h3>
            <p class="text-slate-400 text-sm">
              Traffic, leads, conversions — not just visuals.
            </p>
          </div>

          <div class="value-card">
            <i class="fa-solid fa-briefcase text-pink-400 text-2xl mb-2"></i>
            <h3 class="font-semibold">Business Driven</h3>
            <p class="text-slate-400 text-sm">
              Everything designed to sell and scale.
            </p>
          </div>
        </div>

        <div class="flex justify-center gap-4 mt-12 p-2">
          <a
            href="#projects"
            class="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition"
          >
            View Work
          </a>

          <a
            href="mailto:fedrickjohnson642@gmail.com"
            class="px-8 py-4 border border-purple-500 text-purple-400 rounded-xl hover:bg-purple-900/30 transition"
          >
            Let’s Work
          </a>
        </div>
      </div>
    </section>

    <!-- ================= SKILLS ================= -->
    <section id="skills" class="section py-24 bg-[#0b022a]">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-purple-400 mb-12">
          Tech & Marketing Stack
        </h2>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="skill-card">
            <i class="fa-brands fa-react text-cyan-400"></i> <span>React</span>
          </div>
          <div class="skill-card">
            <i class="fa-brands fa-node-js text-green-400"></i>
            <span>Node.js</span>
          </div>
          <div class="skill-card">
            <i class="fa-solid fa-server text-orange-400"></i>
            <span>Express</span>
          </div>
          <div class="skill-card">
            <i class="fa-solid fa-database text-blue-400"></i>
            <span>MySQL</span>
          </div>
          <div class="skill-card">
            <i class="fa-brands fa-envira text-emerald-400"></i>
            <span>MongoDB</span>
          </div>
          <div class="skill-card">
            <i class="fa-brands fa-css3-alt text-sky-400"></i>
            <span>Tailwind</span>
          </div>
          <div class="skill-card">
            <i class="fa-solid fa-code text-purple-400"></i>
            <span>TypeScript</span>
          </div>
          <div class="skill-card">
            <i class="fa-brands fa-facebook text-blue-500"></i>
            <span>Social Ads</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= EXPERIENCE ================= -->
    <section id="experience" class="section py-24">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-purple-400 mb-14">
          Experience
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="exp-card">
            <i class="fa-solid fa-building text-indigo-400"></i>
            <h3>Minda Technology</h3>
            <p class="role">Full-Stack Developer</p>
            <p class="desc">
              Built scalable business applications, dashboards, APIs and
              conversion-focused UI systems.
            </p>
          </div>

          <div class="exp-card">
            <i class="fa-solid fa-code-branch text-pink-400"></i>
            <h3>Learnedsoft Technology</h3>
            <p class="role">Full-Stack Developer</p>
            <p class="desc">
              Developed modern frontend & backend solutions, authentication
              systems and admin platforms.
            </p>
          </div>
        </div>
      </div>
    </section>

   <!-- ================= PROJECTS ================= -->
    <section id="projects" class="section py-24 bg-[#0b022a]">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-purple-400 mb-14">
          Projects
        </h2>

        <div class="grid md:grid-cols-2 gap-10">





          <!-- ================= PROJECT CARD ================= -->
          <div class="project-card bg-[#12003f] p-6 rounded-xl shadow-lg">
            <div class="laptop-mockup mb-4 mx-auto max-w-[300px]">
              <div class="laptop-screen border-4 border-purple-600 rounded-xl overflow-hidden">
                <img src="/images/Lacertrade.PNG" class="w-full h-[180px] object-cover" />
              </div>
              <div class="laptop-base w-full h-4 rounded-b-lg"></div>
            </div>

            <i class="fa-solid fa-layer-group text-purple-400 text-2xl mb-2"></i>

            <h3 class="text-xl font-semibold mb-2">Lacertrade</h3>

            <p class="text-slate-400 mb-1">
              {{ truncate(lacertradeDesc, "lacertrade") }}
            </p>

            <button
              v-if="lacertradeDesc.length > MAX_CHARS"
              @click="toggleReadMore('lacertrade')"
              class="text-purple-400 text-sm font-semibold"
            >
              {{ expanded.lacertrade ? "Show less" : "Read more" }}
            </button>

            <div class="links flex gap-4 mt-4">
              <a href="https://github.com/samyKingSKC/Lacertrade" target="_blank">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
              <a href="https://lacertrade.swiftwingcourier.com" target="_blank">
                <i class="fa-solid fa-globe"></i> Live
              </a>
            </div>
          </div>
          <!-- ================= PROJECT CARD ================= -->
          <div class="project-card bg-[#12003f] p-6 rounded-xl shadow-lg">
            <div class="laptop-mockup mb-4 mx-auto max-w-[300px]">
              <div class="laptop-screen border-4 border-purple-600 rounded-xl overflow-hidden">
                <img src="/images/wellness.png" class="w-full h-[180px] object-cover" />
              </div>
              <div class="laptop-base w-full h-4 rounded-b-lg"></div>
            </div>

            <i class="fa-solid fa-layer-group text-purple-400 text-2xl mb-2"></i>

            <h3 class="text-xl font-semibold mb-2">Harmony Wellness</h3>

            <p class="text-slate-400 mb-1">
              {{ truncate(wellnessdesc, "wellness") }}
            </p>

            <button
              v-if="wellnessdesc.length > MAX_CHARS"
              @click="toggleReadMore('wellness')"
              class="text-purple-400 text-sm font-semibold"
            >
              {{ expanded.wellness ? "Show less" : "Read more" }}
            </button>

            <div class="links flex gap-4 mt-4">
              <a href="https://github.com/samyKingSKC/wellness_front" target="_blank">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
              <a href="https://wellnessfront.vercel.app" target="_blank">
                <i class="fa-solid fa-globe"></i> Live
              </a>
            </div>
          </div>
          <!-- ================= PROJECT CARD ================= -->
          <div class="project-card bg-[#12003f] p-6 rounded-xl shadow-lg">
            <div class="laptop-mockup mb-4 mx-auto max-w-[300px]">
              <div class="laptop-screen border-4 border-purple-600 rounded-xl overflow-hidden">
                <img src="/images/swiftwing.png" class="w-full h-[180px] object-cover" />
              </div>
              <div class="laptop-base w-full h-4 rounded-b-lg"></div>
            </div>

            <i class="fa-solid fa-layer-group text-purple-400 text-2xl mb-2"></i>

            <h3 class="text-xl font-semibold mb-2">Swiftwing Courier</h3>

            <p class="text-slate-400 mb-1">
              {{ truncate(swiftwingDesc, "swiftwing") }}
            </p>

            <button
              v-if="swiftwingDesc.length > MAX_CHARS"
              @click="toggleReadMore('swiftwing')"
              class="text-purple-400 text-sm font-semibold"
            >
              {{ expanded.swiftwing ? "Show less" : "Read more" }}
            </button>

            <div class="links flex gap-4 mt-4">
              <a href="https://github.com/samyKingSKC/Swiftwing_courier" target="_blank">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
              <a href="https://swiftwing-courier.vercel.app/" target="_blank">
                <i class="fa-solid fa-globe"></i> Live
              </a>
            </div>
          </div>
          <!-- ================= PROJECT CARD ================= -->
          <div class="project-card bg-[#12003f] p-6 rounded-xl shadow-lg">
            <div class="laptop-mockup mb-4 mx-auto max-w-[300px]">
              <div class="laptop-screen border-4 border-purple-600 rounded-xl overflow-hidden">
                <img src="/images/survay.png" class="w-full h-[180px] object-cover" />
              </div>
              <div class="laptop-base w-full h-4 rounded-b-lg"></div>
            </div>

            <i class="fa-solid fa-layer-group text-purple-400 text-2xl mb-2"></i>

            <h3 class="text-xl font-semibold mb-2">Survay Income</h3>

            <p class="text-slate-400 mb-1">
              {{ truncate(survayAppDesc, "survayApp") }}
            </p>

            <button
              v-if="survayAppDesc.length > MAX_CHARS"
              @click="toggleReadMore('survayApp')"
              class="text-purple-400 text-sm font-semibold"
            >
              {{ expanded.survayApp ? "Show less" : "Read more" }}
            </button>

            <div class="links flex gap-4 mt-4">
              <a href="https://github.com/samyKingSKC" target="_blank">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
              <a href="https://survayincome.vercel.app/" target="_blank">
                <i class="fa-solid fa-globe"></i> Live
              </a>
            </div>
          </div>
          <!-- ================= PROJECT CARD ================= -->
          <div class="project-card bg-[#12003f] p-6 rounded-xl shadow-lg">
            <div class="laptop-mockup mb-4 mx-auto max-w-[300px]">
              <div class="laptop-screen border-4 border-purple-600 rounded-xl overflow-hidden">
                <img src="/images/hairbraid.png" class="w-full h-[180px] object-cover" />
              </div>
              <div class="laptop-base w-full h-4 rounded-b-lg"></div>
            </div>

            <i class="fa-solid fa-layer-group text-purple-400 text-2xl mb-2"></i>

            <h3 class="text-xl font-semibold mb-2">Cursive Hair</h3>

            <p class="text-slate-400 mb-1">
              {{ truncate(hairbraidDesc, "hairbraid") }}
            </p>

            <button
              v-if="hairbraidDesc.length > MAX_CHARS"
              @click="toggleReadMore('hairbraid')"
              class="text-purple-400 text-sm font-semibold"
            >
              {{ expanded.hairbraid ? "Show less" : "Read more" }}
            </button>

            <div class="links flex gap-4 mt-4">
              <a href="https://github.com/samyKingSKC/Hair-Braiding-Website" target="_blank">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
              <a href="https://hairbraiding.swiftwingcourier.com" target="_blank">
                <i class="fa-solid fa-globe"></i> Live
              </a>
            </div>
          </div>
          <!-- ================= PROJECT CARD ================= -->
          <div class="project-card bg-[#12003f] p-6 rounded-xl shadow-lg">
            <div class="laptop-mockup mb-4 mx-auto max-w-[300px]">
              <div class="laptop-screen border-4 border-purple-600 rounded-xl overflow-hidden">
                <img src="/images/mycar.png" class="w-full h-[180px] object-cover" />
              </div>
              <div class="laptop-base w-full h-4 rounded-b-lg"></div>
            </div>

            <i class="fa-solid fa-layer-group text-purple-400 text-2xl mb-2"></i>

            <h3 class="text-xl font-semibold mb-2">Treanch</h3>

            <p class="text-slate-400 mb-1">
              {{ truncate(treanchDesc, "Treanch") }}
            </p>

            <button
              v-if="treanchDesc.length > MAX_CHARS"
              @click="toggleReadMore('Treanch')"
              class="text-purple-400 text-sm font-semibold"
            >
              {{ expanded.Treanch ? "Show less" : "Read more" }}
            </button>

            <div class="links flex gap-4 mt-4">
              <a href="https://github.com/samyKingSKC/Car-sales-website" target="_blank">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
              <a href="https://tweblinks.swiftwingcourier.com/projects/Car-sales-website/" target="_blank">
                <i class="fa-solid fa-globe"></i> Live
              </a>
            </div>
          </div>

      
        </div>
      </div>
    </section>

    <!-- ================= FOOTER ================= -->
    <footer class="bg-black text-gray-500 py-6 text-center">
      © {{ new Date().getFullYear() }} Samuel Kingsley. Built to convert.
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

/* NAV */
const isOpen = ref(false);
const close = () => (isOpen.value = false);

/* READ MORE */
const expanded = ref({});
const MAX_CHARS = 90;

const toggleReadMore = (id) => {
  expanded.value[id] = !expanded.value[id];
};

const truncate = (text, id) => {
  if (!text) return "";
  if (expanded.value[id] || text.length <= MAX_CHARS) return text;
  return text.slice(0, MAX_CHARS) + "...";
};

/* PROJECT DESCRIPTIONS */
const lacertradeDesc =
  "Investment platform with Flutterwave payments, secure dashboards, advanced user flows, admin controls, wallet systems, and scalable backend architecture.";
const wellnessdesc = "Harmony Wellness is a modern, client-focused web platform designed for a certified Holistic Wellness Coach based in New York. The project emphasizes balance, healing, and transformation by offering personalized wellness services through an intuitive and visually appealing interface.";
const secondProjectDesc =
  "Another scalable web application demonstrating clean UI, strong backend logic, and performance-focused architecture.";
const swiftwingDesc = "Swiftwing Couriers (Swift Cargo Logistics) is a world-leading logistics service provider specializing in freight transportation, warehousing, distribution, and supply chain solutions. The project highlights a modern logistics platform designed to simplify shipment tracking, enhance customer trust, and deliver seamless end-to-end cargo services."

const survayAppDesc = "SIAP is a streamlined e-learning platform designed to help individuals turn their free time into consistent income through paid surveys. The focus is on simplicity and accessibility — learners enroll, progress through structured modules, and track their learning journey without unnecessary distractions."
  const hairbraidDesc = "A hair braiding website to display braiding skills and and help clients book service online.has an admin account for managing content."
const treanchDesc = "Treanch is a platform where cars are been sold, users can search for cars and also make oders,also has admin dashboard to manage contents."
</script>
<style scoped>
html {
  scroll-behavior: smooth;
}

.section {
  scroll-margin-top: 1.6cm;
}

.nav-link:hover {
  color: #d8b4fe;
}

.nav-item a {
  padding: 1rem;
  display: block;
}
.nav-item a:hover {
  background: rgba(255, 255, 255, 0.08);
}

.value-card,
.skill-card,
.exp-card,
.project-card {
  background: #12003f;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
}

.skill-card {
  text-align: center;
  font-weight: 600;
  transition: transform 0.3s;
}
.skill-card:hover {
  transform: translateY(-8px);
}

.skill-card i,
.exp-card i,
.project-card i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.exp-card .role {
  color: #c084fc;
  font-size: 0.95rem;
}

.project-card .links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
.project-card .links a {
  color: #c084fc;
  font-weight: 600;
}
.skill-card {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.laptop-mockup {
  perspective: 1000px;
}

.laptop-screen {
  background: #1c0033;
}

.laptop-base {
  background: #0f001f;
}
@media (min-width: 768px) {
 
  .togglenav{
    display: none;
  }
}

</style>
