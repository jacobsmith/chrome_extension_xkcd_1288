// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Applying xkcd news enhancements to ' + tab.url );
  chrome.tabs.executeScript({
    code: 
     'document.body.innerHTML = document.body.innerHTML.replace(/hello/ig, "hi");document.body.innerHTML = document.body.innerHTML.replace(/witnesses/ig, "these people I know");document.body.innerHTML = document.body.innerHTML.replace(/allegedly/ig, "kinda probably");document.body.innerHTML = document.body.innerHTML.replace(/new study/ig, "Tumblr post");document.body.innerHTML = document.body.innerHTML.replace(/rebuild/ig, "avenge");document.body.innerHTML = document.body.innerHTML.replace(/space/ig, "Spaaaaaaace");document.body.innerHTML = document.body.innerHTML.replace(/Google Glass/ig, "Virtual Boy");document.body.innerHTML = document.body.innerHTML.replace(/smartphone/ig, "Pokédex");document.body.innerHTML = document.body.innerHTML.replace(/electric/ig, "atomic");document.body.innerHTML = document.body.innerHTML.replace(/senator/ig, "Elf-lord");document.body.innerHTML = document.body.innerHTML.replace(/car/ig, "cat");document.body.innerHTML = document.body.innerHTML.replace(/election/ig, "eating contest");document.body.innerHTML = document.body.innerHTML.replace(/Congressional leaders/ig, "Rivir spirits");document.body.innerHTML = document.body.innerHTML.replace(/Homeland Security/ig, "Homestar Runner");document.body.innerHTML = document.body.innerHTML.replace(/could not be reached for comment/ig, "is guilty and everyone knows it.");'

  });
});
