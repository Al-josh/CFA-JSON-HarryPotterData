#### Challenge:

1. Create a json formatted dataset that describes something in your life (family members, favourite puns, students on your table)
2. Use the express generator to create an node/express app
3. Create a root route which will render an ejs template with your data
4. Create another route which sends the data in json format

#### Challenge completed as follows:

```
$ npm init
$ npm install express --save
$ npm install path --save
$ napm install ejs --save
```

Created a Json file "data.json" with Harry Potter characters and rendered a list of characters and their occupation on the on the views/index.ejs file.
Created a route '/json' and verified the correct response in Postman.
