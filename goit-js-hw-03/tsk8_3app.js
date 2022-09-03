"use strict";

const uploads = [
  { name: "pdf", percentage: 14 },
  { name: "psd", percentage: 21 },
  { name: "mp3", percentage: 3 },
  { name: "flac", percentage: 7 },
];

const filterUploadsWithThreshold = function (uploads, threshold) {
  const uploadsWithThreshold = [];
  for (const upload of uploads) {
    if (upload.percentage >= threshold) {
      uploadsWithThreshold.push(upload);
    }
  }
  return uploadsWithThreshold;
};

console.log(filterUploadsWithThreshold(uploads, 10));
