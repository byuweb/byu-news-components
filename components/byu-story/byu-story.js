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
const ATTR_NO_CATEGORY = 'no-category';
const ATTR_NO_DATE = 'no-date';

const NEWS_SITE = 'https://news.byu.edu/node/';
const ENDPOINT = 'https://news.byu.edu/api/';

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

  set noCategory(value) {
    this.setAttribute(ATTR_NO_CATEGORY, '');
  }

  get noCategory() {
    if (this.hasAttribute(ATTR_NO_CATEGORY)) {
      return this.getAttribute(ATTR_NO_CATEGORY);
    }
  }

  set noDate(value) {
    this.setAttribute(ATTR_NO_DATE, '');
  }

  get noDate() {
    if (this.hasAttribute(ATTR_NO_DATE)) {
      return this.getAttribute(ATTR_NO_DATE);
    }
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
      let url = ENDPOINT + 'Story.json?id=' + component.storyId;
      fetch(url).then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not OK.')
      }).then(story => {
        let storyLinks = component.shadowRoot.querySelectorAll('.story-link');
        storyLinks[0].setAttribute('href', NEWS_SITE + story[0].storyId);
        storyLinks[1].setAttribute('href', NEWS_SITE + story[0].storyId);

        let storyImage = document.createElement("img");
        let replaceSlot = storyLinks[0].firstChild;
        storyImage.setAttribute('src', story[0].featuredImgUrl);
        storyImage.setAttribute('class', 'story-image');
        storyImage.setAttribute('alt', 'Story Image');
        storyLinks[0].replaceChild(storyImage, replaceSlot);

        let storyTitle = document.createElement("h3");
        replaceSlot = storyLinks[1].firstChild;
        storyTitle.setAttribute('class', 'story-title');
        storyTitle.innerHTML = story[0].title;
        storyLinks[1].replaceChild(storyTitle, replaceSlot);

        if (component.noCategory !== '') {
          let categoryWrapper = component.shadowRoot.querySelector('#category-slot-wrapper');

          let storyCategory = document.createElement("span");
          replaceSlot = categoryWrapper.firstChild;
          storyCategory.setAttribute('class', 'story-category');
          storyCategory.innerHTML = story[0].Category;
          categoryWrapper.replaceChild(storyCategory, replaceSlot);
        }

        if (component.noDate !== '') {
          let dateWrapper = component.shadowRoot.querySelector('#date-slot-wrapper');
          let date = story[0].datePublished;
          date = date.replace('-', '. ');
          date = date.replace('-', ', ');

          let storyDate = document.createElement("span");
          replaceSlot = dateWrapper.firstChild;
          storyDate.setAttribute('class', 'story-date');
          storyDate.innerHTML = date;
          dateWrapper.replaceChild(storyDate, replaceSlot);
        }

        let teaser = story[0].Body;

        // Preemptively shorten teaser (This is to decrease the time it takes to shorten the teaser by word)
        if (teaser.length > 300) {
          teaser = teaser.substring(0, 300);
        }

        // Make sure teaser doesn't end in whitespace
        teaser = teaser.trim();

        // Continue to shorten teaser by word (This ensures the ellipses doesn't start in the middle of a word or white space)
        while (teaser.length > 250) {
          teaser = teaser.replace(/\W*\s(\S)*$/, '...');
        }

        if (teaser) {
          let descriptionWrapper = component.shadowRoot.querySelector('#description-slot-wrapper');

          let storyDescription = document.createElement("p");
          replaceSlot = descriptionWrapper.firstChild;

          storyDescription.setAttribute('class', 'story-teaser');
          storyDescription.innerHTML = teaser;
          descriptionWrapper.replaceChild(storyDescription, replaceSlot);
        }
      }).catch(error => {
        console.error('There was a problem: ' + error.message);
      });
    }
  }
  else {
    let url = ENDPOINT + 'Story.json?id=' + component.storyId;
    fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not OK.')
    }).then(story => {
      let storyLinks = component.shadowRoot.querySelectorAll('.story-link');
      storyLinks[0].setAttribute('href', NEWS_SITE + story[0].storyId);
      storyLinks[1].setAttribute('href', NEWS_SITE + story[0].storyId);

      let storyImage = document.createElement("img");
      let replaceSlot = storyLinks[0].firstChild;
      storyImage.setAttribute('src', story[0].featuredImgUrl);
      storyImage.setAttribute('class', 'story-image');
      storyImage.setAttribute('alt', 'Story Image');
      storyLinks[0].replaceChild(storyImage, replaceSlot);

      let storyTitle = document.createElement("h3");
      replaceSlot = storyLinks[1].firstChild;
      storyTitle.setAttribute('class', 'story-title');
      storyTitle.innerHTML = story[0].title;
      storyLinks[1].replaceChild(storyTitle, replaceSlot);

      if (component.noCategory !== '') {
        let categoryWrapper = component.shadowRoot.querySelector('#category-slot-wrapper');

        let storyCategory = document.createElement("span");
        replaceSlot = categoryWrapper.firstChild;
        storyCategory.setAttribute('class', 'story-category');
        storyCategory.innerHTML = story[0].Category;
        categoryWrapper.replaceChild(storyCategory, replaceSlot);
      }

      if (component.noDate !== '') {
        let dateWrapper = component.shadowRoot.querySelector('#date-slot-wrapper');
        let date = story[0].datePublished;
        date = date.replace('-', '. ');
        date = date.replace('-', ', ');

        let storyDate = document.createElement("span");
        replaceSlot = dateWrapper.firstChild;
        storyDate.setAttribute('class', 'story-date');
        storyDate.innerHTML = date;
        dateWrapper.replaceChild(storyDate, replaceSlot);
      }

      let body = story[0].Body;
      let descriptionWrapper = component.shadowRoot.querySelector('#description-slot-wrapper');

      let storyDescription = document.createElement("p");
      replaceSlot = descriptionWrapper.firstChild;

      storyDescription.setAttribute('class', 'story-body');
      storyDescription.innerHTML = body;
      descriptionWrapper.replaceChild(storyDescription, replaceSlot);
    }).catch(error => {
      console.error('There was a problem: ' + error.message);
    });
  }
}
