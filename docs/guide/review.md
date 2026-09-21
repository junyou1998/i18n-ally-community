# Review System

i18n Ally Community includes a built-in review and collaboration system for translations, powered by VS Code's native comment API.

## Enable / Disable

```jsonc
// .vscode/settings.json
{
  "i18n-ally-community.review.enabled": true,
  "i18n-ally-community.review.gutters": true
}
```

## How It Works

1. Open a locale file (JSON / YAML)
2. Gutter icons indicate the review status of each key
3. Click the gutter icon to open the comment thread
4. Leave comments, approve, or request changes

## Review Actions

- **Approve** — Mark a translation as approved
- **Request Change** — Flag a translation for revision
- **Comment** — Leave a general comment
- **Resolve** — Mark a comment thread as resolved

## Review Data

Review data is stored in `.vscode/i18n-ally-community-reviews.yml` in your project. This file can be committed to version control for team collaboration.

## User Identity

The reviewer name and email are auto-detected from your Git config. You can override them:

```jsonc
{
  "i18n-ally-community.review.user.name": "Your Name",
  "i18n-ally-community.review.user.email": "you@example.com"
}
```

## Translation Candidates

When `translate.saveAsCandidates` is enabled, machine translations are saved as candidates rather than applied directly. Team members can then review and approve them.

```jsonc
{
  "i18n-ally-community.translate.saveAsCandidates": true
}
```
