"use strict";window.initNewsletters=function(){var e='\n    <div class="newsletters_panel">\n      <div class="newsletters_panel-content">\n        <div class="newsletters_panel-imagewrap">\n          <img src="/assets/images/newsletters/pregnancy-newsletter.svg" alt="pregnant figure">\n        </div>\n        <div class="newsletters_panel-details">\n          <h3 class="newsletters_panel-details-title">Learn more about your pregnancy</h3>\n          <p class="newsletters_panel-details-text">\n              Learn more about your pregnancy each month with information and advice on how your body is changing, your baby\'s development\n              and what tests and scans are available to you.\n          </p>\n          <div class="newsletters_panel-details-time">\n            <i class="dor-icon_envelope"></i> You will receive a new email every 4 weeks.\n          </div>\n          <div class="newsletters_panel-details-buttonWrap">\n            <a href="/newsletters/subscribe-step-1?newsletter=pregnancy" class="newsletters_panel-details-button">\n              Subscribe\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>',n='\n    <div class="newsletters_panel">\n      <div class="newsletters_panel-content">\n        <div class="newsletters_panel-imagewrap">\n          <img src="/assets/images/newsletters/newborn.svg" alt="figure holding a baby">\n        </div>\n        <div class="newsletters_panel-details">\n          <h3>\n              Learn more about your newborn\n          </h3>\n          <p>\n              Monthly newsletter providing information and advice on caring for your baby. Learn about feeding, getting them to sleep and\n              settling a crying baby along with practical tips like changing nappies, bath time and dressing\n              your baby.\n          </p>\n          <div class="newsletters_panel-details-time">\n            <i class="dor-icon_envelope"></i> You will receive a new email every 4 weeks.\n          </div>\n          <div class="newsletters_panel-details-buttonWrap">\n            <a href="/newsletters/subscribe-step-1?newsletter=newborn" class="newsletters_panel-details-button">\n                Subscribe\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>',s='\n    <div class="newsletters_panel">\n      <div class="newsletters_panel-content">\n        <div class="newsletters_panel-imagewrap">\n          <img src="/assets/images/newsletters/pregnancy-newsletter.svg" alt="pregnant figure">\n        </div>\n        <div class="newsletters_panel-details">\n          <h3 class="newsletters_panel-details-title">\n              You\'re already subscribed to our Pregnancy Newsletter\n          </h3>\n          <p class="newsletters_panel-details-text">\n              You can update your subscription from your\n              <a href="/user/email-subscriptions">profile page</a>\n          </p>\n        </div>\n      </div>\n    </div>',t='\n    <div class="newsletters_panel">\n      <div class="newsletters_panel-content">\n        <div class="newsletters_panel-imagewrap">\n          <img src="/assets/images/newsletters/newborn.svg" alt="figure holding a baby">\n        </div>\n        <div class="newsletters_panel-details">\n          <h3 class="newsletters_panel-details-title">\n              You\'re already subscribed to our newborn Newsletter\n          </h3>\n          <p class="newsletters_panel-details-text">\n              You can update your subscription from your\n              <a href="/user/email-subscriptions">profile page</a>\n          </p>\n        </div>\n      </div>\n    </div>',a="<h1>Newsletters</h1>",i=ƒ1(".veyron-data-elem"),l=ƒ1(".veyron-newsletter-container"),r=JSON.parse(i.getAttribute("data-subscriptions")),d=localStorage.getItem("access_token");if(d)if(r){var o=r.newborn,c=void 0!==o&&o,p=r.pregnancy,w=void 0!==p&&p;w&&c?l.innerHTML=""+a+s+t:!w&&c?l.innerHTML=""+a+e+t:w&&!c?l.innerHTML=""+a+n+s:w||c||(l.innerHTML=""+a+e+n)}else{var v=document.createElement("form");v.setAttribute("class","hidden");var u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("name","token"),u.setAttribute("value",d),v.appendChild(u),ƒ1("body").appendChild(v);v.setAttribute("method","post"),v.setAttribute("action","/newsletters"),v.submit()}else l.innerHTML="\n      "+e+"\n      "+n+"\n    "};