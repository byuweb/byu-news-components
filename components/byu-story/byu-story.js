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

import template from './byu-story.html';
import * as util from 'byu-web-component-utils';

const ATTR_STORY_ID = 'story-id';
const ATTR_TEASER = 'teaser';

const NEWS_SITE = 'https://news-dev.byu.edu/node/';

class ByuStory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    //This will stamp our template for us, then let us perform actions on the stamped DOM.
    util.applyTemplate(this, 'byu-story', template, () => {
      getStoryData(this);
      setupSlotListeners(this);
    });
  }

  static get observedAttribute() {
    return [ATTR_STORY_ID, ATTR_TEASER];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case ATTR_STORY_ID:
      case ATTR_TEASER:
        getStoryData(this);
        break;
    }
  }

  get storyId() {
    if (this.hasAttribute(ATTR_STORY_ID)) {
      return this.getAttribute(ATTR_STORY_ID);
    }
  }

  set storyId(value) {
    this.setAttribute(ATTR_STORY_ID, value);
  }

  get teaser() {
    return this.hasAttribute(ATTR_TEASER);
  }
}

window.customElements.define('byu-story', ByuStory);
window.ByuStory = ByuStory;

// -------------------- Helper Functions --------------------

function setupSlotListeners(component) {
  // Saving just in case
}

function getStoryData(component) {
  if (component.teaser) {
    if (component.classList.contains('news-child')) {
      let links = component.shadowRoot.querySelectorAll('.story-link');
      for (let i = 0; i < links.length; i++) {
        links[i].setAttribute('href', NEWS_SITE + component.storyId);
      }
    }
    else {
      // TODO: Get story teaser if not a news child
    }
  }
  else {
    // TODO: Get full story data
  }
}
