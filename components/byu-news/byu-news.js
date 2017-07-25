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
import 'whatwg-fetch';

const ATTR_CATEGORIES = 'categories';
const ATTR_TAGS = 'tags';
const ATTR_MIN_DATE = 'min-date';
const ATTR_MAX_DATE = 'max-date';
const ATTR_STORY_LIMIT = 'story-limit';

const DEFAULT_CATEGORIES = 'all';
const DEFAULT_TAGS = 'all';
const DEFAULT_STORY_LIMIT = '-1'; // -1 for infinite

const ENDPOINT = 'https://news-dev.byu.edu/api/';

class ByuNews extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    //This will stamp our template for us, then let us perform actions on the stamped DOM.
    util.applyTemplate(this, 'byu-news', template, () => {
      applyNews(this);

      setupSlotListeners(this);
    });
  }

  disconnectedCallback() {

  }

  static get observedAttributes() {
    return [ATTR_CATEGORIES, ATTR_TAGS, ATTR_MIN_DATE, ATTR_MAX_DATE, ATTR_STORY_LIMIT];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch(attr) {
      case ATTR_CATEGORIES:
      case ATTR_TAGS:
      case ATTR_MIN_DATE:
      case ATTR_MAX_DATE:
      case ATTR_STORY_LIMIT:
        applyNews(this);
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

  set minDate(value) {
    this.setAttribute(ATTR_MIN_DATE, value);
  }

  get minDate() {
    if (this.hasAttribute(ATTR_MIN_DATE)) {
      return this.getAttribute(ATTR_MIN_DATE);
    }
  }

  set maxDate(value) {
    this.setAttribute(ATTR_MAX_DATE, value);
  }

  get maxDate() {
    if (this.hasAttribute(ATTR_MAX_DATE)) {
      return this.getAttribute(ATTR_MAX_DATE);
    }
  }

  set storyLimit(value) {
    this.setAttribute(ATTR_STORY_LIMIT, value);
  }

  get storyLimit() {
    if (this.hasAttribute(ATTR_STORY_LIMIT)) {
      return this.getAttribute(ATTR_STORY_LIMIT);
    }
    return DEFAULT_STORY_LIMIT;
  }

  // END ATTRIBUTES

}

window.customElements.define('byu-news', ByuNews);
window.ByuNews = ByuNews;

// -------------------- Helper Functions --------------------

function applyNews(component) {
  let output = component.shadowRoot.querySelector('.output');

  let count = Number(component.storyLimit);

  if (count === 0) return;

  //Remove all current children (if there are any)
  while(output !== null && output.firstChild) {
    output.removeChild(output.firstChild);
  }

  let slot = component.shadowRoot.querySelector('#story-template');
  let template = util.querySelectorSlot(slot, 'template');

  if (!template) {
    throw new Error('No template was specified!');
  }

  let stories = getStoriesData(this);
  if (count === -1) {
    count = stories.length;
  }

  for (let i = 0; i < count; ++i) {
    template.getElementsByTagName('img').forEach(function(image) {
      // TODO: Get alt text
      image.setAttribute('src', stories[i].FeaturedImgUrl);
    });
    template.getElementsByTagName('h2').forEach(function(title) {
      title.innerHTML = stories[i].Title;
    });
    template.getElementsByTagName('p').forEach(function(teaser) {
      teaser.innerHTML = stories[i].Summary;
    });
    let element = document.importNode(template.content, true);
    output.appendChild(element);
  }
}

function setupSlotListeners(component) {
  let slot = component.shadowRoot.querySelector('#story-template');

  //this will listen to changes to the contents of our <slot>, so we can take appropriate action
  slot.addEventListener('slotchange', () => {
    applyNews(component);
  }, false);
}

function getStoriesData(component) {
  let data = {
    title: component.title,
    categories: component.categories,
    tags: component.tags,
    minDate: component.minDate,
    maxDate: component.maxDate,
  };
  console.log(data);

  let url = ENDPOINT + 'Stories.json?categories=' + data.categories + '&tags=' + data.tags;
  if (data['minDate']) {
    url += 'update[min]=' + data.minDate;
  }
  if (data['maxDate']) {
    url += 'update[max]=' + data.maxDate;
  }

  fetch(url).then(function(response) {
    if (!response.ok) {
      return "Error fetching the stories.";
    }
    else {
      return response.json();
    }
  });
}
