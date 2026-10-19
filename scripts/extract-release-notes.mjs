import fs from "node:fs";

export function extractReleaseNotes(version, changelogPath = "CHANGELOG.md") {
  if (!fs.existsSync(changelogPath)) {
    return `Release v${version}`;
  }

  const changelog = fs.readFileSync(changelogPath, "utf8");
  const cleanVersion = version.replace(/^v/, "");
  const escapedVersion = cleanVersion.replace(/\./g, "\\.");

  // Matches section from ## [1.1.0] or ## 1.1.0 until the next ## or --- or end of file
  const regex = new RegExp(
    `##\\s*\\[?${escapedVersion}\\]?[^\\n]*\\n([\\s\\S]*?)(?=\\n##\\s*\\[|\\n---|$)`
  );

  const match = changelog.match(regex);
  if (match && match[1].trim()) {
    return match[1].trim();
  }

  return `Release v${cleanVersion}`;
}

// If executed directly from CLI:
if (process.argv[1] && process.argv[1].endsWith("extract-release-notes.mjs")) {
  const versionArg = process.argv[2] || process.env.VERSION || "";
  if (!versionArg) {
    console.error("Error: Please provide a version argument or set VERSION env var.");
    process.exit(1);
  }

  const notes = extractReleaseNotes(versionArg);
  const outputPath = process.argv[3] || "RELEASE_NOTES.md";
  fs.writeFileSync(outputPath, notes, "utf8");
  console.log(`Extracted release notes for ${versionArg} into ${outputPath}:\n\n${notes}`);
}
