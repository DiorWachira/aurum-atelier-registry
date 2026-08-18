# GitHub Profile Stats - Self-Hosted Fix Guide

This assignment requires replacing shared public stats endpoints with your own deployment.

## Why the cards break

Shared public stats instances are hit by many students and exceed GitHub API rate limits. When that happens, card requests fail and images appear broken.

## Fix strategy

1. Fork or deploy from `stats-organization/github-stats-extended`.
2. Host your own instance (Vercel is the fastest path for a static image endpoint workflow).
3. Configure required environment variables with your own GitHub token.
4. Update your profile README image URLs to your own deployed domain.

## Minimum deployment checklist

- Create a dedicated fine-grained GitHub token with read access to profile repositories.
- Add token as deployment secret.
- Deploy and test these card endpoints from your domain:
  - stats card
  - top languages card
  - repo pin card
- Replace old image URLs in profile README.

## Bonus card (+2)

Use a separate open-source card provider not part of github-stats-extended, for example:

- streak stats card from `DenverCoder1/github-readme-streak-stats`

Example markdown image line:

```md
![GitHub Streak](https://streak-stats.demolab.com?user=YOUR_USERNAME&theme=default)
```

Commit the profile README change and verify all card images render publicly.
