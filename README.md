# cs-girlies-com
Official CS Girlies website

## Setup Info

### Access to the Code (CS Girlies Staff)

First clone the Repository:
```
git clone https://github.com/Computer-Science-Girlies/cs-girlies-com.git
```

 Add a new branch
 either over Github:

 - click on the main branch icon
 - "show all Branches"
 - "new branch"

 and pull the newest changes

```
git pull
git switch [branch-name]
```

or create a new branch locally and push the branch on main

```
git chekout -b [branch-name]
```

after you make changes you can add them and the new branch to the repository

```
git add -A; git commit -am "Description of Change"
git push -u origin [branch-name]
```

### No Access to the Code (everyone else)

First fork the repository
- click on the Fork Dropdown button on the Github Page of the Repository
- click on "Create a new Fork"
- change the name if needed and click on Create

Clone your fork locally:

```
git clone https://github.com/[your-username]/[name-of-fork].git
cd [name-of.fork]
```

Make your desired changes and push them to your fork:

```
git add -A; git commit -am "Description of Change"
git push origin main
```

### Admit the Changes

After your changes are either on the Branch or Fork you have to open a pull request in Github
- Click on "Pull Request" and Make a new Pull Request
- Either Select your Branch or click "compare across Fork" if you have Forked the repository
- Add a Title and description and wait until Michelle has reviewed it hehe

## Starting the website locally

First download the Node Modules

```git
npm install
```

After the download u can run the Page locally

```git
npm run dev
```