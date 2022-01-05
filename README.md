# MTCG Website

Codebase for MindsGaming rewards.

## Install

### Clone/Remix

The easiest way to get your own version of MTCG to edit and design yourself is to remix it on Glitch.
[Remix](https://glitch.com/edit/#!/remix/mtcg)

### Git

You can also install MTCG on your own website you will need Node and express.

### Miner

You can use our minyminer if your just looking to host your miner script.
https://glitch.com/~minymine

## Base

**hello-sqlite**

A starter that has a database

- This app uses sqlite but you can power your apps with [a number of other storage options](https://glitch.com/storage)
- `sqlite.db` is created and put into the `.data` folder, a hidden directory whose contents aren’t copied when a project is remixed. You can see the contents of `.data` in the console under "Logs"
- To save to the database, remix this app!

**On the front-end,**

- Edit `views/index.html`, `public/style.css`, and `public/client.js`
- Drag in `assets`, like images or music, to add them to your project

**On the back-end,**

- Your app starts at `server.js`
- Add frameworks and packages in `package.json`
- Safely store app secrets in `.env` (nobody can see this but you and people you invite)
