/**
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
"use strict";

import template from './byu-news.html';
import * as util from 'byu-web-component-utils';

const ATTR_CATEGORIES = 'categories';
const ATTR_TAGS = 'tags';
const ATTR_DEPARTMENTS = 'departments';
// TODO: Add display modes

const DEFAULT_CATEGORIES = 'all';
const DEFAULT_TAGS = 'all';
const DEFAULT_DEPARTMENTS = 'all';

class ByuNews extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    //This will stamp our template for us, then let us perform actions on the stamped DOM.
    util.applyTemplate(this, 'byu-news', template, () => {
      getStoriesData(this);

      setupSlotListeners(this);
    });
  }

  disconnectedCallback() {

  }

  static get observedAttributes() {
    return [ATTR_CATEGORIES, ATTR_DEPARTMENTS, ATTR_TAGS];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch(attr) {
      case ATTR_CATEGORIES:
      case ATTR_TAGS:
      case ATTR_DEPARTMENTS:
        getStoriesData(this);
        break;
    }
  }

  // ATTRIBUTES

  set categories(value) {
    this.setAttribute(ATTR_CATEGORIES, value);
  }

  get categories() {
    if (this.hasAttribute(ATTR_CATEGORIES)) {
      return this.getAttribute(ATTR_CATEGORIES);
    }
    return DEFAULT_CATEGORIES;
  }

  set tags(value) {
    this.setAttribute(ATTR_TAGS, value);
  }

  get tags() {
    if (this.hasAttribute(ATTR_TAGS)) {
      return this.getAttribute(ATTR_TAGS);
    }
    return DEFAULT_TAGS;
  }

  set departments(value) {
    this.setAttribute(ATTR_DEPARTMENTS, value);
  }

  get departments() {
    if (this.hasAttribute(ATTR_DEPARTMENTS)) {
      return this.getAttribute(ATTR_DEPARTMENTS);
    }
    return DEFAULT_DEPARTMENTS;
  }

  // END ATTRIBUTES

}

window.customElements.define('byu-news', ByuNews);
window.ByuNews = ByuNews;

// -------------------- Helper Functions --------------------

function applyNews(component) {
  let output = component.shadowRoot.querySelector('.output');

  let count = component.fancy;

  //Remove all current children
  while(output.firstChild) {
    output.removeChild(output.firstChild);
  }

  if (count === 0) return;

  let slot = component.shadowRoot.querySelector('#news-template');

  let template = util.querySelectorSlot(slot, 'template');

  if (!template) {
    throw new Error('No template was specified!');
  }

  for (let i = 0; i < count; i++) {
    let element = document.importNode(template.content, true);
    output.appendChild(element);
  }
}

function setupSlotListeners(component) {
  /* let slot = component.shadowRoot.querySelector('#news-template');

  //this will listen to changes to the contents of our <slot>, so we can take appropriate action
  slot.addEventListener('slotchange', () => {
    applyNews(component);
  }, false); */
}

function getStoriesData() {
  // TODO: Limit the number of stories returned
  let data = {
    title: component.title,
    categories: component.categories,
    tags: component.tags,
    departments: component.departments
  };
  console.log(data);

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      component.shadowRoot.getElementById('news-root').innerHTML = xhttp.responseText;
    }
  };
  // TODO: Create news widget
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(JSON.stringify(data));
}
