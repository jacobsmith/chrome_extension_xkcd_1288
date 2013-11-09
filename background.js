// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Applying xkcd news enhancements to ' + tab.url );
  chrome.tabs.executeScript({
    code: 
     'document.body.innerHTML = document.body.innerHTML.replace(/hello/ig, "hi");document.body.innerHTML = document.body.innerHTML.replace(/witnesses/g, "these people I know");document.body.innerHTML = document.body.innerHTML.replace(/allegedly/g, "kinda probably");document.body.innerHTML = document.body.innerHTML.replace(/new study/g, "Tumblr post");document.body.innerHTML = document.body.innerHTML.replace(/rebuild/g, "avenge");document.body.innerHTML = document.body.innerHTML.replace(/space/g, "Spaaaaaaace");document.body.innerHTML = document.body.innerHTML.replace(/Google Glass/g, "Virtual Boy");document.body.innerHTML = document.body.innerHTML.replace(/smartphone/g, "Pokédex");document.body.innerHTML = document.body.innerHTML.replace(/electric/g, "atomic");document.body.innerHTML = document.body.innerHTML.replace(/senator/g, "Elf-lord");document.body.innerHTML = document.body.innerHTML.replace(/car/g, "cat");document.body.innerHTML = document.body.innerHTML.replace(/election/g, "eating contest");document.body.innerHTML = document.body.innerHTML.replace(/Congressional leaders/g, "Rivir spirits");document.body.innerHTML = document.body.innerHTML.replace(/Homeland Security/g, "Homestar Runner");document.body.innerHTML = document.body.innerHTML.replace(/could not be reached for comment/g, "is guilty and everyone knows it.");'

  });
});
