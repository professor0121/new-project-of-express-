the basic code for running a express js server is.
```js
const express =require('express')
const app=express();

const PORT=3000;

app.get('/',(req,res)=>{
    res.send("hello abhishek bhaiya")
})

app.listen(PORT,()=>{
    console.log("app is running")
})
```
In the above code  we can see that the express server functionality to use it efficiently.
```js
app.get('/about', (req, res) => {
    // res.sendFile(path.join(__dirname,'about.html'));
    res.sendFile(path.join(__dirname, 'htmlFiles/navbar.html'));
    // res.json({"abhi":19})
})
```

1. I have a static folder which i want to server as a public.
```js
app.use(express.static(path.join(__dirname, 'htmlFiles')));
```

2. middle ware is vary importent thing to handle the req and res .
```js
// middle ware 
const abhiMiddleware = (req, res, next) => {
    console.log(res);
    next();  
}
app.use(abhiMiddleware);
```


3. we can create a middle ware like this type  
```js
app.get('/hello/:name',(req,res)=>{
    res.send('hello'+req.params.name)
})

```
in it the name is act like a variable which is used for dynamic changes
