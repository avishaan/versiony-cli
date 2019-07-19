#!/usr/bin/env node

"use strict";

var arguably = require("arguably"),
  args = arguably
    .option("--major")
    .option("--newmajor")
    .option("--minor")
    .option("--newminor")
    .option("--patch")
    .option("--version")
    .option("--preRelease")
    .option("--newPreRelease")
    .option("--preReleaseName")
    .option("--to")
    .done();

var file = process.argv[2],
  versiony = require("versiony");

if (!file || !~file.indexOf(".json")) {
  file = "package.json";
  console.log("Assuming package.json\n");
}

versiony.from(file);

if (args.version) {
  versiony.version(args.version);
}

["major", "minor", "patch", "preRelease"].forEach(function(name) {
  if (args.hasOwnProperty(name)) {
    if (args[name] != null) {
      versiony[name](args[name]);
    } else {
      versiony[name]();
    }
  }
});

if (args.hasOwnProperty("newmajor")) {
  versiony.newMajor();
}
if (args.hasOwnProperty("newminor")) {
  versiony.newMinor();
}
if (args.hasOwnProperty("newPreRelease")) {
  if (!args.hasOwnProperty("preReleaseName")) {
    console.error("[ERROR] You need to provide --preReleaseName [NAME]");
    return;
  } else {
    versiony.preRelease(args.preReleaseName + ".0");
  }
}

versiony.to();

if (args.to) {
  args.to.split(",").forEach(function(file) {
    versiony.to(file);
  });
}

versiony.end();
