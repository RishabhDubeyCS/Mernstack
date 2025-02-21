
  const express =require ("express");//express is the function
  const app= express();//app are the object 
  console.dir(app);
const port = 3000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);//backtick
});
app.get("/", (_req, res) => {
   res.send("Hello, I am root");
});
app.get("/:username/:id ", (req, res)=>{
  let {username,id }= req.params;
   res.send (`hello , i am root @${username}`);
});
app.get("/search", (req, res) => {
  console.log(req.query);//{q: "apple"}
  res.send("no results");//localhost:8080/search?q=apple
});
 app.use ((req,res)=>{
 console.log ("request recived");
  let code = "<h1>fruits</h1 <ul > apple </ul>  <ul > orange </ul>";
  res.send(code );
 });
  