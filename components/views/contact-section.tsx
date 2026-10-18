import { LinkedInIcon } from "@/components/ui/icons";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { SITE_PROFILE } from "@/content/profile";

export function ContactSection() {
  const { contactSection, social, personal } = SITE_PROFILE;

  return (
    <section className="py-14 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
          {contactSection.title}
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
          {contactSection.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href={social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-medium text-xs hover:opacity-90 transition-opacity"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span>{contactSection.ctaLinkedIn}</span>
          </a>
          <CopyEmailButton email={personal.email} className="px-3.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs" />
        </div>
      </div>
    </section>
  );
}
