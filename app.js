angular.module("todoapp",[]).controller("todoctrl",function()
{
this.mylist=["code","eat","sleep","repeat"];
this.editmode=false;
this.setedittodo = function()
{
  this.editmode = !this.editmode;
//  console.log(this.editmode);
};
this.addtodo = function()
{
  this.mylist.push(this.toadd);
  this.toadd="";
};
});
