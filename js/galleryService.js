console.log('Starting up');
'use strict'
var gProjs=[];
var gSortBy = 'name';
var gCurrProj=null;
//var gSortBy='name'

function createProj(name,title,desc,imgUrl,publishedAt,lables,link){
    return {
        id : getRandomID(), 
        name,
        title,
        desc,
        imgUrl,
        publishedAt,
        labels:[],
        link
    };
}
function createProjs(){
   gProjs.push(createProj("pacman","pacman game","bla desc","img/portfolio/01-full.jpg","20/11/19",["cool","beginner"]));
   gProjs.push(createProj("minesweeper","minesweeper game",'bla desc',"img/portfolio/minesweeper.png","24/11/19",["sprint","cool","beginner"],"https://ilancohen100.github.io/minesweeper4/"));
    return gProjs;
}
function getProjsToRender(){
    var sortedProjs = gProjs.sort(function(Proj1,Proj2){
        return Proj1[gSortBy] > Proj2[gSortBy] ? 1 :
            (Proj1[gSortBy] < Proj2[gSortBy] ? -1 : 0)
    })
    return sortedProjs
}
function deleteProj(ProjID){
    var ProjIdx = getProjIndexById(ProjID)
    gProjs.splice(ProjIdx,1)
    saveProjs()
}
function addProj(name,price,imgUrl){
    gProjs.push(createProj(getRandomID(),name,price,imgUrl))
    saveProjs()
}
function getProjIndexById(ProjID){
    return gProjs.findIndex(function(Proj) {
        return Proj.id === ProjID
    })
}
function getProjById(ProjID){
    return gProjs.find(function(Proj) {
        return Proj.id === ProjID
    })
}
function setCurrProj(ProjID){
    gCurrProj = getProjById(ProjID)
    return gCurrProj
}
function updateProjPrice(newPrice){
    gCurrProj.price = newPrice
    saveProjs()
}
function updateProjRate(newRate){
    gCurrProj.rate = newRate
    saveProjs()
}
function saveProjs(){
    saveToStorage('Projs',gProjs)
}
function loadProjs(){
    gProjs = loadFromStorage('Projs',createProjs())
}
function setSortStatus(newSort){
    gSortBy = newSort
}
