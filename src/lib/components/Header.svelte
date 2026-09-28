<script lang="ts">
  import { page } from "$app/stores"
  import { onMount } from "svelte"
  import { slide } from "svelte/transition"
  import Link from "./Link.svelte"

  let isMenuOpen = false
  let scrollY = 0
  let headerElement: HTMLElement
  let isScrolled = false

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen

    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  function handleNavigation() {
    if (isMenuOpen) {
      isMenuOpen = false
      document.body.style.overflow = ""
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && isMenuOpen) {
      isMenuOpen = false
      document.body.style.overflow = ""
    }
  }

  function handleScroll() {
    scrollY = window.scrollY
    isScrolled = scrollY > 20
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("keydown", handleKeydown)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeydown)
      document.body.style.overflow = ""
    }
  })
</script>

<a
  href="#main-content"
  class="bg-primary absolute top-[-40px] left-0 z-50 p-2 text-white transition-all duration-200 focus:top-0"
>
  Skip to main content
</a>

<header
  bind:this={headerElement}
  class="fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 {isScrolled
    ? 'bg-background/90 shadow-lg backdrop-blur-md'
    : 'bg-background/70 backdrop-blur-sm'}"
>
  <div
    class="bg-header-glow bg-300-100 animate-gradient-shift absolute top-0 left-0 h-0.5 w-full"
  ></div>

  <div class="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between py-4 md:space-x-10">
      <!-- Logo -->
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a
          href="/"
          class="focus:ring-primary focus:ring-offset-background relative flex items-center overflow-hidden rounded-md transition-transform duration-200 hover:-translate-y-0.5 focus:ring-2 focus:outline-none"
          aria-label="Ranveer Wilkhu Home"
          data-sveltekit-preload-data="hover"
          tabindex="0"
          aria-current={$page.url.pathname === "/" ? "page" : undefined}
        >
          <span
            class="relative z-10 font-sans text-2xl font-bold tracking-tight text-white"
          >
            Ranveer<span class="text-primary">.</span>Wilkhu
          </span>
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          type="button"
          class="hover:text-primary focus:ring-primary inline-flex items-center justify-center rounded-md p-2 text-white focus:ring-2 focus:outline-none focus:ring-inset"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          on:click={toggleMenu}
        >
          <span class="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>

          {#if isMenuOpen}
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          {:else}
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          {/if}
        </button>
      </div>

      <!-- Desktop navigation -->
      <nav class="hidden space-x-10 md:flex" aria-label="Main navigation">
        <ul class="flex items-center space-x-6">
          <li>
            <Link
              href="/about"
              variant="nav"
              active={$page.url.pathname.includes("/about")}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/journal"
              variant="nav"
              active={$page.url.pathname.includes("/journal")}
            >
              Writing
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              variant="nav"
              active={$page.url.pathname.includes("/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if isMenuOpen}
    <div
      class="absolute inset-x-0 top-full px-3 pb-3 md:hidden"
      transition:slide={{ duration: 200, axis: "y" }}
    >
      <nav
        class="overflow-hidden rounded-xl border border-white/10 p-2 shadow-2xl"
        style="background-color: var(--color-background);"
        aria-label="Mobile navigation"
      >
        <a
          href="/about"
          class="relative block rounded-lg px-4 py-3 text-base font-medium text-white/80 transition-colors duration-200 hover:bg-white/5 hover:text-white {$page.url.pathname.includes(
            '/about'
          )
            ? 'bg-white/5 text-white'
            : ''}"
          aria-current={$page.url.pathname.includes("/about") ? "page" : undefined}
          on:click={handleNavigation}
        >
          {#if $page.url.pathname.includes("/about")}
            <span
              class="bg-primary absolute top-1/2 left-1.5 h-5 w-1 -translate-y-1/2 rounded-full"
            ></span>
          {/if}

          About
        </a>

        <a
          href="/journal"
          class="relative block rounded-lg px-4 py-3 text-base font-medium text-white/80 transition-colors duration-200 hover:bg-white/5 hover:text-white {$page.url.pathname.includes(
            '/journal'
          )
            ? 'bg-white/5 text-white'
            : ''}"
          aria-current={$page.url.pathname.includes("/journal") ? "page" : undefined}
          on:click={handleNavigation}
        >
          {#if $page.url.pathname.includes("/journal")}
            <span
              class="bg-primary absolute top-1/2 left-1.5 h-5 w-1 -translate-y-1/2 rounded-full"
            ></span>
          {/if}

          Writing
        </a>

        <a
          href="/contact"
          class="relative block rounded-lg px-4 py-3 text-base font-medium text-white/80 transition-colors duration-200 hover:bg-white/5 hover:text-white {$page.url.pathname.includes(
            '/contact'
          )
            ? 'bg-white/5 text-white'
            : ''}"
          aria-current={$page.url.pathname.includes("/contact") ? "page" : undefined}
          on:click={handleNavigation}
        >
          {#if $page.url.pathname.includes("/contact")}
            <span
              class="bg-primary absolute top-1/2 left-1.5 h-5 w-1 -translate-y-1/2 rounded-full"
            ></span>
          {/if}

          Contact
        </a>
      </nav>
    </div>
  {/if}
</header>

<!-- Spacer to prevent content from being hidden under fixed header -->
<div class="h-20"></div>