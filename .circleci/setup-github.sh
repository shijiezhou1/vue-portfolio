git config user.name "shijiezhou1"
git config user.email "cs5129606@gmail.com"

cd dist/
git init
git add .
git commit -m "Deploy from CircleCi"

git push --force --quiet "https://${GH_TOKEN}@github.com/seangransee/blog.git" master:gh-pages # path to your repo on GitHub, using token for authentication


echo "deployed successfully"
