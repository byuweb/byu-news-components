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

const ATTR_FANCY = 'fancy';

const DEFAULT_FANCY = 1;

class ByuStory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    //This will stamp our template for us, then let us perform actions on the stamped DOM.
    util.applyTemplate(this, 'byu-story', template, () => {
      setupButtonListeners(this);
      applyFancy(this);

      setupSlotListeners(this);
    });
  }

  disconnectedCallback() {
    teardownButtonListeners(this);
  }

  static get observedAttributes() {
    return [ATTR_FANCY];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch(attr) {
      case ATTR_FANCY:
        applyFancy(this);
        break;
    }
  }

  set fancy(value) {
    this.setAttribute(ATTR_FANCY, value);
  }

  get fancy() {
    if (this.hasAttribute(ATTR_FANCY)) {
      return Number(this.getAttribute(ATTR_FANCY));
    }
    return DEFAULT_FANCY;
  }

}

window.customElements.define('byu-story', ByuStory);
window.ByuStory = ByuStory;

// -------------------- Helper Functions --------------------

function applyFancy(component) {
  let output = component.shadowRoot.querySelector('.output');

  let count = component.fancy;

  //Remove all current children
  while(output.firstChild) {
    output.removeChild(output.firstChild);
  }

  if (count === 0) return;

  let slot = component.shadowRoot.querySelector('#fancy-template');

  let template = util.querySelectorSlot(slot, 'template');

  if (!template) {
    throw new Error('No template was specified!');
  }

  for (let i = 0; i < count; i++) {
    let element = document.importNode(template.content, true);
    output.appendChild(element);
  }
}

function setupButtonListeners(component) {
  let button = component.shadowRoot.querySelector('.fancy-button');

  let callback = component.__buttonListener = function(event) {
    component.fancy = component.fancy + 1;
  };

  button.addEventListener('click', callback, false);
}

//We generally want to be good neighbors and clean up after ourselves when we're done with things.
function teardownButtonListeners(component) {
  let button = component.shadowRoot.querySelector('.fancy-button');

  button.removeEventListener('click', component.__buttonListener, false);
}

function setupSlotListeners(component) {
  let slot = component.shadowRoot.querySelector('#fancy-template');

  //this will listen to changes to the contents of our <slot>, so we can take appropriate action
  slot.addEventListener('slotchange', () => {
    applyFancy(component);
  }, false);
}
