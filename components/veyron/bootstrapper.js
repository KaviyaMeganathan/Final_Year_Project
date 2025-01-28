if (window.addEventListener)
  window.addEventListener("load", initComponents, false);
else if (window.attachEvent)
  window.attachEvent("onload", initComponents);
else
  window.onload = initComponents;

function initComponents() {
  if (!('registerElement' in document && 'import' in document.createElement('link') && 'content' in document.createElement('template'))) {
    var wcPoly = document.createElement('script');
    wcPoly.src = '/components/webcomponentsjs/0.7.20/webcomponents-lite.min.js';
    wcPoly.onload = lazyLoadComponents;
    document.head.appendChild(wcPoly);
  } else {
    lazyLoadComponents();
  }
}

function lazyLoadComponents () {
  var components = document.querySelectorAll('.veyron-component');
  for(var i=0; i < components.length; i++) {
    var element = components[i];
    loadWebComponent(element);
  }
}

function loadWebComponent(element) {
  var componentImport = document.createElement('link');
  componentImport.rel = 'import';
  componentImport.href = '/components/'+element.localName+'/'+element.localName+'.html';
  document.head.appendChild(componentImport);
}