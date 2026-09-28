<script lang="ts">
  import PostCard from "$lib/components/PostCard.svelte"
  import Link from "$lib/components/Link.svelte"
  import PageContainer from "$lib/components/PageContainer.svelte"
  import PageHead from "$lib/components/PageHead.svelte"
  import type { PageData } from "./$types"

  export let data: PageData
  const { posts, tags } = data

  const topTags = tags
    .sort((a: { count: number }, b: { count: number }) => b.count - a.count)
    .slice(0, 6)
</script>

<svelte:head>
  <title>Writing | Ranveer Wilkhu</title>
  <meta
    name="description"
    content="Writing by Ranveer Wilkhu on economics, finance, technology, markets, projects and ideas."
  />
</svelte:head>

<PageContainer>
  <PageHead title="Writing" subtitle="Notes, ideas and things I find interesting." />

  {#if posts.length > 0}
    <div class="mb-8">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-gray-400">Browse by topic:</span>

        <Link href="/journal/tags" className="tag-pill">
          all topics
        </Link>

        {#if topTags && topTags.length > 0}
          {#each topTags as tag (tag.name)}
            <Link
              href={`/journal/tags/${encodeURIComponent(tag.name)}`}
              className="tag-pill"
            >
              {tag.name.toLowerCase()}
            </Link>
          {/each}
        {/if}
      </div>
    </div>

    <div class="content-grid">
      {#each posts as post, i (post.slug)}
        <div class="content-item" style="--delay: {i * 0.05}s">
          <PostCard {post} />
        </div>
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <p class="text-lg text-gray-300">
        I’m working on my first posts. Check back soon.
      </p>
    </div>
  {/if}
</PageContainer>

<style>
  .content-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 3rem;
  }

  .empty-state {
    margin-top: 3rem;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.03);
  }

  @media (min-width: 640px) {
    .content-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  :global(.tag-pill) {
    display: inline-block;
    padding: 0.35rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    background: rgba(31, 41, 55, 0.4);
    color: #fff;
    transition: all 0.2s ease;
  }

  :global(.tag-pill:hover) {
    background: var(--color-primary);
  }
</style>