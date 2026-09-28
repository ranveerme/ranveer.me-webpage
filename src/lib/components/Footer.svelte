<script lang="ts">
  import Link from "./Link.svelte"
</script>

<footer
  class="bg-background/90 relative z-10 mt-20 border-t border-white/5 pt-16 pb-10 shadow-lg backdrop-blur-md"
>
  <!-- Decorative top border with gradient -->
  <div
    class="bg-footer-glow bg-300-100 animate-gradient-shift absolute top-0 right-0 left-0 h-0.5"
  ></div>

  <div class="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
    <div class="mb-10 grid w-full grid-cols-1 gap-12 md:grid-cols-3 md:justify-between">
      <div class="animate-fadeIn relative">
        <h2 class="mb-4 text-xl font-bold text-white">
          <span>Ranveer</span><span class="text-primary">.</span><span>Wilkhu</span>
        </h2>

        <p class="mb-4 text-gray-300">
          Writing about economics, finance, technology, projects and ideas.
        </p>

        <p class="text-sm text-gray-400">
          © {new Date().getFullYear()} Ranveer Wilkhu. All rights reserved.
        </p>
      </div>

      <div class="animate-fadeIn relative md:text-center">
        <h2 class="mb-4 text-xl font-bold text-white">Navigation</h2>

        <ul class="space-y-2">
          <li><Link href="/" variant="footer">Home</Link></li>
          <li><Link href="/about" variant="footer">About</Link></li>
          <li><Link href="/journal" variant="footer">Writing</Link></li>
          <li><Link href="/contact" variant="footer">Contact</Link></li>
        </ul>
      </div>

      <div class="animate-fadeIn relative md:text-right">
        <h2 class="mb-4 text-xl font-bold text-white">Connect</h2>

        <ul class="space-y-2">
          <li>
            <Link
              href="https://github.com/ranveerme"
              variant="footer"
              external={true}
              className="inline-flex items-center gap-2 group"
            >
              <svg
                class="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              GitHub
            </Link>
          </li>

          <li>
            <Link
              href="mailto:singh@ranveer.me"
              variant="footer"
              className="inline-flex items-center gap-2 group"
            >
              <svg
                class="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z"
                ></path>
              </svg>

              Email
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-8 text-center text-sm text-gray-400">
      <p>
        Built with
        <Link href="https://kit.svelte.dev" variant="tech" external={true}>
          SvelteKit
        </Link>
        and
        <Link href="https://tailwindcss.com" variant="tech" external={true}>
          Tailwind CSS
        </Link>
      </p>
    </div>
  </div>
</footer>