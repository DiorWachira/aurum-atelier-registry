# Project Submission Report

## 1. Student Details

- Full Name: Wachira Njoroge
- GitHub Username: DiorWachira
- Email: njoroge.wachira@strathmore.edu

---

## 2. Deployed Project Link

- Live GitHub Pages URL: https://diorwachira.github.io/aurum-atelier-registry/

---

## 3. Reflection - Grounded in Your Git History

### A. Your Best Commit

- Commit URL: https://github.com/DiorWachira/aurum-atelier-registry/commit/3917382b30a8c890e2beee86ec88ea7b8dbb5b71
- Why this one? This commit uses a clear conventional format (fix), a short action-based title, and a focused message that explains the exact bug it solves. It also links back to issue work through footer references.

### B. A Mistake or Struggle

- Link to the evidence: https://github.com/DiorWachira/aurum-atelier-registry/pull/14
- What happened and how did you recover? I created a delete-versus-modify conflict that was hard to finish in the GitHub web editor, so the merge took longer than planned. I fixed it by resolving the conflict locally, committing the result, pushing the branch, and then finishing the merge through the PR.

### C. A Pull Request You're Proud Of

- PR URL: https://github.com/DiorWachira/aurum-atelier-registry/pull/10
- What did you check before merging? I checked that each commit was small and clean, reviewed the changed files for clarity, and confirmed issue links in the PR description (Closes #2, Refs #4, Refs #6) before merging.

### D. One Thing You Would Do Differently

- What would you change? I would create separate sandbox files for conflict demos from the beginning instead of editing active docs, so I can avoid extra rework and keep final docs cleaner.
- Link to the evidence of the original decision: https://github.com/DiorWachira/aurum-atelier-registry/pull/12

---

## 4. Screenshots of Key GitHub Features

### A. Milestones and Issues

![Milestones and issues](https://raw.githubusercontent.com/DiorWachira/aurum-atelier-registry/main/evidence/screenshots/milestones-issues.png)

- Caption: Repository milestones are configured (M1, M2, M3) and issue tracking has started with issue-to-milestone linkage.
- Caption: Milestones were set up (M1, M2, M3), and issues were linked to the right milestone before work moved forward.

### B. Project Board

![Project board](https://raw.githubusercontent.com/DiorWachira/aurum-atelier-registry/main/evidence/screenshots/project-board-done.png)

- Caption: Kanban board with To Do, In Progress, and Done was created and actively used by moving issues across columns.
- Caption: A Kanban board with To Do, In Progress, and Done was created, and issues were moved across columns during the project.

### C. Branching Architecture

![Branching architecture](https://raw.githubusercontent.com/DiorWachira/aurum-atelier-registry/main/evidence/screenshots/branching-architecture.png)

- Caption: The branch list shows main and issue-linked feature branches using the feat naming pattern.

### D. Pull Requests & Traceability

![Pull requests and traceability](https://raw.githubusercontent.com/DiorWachira/aurum-atelier-registry/main/evidence/screenshots/pull-requests-traceability.png)

- Caption: Pull request #10 is merged and includes issue-linked traceability in the description.
- Caption: Pull request #10 was merged and includes clear issue traceability in the description.

---

## 5. Merge Conflict Evidence

### Conflict 1 - Full Chronology

What cause did you use? Same-line edit conflict.

#### Step 1: Generating the Clash

![Conflict 1 step 1](https://raw.githubusercontent.com/DiorWachira/aurum-atelier-registry/main/evidence/screenshots/conflict1-step1-merge-warning.png)

- Caption: Branches feat/7-conflict-same-line-alpha and feat/7-conflict-same-line-beta changed the same README line in different ways, so GitHub could not merge automatically.

#### Step 2: Inside the Code Editor (Conflict Markers)

![Conflict 1 markers](https://raw.githubusercontent.com/DiorWachira/aurum-atelier-registry/main/evidence/conflict_evidence_1.png)

- Caption: The conflict markers show two edits on the same line. I resolved it by keeping both deployment notes to keep release planning and CI notes together.

#### Step 3: Resolution & Clean Merge

![Conflict 1 merged](https://raw.githubusercontent.com/DiorWachira/aurum-atelier-registry/main/evidence/screenshots/conflict1-step3-merged.png)

- Caption: PR #12 was resolved and merged successfully after the conflict was fixed.

### Conflict 2 - Different Cause

What cause did you use? Overlapping block edits during parallel refactoring.

Why does this cause trigger a conflict? Two branches changed the same block in app.js with different fallback values, so Git could not choose one final result automatically.

![Conflict 2 markers](https://raw.githubusercontent.com/DiorWachira/aurum-atelier-registry/main/evidence/conflict_evidence_2.png)

- Caption: Branches fix/8-overlap-block-a and fix/8-overlap-block-b conflicted in app.js around normalizePiece fallback values.

### Conflict 3 - Different Cause

What cause did you use? Refactor-versus-edit conflict in shared configuration lines.

Why does this cause trigger a conflict? One branch renamed a design token (brand to accent) while another branch edited the old brand token value on the same lines, which created conflicting edits.

![Conflict 3 markers](https://raw.githubusercontent.com/DiorWachira/aurum-atelier-registry/main/evidence/conflict_evidence_3.png)

- Caption: Branches feat/9-theme-refactor-a and feat/9-theme-tune-b collided in styles.css at the root token section.

---

## 6. Feedback & Evaluation

- [ ] Anonymous Evaluation Form: [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---

## Final Submission

Submit through: https://forms.gle/KrT4VxtFtkU3wtYu8

Deadline reminder: no late submissions are accepted.
