set -o errexit

npm i

rm -rf public
mkdir public

# config
git config --global user.email "cs5129606@gmail.com"
git config --global user.name "Jay"

# build (CHANGE THIS)
npm run build

# deploy
cd public
git init
git add .
git commit -m "Deploy to Github Pages"
git push --force --quiet "https://${GITHUB_TOKEN}@$github.com/vue-portfolio.git" master:gh-pages > /dev/null 2>&1