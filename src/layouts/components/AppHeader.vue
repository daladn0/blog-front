<template>
  <header>
    <nav
      class="bg-white border-gray-200 px-2 sm:px-4 h-14 rounded flex items-center shadow-md"
    >
      <div
        class="container flex flex-wrap justify-between items-center mx-auto h-full"
      >
        <router-link :to="{ name: 'home' }" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="mr-3 h-6 sm:h-9"
            alt="Neet blog Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >Neet Blog</span
          >
        </router-link>
        <div class="flex items-center space-x-4 h-full">
          <div v-if="isAuth" class="h-full relative flex items-center">
            <button
              id="profile"
              @click="showDropdown = !showDropdown"
              class="max-w-xs flex items-center space-x-4 px-2 py-1 rounded-full text-sm text-gray-600 font-medium transition-all border hover:border-gray-200"
              :class="[showDropdown ? 'border-gray-200' : 'border-transparent']"
            >
              <img
                class="w-8 h-8 rounded-full object-cover flex-shrink-0"
                @error="onImgError"
                :src="currentUser.avatar"
                :alt="currentUser.username"
              />
              <span class="truncate">{{ currentUser.username }}</span>
            </button>
            <transition name="slide-down">
              <HeaderDropdown
                id="dropdown"
                v-if="showDropdown"
                @logout="onLogout"
                @create-post="$router.push({ name: 'create-post' })"
                :items="dropList"
                class="absolute right-0 top-full mt-4 z-10 w-56"
              >
                <template #header>
                  <div class="text-sm text-gray-900 max-w-full">
                    <button
                      class="w-full flex items-center justify-start text-left max-w-full transition-all hover:bg-gray-100 hover:after:bg-gray-100 px-4 py-3 cursor-pointer after:w-4 after:h-4 after:bg-white after:block after:absolute after:right-4 after:bottom-full after:rotate-45 after:transform after:transition-all after:rounded after:translate-y-1/2"
                    >
                      <img
                        class="w-8 h-8 rounded-full flex-shrink-0 mr-2 object-cover"
                        :src="currentUser.avatar"
                        alt="border avatar"
                      />
                      <div class="max-w-[80%]">
                        <div class="font-medium max-w-full truncate">
                          {{ currentUser.username }}
                        </div>
                        <div class="truncate max-w-full">
                          {{ currentUser.email }}
                        </div>
                      </div>
                    </button>
                  </div>
                </template>
              </HeaderDropdown>
            </transition>
          </div>
          <ul
            v-else
            class="flex items-center h-full flex-col bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <AppBtn
              class="px-4 py-1.5"
              :rounded="true"
              @click="$router.push({ name: 'login' })"
            >
              Login
            </AppBtn>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import HeaderDropdown from "@/components/common/AppDropdown.vue";

import DefaultAvatar from "@/assets/images/default-avatar.jpg";
export default {
  name: "AppHeader",
  components: {
    HeaderDropdown,
  },
  data() {
    return {
      showDropdown: false,
    };
  },
  created() {
    this.dropList = [
      { title: "Create post", emit: "create-post" },
      { title: "Settings", emit: "settings" },
      { title: "Earnings", emit: "earnings" },
      { title: "Sign out", emit: "logout", separated: true },
    ];
  },
  computed: {
    ...mapGetters("user", ["isAuth", "currentUser"]),
  },
  methods: {
    ...mapActions("user", ["logout"]),
    ...mapMutations("user", ["setCurrentUser"]),
    onBodyClick(e) {
      const target = e.target;
      const profile = document.querySelector("#profile");
      const dropdown = document.querySelector("#dropdown");

      if (!profile || !dropdown) return;

      if (
        target === profile ||
        target.closest(`#${profile.id}`) === profile ||
        target === dropdown ||
        target.closest(`#${dropdown.id}`) === dropdown
      ) {
        return;
      }

      this.showDropdown = false;
    },
    onImgError() {
      this.setCurrentUser({ ...this.currentUser, avatar: DefaultAvatar });
    },
    onLogout() {
      this.logout();
      this.$api.get("/user/logout");
    },
  },
  mounted() {
    window.addEventListener("click", this.onBodyClick);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.onBodyClick);
  },
};
</script>
