import{i as u,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const f=(a,e,t)=>{u[a]({title:e,message:t,timeout:2e3,progressBar:!1,position:"center"})},g=(a,e="")=>{f("error",e,a)},l=new URLSearchParams({key:"33588137-20261db95d6a52f088d4718c9",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true"}),h=a=>(l.set("q",a),fetch(`https://pixabay.com/api/?${l}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return e.hits.map(t=>({webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,tags:t.tags,likes:t.likes,views:t.views,comments:t.comments,downloads:t.downloads}))}).catch(e=>{throw e})),y=({webformatURL:a,largeImageURL:e,tags:t,likes:o,views:r,comments:s,downloads:i})=>`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img class="gallery-image" src="${a}" alt="${t}" />
    <div class="image-details">
       <div class="details-header">Likes</div>
        <div class="details-header">Views</div>
        <div class="details-header">Comments</div>
        <div class="details-header">Downloads</div>
        <div class="details-value">${o}</div>
        <div class="details-value">${r}</div>
        <div class="details-value">${s}</div>
        <div class="details-value">${i}</div>
      </div>
  </a>
</li>`,p=(a,e)=>{a.innerHTML=e.map(o=>y(o)).join("");const t=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:300,overlay:!0,overlayOpacity:.5});t.on("show.simplelightbox",function(){}),t.on("closed.simplelightbox",function(){})},v=document.querySelector(".search-field"),d=document.querySelector(".loader-container"),n=document.querySelector(".gallery");function w(){d.style.display="flex"}function c(){d.style.display="none"}document.querySelector(".form").addEventListener("submit",a=>{a.preventDefault();const e=v.value.trim();e.length!==0&&(w(),h(e).then(t=>{p(n,t),c()}).catch(t=>{g(t.message),c(),n.innerHTML=""}))});
//# sourceMappingURL=index.js.map
