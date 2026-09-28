<script lang="ts">
  import Header from "$src/lib/components/Header.svelte"
  import Footer from "$src/lib/components/Footer.svelte"
  import { preloadData } from "$app/navigation"
  import { page } from "$app/stores"
  import GridBackground from "$src/lib/components/GridBackground.svelte"

  import "$styles/app.css"

  // Handle prefetching for links that don't have explicit preload attributes
  function handleMouseMove(e: MouseEvent): void {
    const target = e.target as HTMLElement
    const anchor = target.closest("a")
    if (
      anchor &&
      anchor.href &&
      anchor.href.startsWith(window.location.origin) &&
      !anchor.hasAttribute("data-sveltekit-preload-data")
    ) {
      preloadData(anchor.href)
    }
  }

  // Check if we're on the homepage
  $: isHomepage = $page.url.pathname === "/"
</script>

<svelte:head>
  <meta property="og:title" content="Ranveer Wilkhu" />
  <meta
    property="og:description"
    content="Personal website and writing by Ranveer Wilkhu, covering economics, finance, technology, projects and ideas."
  />
  <meta property="og:url" content="https://ranveer.me" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ranveer Wilkhu" />
  <meta
    name="twitter:description"
    content="Personal website and writing by Ranveer Wilkhu, covering economics, finance, technology, projects and ideas."
  />
</svelte:head>

<!-- Enable prefetching for the entire app -->
<svelte:window on:mousemove={handleMouseMove} />

<!-- Only show grid background on non-homepage pages to avoid duplication -->
{#if !isHomepage}
  <GridBackground />
{/if}

<Header />

<main
  id="main-content"
  class="relative z-10 m-auto mb-20 box-border flex w-full max-w-[900px] flex-1 flex-col px-4 sm:px-6 lg:px-8"
>
  <slot />
</main>

<Footer />
