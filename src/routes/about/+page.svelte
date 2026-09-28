<script>
  import PageContainer from "$lib/components/PageContainer.svelte"
  import PageHead from "$lib/components/PageHead.svelte"
  import { fade } from "svelte/transition"
</script>

<svelte:head>
  <title>About | Ranveer Wilkhu</title>
  <meta
    name="description"
    content="About Ranveer Wilkhu — Economics and Finance student interested in markets, technology, systems and building things."
  />
</svelte:head>

<PageContainer
  title="About"
  description="A little about who I am, what I’m interested in and what I’m working on."
>
  <PageHead title="About" subtitle="Ranveer Wilkhu" />

  <div class="about-grid">
    <div class="about-text" in:fade={{ duration: 300, delay: 200 }}>
      <div class="prose prose-lg mobile-prose">
        <strong>
          I'm an Economics and Finance student at the University of Bristol, interested in
          understanding how markets, technology and economic systems interact.
        </strong>

        <p>
          A lot of what interests me comes back to systems: why they behave the way they do,
          what happens when incentives change, and how data and modelling can help us understand
          them better. That has naturally drawn me towards economics, financial markets,
          technology and investing.
        </p>

        <p>
          I also enjoy building things. One of my larger personal projects has been developing
          an open-source astrophotography mount, combining electronics, mechanical design,
          3D printing, software and a lot of trial and error.
        </p>

        <p>
          This website is where I write about things I find interesting, document projects I'm
          working on, and develop ideas as I learn more.
        </p>

        <p>
          Outside economics and technology, I'm interested in photography and astrophotography,
          squash, music and football.
        </p>
      </div>
    </div>

    <div class="about-details" in:fade={{ duration: 300, delay: 350 }}>
      <div class="detail-card">
        <span class="detail-label">Currently</span>
        <p>Economics & Finance<br />University of Bristol</p>
      </div>

      <div class="detail-card">
        <span class="detail-label">Interested in</span>
        <p>
          Economics<br />
          Financial markets<br />
          Technology & AI<br />
          Investing<br />
          Data & modelling
        </p>
      </div>

      <div class="detail-card">
        <span class="detail-label">Building</span>
        <p>
          Personal research projects, data analysis and an open-source astrophotography setup.
        </p>
      </div>
    </div>
  </div>
</PageContainer>

<style>
  .about-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) minmax(240px, 0.8fr);
    gap: 4rem;
    align-items: start;
  }

  .about-text {
    min-width: 0;
  }

  .about-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .detail-card {
    padding: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(8px);
  }

  .detail-label {
    display: block;
    margin-bottom: 0.6rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-primary);
  }

  .detail-card p {
    margin: 0;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
  }

  .mobile-prose {
    width: 100%;
    max-width: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  @media (max-width: 768px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>