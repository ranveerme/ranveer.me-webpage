<script lang="ts">
  import Hero from "$src/lib/components/Hero.svelte"
</script>

<svelte:head>
  <title>Ranveer Singh Wilkhu | Economics, Finance & Technology</title>

  <meta
    name="description"
    content="Personal website and writing by Ranveer Singh Wilkhu, covering economics, finance, technology, projects and ideas."
  />

  <meta
    name="keywords"
    content="Ranveer Singh Wilkhu, Ranveer Wilkhu, economics, finance, technology, projects, blog"
  />

  <meta property="og:title" content="Ranveer Wilkhu" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ranveer.me" />
  <meta property="og:image" content="https://ranveer.me/images/og-image.jpg" />

  <meta
    property="og:description"
    content="Personal website and writing by Ranveer Wilkhu, covering economics, finance, technology, projects and ideas."
  />

  <meta
    name="twitter:title"
    content="Ranveer Wilkhu"
  />

  <meta
    name="twitter:description"
    content="Personal website and writing by Ranveer Wilkhu, covering economics, finance, technology, projects and ideas."
  />

  <meta
    name="twitter:image"
    content="https://ranveer.me/images/og-image.jpg"
  />

  <meta
    name="Cache-Control"
    content="max-age=86400, stale-while-revalidate=604800"
  />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "name": "Ranveer Singh Wilkhu",
          "alternateName": "Ranveer Wilkhu",
          "url": "https://ranveer.me",
          "sameAs": [
            "https://www.linkedin.com/in/ranveer-wilkhu",
            "https://github.com/ranveerme"
          ],
          "description": "Economics and Finance student interested in economics, finance, technology and projects."
        },
        {
          "@type": "WebSite",
          "name": "Ranveer Singh Wilkhu",
          "url": "https://ranveer.me",
          "description": "Personal website and writing by Ranveer Singh Wilkhu."
        }
      ]
    }
  </script>
</svelte:head>

<section>
  <Hero />
</section>

<style>
</style>