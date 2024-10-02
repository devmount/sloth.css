---
title: 'Contributing - Sloth.css'
description: Getting started with Sloth.css, how to contribute.
---

## Contributing

First off, I'm grateful for every single contributor out there! This is where the power of open source really shows. You are awesome!
  
### Support ideas

There are a lot of ways to help without the need to look into the code or even write code:

- [Give Sloth.css a star]({{ repoUrl }}/stargazers) on GitHub ⭐
- Write a short review or recommendation on your favourite platform 📣
- Tell your frontend dev friends and colleagues to try Sloth.css 🗣️
- [Donate](https://paypal.me/devmount) or [sponsor](https://github.com/sponsors/devmount) this project to support further development 💸
- Sharing your hands-on experience with this project and participate in [discussions]({{ repoUrl }}/discussions)💬
- Find typos and improve documentation 📜

### Reporting bugs

Before creating bug reports, please make sure there isn't already an existing issue describing your problem under [GitHub issues]({{ repoUrl }}/issues). Simply create an issue and provide the necessary information by filling in [the bug-report template]({{ repoUrl }}/issues/new?template=bug_report.md).

### Suggesting enhancements

Enhancement suggestions are also tracked as [GitHub issues]({{ repoUrl }}/issues). Before creating enhancement suggestions, please check the existing issues as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please include as many details as possible. Fill in one of the following feature request templates:

- [Core styling request]({{ repoUrl }}/issues/new?assignees=&labels=enhancement%2Ccore&projects=&template=core_styling_request.md&title=Core+drop-in+style+request%3A+)
- [CSS component request]({{ repoUrl }}/issues/new?assignees=&labels=enhancement%2Ccomponent&projects=&template=css_component_request.md&title=New+CSS+component%3A+)
- [Utility class request]({{ repoUrl }}/issues/new?assignees=&labels=enhancement%2Cutility&projects=&template=utility_class_request.md&title=New+utility+class%3A+)

### Provide code changes via pull requests

Complete the required template. Please do not include issue numbers in the PR title, but mention it in the PR body.

#### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Start your commit messages with one of the following emojis:
  - ➕ `:heavy_plus_sign:` when adding a file or implementing a new feature
  - 🔨 `:hammer:` when fixing a bug or issue
  - 💚 `:green_heart:` when improving code or comments
  - ⚡ `:zap:` when improving performance or reducing file size
  - 📜 `:scroll:` when updating docs or readme
  - 🔑 `:key:` when dealing with security
  - 🔁 `:repeat:` when updating dependencies or data
  - ✅ `:white_check_mark:` when releasing a new version
  - 👕 `:shirt:` when refactoring or removing linter warnings
  - ❌ `:x:` when removing code or files

## Beta-Testing

Testing the current state and reporting bugs is a great way to help! Here's how:

```bash
git clone {{ repoUrl }}/sloth.css
cd sloth.css
npm i
npm run docs:serve
```

Now you can check <http://localhost:8080> (or the next available free port) to have the documentation pages served right from the latest repository state. If you run into any problems or find any issues, create a [bug report]({{ repoUrl }}/sloth.css/issues/new?assignees=&labels=bug&projects=&template=bug_report.md) or start [a discussion thread]({{ repoUrl }}/sloth.css/discussions).

Again: Thanks a lot for your support! 🧡
