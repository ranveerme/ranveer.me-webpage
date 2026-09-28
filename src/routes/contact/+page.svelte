<script lang="ts">
  import PageContainer from "$lib/components/PageContainer.svelte"
  import PageHead from "$lib/components/PageHead.svelte"
  import { fade } from "svelte/transition"
</script>

<svelte:head>
  <title>Contact | Ranveer Wilkhu</title>
  <meta
    name="description"
    content="Get in touch with Ranveer Wilkhu."
  />
</svelte:head>

<PageContainer minHeight="70vh">
  <PageHead
    title="Contact"
    subtitle="Get in touch"
    description="If you'd like to talk about economics, finance, technology, projects or anything else, feel free to reach out."
  />

  <div class="contact-grid" in:fade={{ duration: 300, delay: 200 }}>
    <!-- Email -->
    <a
      class="contact-card"
      href="mailto:singh@ranveer.me"
    >
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </div>

      <div>
        <span class="label">Email</span>
        <p>Send me a message</p>
      </div>
    </a>

    <!-- GitHub -->
    <a
      class="contact-card"
      href="https://github.com/ranveerme"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="icon">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <div>
        <span class="label">GitHub</span>
        <p>See what I'm building</p>
      </div>
    </a>

    <!-- LinkedIn -->
    <a
      class="contact-card"
      href="https://www.linkedin.com/in/ranveer-wilkhu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="icon">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.54V9H7.1v11.45z"
          />
        </svg>
      </div>

      <div>
        <span class="label">LinkedIn</span>
        <p>Connect with me</p>
      </div>
    </a>
  </div>
</PageContainer>

<style>
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin-top: 2rem;
  }

  .contact-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.03);
    text-decoration: none;
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      background 0.2s ease;
  }

  .contact-card:hover {
    transform: translateY(-3px);
    border-color: var(--color-primary);
    background: rgba(255, 255, 255, 0.05);
  }

  .icon {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
    color: var(--color-primary);
  }

  .label {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 700;
    color: white;
  }

  .contact-card p {
    margin: 0;
    color: rgba(255, 255, 255, 0.65);
  }

  @media (max-width: 900px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }
</style>