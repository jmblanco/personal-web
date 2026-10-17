import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { SITE_PROFILE } from "@/content/profile";

export function Footer() {
  const { personal, social } = SITE_PROFILE;

  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-500">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-neutral-900 dark:text-neutral-200 font-medium">
            {personal.fullName}
          </p>
          <p className="text-neutral-500 dark:text-neutral-500 mt-0.5">
            {personal.role} · {personal.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-neutral-600 dark:text-neutral-400">
          <a
            href={social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <CopyEmailButton email={personal.email} />
        </div>
      </div>
    </footer>
  );
}
