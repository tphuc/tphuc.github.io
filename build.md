



### Here are list of folders/files must have when deploy:

- **node_modules/**
- package.json
- **build/**

*!NOTES: when hosting in a custom domain, edit your custom domain in*
**package.json** file.

``` javascript
"homepage" : "https://yourdomain.com"
```





# 1.Install nodejs dependencies

>If you try to **ls** and see it's missing the **node_modules/** folder !

    $ ls
    README.md      public         yarn-error.log
    package.json   src            yarn.lock




>Solve:

    $ npm install
    ...

>Check again

    $ ls
    README.md       public/         yarn-error.log   node_modules/
    package.json    src/            yarn.lock



# 2.Build
> Note: In the root directory (same scope with "package.json" file)!
## using **yarn**

    yarn build
or 

## using **npm**
    npm run build


> The "/build" folder is created/modified, ready for deployment.

    $ ls
    README.md       public/         yarn-error.log   node_modules/
    package.json    src/            yarn.lock        build/

# Deployment

## using **yarn**
    yarn global add serve
    serve -s build

## using **npm**
    npm install -g serve
    serve -s build


# References
- https://facebook.github.io/create-react-app/docs/deployment
