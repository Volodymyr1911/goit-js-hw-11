import{S as c,i}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d="44000662-4324e542e50ef447eeba96a2f",l="https://pixabay.com/api/";async function p(o,t=1,r=12){const n=`${l}?key=${d}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${r}`,e=await fetch(n);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}function u(o){const t=document.getElementById("gallery");t.innerHTML="",o.forEach(r=>{const n=document.createElement("div");n.classList.add("image-card"),n.innerHTML=`
            <a href="${r.largeImageURL}">
                <img src="${r.webformatURL}" alt="${r.tags}">
            </a>
            <div class="info">
                <div>
                    <span>Likes</span>
                    <p>${r.likes}</p>
                </div>
                <div>
                    <span>Views</span>
                    <p>${r.views}</p>
                </div>
                <div>
                    <span>Comments</span>
                    <p>${r.comments}</p>
                </div>
                <div>
                    <span>Downloads</span>
                    <p>${r.downloads}</p>
                </div>
            </div>
        `,t.appendChild(n)}),new c("#gallery a")}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("search-button").addEventListener("click",async()=>{const o=document.getElementById("search-input").value.trim();if(o===""){i.error({title:"Error",message:"Please enter a search query"});return}try{const t=await p(o);t.hits.length===0?i.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):u(t.hits)}catch{i.error({title:"Error",message:"Failed to fetch images"})}})});
//# sourceMappingURL=commonHelpers.js.map
