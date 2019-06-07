var titleize = function(name) {
  // Feel free to add more.
  var titles = ["mr", "dr", "ms", "mrs"];
  var names = name.split(" ");

  // Transform to guarantee consistency
  for (var i = 0; i < names.length; i += 1) {
    name = names[i];

    names[i] = titleCase(name.toLowerCase());
  }

  // Check if title needs transformation
  var potentialTitle = names[0];
  if (titles.includes(potentialTitle.toLowerCase())) {
    var length = potentialTitle.length;

    if (potentialTitle[length - 1] !== ".") {
      names[0] = potentialTitle + ".";
    }
  }

  return names.join(" ");
};

// Helper function, to keep titleize nice and clean.
function titleCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

module.exports = titleize;
